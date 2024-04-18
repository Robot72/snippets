'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code }
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id }
  });

  redirect(`/`);
}

export async function createSnippet(
  formState: {message: string}, 
  formData: FormData
) {
  try {
    const title = formData.get('title');
    const code = formData.get('code');

    if (!title || !code) {
      formState.message = "Please fill out both fields";
    }

    if (typeof title !== 'string' || typeof code !== 'string') {
      formState.message = "Invalid input";
    }

    if (title.length > 100) {
      formState.message = "Title is too long";
    }

    if (title.length < 3) {
      formState.message = "Title must me at least 3 characters long";
    }

    if (code.length < 10) {
      formState.message = "Code must be at least 10 characters long";
    }

    if (formState.message && formState.message.length > 0) {
      return formState;
    }

    // Create a new record in th edatabase
    const snippet = await db.snippet.create({
        data: {
            title,
            code
        }
    });
    // console.log('Created new snippet:', snippet)
  } catch (error: unknown) {
    return error instanceof Error ? { message: error.message } : { message: 'An unknown error occurred' };
  }

  redirect('/');
}