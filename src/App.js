import { useState } from 'react';

import css from './App.module.css';
import { Users } from './components';
import SingleUser from './components/SingleUser/SingleUser';
import Form1 from './components/Form1/Form1';

const App = () => {

  const [singleUser, setSingleUser] = useState(null);

  return (
      <div>

        {/*{singleUser && <SingleUser user={singleUser}/>}*/}
        {/*<Users getUser={setSingleUser}/>*/}

        <Form1/>
      </div>
  );
};

export default App;

