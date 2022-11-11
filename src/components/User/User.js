import React from 'react';

const User = ({user, getUserId}) => {
  const {id, name, username} = user;

  return (
      <div className={'w'}>
        {id} -- {name} -- {username}
        <button onClick={()=>getUserId(id)}>onClick</button>
      </div>
  );
};

export  {User};
