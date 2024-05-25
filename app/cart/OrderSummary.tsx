import { Button, Input } from "@nextui-org/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function OrderSummary() {
  return (
    <section className="flex-1 space-y-6">
      <div className="space-y-4 rounded-lg border border-gray-200 shadow-sm p-6">
        <p className="text-xl font-semibold">Order summary</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-gray-500">Subtotal</dt>
              <dd className="font-medium">$7,592.00</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-gray-500">Shipping</dt>
              <dd className="font-medium">$299.00</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-gray-500">Taxes</dt>
              <dd className="font-medium">$799</dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
            <dt className="font-bold">Total</dt>
            <dd className="font-bold">$8,191.00</dd>
          </dl>
        </div>

        <Button className="flex w-full bg-emerald-600 text-sm font-medium text-white">Proceed to Checkout</Button>

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-gray-500"> or </span>
          <Link href="/shop" className="inline-flex gap-2 text-sm font-medium text-primary-700 underline hover:no-underline ">
            Continue Shopping
            <ArrowLongRightIcon className="h-5 w-5 text-primary-700" />
          </Link>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
        <form className="space-y-4">
          <Input
            type="text"
            label="Do you have a voucher code?"
            labelPlacement="outside"
            className="block font-semibold"
            placeholder=" "
            isClearable
            variant="bordered"
          />

          <Button type="submit" className="flex w-full bg-emerald-600 text-sm font-medium text-white">
            Apply Code
          </Button>
        </form>
      </div>
    </section>
  );
}
