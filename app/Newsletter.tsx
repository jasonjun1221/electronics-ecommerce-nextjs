"use client";

import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscriptionSchema } from "./schemas/userSchema";
import { Input, Button } from "@nextui-org/react";

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: zodResolver(subscriptionSchema),
  });

  function onSubmit(data: { email: string }) {
    console.log(data);
    reset();
  }

  return (
    <div className="bg-emerald-100 py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto grid max-w-none grid-cols-2 gap-x-8 gap-y-16">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8">
              Get 10% off your first purchase. You&apos;ll also receive weekly articles on the latest trends.
            </p>

            <form className="mt-6 flex max-h-12 gap-x-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="w-64">
                <Input
                  type="email"
                  label="Email"
                  isInvalid={errors.email?.message ? true : false}
                  errorMessage={errors.email?.message}
                  {...register("email")}
                />
              </div>

              <Button type="submit" className="text-md bg-emerald-600 p-7 font-semibold text-white">
                Subscribe
              </Button>
            </form>
          </div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md p-2 ring-1 ring-black/50">
                <CalendarDaysIcon className="h-6 w-6" />
              </div>
              <dt className="mt-4 font-semibold">Weekly articles</dt>
              <dd className="mt-2 leading-7">
                Get the latest trends and technologies delivered to your inbox every week. Always stay up to date.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md p-2 ring-1 ring-black/50">
                <HandRaisedIcon className="h-6 w-6" />
              </div>
              <dt className="mt-4 font-semibold">No spam</dt>
              <dd className="mt-2 leading-7">
                No unwanted emails. Your information is safe with us. We promise to keep your email secure.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
