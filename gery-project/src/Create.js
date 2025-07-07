import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Petq");

    const handleSumbit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        console.log(blog);
        
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSumbit} >
                <label>Block title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <label>Block body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Petq">Petq</option>
                    <option value="Ivo">Ivo</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;