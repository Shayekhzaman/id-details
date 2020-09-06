import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData/data'

const Comment = () => {
    const {commentsId}=useParams();
    const [comment, setComment] = useState([{}]);
    useEffect( () => {
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${commentsId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    },[]);
    // let person1,person2,person3,person4,person5;
    // for(let i=0; i<5; i++){
    //     person[]
    // }
    // const person1=comment[0];
    
    
    console.log(fakeData);
    return (
        <div>
            <h1>comment from:{commentsId} number post</h1>
                
    
                {
               comment.map(person =>  <h2>
                   Id:{person.id},<br></br>
                   Name:{person.name},<br></br>
                    Mail: {person.email}
                   
                    </h2>)
           }
          
            
        </div>
    );
};

export default Comment;