import Info from './component/Info';
import './App.scss';
import About from './component/About';
import Skills from './component/Skills';

function App() {
  return (
    <div className="container">
        <Info/>
        <About/>
        <Skills/>
    </div>
  );
}

export default App;
