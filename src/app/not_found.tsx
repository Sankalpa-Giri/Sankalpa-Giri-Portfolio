import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-7xl font-bold mb-4">
          404
        </h1>

        <p className="text-zinc-400 mb-8">
          Page not found
        </p>

        <Link
          href="/"
          className="bg-white text-black px-6 py-3 rounded-lg"
        >
          Go Home
        </Link>

      </div>
    </main>
  );
}