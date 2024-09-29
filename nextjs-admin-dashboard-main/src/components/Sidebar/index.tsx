"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MAIN MENU",
    menuItems: [
      {
        icon: (
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 1.25C9.37654 1.25 7.24989 3.37665 7.24989 6C7.24989 8.62335 9.37654 10.75 11.9999 10.75C14.6232 10.75 16.7499 8.62335 16.7499 6C16.7499 3.37665 14.6232 1.25 11.9999 1.25ZM8.74989 6C8.74989 4.20507 10.205 2.75 11.9999 2.75C13.7948 2.75 15.2499 4.20507 15.2499 6C15.2499 7.79493 13.7948 9.25 11.9999 9.25C10.205 9.25 8.74989 7.79493 8.74989 6Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 12.25C9.68634 12.25 7.55481 12.7759 5.97534 13.6643C4.41937 14.5396 3.24989 15.8661 3.24989 17.5L3.24982 17.602C3.24869 18.7638 3.24728 20.222 4.5263 21.2635C5.15577 21.7761 6.03637 22.1406 7.2261 22.3815C8.41915 22.6229 9.97412 22.75 11.9999 22.75C14.0257 22.75 15.5806 22.6229 16.7737 22.3815C17.9634 22.1406 18.844 21.7761 19.4735 21.2635C20.7525 20.222 20.7511 18.7638 20.75 17.602L20.7499 17.5C20.7499 15.8661 19.5804 14.5396 18.0244 13.6643C16.445 12.7759 14.3134 12.25 11.9999 12.25ZM4.74989 17.5C4.74989 16.6487 5.37127 15.7251 6.71073 14.9717C8.02669 14.2315 9.89516 13.75 11.9999 13.75C14.1046 13.75 15.9731 14.2315 17.289 14.9717C18.6285 15.7251 19.2499 16.6487 19.2499 17.5C19.2499 18.8078 19.2096 19.544 18.5263 20.1004C18.1558 20.4022 17.5364 20.6967 16.4761 20.9113C15.4192 21.1252 13.9741 21.25 11.9999 21.25C10.0257 21.25 8.58063 21.1252 7.52368 20.9113C6.46341 20.6967 5.84401 20.4022 5.47348 20.1004C4.79021 19.544 4.74989 18.8078 4.74989 17.5Z"
              fill=""
            />
          </svg>
        ),
        label: "Profile",
        route: "/profile",
      },
      {
        icon: (
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H13C13.4142 6.25 13.75 6.58579 13.75 7C13.75 7.41421 13.4142 7.75 13 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7ZM16.5 6.25C16.7951 6.25 17.0628 6.42309 17.1839 6.69223L21.6839 16.6922C21.8539 17.07 21.6855 17.514 21.3078 17.6839C20.93 17.8539 20.486 17.6855 20.3161 17.3078L18.8787 14.1136H14.1213L12.6839 17.3078C12.514 17.6855 12.07 17.8539 11.6922 17.6839C11.3145 17.514 11.1461 17.07 11.3161 16.6922L15.8161 6.69223C15.9372 6.42309 16.2049 6.25 16.5 6.25ZM14.7963 12.6136H18.2037L16.5 8.82764L14.7963 12.6136ZM2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12ZM2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H8C8.41421 16.25 8.75 16.5858 8.75 17C8.75 17.4142 8.41421 17.75 8 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17Z"
              fill=""
            />
          </svg>
        ),
        label: "Employee",
        route: "#",
        children: [
          { label: "Employee", route: "/tables" },
          { label: "Create Employee", route: "/forms/create-employee" },
        ],
      },
      
      {
        icon: (
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H13C13.4142 6.25 13.75 6.58579 13.75 7C13.75 7.41421 13.4142 7.75 13 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7ZM16.5 6.25C16.7951 6.25 17.0628 6.42309 17.1839 6.69223L21.6839 16.6922C21.8539 17.07 21.6855 17.514 21.3078 17.6839C20.93 17.8539 20.486 17.6855 20.3161 17.3078L18.8787 14.1136H14.1213L12.6839 17.3078C12.514 17.6855 12.07 17.8539 11.6922 17.6839C11.3145 17.514 11.1461 17.07 11.3161 16.6922L15.8161 6.69223C15.9372 6.42309 16.2049 6.25 16.5 6.25ZM14.7963 12.6136H18.2037L16.5 8.82764L14.7963 12.6136ZM2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12ZM2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H8C8.41421 16.25 8.75 16.5858 8.75 17C8.75 17.4142 8.41421 17.75 8 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17Z"
              fill=""
            />
          </svg>
        ),
        label: "Pages",
        route: "#",
        children: [
          { label: "Settings", route: "/pages/settings" },
        ],
      },
    ],
  },
  {
    name: "OTHERS",
    menuItems: [
      {
        icon: (
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.2544 1.36453C13.1584 1.05859 12.132 1.38932 11.4026 2.05955C10.6845 2.71939 10.25 3.70552 10.25 4.76063V11.4551C10.25 12.7226 11.2775 13.75 12.5449 13.75H19.2394C20.2945 13.75 21.2806 13.3156 21.9405 12.5974C22.6107 11.868 22.9414 10.8416 22.6355 9.74563C21.5034 5.69003 18.31 2.49663 14.2544 1.36453ZM11.75 4.76063C11.75 4.10931 12.0201 3.52918 12.4175 3.16407C12.8035 2.80935 13.3035 2.65643 13.8511 2.8093C17.4013 3.80031 20.1997 6.59875 21.1907 10.1489C21.3436 10.6965 21.1907 11.1965 20.8359 11.5825C20.4708 11.9799 19.8907 12.25 19.2394 12.25H12.5449C12.1059 12.25 11.75 11.8941 11.75 11.4551V4.76063Z"
              fill=""
            />
            <path
              d="M8.67232 4.71555C9.0675 4.59143 9.28724 4.17045 9.16312 3.77527C9.039 3.38009 8.61803 3.16036 8.22285 3.28447C4.18231 4.55353 1.25 8.32793 1.25 12.7892C1.25 18.2904 5.70962 22.75 11.2108 22.75C15.6721 22.75 19.4465 19.8177 20.7155 15.7772C20.8397 15.382 20.6199 14.961 20.2247 14.8369C19.8296 14.7128 19.4086 14.9325 19.2845 15.3277C18.2061 18.761 14.9982 21.25 11.2108 21.25C6.53805 21.25 2.75 17.462 2.75 12.7892C2.75 9.00185 5.23899 5.79389 8.67232 4.71555Z"
              fill=""
            />
          </svg>
        ),
        label: "Charts",
        route: "#",
        children: [
          { label: "Basic Chart", route: "/charts/basic-chart" },
        ],
      },
      
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");
  
  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 xl:py-10">
          <Link href="/">
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo-dark.svg"}
              alt="Logo"
              priority
              className="dark:hidden"
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
              className="hidden dark:block"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
