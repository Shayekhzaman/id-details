import React, { useState, useEffect } from 'react';
import UsersId from '../UsersId/UsersId';

const Home = (props) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    // const showDetailsHandler =(user)=>{
    //     console.log("click",user);
    // }

    return (
        <div>
            {
                user.map(user=> <UsersId
                     user={user}
                    //  showDetailsHandler={showDetailsHandler}
                     ></UsersId>)
            }
        </div>
    );
};

export default Home;