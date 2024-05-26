import Link from "next/link";
import Image from "next/image";
import { TrashIcon, HeartIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";

interface Props {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
}

export default function CartItem({ item }: Props) {
  const { name, price, image, quantity } = item;

  return (
    <div className="flex items-center justify-between gap-6 space-y-4 rounded-lg border border-gray-200 px-6 py-3 shadow-sm">
      <Link href="#" className="order-1">
        <Image src={image} alt={name} width={80} height={80} />
      </Link>

      <div className="order-2 w-full max-w-md flex-1 space-y-2">
        <Link href="#" className="font-medium hover:underline">
          {name}
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

      <div className="order-3 flex items-center justify-between">
        <div className="flex items-center">
          <Button className="rounded-md border" size="sm" variant="faded" isIconOnly>
            <MinusIcon className="h-4 w-4" />
          </Button>
          <input
            type="text"
            className="w-10 border-0 bg-transparent text-center font-medium focus:outline-none focus:ring-0"
            placeholder=""
            value={quantity}
          />
          <Button className="rounded-md border" size="sm" variant="faded" isIconOnly>
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="order-4 w-32 text-end">
          <p className="font-bold">${price}</p>
        </div>
      </div>
    </div>
  );
}
