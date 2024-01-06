"use client";
import AvatarGenerator from "./components/AvatarGenerator/AvatarGenerator";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-15">
    <main>
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> */}
      <AvatarGenerator />
      {/* </div> */}
    </main>
  );
}
