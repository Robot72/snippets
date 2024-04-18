import { db } from '@/db';
import Link from 'next/link';

//export const revalidate = 0;
//export const dynamic = 'force-dynamic';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link 
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className="flex justify-between items-center p-2 px-7 border border-gray-300 rounded-lg hover:bg-gray-100"
       >
        <div>{snippet.title}</div>
        <div className="bg-blue-400 border p-2 border-rounded rounded-md text-cyan-50">View</div>
      </Link>
    )
  })
  return (
    <div>
      <div className="flex flex-row justify-between items-center m-2 ">
        <h1 className="text-xl font-bold"> All Snippets </h1>
        <Link href="/snippets/new" className="border p-2 border-rounded bg-blue-500 text-cyan-50 rounded-lg">New</Link>
      </div>
      <div className="flex flex-col gap-2">
        {renderedSnippets}
      </div>
    </div>
  );
}
