import { useState } from 'react';

import { Users, UserInfo, Posts } from './components';

const App = () => {
  const [user, setUser] = useState(null);
  const [userIdForPosts, setUserIdForPosts] = useState(null);
  console.log(user)
  return (
      <div>
        <div>
          <Users setUser={setUser} setUserIdForPosts={setUserIdForPosts}/>
          {user && <UserInfo user={user} setUserIdForPosts={setUserIdForPosts}/>}
        </div>
        {userIdForPosts && <Posts userId={userIdForPosts}/>}
      </div>
  );
};

export default App;

