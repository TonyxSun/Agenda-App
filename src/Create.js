import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mom');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => { 
        e.preventDefault();
        const note = {title, body, author};
        setIsPending(true);
        fetch('https://petite-note-server.herokuapp.com/notes/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(note)
        }).then(()=> {
            console.log('created note');
            setIsPending(false);
            history.push('/Petite-Note');
        })
    };


    return (<div className="create">
        <h2>Add new note</h2>
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Content:</label>
            <textarea
                required
                onChange={(e) => setBody(e.target.value)}
            />
            <label>Author:</label>
            <select
                value={author}
                onChange={(e) => { setAuthor(e.target.value) }}
            >
                <option value="mom">mom</option>
                <option value="Hannah">Hannah</option>
            </select>
            {!isPending && <button>Add Note</button>}
            {isPending && <button disabled>Adding note</button>}
        </form>
    </div>);
}

export default Create;