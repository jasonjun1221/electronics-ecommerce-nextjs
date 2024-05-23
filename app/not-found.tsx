"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <main className="flex h-screen select-none items-center justify-center">
      <div className="text-center">
        <p className="text-9xl font-semibold text-emerald-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button onClick={() => router.back()} className="text-md bg-emerald-600 p-6 font-semibold text-white">
            Go back
          </Button>
          <Link href="/" className="text-sm font-semibold text-gray-900">
            Contact support <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

NotFoundPage;
