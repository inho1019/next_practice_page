// import { Inter } from "next/font/google";

import { useRouter } from "next/router";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <div className="p-12 bg-orange-100">
      <h1 className="text-2xl">Index 입니다</h1>
    </div>
  );
}
