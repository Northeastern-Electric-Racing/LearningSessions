# Learning Session 6: React-Query

## Setup

1. clone the Repository. (If you don't already have it cloned)
2. cd into this folder
3. Make sure you're on branch 'main'
4. cd into the backend folder
5. run:

#### `yarn install`

Generates your node-modules folder.

#### `yarn start`

Runs the app in the development mode.

Open [http://localhost:8080](http://localhost:8080) to view it in the browser. It should say "Hello world!".

6. open a new terminal
7. cd into the frontend folder
8. run:

### `yarn install`

Generates your node-modules folder.

4. Git pull to make sure everything is up to date. Run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Exercise 1

1. investigate the code (specifically the api and hooks files)
2. add a hook method and api method that allows you to call the isInRainbow endpoint in the backend
3. try hooking this up to the frontend in some way (either to a textbox with a useState, and separate buttons to check whether different colors are in the rainbow)
4. go to `localhost:3000/colors` to check your work

## Exercise 2

1. make a new method in the colors.hooks.ts file called switchColor
2. it should utilize queryClient.invalidateQueries() to invalidate the 'colors' query
3. hook this method up to a button on the frontend
4. when this button is pressed it should change the color displayed on screen
