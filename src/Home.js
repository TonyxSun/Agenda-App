// import { useState, useEffect } from "react";
import TopicsList from "./TopicsList";
import useFetch from './useFetch';

const Home = () => {
  const {data: topics, isPending, error} = useFetch('http://localhost:8082/api/topics');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>}
      {topics && <TopicsList topics={topics} title="All topics" />}
        
    </div>
  );
}

export default Home;
