
import './App.css';
import AddTask from './component/AddTask';
import ListTak from './component/ListTak';

function App() {
  return (
    <div className="App">
      <h1>Our To Do App</h1>
      <AddTask/>
      <ListTak/>
    </div>
  );
}

export default App;
