import React from 'react';

const Comment = ({comment}) => {
  return (
      <div>
        <span>{comment.body}</span>
      </div>
  );
};

export default Comment;
