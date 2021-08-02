import React from 'react'

const CommentList = ({comments}) => {

    console.log(comments);
        const renderComments = comments?.map((comment)=>{
        let content;
        switch (comment.status) {
            case 'approved':
                content = comment.content;
                break;
            case 'rejected':
                content = 'Comment Cannot be displayed';
                break;
            case 'pending':
                content = 'Comment in pending state';
                break;
        }
        return(
            <li key={comment.id}>{content}</li>
        )
    })
    return (
        <ul>
            {renderComments}
        </ul>
    )
}

export default CommentList