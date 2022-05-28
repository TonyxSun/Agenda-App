import { Link } from "react-router-dom";

const TopicsList = ({ topics, title }) => {
  console.log(topics);
  return (
    <div className="topic-list">
      <h2>{ title }</h2>
      {topics.map(topic => (
        <div className="topic-preview" key={topic._id} >
          <Link to={`/Agenda/topics/${topic._id}`}>
          <h2>{ topic.title }</h2>
          <p>Time Estimate:  { topic.time_est }</p></Link>
        </div>
      ))}
    </div>
  );
}
 
export default TopicsList;
