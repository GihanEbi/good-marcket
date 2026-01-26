"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  // redirect to /blog
  React.useEffect(() => {
    router.push("/blog");
  }, [router]);

  return <div>Redirecting to blog...</div>;
};

export default page;
