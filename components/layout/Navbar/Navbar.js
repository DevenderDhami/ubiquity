"use client";
// export default function Navbar() {
//   return (
//     <>
//       <header className="bg-white text-themeGreen body-font shadow-md">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <Link href={"/"} className="flex title-font font-medium items-center text-themeGreen mb-4 md:mb-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-10 h-10 text-white p-2 bg-themeGreen rounded-full"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-3 text-xl font-semibold">Ubiquity</span>
//           </Link>
//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//             <Link href={"/"} className="mr-5 hover:text-gray-700">Home</Link>
//             <Link href={"/about-us"} className="mr-5 hover:text-gray-700">About</Link>
//             <Link href={"/services"} className="mr-5 hover:text-gray-700">Services</Link>
//             <Link href={"/contact-us"} className="mr-5 hover:text-gray-700">Contact</Link>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }


import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi"; // Importing react-icon
import Drawer from "./Drawer";
import { CMP_TITLE } from "@/lib/constants";
import DrawerData from "./DrawerData";
import { NavMenu } from "@/data/navMenu";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CustomLink = ({
  href,
  onClick,
  children,
}) => {
  return (
    <Link href={href}>
      <span onClick={onClick} className="px-3 text-lg font-normal cursor-pointer">
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const isActive = (href, subItems) => {
    return (
      pathname === href ||
      (subItems && subItems.some((subItem) => pathname === subItem.href))
    );
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 lg:px-8">
        <div className="relative flex h-10 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-green-600">
            {CMP_TITLE}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {NavMenu?.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className={classNames(
                        isActive(item.href, item.subItems)
                          ? "text-green-600 font-semibold"
                          : "text-gray-700",
                        "hover:text-green-600 transition duration-300"
                      )}
                    >
                      {item.name}
                    </Link>

                    {/* Dropdown */}
                    {openDropdown === item.name && (
                      <div className="absolute left-0 w-48 bg-white shadow-lg rounded-lg z-50 pt-2">
                        <ul>
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <Link href={subItem.href} onClick={() => setOpenDropdown(null)}>
                                <span className="block px-4 py-2 text-gray-700 hover:bg-green-100 transition duration-300 cursor-pointer">
                                  {subItem.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <CustomLink href={item.href} onClick={() => setOpenDropdown(null)}>
                    <span
                      className={classNames(
                        isActive(item.href) ? "text-green-600 font-semibold" : "text-gray-700",
                        "hover:text-green-600 transition duration-300"
                      )}
                    >
                      {item.name}
                    </span>
                  </CustomLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <FiMenu className="text-gray-700 text-2xl cursor-pointer" onClick={() => setIsOpen(true)} />
          </div>

          {/* Mobile Drawer */}

          {isOpen && (
            <div className="bg-red-400 lg:hidden">
              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <DrawerData setIsOpen={setIsOpen} />
              </Drawer>
            </div>
          )}
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
