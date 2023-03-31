export type ProjectInfo = {
  title: string;
  href: string;
  styles: {
    container: string;
    link: string;
  };
};

export const projects: ProjectInfo[] = [
  {
    title: "Bookshelf",
    href: "/projects/bookshelf",
    styles: {
      container: /*tw*/ "bg-blue-500 col-start-1 row-start-1 xs:row-end-3",
      link: /*tw*/ "",
    },
  },
  {
    title: "My Niwa",
    href: "/projects/my_niwa",
    styles: {
      container: /*tw*/ "bg-green-500 col-start-4 row-start-3 xs:row-start-2",
      link: /*tw*/ "",
    },
  },
  {
    title: "Expenses",
    href: "/projects/expenses",
    styles: {
      container:
        /*tw*/ "bg-yellow-500 col-start-2 row-start-[6] xs:col-start-2 xs:row-start-4",
      link: /*tw*/ "",
    },
  },
  {
    title: "Portfolio",
    href: "/projects/portfolio",
    styles: {
      container:
        /*tw*/ "col-start-5 row-start-[9] bg-red-500 xs:col-start-7 xs:row-start-4",
      link: /*tw*/ "",
    },
  },
];
