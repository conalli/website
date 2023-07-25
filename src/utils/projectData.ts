export type ProjectData = {
  title: string;
  description: string;
  href: string;
  logoSrc?: string;
  styles: {
    container: string;
    title?: string;
  };
};

export const projects: ProjectData[] = [
  {
    title: "Bookshelf",
    description:
      "Smart bookmarking app to work quickly and efficiently between browsers.",
    href: "/projects/bookshelf",
    logoSrc: "/projects/bookshelf-logo.png",
    styles: {
      container:
        /*tw*/ "bg-blue-500 col-start-1 row-start-1 xs:max-md:col-start-3 xs:max-md:row-start-2 lg:col-start-4",
    },
  },
  {
    title: "My Niwa",
    description: "Grow and water a garden by keeping good habits.",
    href: "/projects/my_niwa",
    logoSrc: "/projects/myniwa-logo.png",
    styles: {
      container:
        /*tw*/ "bg-green-500 col-start-4 row-start-3 xs:max-md:col-start-6 xs:row-start-4 lg:col-start-[8]",
    },
  },
  {
    title: "Expenses",
    description: "Track expenses quickly and easily while on the go.",
    href: "/projects/expenses",
    logoSrc: "/projects/expenses-logo.png",
    styles: {
      container:
        /*tw*/ "bg-white col-start-2 row-start-[6] xs:max-md:col-start-4 xs:max-md:row-start-[7] lg:col-start-5 lg:row-start-6",
    },
  },
  {
    title: "Portfolio",
    description: "The making of this portfolio site.",
    href: "/projects/portfolio",
    styles: {
      container:
        /*tw*/ "col-start-5 row-start-[9] bg-red-500 xs:max-md:col-start-7 xs:max-md:row-start-[10] lg:col-start-[9] lg:row-start-[9]",
      title: /*tw*/ "text-white font-serif",
    },
  },
];
