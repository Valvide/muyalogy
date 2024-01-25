Project Features:

We're diving deep into authentication and authorization with some robust technologies. Here's a breakdown of what we've got:

- Next-auth v5 (Auth.js): We're leveraging Next-auth v5, specifically Auth.js, for a secure and efficient authentication setup.

- Next.js 14 with server actions: Our front end is powered by Next.js 14, taking advantage of its latest features, including server actions.

- Credentials Provider: We've got a Credentials Provider for handling various login credentials securely.

- OAuth Provider (Social login with Google & GitHub): Social login is a breeze with OAuth Providers for Google and GitHub, making it convenient for users.

- Forgot password functionality: Users can reset their passwords with our forgot password functionality.

- Email verification: To ensure security, we've implemented email verification for user accounts.

- Two-factor verification: Adding an extra layer of security, we've got two-factor verification to protect user accounts(for No Oauth).

- Login component (Opens in redirect or modal): The login component is designed for flexibility, opening either in a redirect or modal based on your preference.

- Register component: Seamless user onboarding with a straightforward registration component.

- Forgot password component: If users forget their password, they can easily reset it using our intuitive forgot password component.

- Verification component: For added security, we've included a verification component to confirm user identities.

- Error component: Transparent communication with users is key. Our error component ensures they're informed if something goes awry.

- Login button: A clean and functional login button for a straightforward user experience.

- Logout button: A simple yet effective logout button for users to gracefully exit.

- Exploring next.js middleware: Delving into Next.js middleware capabilities.

- Extending & Exploring next-auth session: Extending session for a more personalized user experience.

- Exploring next-auth callbacks: Understanding and exploring Next-auth callbacks for seamless authentication flow.

- useCurrentUser hook: A custom hook, useCurrentUser, for simplified access to the current user's information.

- currentUser utility: A utility function, currentUser, to streamline interactions with user data.


This LMS platform is packed with features that make the learning experience smooth and interactive for both students and teachers. Users can easily explore and filter through various courses, simplifying the process of finding the right educational content. Plus, we've made it hassle-free to purchase courses using Stripe, ensuring a seamless transaction process.

We've added a personal touch by allowing users to mark chapters as completed or not, giving them a clear picture of their progress within each course. The platform also does the heavy lifting by calculating and displaying the progress of each course, so students can track their learning journey effortlessly.

We've got dedicated dashboards for students and teachers, with the teacher mode enabling instructors to create new courses and chapters. Rearranging chapters is easy thanks to our intuitive drag-and-drop feature, making organization very simple.

Media is a big part of the learning experience. You can upload thumbnails, attachments, and videos using UploadThing. We've used  Mux for video processing, including an HLS video player by mux for smooth playback.

Adding detailed descriptions to chapters is a cinch with our rich text editor. We've also streamlined user authentication through NextAuth version 5, ensuring secure access to the platform. Under the hood, we're using Prisma as our ORM tool, coupled with MySQL as our database solution hosted on Planetscale for both the lms and the user management.

### Prerequisites

**Node version 18.x.x**

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

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
