import { useState } from 'react';

import css from './App.module.css';
import { Users } from './components';
import SingleUser from './components/SingleUser/SingleUser';
import Form1 from './components/Form1/Form1';
import Form2 from './components/Form2/Form2';

const App = () => {

  const [singleUser, setSingleUser] = useState(null);

  return (
      <div>

        {/*{singleUser && <SingleUser user={singleUser}/>}*/}
        {/*<Users getUser={setSingleUser}/>*/}

        {/*<Form1/>*/}
        <Form2/>
      </div>
  );
};

export default App;

