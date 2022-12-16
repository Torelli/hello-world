import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      {/* Se aplica a todos componentes filhos */}
      <h1 className='error'>Erro</h1>
      {/* Escopo local */}
      <h1 className={styles.success}>Sucesso!</h1>
      {/*<Inline />
      <Stylesheet primary={true} />
      <NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <FunctionClick />
      <ClassClick />
      <Greet name="Bruce" heroName="Batman" />
      <Message />
      <Hello name="Giovanni"><p>Você é top!</p></Hello>
      <Hello name="José"><p>Você é top!</p></Hello>
      <Hello name="Maria"><p>Você é top!</p></Hello>
      <Greet />
      <Welcome name="Fernando" />*/}
    </div>
  );
}

export default App;
