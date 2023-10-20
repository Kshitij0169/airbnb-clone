import { ResultsList } from "./results/ResultsList";
import Link from "next/link";

export default async function Page() {
  const res = await fetch("http://localhost:3000/api/search");
  const data = await res.json();

  return (
    <>
      <div className="flex items-center justify-center w-screen bg-cover h-48 bg-[url('/images/bg.png')]">
        <Link
          href="/search/results"
          className="border-0 rounded-full text-large bg-[#C079A8] px-4 py-2 drop-shadow text-white transition-transform duration-200 hover:scale-110 bg-opacity-80 hover:bg-opacity-100"
        >
          Browse Stays
        </Link>
      </div>
      <ResultsList data={data} />
    </>
  );
}
