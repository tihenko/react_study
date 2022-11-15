import React from 'react';

const SingleUser = ({user}) => {
  const {id, name, username, email} = user;

  return (
      <div className={'w'}>
        {id} -- {name} -- {username} -- {email}
      </div>
  );
};

export default SingleUser;
