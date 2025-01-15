import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div
          className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5
        sm:max-w-96 mx-auto text-white sm:text-2xl"
        >
          <div>
            <h1 className="text-3xl font-bold">Repair</h1>
            <address></address>
            <p>Open Daily:</p>
            <Link href="tel : 01000000000" className="hover: underline">
              010-0000-0000
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
