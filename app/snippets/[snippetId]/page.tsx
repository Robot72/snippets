import { db } from '@/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface SnippetShowPageProps {
  params: {
    snippetId: string
  }
}

export default async function editSnippetPage(props: SnippetShowPageProps) {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const id = parseInt(props.params.snippetId);

  const snippet = await db.snippet.findFirst({
    where: { id: id }
  });

  if (!snippet) {
    return notFound();
  }
  console.log('Snippet', snippet)

  return (
    <div> 
      <div className="flex m-4 justify-between items-center">
        <h1 className="font-bold text-xl">Your Snippet: "{snippet.title}"</h1>
        <div className="flex gap-2">
          <Link href={`/snippets/${id}/edit`} className="p-2 border rounded">Edit</Link>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-100 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}