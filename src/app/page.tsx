'use client'
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white bg-[#141414]">
      <Header />
      <Main />
    </main>
  );
}
