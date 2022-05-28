import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import {useHistory, Link} from 'react-router-dom';


const TopicDetails = () => {
    const {id} = useParams();
    console.log(id);
    const {data: topic, isPending, error} = useFetch('http://localhost:8082/api/topics/'+id)
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8082/api/topics/' + topic._id, {
            method: 'DELETE'
        }).then(()=> {
            history.push('/Agenda');
        })
    }
    return ( 
        <div className="topic-details">
            { isPending && <div> Loading... </div>}
            { error && <div> {error} </div>}
            {topic && (
                <article>
                    <h2>{topic.title}</h2>
                    <p>Last Updated:  {topic.updated_date.substring(0,10)}</p>
                    <p>Time Estimate:  {topic.time_est}</p>
                    <div>{topic.description}</div>
                    <button onClick={handleClick}>Delete</button>
                    <Link to={`/Agenda/topics/edit/${topic._id}`} className="btn">
                    Edit Topic
                    </Link>
                </article>
            )}
        </div>
     );
}
 
export default TopicDetails;
