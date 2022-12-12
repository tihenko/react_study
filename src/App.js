import { useState } from 'react';

import { Users, UserInfo, Posts } from './components';

const App = () => {
  const [user, setUser] = useState(null);
  return (
      <div>
        <div>
          <Users setUser={setUser}/>
          {user && <UserInfo user={user}/>}
        </div>
        <Posts/>
      </div>
  );
};

export default App;

