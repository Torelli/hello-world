import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App(){
  return(
    <div className="App">
      <FunctionClick/>
      <ClassClick/>
      {/*<Greet name="Bruce" heroName="Batman" />
      <Message/>
      <Hello name="Giovanni"><p>Você é top!</p></Hello>
      <Hello name="José"><p>Você é top!</p></Hello>
      <Hello name="Maria"><p>Você é top!</p></Hello>
      <Greet/>
      <Welcome name="Fernando"/>*/}
    </div>
  );
}

export default App;
