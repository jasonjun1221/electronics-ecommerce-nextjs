"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/userSchema";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(data: RegisterFormValues) {
    console.log(data);
    reset();
  }

  return (
    <div className="mb-48 mt-4 flex min-h-full flex-1 select-none flex-col justify-center">
      <div className="mx-auto mt-10 w-full max-w-sm ">
        <h2 className="py-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an account</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="Email"
            placeholder="example@hotmail.com"
            isInvalid={errors.email?.message ? true : false}
            errorMessage={errors.email?.message}
            {...register("email")}
          />

          <Input
            type="password"
            label="Password"
            placeholder="Your password"
            isInvalid={errors.password?.message ? true : false}
            errorMessage={errors.password?.message}
            {...register("password")}
          />

          <Input
            type="password"
            label="Confirm password"
            placeholder="Confirm your password"
            isInvalid={errors.confirmPassword?.message ? true : false}
            errorMessage={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          <Input
            type="text"
            label="Phone number"
            placeholder="+65 1234 5678"
            isInvalid={errors.phone?.message ? true : false}
            errorMessage={errors.phone?.message}
            {...register("phone")}
          />

          <Button type="submit" className="flex w-full bg-emerald-600 py-6 text-sm font-medium text-white">
            Register
          </Button>
        </form>

        <p className="text-md mt-8 select-none text-center text-gray-500">
          <span>Already have an account? </span>
          <Link href="/login" className="font-semibold leading-6 text-emerald-600 hover:text-emerald-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
