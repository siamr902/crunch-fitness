<div align="center">
  <img alt="logo" src="https://raw.githubusercontent.com/siamr902/crunch-fitness/master/public/crunch-logo.svg" />
</div>

<h1 align="center">
  Crunch Fitness++
</h1>

<h2>About</h2>  

Full-stack remodel of the crunch fitness website, inspired by my local gym. Features include user authentication using `next-auth`, a monthly membership payments system using `stripe`, a hosted `postgres` database on Railway to store users' workouts, and more. `Prisma` was used as the ideal ORM to facilitate operations and queries on the database, as well as integrate with Next-Auth using the prisma adapter. Currently, authenticated users have the ability to create, update, and delete workouts. Future additions include a nutrition tracker and a system where users can track their physical stats. Additionally, I may consider adding a way to sort the workouts by date completed and rating.

<h2>Mini-Obstacles</h2>  

I experienced a couple of minor difficulties while creating this project. For one, dynamic style changes, *like the weather background depending on the current status*, must be implemented using `css-in-js`, as `tailwind` cannot support dynamic styles. If a user deletes a workout, the exercises that go along with the workout should also be deleted from the database. This is where prisma referential actions, like cascading deletes, come into use. There were also a handful of issues I faced during the deployment phase of the project. I can't recall if it was explicitly stated in the docs, but you do need a `NEXTAUTH_SECRET` variable when deploying to production; otherwise, you will get a callback error when tryinng to sign in. One other trivial issue I faced was not importing an instance of prisma client for every file where it was used. Locally, prisma client was instantiated as a global variable; however, in production that was not the case, so I had to import it separately in each file afterwards.