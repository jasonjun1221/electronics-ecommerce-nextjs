import Link from "next/link";
import Image from "next/image";
import { TrashIcon, HeartIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";

export default function CartItem() {
  return (
    <div className="rounded-lg border border-gray-200 shadow-sm px-6 py-3 space-y-4 flex items-center justify-between gap-6">
      <Link href="#" className="order-1">
        <Image src="/imac-front.svg" alt="imac image" width={80} height={80} />
      </Link>

      <div className="flex items-center justify-between order-3">
        <div className="flex items-center">
          <Button className="rounded-md border" size="sm" variant="faded" isIconOnly>
            <MinusIcon className="h-4 w-4" />
          </Button>
          <input
            type="text"
            className="w-10 border-0 bg-transparent text-center font-medium focus:outline-none focus:ring-0"
            placeholder=""
            value="1"
          />
          <Button className="rounded-md border" size="sm" variant="faded" isIconOnly>
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-end order-4 w-32">
          <p className="font-bold">$598</p>
        </div>
      </div>

      <div className="w-full flex-1 space-y-2 order-2 max-w-md">
        <Link href="#" className="font-medium hover:underline">
          Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band
        </Link>

        <div className="flex items-center gap-2">
          <Button className="text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline" variant="light">
            <HeartIcon className="h-5 w-5" />
            Add to Favorites
          </Button>

          <Button className="inline-flex items-center text-sm font-medium text-red-500 hover:underline" variant="light">
            <TrashIcon className="h-5 w-5" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}
