import { Link } from "react-router-dom";

const BlogList = ({ notes, title }) => {
  console.log(notes);
  return (
    <div className="note-list">
      <h2>{ title }</h2>
      {notes.map(note => (
        <div className="note-preview" key={note.id} >
          <Link to={`/Petite-Note/notes/${note.id}`}>
          <h2>{ note.title }</h2>
          <p>Written by { note.author }</p></Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;