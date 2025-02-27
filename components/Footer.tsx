import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
      <div>
        Powered by{" "}
        <a
          href="https://gpt.xcbl.cc/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2"
        >
          Lbb.AI{" "}
        </a>
        and{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2"
        >
          Vercel Edge Functions.
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://gpt.xcbl.cc"
          className="group"
          aria-label="TaxPal on GitHub"
        >

        </Link>
      </div>
    </footer>
  );
}
