import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetShowPageProps {
  params: {
    id: string
  }
}

export default async function editSnippetPage(props: any) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.snippetId) }
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
          <button className="p-2 border rounded">Edit</button>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-100 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}