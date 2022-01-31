import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
    <h1>Tasky</h1>
    <Task title="Dishes" deadline="Today" desc="Wash them"/>
    <Task title="Laundry" deadline="Tomorrow" desc="Fold clothes"/>
    <Task title="Tidy" deadline="Today" desc="Clean room"/>
    </div>
  );
}

export default App;
