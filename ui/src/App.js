import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Home from './components/home';

// TODO create a custom cursor!
function App() {
  return (
    <div id='app'>
      <Header />
      <Home />
      {/* TODO add footer here */}
    </div>
  );
}

export default App;