import { useState } from "react";
import {useHistory} from 'react-router-dom';
import React from 'react';
import axios from 'axios';

const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [time_est, settime_est] = useState(" ");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => { 
        e.preventDefault();
        const topic = {title, description, time_est};
        setIsPending(true);
        axios
            .post('http://localhost:8082/api/topics', topic)
            .then(()=> {
            console.log('created topic');
            setIsPending(false);
            history.push('/Agenda');
        })
    };

      


    return (<div className="create">
        <h2>Add new topic</h2>
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Description:</label>
            <textarea
                required
                onChange={(e) => setDescription(e.target.value)}
            />
            <label>Time Estimate (minutes):</label>
            <select
                required
                value={time_est}
                onChange={(e) => { settime_est(e.target.value) }}
            >
                <option value="n/a">n/a</option>
                <option value="20 minutes or less">20</option>
                <option value="40 minutes or less">40</option>
                <option value="60 minutes or less">60</option>
                <option value="90 minutes or less">90</option>
                <option value="90 minutes or more">90+</option>
            </select>
            {!isPending && <button>Add topic</button>}
            {isPending && <button disabled>Adding topic</button>}
        </form>
    </div>);
}

export default Create;
