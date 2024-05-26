import { MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Badge, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const pages = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header>
      <p className="flex h-10 items-center justify-center bg-emerald-600 px-4 text-sm font-medium text-white">
        Get free delivery on orders over $100
      </p>

      {/* <div className="mx-14 flex h-full space-x-8">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className={`${isActive ? "border-emerald-600 text-emerald-600" : "border-transparent text-gray-700 hover:text-gray-800"} relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out`}
                >
                  {page.name}
                </Link>
              ))} 
            </div> */}

      <Navbar isBordered maxWidth="xl">
        <NavbarContent justify="center">
          <Link href="/">
            <Image width={135} height={32} src="/zappify-logo.png" alt="Zappify" className="mr-5" />
          </Link>
        </NavbarContent>

        <NavbarContent justify="start">
          {pages.map((page) => (
            <NavbarItem key={page.name}>
              <Link href={page.href} className="px-2 text-sm font-medium text-gray-700 hover:text-gray-800">
                {page.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
              Sign in
            </Link>
          </NavbarItem>
          <span className="h-6 w-px bg-gray-200" />
          <NavbarItem>
            <Link href="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">
              Create account
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link href="/" className="p-2 text-gray-400 hover:text-gray-500">
              <MagnifyingGlassIcon className="h-7 w-7" />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/cart" className="group -m-2 flex items-center p-2">
              <Badge className="border border-red-500 bg-red-500 text-white" content={50} shape="circle" size="sm">
                <ShoppingCartIcon className="h-7 w-7 text-gray-400 group-hover:text-gray-500" />
              </Badge>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
}
