import logo from './logo.svg';
import './App.css';
import ContactosListCompnent from './components/containers/contactosListCompnent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactosListCompnent></ContactosListCompnent>
      </header>
    </div>
  );
}

export default App;
