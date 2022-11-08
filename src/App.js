import './App.css';

import Actor from './components/Actor';
import Users from './components/Users';

const actors = [
  { id: 1, name: 'Tom', img: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Tom_Tom_and_Jerry.png' },
  { id: 2, name: 'Jerry', img: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png' },
  { id: 3, name: 'Legs', img: 'https://st1.latestly.com/wp-content/uploads/2018/09/tom-and-jerry-lady.jpg' },
  {
    id: 4,
    name: 'Spike',
    img: 'https://cdn.custom-cursor.com/packs/5683/cartoon-spike-bulldog-and-bone-pack.png'
  }
]

function App() {
  return (
      <div>
        {/*{actors.map(actor => <Actor key={actor.id}*/}
        {/*                            name={actor.name}*/}
        {/*                            img={actor.img}/>)}*/}


        <Users/>
      </div>
  );
}

export default App;

