"use client";
import { Inter } from "next/font/google";

import LearnerNav from "@/components/ProfileNav";
import SideMenu from "@/components/SideMenu";
import Provider from "../providers";
import { useWalletKit } from "@mysten/wallet-kit";
import NeedConnection from "@/components/NeedConnection";

const inter = Inter({ subsets: ["latin"] });
export default function LearnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentAccount } = useWalletKit();
  console.log(currentAccount);
  if (currentAccount == null) {
    return (
      <main className="min-h-screen flex justify-center bg-slate-100">
        <NeedConnection></NeedConnection>
      </main>
    );
  } else {
    return (
      <main className="min-h-screen flex justify-center bg-slate-100">
        <div className="w-3/5 pt-24 min-h-[80%] flex">
          <SideMenu />
          <div className="h-full w-full flex-start">{children}</div>
        </div>
      </main>
    );
  }
}
