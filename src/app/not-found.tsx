import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <h2>Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
