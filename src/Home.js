// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from './useFetch';

const Home = () => {
  const {data: notes, isPending, error} = useFetch('https://petite-note-server.herokuapp.com/notes/');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>}
      {notes && <BlogList notes={notes} title="All Notes" />}
    </div>
  );
}

export default Home;