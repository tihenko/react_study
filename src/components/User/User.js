import React from 'react';

const User = ({user}) => {
  const {id, name, username} =user;
  return (
      <div className={'w'}>
        {id} -- {name} -- {username}
      </div>
  );
};

export  {User};
