import { useState } from 'react';

import { Users, UserInfo, Posts } from './components';

const App = () => {
  const [user, setUser] = useState(null);
  const [userIdForPosts, setUserIdForPosts] = useState(null);

  return (
      <div>
        <div>
          <Users setUser={setUser}/>
          {user && <UserInfo user={user} setUserIdForPosts={setUserIdForPosts}/>}
        </div>
        {userIdForPosts && <Posts setUserId={userIdForPosts}/>}
      </div>
  );
};

export default App;

