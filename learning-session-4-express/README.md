# Learning Session 4: Express

## Setup

1. clone the Repository.
2. cd into this folder
3. run:

#### `yarn install`

Generates your node-modules folder.

#### `yarn start`

Runs the app in the development mode.

Open [http://localhost:8080](http://localhost:8080) to view it in the browser. It should say "Hello world!".

## Exercise 1

1. investigate the code and mess around with the already existing endpoints
2. fill in the `getColors` function in `colors.controller.ts`
3. add the `getColors` function to the route `/colors` by adding it to the colors router
4. go to `localhost:8080/colors` to check your work

## Exercise 2

1. make a new router in a new file `food.routes.ts` and a new controller `food.controller.ts`
2. have the express app use the router on the route `/food`
3. make a function called `isMyFavorite` and put it on the route `/food/favorite/:food`
4. check if the food from the url (the query param :food) is the same as your favorite food. If it is, send true. Otherwise, send back your favorite food.

## Bonus

1. in your new favorite food endpoint, make it return a status 400 and the string "ew" if the food given is your least favorite food
