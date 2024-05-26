"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const images = [
  "/home-page-03-hero-image-tile-01.jpg",
  "/home-page-03-hero-image-tile-01.jpg",
  "/home-page-03-hero-image-tile-01.jpg",
  "/home-page-03-hero-image-tile-01.jpg",
  "/home-page-03-hero-image-tile-01.jpg",
  "/home-page-03-hero-image-tile-01.jpg",
];

export default function PromoSection() {
  const router = useRouter();

  return (
    <div className="py-40">
      <div className="mx-auto max-w-7xl px-8">
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900">Summer&apos;s here, explore our latest electronics now!</h1>
          <p className="mt-4 text-xl text-gray-500">
            We have everything you need to make your home office a productive workspace. Shop our collection of office furniture and
            accessories.
          </p>
          <Button className="text-md mt-10 bg-emerald-600 p-7 font-medium text-white" onClick={() => router.push("/shop")}>
            Shop Collection
          </Button>
        </div>
        <div>
          <div className="pointer-events-none absolute left-1/2 top-40">
            <div className="grid grid-cols-3 grid-rows-2 gap-8">
              {images.map((image, index) => (
                <div key={index} className="h-64 w-44">
                  <Image src={image} className="h-full w-full rounded-lg object-cover object-center" width={256} height={176} alt={image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
