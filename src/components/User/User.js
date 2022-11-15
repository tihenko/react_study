import React from 'react';

const User = ({ user, getUserId, getUser }) => {
  const { id, name, username } = user;

  return (
      <div className={'w'}>
        {id} -- {name} -- {username}
        <button onClick={() => {
          getUserId(id)
          getUser(user)
        }}>onClick</button>
      </div>
  );
};

export { User };
