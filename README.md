<a href="https://demo-nextjs-with-supabase.vercel.app/">
  <img alt="Muyalogy Dashboard" src="/Screenshot 2024-02-07 145502.png">
 <h1 align ="center">
     <strong>Project Features:</strong> 
</h1>

</a>

We're diving deep into authentication and authorization with some robust technologies. Here's a breakdown of what we've got:

🔐 Next-auth v5 (Auth.js): We're leveraging Next-auth v5, specifically Auth.js, for a secure and efficient authentication setup.

🚀 Next.js 14 with server actions: Our front end is powered by Next.js 14, taking advantage of its latest features, including server actions.

🔑 Credentials Provider: We've got a Credentials Provider for handling various login credentials securely.

🌐 OAuth Provider (Social login with Google & GitHub): Social login is a breeze with OAuth Providers for Google and GitHub, making it convenient for users.

🔄 Forgot password functionality: Users can reset their passwords with our forgot password functionality.

✉️ Email verification: To ensure security, we've implemented email verification for user accounts.

🔒 Two-factor verification: Adding an extra layer of security, we've got two-factor verification to protect user accounts (for No OAuth).

🚪 Login component (Opens in redirect or modal): The login component is designed for flexibility, opening either in a redirect or modal based on your preference.

📝 Register component: Seamless user onboarding with a straightforward registration component.

🔏 Forgot password component: If users forget their password, they can easily reset it using our intuitive forgot password component.

✔️ Verification component: For added security, we've included a verification component to confirm user identities.

🚫 Error component: Transparent communication with users is key. Our error component ensures they're informed if something goes awry.

🔘 Login button: A clean and functional login button for a straightforward user experience.

🔲 Logout button: A simple yet effective logout button for users to gracefully exit.

🕵️‍♂️ Exploring next.js middleware: Delving into Next.js middleware capabilities.

📈 Extending & Exploring next-auth session: Extending session for a more personalized user experience.

🔍 Exploring next-auth callbacks: Understanding and exploring Next-auth callbacks for seamless authentication flow.

🪝 useCurrentUser hook: A custom hook, useCurrentUser, for simplified access to the current user's information.

🧑‍💻 currentUser utility: A utility function, currentUser, to streamline interactions with user data.

</br>
<h2 align ="center">
     <strong>This LMS platform is packed with features here is the list:- </strong> 
</h2>
</br>
📚 Course Exploration: Users can easily explore and filter through various courses, simplifying the process of finding the right educational content.

💳 Stripe Integration: Hassle-free course purchases using Stripe, ensuring a seamless transaction process.

✅ Progress Tracking: Allows users to mark chapters as completed, offering a clear view of their progress within each course.

📈 Progress Calculation: The platform calculates and displays the progress of each course, enabling students to effortlessly track their learning journey.

🖥 Dedicated Dashboards: Separate dashboards for students and teachers, with teacher mode enabling instructors to create and manage courses and chapters.

🔄 Drag-and-Drop Feature: Simplifies the rearrangement of chapters, making organization a breeze.

🎥 Media Upload: Supports uploading thumbnails, attachments, and videos via UploadThing, enhancing the learning experience with multimedia.

🔄 Mux Video Processing: Utilizes Mux for video processing, including an HLS video player by Mux for smooth video playback.

📝 Rich Text Editor: Adding detailed descriptions to chapters is straightforward with our rich text editor.

🔐 NextAuth Version 5: Streamlines user authentication, ensuring secure access to the platform.

🗃 Prisma ORM Tool: Uses Prisma as the ORM tool, facilitating efficient data management.

💾 MySQL Database: Utilizes MySQL as the database solution, hosted on Planetscale, for robust and scalable storage for the LMS and user management.

## Demo

You can view a fully working demo at [muyalogy](https://muya-logy.vercel.app/).

## Deploy to Vercel


### Prerequisites

  Node version 18.x.x

### Cloning the repository

```shell
git clone https://github.com/Valvide/muyalogy.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js

AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

STRIPE_API_KEY=

STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_TEACHER_ID=
```

### Setup Prisma

Add MySQL Database 

```
npx prisma generate
npx prisma db push

```
## Seeding the Database

To seed the database with initial data, you will need to run the `seed.ts` script located in the `scripts` folder. This script initializes the database with the necessary data for the project to function correctly(Categories).

### Steps to Run the Seed Script

1. Open your terminal or command prompt.
2. Navigate to the project's root directory.
3. Change directory to the `script` folder by running:
```bash
   cd script
   node seed.ts


   ### Start the app
   shell
   npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
