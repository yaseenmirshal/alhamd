"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    router.replace("http://139.59.65.68:8069/web/");
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-[#ffffff]">Redirecting to Admin Panel...</h1>
    </div>
  );
}
