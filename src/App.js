import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App(){
  return(
    <div className="App">
      <Hello name="Giovanni"><p>Você é top!</p></Hello>
      <Hello name="José"><p>Você é top!</p></Hello>
      <Hello name="Maria"><p>Você é top!</p></Hello>
      {/*<Greet/>*/}
      <Welcome name="Fernando"/>
    </div>
  );
}

export default App;
