import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetShowPageProps {
  params: {
    id: string
  }
}

export default async function editSnippetPage(props: any) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.snippetId) }
  });

  if (!snippet) {
    return notFound();
  }
  console.log('Snippet', snippet)

  return (
    <div>
      <h1 className="font-bold">Edit Snippet: {snippet.title}</h1>
      <pre>{snippet.code}</pre>
    </div>
  );
}