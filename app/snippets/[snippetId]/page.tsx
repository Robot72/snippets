import { db } from '@/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { deleteSnippet } from '@/actions';

interface SnippetShowPageProps {
  params: {
    snippetId: string
  }
}

export default async function editSnippetPage(props: SnippetShowPageProps) {
  const id = parseInt(props.params.snippetId);

  const snippet = await db.snippet.findFirst({
    where: { id: id }
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, id);

  return (
    <div> 
      <div className="flex m-4 justify-between items-center">
        <h1 className="font-bold text-xl">Your Snippet: {`"`}{snippet.title}{`"`}</h1>
        <div className="flex gap-2">
          <Link href={`/snippets/${id}/edit`} className="p-2 border rounded">Edit</Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-100 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    }
  })
}