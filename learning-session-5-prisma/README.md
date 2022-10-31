# Learning Session 5: Prisma

## Setup

1. clone the Repository.
2. cd into this folder
3. run `yarn install` to download all the necessary packages
4. Copy your `.env` file from the backend folder in your FinishLine repo into this folder
5. run `yarn prisma:reset` and press `y` to reset your db for this exercise
6. run `yarn start` This will run the `index.ts` file. If everything is working correctly, it should print something telling you so.
7. in a new terminal, run `yarn prisma:studio` which will open up a GUI of the db in your browser

## Pre Exercise

- in the `main` function, uncomment out the lines it tells you to and fill in the arguments needed
- run `yarn start` so that it creates the team then prints the team
- run `yarn prisma:studio` and go to `localhost:5555`. You should be able to open the teams tab and see your new team

## Exercise 1

- fill out the `createUser` function
- create a new user with no team. Check that it works in Prisma Studio
- create another user with the exact same email. What happens? Why?
- create a user that's on the team you made in the pre exercise. Check that it works in Prisma Studio
