import Link from "next/link";

export default function notFound() {
  return (
    <>
      <h1 className="text-xl bold">Snippet not found</h1>
      <Link href="/">Go to sneppits list</Link>
    </>
  )
}