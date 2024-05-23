"use client";

import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/userSchema";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormValues) {
    console.log(data);
    reset();
  }

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Header />
      <div className="mt-6 mb-48 flex select-none justify-center">
        <div className="mx-auto mt-10 w-full max-w-sm">
          <h2 className="py-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              className="mt-2"
              type="email"
              label="Email"
              isInvalid={errors.email?.message ? true : false}
              errorMessage={errors.email?.message}
              {...register("email")}
            />

            <Input
              className="mt-2"
              label="Password"
              type={isVisible ? "text" : "password"}
              isInvalid={errors.password?.message ? true : false}
              errorMessage={errors.password?.message}
              endContent={
                isVisible ? (
                  <EyeIcon className="h-6 w-6 my-1 text-gray-500 cursor-pointer" onClick={() => setIsVisible(!isVisible)} />
                ) : (
                  <EyeSlashIcon className="h-6 w-6 my-1 text-gray-500 cursor-pointer" onClick={() => setIsVisible(!isVisible)} />
                )
              }
              {...register("password")}
            />

            <Button type="submit" className="flex w-full justify-center text-md bg-emerald-600 py-6 font-semibold text-white">
              Sign in
            </Button>
          </form>

          <p className="text-md mt-8 select-none text-center text-gray-500">
            <span>Don&apos;t have an account? </span>
            <Link href="/register" className="font-semibold leading-6 text-emerald-600 hover:text-emerald-500">
              Create an account
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
