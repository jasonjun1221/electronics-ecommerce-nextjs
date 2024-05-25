"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { FunnelIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 7,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 8,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 9,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

const subCategories = [
  { name: "All", href: "#" },
  { name: "Computers & Accessories", href: "#" },
  { name: "Smartphones & Tablets", href: "#" },
  { name: "TV & Audio", href: "#" },
  { name: "Cameras & Accessories", href: "#" },
  { name: "Wearable Technology", href: "#" },
];

const filters = [
  { id: 3, name: "Brand" },
  { id: 4, name: "Price" },
];

const sortBy = [
  { id: 1, name: "Default" },
  { id: 2, name: "Most Popular" },
  { id: 3, name: "Best Rating" },
  { id: 4, name: "Newest" },
  { id: 5, name: "Price: Low to High" },
  { id: 6, name: "Price: High to Low" },
];

function ShopPage() {
  return (
    <section className="py-8 mx-auto max-w-screen-xl">
      <div className="flex items-baseline justify-between">
        <h1 className="font-semibold text-2xl">Catergory</h1>

        <div className="flex items-center w-52">
          <Select label="Sort By" defaultSelectedKeys={[1]} startContent={<FunnelIcon className="h-6 w-6 text-gray-500" />}>
            {sortBy.map((s) => (
              <SelectItem key={s.id} value={s.id}>
                {s.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <section className="pb-24 pt-6">
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          <form className="block">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
              {subCategories.map((category) => (
                <li key={category.name}>
                  <Link href={category.href}>{category.name}</Link>
                </li>
              ))}
            </ul>

            <div>
              <h2>dsa</h2>
            </div>
          </form>

          <div className="col-span-3">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-4 gap-x-6 gap-y-10">
                {products.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="h-80 w-full rounded-md group-hover:opacity-75">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-80 w-full rounded-md object-cover object-center"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <Link href={product.href}>
                            <span className="absolute inset-0" />
                            {product.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        <button className="btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ShopPage;
