import axios from 'axios';
import React, { useState } from 'react'

const CommentCreate = ({postId}) => {
    const [comment,setComment] = useState('');

    const submitHandler =async (e) =>{
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{content: comment})
        setComment('');
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label >
                        New Comment
                    </label>
                    <input value={comment} type="text" onChange={e =>  setComment(e.target.value)} />
                </div>
                <button className="btn btn-primary">
                    Submit
                </button>
            </form>        
        </div>
    )
}

export default CommentCreate
