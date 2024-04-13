import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function CreateNewSnippet() {
    async function createSnippet(formData: FormData) {
        'use server';

        // CHeck the user's inputs and make sure they are valid
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;

        // Create a new record in th edatabase
        const snippet = await db.snippet.create({
            data: {
                title,
                code
            }
        });
        console.log('Created new snippet:', snippet)

        // Redirect the user back ot the root
        redirect('/');
    }
    
    return (
        <form className="flex flex-col gap-2" action={createSnippet}>
            <h2 className="font-bold m-3">Create New Snippet</h2>

            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input 
                        className="border rounded p-2 w-full" 
                        id="title" 
                        name="title" 
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">Code</label>
                    <textarea 
                        className="border rounded p-2 w-full" 
                        id="code" 
                        name="code" 
                    />
                </div>
            </div>

            <button type="submit" className="rounder p-2 bg-blue-300 w-full">
                Create Snippet
            </button>
        </form>
    )
}