import { MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
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
    <header className="relative select-none">
      <p className="flex h-10 items-center justify-center bg-emerald-600 px-4 text-sm font-medium text-white">
        Get free delivery on orders over $100
      </p>

      <nav className="px-16">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            <div className="ml-4">
              <Link href="/">
                <Image width={135} height={32} src="/zappify-logo.png" alt="Zappify" />
              </Link>
            </div>

            {/* <div className="mx-14 flex h-full space-x-8">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className={({ isActive }) =>
                    `${isActive ? "border-emerald-600 text-emerald-600" : "border-transparent text-gray-700 hover:text-gray-800"} relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out`
                  }
                >
                  {page.name}
                </Link>
              ))}
            </div> */}

            <div className="ml-auto flex items-center">
              <div className="flex flex-1 items-center justify-end space-x-6">
                <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Sign in
                </Link>
                <span className="h-6 w-px bg-gray-200" />
                <Link href="register" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Create account
                </Link>
              </div>

              <div className="ml-6 flex">
                <Link href="/" className="p-2 text-gray-400 hover:text-gray-500">
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </Link>
              </div>

              <div className="ml-6 flow-root">
                <Link href="/cart" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
