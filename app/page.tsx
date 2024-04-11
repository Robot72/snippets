import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div key={snippet.id}>
        <h2 className="font-bold">{snippet.title}</h2>
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
