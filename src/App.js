import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card/Card';
import { controlConfig } from './components/config/controlsconfig';

function App() {
  return (
    <>
      <Card {...controlConfig}></Card>
    </>
  );
}

export default App;
