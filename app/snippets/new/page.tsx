'use client';

import { useFormState } from 'react-dom';
import { createSnippet } from '@/actions';

export default function CreateNewSnippet() {
    const [formState, action] = useFormState(createSnippet, { message: "" })
    
    return (
        <form className="flex flex-col gap-2" action={action}>
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

            {formState.message ? <div className="p-4 border rounded bg-red-400 border-red-100 text-white">{formState.message}</div> : null}

            <button type="submit" className="rounder p-2 bg-blue-300 w-full">
                Create Snippet
            </button>
        </form>
    )
}