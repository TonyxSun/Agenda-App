import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
    const {id} = useParams();
    const {data: note, isPending, error} = useFetch('https://petite-note-server.herokuapp.com/notes//'+id)
    const history = useHistory();

    const handleClick = () => {
        fetch('https://petite-note-server.herokuapp.com/notes//' + note.id, {
            method: 'DELETE'
        }).then(()=> {
            history.push('/Petite-Note');
        })
    }
    return ( 
        <div className="note-details">
            { isPending && <div> Loading... </div>}
            { error && <div> {error} </div>}
            {note && (
                <article>
                    <h2>{note.title}</h2>
                    <p>Written by {note.author}</p>
                    <div>{note.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;