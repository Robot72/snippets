import { db } from '@/db';
import { Link } from 'next/navigation';

export default async function Home() {
  const snippets = await db.snippet.findMany();


  const renderedSnippets = snippets.map((snippet) => {
    //<Link href={`/snippets/${snippet.id}`}>{snippet.title}</Link>
    return (
      <div key={snippet.id}>
        <h2 className="text-2xl bold">{snippet.title}</h2>
        <pre>{snippet.code}</pre>
      </div>
    )
  })
  return (
    <>
      <h1> All Snippets </h1>
      <div>{renderedSnippets}</div>
    </>
  );
}
