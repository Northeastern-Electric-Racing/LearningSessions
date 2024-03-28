## Next.js Basics Learning Session

This is the starter template for the Next.js Basics Learning Session

### Running the App

Run the following command to install the project's dependencies:
`npm i`

Run the following command to start the development server"
`npm run dev`

### Exercise 1

Add pages on the routes '/dashboard', '/dashboard/customers', and '/dashboard/invoices'. They should each be in the format `<p> Name Page</p>;`

### Exercise 2

Copy the following code into a new file called layout.tsx in the `/dashboard` folder:

```
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
```

### Exercise 3

To use the <Link /> component, open /app/ui/dashboard/nav-links.tsx, and import the Link component from next/link. Then, replace the <a> tag with <Link>

### Exercise 4

Since usePathname() is a hook, you'll need to turn nav-links.tsx into a Client Component. Add React's "use client" directive to the top of the file, then import usePathname() from next/navigation:

```
'use client';

import {
  UserGroupIcon,
  HomeIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ...
```

Next, assign the path to a variable called pathname inside your <NavLinks /> component:

```
export default function NavLinks() {
  const pathname = usePathname();
  // ...
}
```

You can use the clsx library to conditionally apply class names when the link is active. When link.href matches the pathname, the link should be displayed with blue text and a light blue background.

Here's the final code for nav-links.tsx:

```
import clsx from 'clsx';

// ...

          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
```

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.
