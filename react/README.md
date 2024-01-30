# React Learning Session

[slides](https://docs.google.com/presentation/d/1-MEKlZrh_eoGq9g-TsfcXhUTHOzS_hTS1klIgAu5QiM/edit?usp=sharing)

## Goal

We will be creating an application that lets you view images and information of peoples’ plants … Planter!

![7.png](Fall%20%E2%80%9823%20React%20Tutorial%200301a3e466c24482b49959bd3a05a8e6/7.png)

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
components/PlanterPreview.tsx
public/images/[6 image files]
```

![2.png](Fall%20%E2%80%9823%20React%20Tutorial%200301a3e466c24482b49959bd3a05a8e6/2.png)

## Making Our First Component

Inside PlanterPreview.tsx, we are going to apply some of the things we have learned to create a “Preview Card” that is meant to mimic an instagram post, a single tweet, etc.

Paste the following code into PlanterPreview.tsx:

```tsx
import Image, { StaticImageData } from 'next/image';

type PlanterPreviewProps = {
  title: string;
  description: string;
  imageSrc: StaticImageData;
};

const PlanterPreview = ({ title, description, imageSrc }: PlanterPreviewProps): JSX.Element => {
  return (
    <div className="flex bg-white p-8 m-2 rounded text-black">
      <Image className="rounded border-8 border-green-200" src={imageSrc} width={144} height={144} alt="plant image" />
      <div className="ml-4 w-72">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PlanterPreview;
```

<aside>
💡 If you get an error with `next/image`, go to tsconfig.json and replace `"moduleResolution": "bundler"` with `"moduleResolution": "node"`

</aside>

Lets go over a few things here

1. type
   1. A type is a feature of TypeScript. Although we haven’t formally learned about TypeScript yet, imagine this specific type to be any JavaScript object that has a **title** property that is a string, a **description** property that is a string, and an **imageSrc** property that holds some image data. We use TypeScript to avoid bugs, write code faster, and make less mistakes.
2. Image
   1. Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images.
   2. Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport.
3. Functional Component
   1. There are two types of React components: class and functional. Class components are more outdated, yet appear in older codebases. Functional components provide similar features with a more modern syntax.
4. Tailwind
   1. Tailwind is the reason we have a whole bunch of random words inside of the className attribute. Tailwind provides premade classes that help us style our websites. For now we can ignore these since I will be providing them for simplicity.

Now let’s use our `<PlanterPreview …/>` in our page index.tsx. First, let’s import everything we are going to need for our PlanterPreview.

```tsx
import PlanterPreview from '../components/PlanterPreview';
import Plant1Image from '../public/images/plant1.jpg';
import Plant2Image from '../public/images/plant2.jpg';
import Plant3Image from '../public/images/plant3.jpg';
```

Next, try to make three `<PlanterPreview …/>` components using the images and any other values for the remaining props. Replace the `homepage` (or whatever word you used) with these components.

This is what you should see for the planter previews, albeit with your own chosen titles and descriptions:

![4planterPreviews.png](Fall%20%E2%80%9823%20React%20Tutorial%200301a3e466c24482b49959bd3a05a8e6/4planterPreviews.png)

## Implementing A New Feature

Next we are going to implement a feature that allows you to add upvotes to each post.

Since we want to store the amount of times a button has been clicked and display that, we will use state. We will add the useState import to our PlanterPreview.tsx file.

Here are the new imports for PlanterPreview.tsx

```tsx
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
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
      <Image className="rounded border-8 border-green-200" src={imageSrc} width={144} height={144} alt="plant image" />
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

![5previewsWithLikes.png](Fall%20%E2%80%9823%20React%20Tutorial%200301a3e466c24482b49959bd3a05a8e6/5previewsWithLikes.png)

The only issue with this is that all data is lost on refresh! We will cover more about how to save data, store data, request data, and more during the backend oriented learning session next week.
