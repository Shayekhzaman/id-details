import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const UserDetail = () => {
    const { userID } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${userID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const { userId, title, body } = user;
    // console.log(user);


    return (
        <div>
            <h2>Post Number:{userID}</h2>
            <h1>User Id:{userId}</h1>
            <h2>Title:{title}</h2>
            <h3>Body:{body}</h3>
            <Link to={`/comments/${userID}`}>
                <Button variant="contained" color="primary">
                    Comment
                 </Button>
            </Link>


        </div>
    );
};

export default UserDetail;