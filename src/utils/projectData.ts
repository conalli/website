export type ProjectData = {
  title: string;
  href: string;
  styles: {
    container: string;
    link: string;
  };
};

export const projects: ProjectData[] = [
  {
    title: "Bookshelf",
    href: "/projects/bookshelf",
    styles: {
      container:
        /*tw*/ "bg-blue-500 col-start-1 row-start-1 xs:max-md:col-start-3 xs:max-md:row-start-2 lg:col-start-4",
      link: /*tw*/ "",
    },
  },
  {
    title: "My Niwa",
    href: "/projects/my_niwa",
    styles: {
      container:
        /*tw*/ "bg-green-500 col-start-4 row-start-3 xs:max-md:col-start-6 xs:row-start-4 lg:col-start-[8]",
      link: /*tw*/ "",
    },
  },
  {
    title: "Expenses",
    href: "/projects/expenses",
    styles: {
      container:
        /*tw*/ "bg-yellow-500 col-start-2 row-start-[6] xs:max-md:col-start-4 xs:max-md:row-start-[7] lg:col-start-5 lg:row-start-6",
      link: /*tw*/ "",
    },
  },
  {
    title: "Portfolio",
    href: "/projects/portfolio",
    styles: {
      container:
        /*tw*/ "col-start-5 row-start-[9] bg-red-500 xs:max-md:col-start-7 xs:max-md:row-start-[10] lg:col-start-[9] lg:row-start-[9]",
      link: /*tw*/ "",
    },
  },
];
