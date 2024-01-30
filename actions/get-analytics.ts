import { db } from "@/lib/db";

export const getAnalytics = async (userId: string) => {
  try {
    const purchases = await db.purchase.findMany({
      where: {
        course: {
          userId: userId,
        },
      },
      include: {
        course: true,
      },
    });

    // Group purchases by course and calculate total earnings
    const groupedEarnings = purchases.reduce((acc, purchase) => {
      const courseTitle = purchase.course.title;
      const price = purchase.course.price ?? 0; // Use 0 if price is null or undefined

      acc[courseTitle] = (acc[courseTitle] || 0) + price;
      return acc;
    }, {} as { [courseTitle: string]: number });

    // Prepare data for response
    const data = Object.keys(groupedEarnings).map((courseTitle) => ({
      name: courseTitle,
      total: groupedEarnings[courseTitle],
    }));

    // Calculate total revenue and total sales
    const { totalRevenue, totalSales } = purchases.reduce(
      (acc, purchase) => {
        acc.totalRevenue += purchase.course.price ?? 0;
        acc.totalSales += 1;
        return acc;
      },
      { totalRevenue: 0, totalSales: 0 }
    );

    return {
      data,
      totalRevenue,
      totalSales,
    };
  } catch (error) {
    console.log("[GET_ANALYTICS]", error);
    return {
      data: [],
      totalRevenue: 0,
      totalSales: 0,
    };
  }
};

// Before removing this working code let's have as comment here for 30 days until the new code is tested end-to-end

// import { Course, Purchase } from "@prisma/client";

// type PurchaseWithCourse = Purchase & {
//   course: Course;
// };

// const groupByCourse = (purchases: PurchaseWithCourse[]) => {
//   const grouped: { [courseTitle: string]: number } = {};

//   purchases.forEach((purchase) => {
//     const courseTitle = purchase.course.title;
//     if (!grouped[courseTitle]) {
//       grouped[courseTitle] = 0;
//     }
//     grouped[courseTitle] += purchase.course.price!;
//   });

//   return grouped;
// };

// export const getAnalytics = async (userId: string) => {
//   try {
//     const purchases = await db.purchase.findMany({
//       where: {
//         course: {
//           userId: userId
//         }
//       },
//       include: {
//         course: true,
//       }
//     });

//     const groupedEarnings = groupByCourse(purchases);
//     const data = Object.entries(groupedEarnings).map(([courseTitle, total]) => ({
//       name: courseTitle,
//       total: total,
//     }));

//     const totalRevenue = data.reduce((acc, curr) => acc + curr.total, 0);
//     const totalSales = purchases.length;

//     return {
//       data,
//       totalRevenue,
//       totalSales,
//     }
//   } catch (error) {
//     console.log("[GET_ANALYTICS]", error);
//     return {
//       data: [],
//       totalRevenue: 0,
//       totalSales: 0,
//     }
//   }
// }
