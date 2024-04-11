import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link 
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className="flex justify-between items-center p-2 m-2 border border-gray-300 rounded hover:bg-gray-100"
       >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    )
  })
  return (
    <>
      <h1> All Snippets </h1>
      <div className="flex gap-2">
        <div>{renderedSnippets}</div>
      </div>
    </>
  );
}
