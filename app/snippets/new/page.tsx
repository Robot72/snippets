export default function CreateNewSnippet() {
    return (
        <form>
            <h2 className="font-bold m-3">Create New Snippet</h2>

            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input 
                        className="border rounded p-4 w-full" 
                        id="title" 
                        name="title" 
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">Code</label>
                    <textarea 
                        className="border rounded p-4 w-full" 
                        id="code" 
                        name="code" 
                    />
                </div>
            </div>

            <button type="submit" className="rounder p-4 bg-blue-300 w-full">
                Create Snippet
            </button>
        </form>
    )
}