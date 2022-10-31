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

## Exercise 2

- Make a new model in the `schema.prisma` called `Plant`. A `Plant` should have (figure out the types yourself):
  - an autoIcrementing number id
  - a name
  - a species
  - a value
  - an owner (hint: you'll also have to update the User model to be able to have many plants)
- Once you've added this model, run `yarn prisma:migrate` to update the sql and database. Give the migration a good name when prompted!
- Fill out the `createPlant` and `updatePlant` functions in `index.ts`. You should be able to update any of a plant's fields (except for id).

## Exercise 3

- Fill out the `findUser` function in `index.ts` and copy the approach done for `findTeam` at first
- If you console.log the output, you will find that the team and plants are not included... figure out how to include them
- Hint: https://www.prisma.io/docs/concepts/components/prisma-client/crud#read somewhere in this section

## Resources

This will tell you every prisma function you'll ever need:
https://www.prisma.io/docs/concepts/components/prisma-client/crud
