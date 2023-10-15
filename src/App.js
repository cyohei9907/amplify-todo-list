import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';
// const data = await DataStore.save(
//   new Todo({
//   "name": "Lorem ipsum dolor sit amet",
//   "description": "Lorem ipsum dolor sit amet"
// })
// );
const models = await DataStore.query(Todo);
console.log(models);

function App() {
  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
