"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  {
    name: "Mobile Phones & Smart Phones",
    description: "Work from home essentials",
    src: "/home-page-02-edition-01.jpg",
    href: "#",
  },
  {
    name: "Headphones, Earbuds, and Speakers",
    description: "Journals and note-taking",
    src: "/home-page-02-edition-01.jpg",
    href: "#",
  },
  {
    name: "Tablets",
    description: "Daily commute essentials",
    src: "/home-page-02-edition-01.jpg",
    href: "#",
  },
  {
    name: "Laptops & Desktops",
    description: "Organization and productivity",
    src: "/home-page-02-edition-01.jpg",
    href: "#",
  },
  {
    name: "Cameras",
    description: "Writing and paper goods",
    src: "/home-page-02-edition-01.jpg",
    href: "#",
  },
  {
    name: "Smart Home",
    description: "Focus and motivation",
    src: "/home-page-02-edition-01.jpg",
    href: "#",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 5,
};

export default function CategorySection() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-8 py-32">
        <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
        <div className="mt-6">
          <Slider {...settings}>
            {categories.map((category) => (
              <div key={category.name} className="m-6 h-64 w-full">
                <div className="h-60 w-64 hover:opacity-75">
                  <Link href={category.href}>
                    <Image
                      src={category.src}
                      className="h-full w-full rounded-lg object-cover object-center"
                      width={256}
                      height={176}
                      alt={category.name}
                    />
                  </Link>
                </div>
                <h3 className="mt-6 text-sm text-gray-500">{category.name}</h3>
                <p className="text-base font-semibold text-gray-900">{category.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
