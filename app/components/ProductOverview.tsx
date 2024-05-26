import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import { Button, Divider } from "@nextui-org/react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function ProductOverview() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16">
      <div className="grid grid-cols-2 gap-16">
        <div className="mx-auto max-w-md">
          <Image className="w-full" src="/imac-front.svg" alt="" width={800} height={800} />
        </div>

        <div>
          <h1 className="text-2xl font-semibold">Apple iMac 24&quot; All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD, Mac OS, Pink</h1>

          <div className="mt-4 flex items-center gap-2">
            <p className="mr-3 text-3xl font-extrabold">$1,249.99</p>
            <Rating style={{ maxWidth: 100 }} value={3} readOnly />
            <p className="text-sm font-medium text-gray-500">(5.0)</p>
            <span className="text-sm font-medium">345 Reviews</span>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Button className="text-sm font-medium text-gray-500 hover:text-emerald-700" variant="ghost">
              <HeartIcon className="h-5 w-5" />
              Add to favorites
            </Button>

            <Button className="bg-emerald-600 text-sm font-medium text-white">
              <ShoppingBagIcon className="h-5 w-5" />
              Add to cart
            </Button>
          </div>

          <Divider className="my-8" />

          <p className="mb-6 text-gray-500">
            Studio quality three mic array for crystal clear calls and voice recordings. Six-speaker sound system for a remarkably robust
            and high-quality audio experience. Up to 256GB of ultrafast SSD storage.
          </p>

          <p className="text-gray-500">
            Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse
            with Magic Keyboard or Magic Keyboard with Touch ID.
          </p>
        </div>
      </div>
    </section>
  );
}
