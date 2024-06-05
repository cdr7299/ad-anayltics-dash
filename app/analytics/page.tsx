"use client";

import { useSearchParams } from "next/navigation";

import Charts from "./_components/charts/charts";

export default function Home() {
  const searchParams = useSearchParams();
  return (
    <div className="flex min-h-screen">
      <main className="relative flex-grow">
        <Charts searchParams={searchParams} />
      </main>
    </div>
  );
}
