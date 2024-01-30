# React Learning Session

Creds to Alton Banushi!

## Goal

We will be creating an application that lets you view images and information of peoples’ plants … Planter!

<img width="1336" alt="1" src="https://github.com/Northeastern-Electric-Racing/LearningSessions/assets/29521172/81874be3-6537-4030-9367-005b1f49d0d2">

## Setting Up The Project

We will be using React, TypeScript, and Tailwind for this project. Since we haven’t covered TypeScript or CSS Libraries yet, we will be focusing on React.

1. clone the Repository.
2. cd into this folder
3. run:

```
yarn install
```

Generates your node-modules folder.

4. Git pull to make sure everything is up to date. Run:

```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You should see the following:
<img width="959" alt="image" src="https://github.com/Northeastern-Electric-Racing/LearningSessions/assets/29521172/277da289-8ebf-47a8-ba99-f5e99d198ea1">


## Adding Directories and Files

Next we are going to add a components directory and an images directory to our project.

[plant1.jpg](Fall%20%E2%80%9823%20React%20Tutorial%200301a3e466c24482b49959bd3a05a8e6/plant1.jpg)

[plant2.jpg](Fall%20%E2%80%9823%20React%20Tutorial%200301a3e466c24482b49959bd3a05a8e6/plant2.jpg)

[plant3.jpg](Fall%20%E2%80%9823%20React%20Tutorial%200301a3e466c24482b49959bd3a05a8e6/plant3.jpg)

[pot1.jpg](Fall%20%E2%80%9823%20React%20Tutorial%200301a3e466c24482b49959bd3a05a8e6/pot1.jpg)

[pot2.jpg](Fall%20%E2%80%9823%20React%20Tutorial%200301a3e466c24482b49959bd3a05a8e6/pot2.jpg)

[pot3.jpg](Fall%20%E2%80%9823%20React%20Tutorial%200301a3e466c24482b49959bd3a05a8e6/pot3.jpg)

Add:

```css
src/components/PlanterPreview.tsx
src/images/[6 image files]
```

<img width="206" alt="image" src="https://github.com/Northeastern-Electric-Racing/LearningSessions/assets/29521172/12b8b5d4-ec35-4045-9eba-9d2eeeb29c62">



## Making Our First Component

Inside PlanterPreview.tsx, we are going to apply some of the things we have learned to create a “Preview Card” that is meant to mimic an instagram post, a single tweet, etc.

Paste the following code into PlanterPreview.tsx:

```tsx
type PlanterPreviewProps = {
  title: string;
  description: string;
  imageSrc: any;
};

const PlanterPreview = ({ title, description, imageSrc }: PlanterPreviewProps): JSX.Element => {
  return (
    <div className="flex bg-white p-8 m-2 rounded text-black">
      <img className="rounded border-8 border-green-200" src={imageSrc} width={144} height={144} alt="plant" />
      <div className="ml-4 w-72">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PlanterPreview;
```

Lets go over a few things here

1. type
   1. A type is a feature of TypeScript. Although we haven’t formally learned about TypeScript yet, imagine this specific type to be any JavaScript object that has a **title** property that is a string, a **description** property that is a string, and an **imageSrc** property that holds some image data. We use TypeScript to avoid bugs, write code faster, and make less mistakes.
2. Functional Component
   1. There are two types of React components: class and functional. Class components are more outdated, yet appear in older codebases. Functional components provide similar features with a more modern syntax.
3. Tailwind
   1. Tailwind is the reason we have a whole bunch of random words inside of the className attribute. Tailwind provides premade classes that help us style our websites. For now we can ignore these since I will be providing them for simplicity.

Now let’s use our `<PlanterPreview …/>` in our page index.tsx. First, let’s import everything we are going to need for our PlanterPreview.

```tsx
import PlanterPreview from './components/PlanterPreview';
import Plant1Image from './public/images/plant1.jpg';
import Plant2Image from './public/images/plant2.jpg';
import Plant3Image from './public/images/plant3.jpg';
```

Next, try to make three `<PlanterPreview …/>` components using the images and any other values for the remaining props. Replace the welcome message with these components.

This is what you should see for the planter previews, albeit with your own chosen titles and descriptions:

<img width="1134" alt="2" src="https://github.com/Northeastern-Electric-Racing/LearningSessions/assets/29521172/2ac571e5-58ba-4e78-b15f-f02edb7420d8">

## Implementing A New Feature

Next we are going to implement a feature that allows you to add upvotes to each post.

Since we want to store the amount of times a button has been clicked and display that, we will use state. We will add the useState import to our PlanterPreview.tsx file.

Here are the new imports for PlanterPreview.tsx

```tsx
import { useState } from 'react';
```

And here is our new component (with a few missing pieces). Try and figure out how to make the button increment our thumbs up count! (Assume any individual can send as many likes as they desire).

```tsx
type PlanterPreviewProps = {
  title: string;
  description: string;
  imageSrc: StaticImageData;
};

const PlanterPreview = ({ title, description, imageSrc }: PlanterPreviewProps): JSX.Element => {
  // Note: In a real application we would base the starting
  // value based on a database call and updating the value
  // would also call the database (backend)
  const [numUpvotes, setNumUpvotes] = useState<number>(/*TODO*/);

  return (
    <div className="flex bg-white p-8 m-2 rounded text-black">
      <img className="rounded border-8 border-green-200" src={imageSrc} width={144} height={144} alt="plant" />
      <div className="ml-4 w-72 flex flex-col justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
        <div className="text-right">
          <button onClick={/* TODO */}>{/* TODO */} 👍</button>
        </div>
      </div>
    </div>
  );
};

export default PlanterPreview;
```

```tsx
// This is how arrow functions work inside functions
onClick={() => /*code here*/}
```

Once it is working, the result should look like this:

<img width="581" alt="3" src="https://github.com/Northeastern-Electric-Racing/LearningSessions/assets/29521172/c3025597-7f57-4e34-9500-75721285f257">

The only issue with this is that all data is lost on refresh! We will cover more about how to save data, store data, request data, and more during the backend oriented learning session next week.

## Extra

If you finish all these sections early, see how far you can get in this game (it's a great way to learn how to use CSS to add responsiveness to your website): https://flexboxfroggy.com/
