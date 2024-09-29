import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
}

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col justify-center items-center h-full p-4"> 
      <h2 className="text-[26px] font-bold leading-[30px] text-dark dark:text-white text-center mb-3"> 
        {pageName}
      </h2>

      <nav className="text-center"> 
        <ol className="flex justify-center items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;