import axios from 'axios';
import React, { useState } from 'react'

const PostCreate = () => {
    const [title,setTitle] = useState('');

    const onSubmitHandler =  async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:4000/posts',{
            title
        })
        .then(()=>{
            setTitle('');
        })
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div>
            <form>
                <div className="form-group">
                    <label >Title</label>
                    <input value={title} type="text"className="form-control" onChange={e => setTitle(e.target.value)} />
                </div>
                <botton className="btn btn-primary" onClick={onSubmitHandler}>
                    Submit
                </botton>
            </form>
        </div>
    )
}

export default PostCreate
