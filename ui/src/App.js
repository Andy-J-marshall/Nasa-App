import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import AsteroidInfo from './components/asteroidInfo';
import MarsPhoto from './components/marsPhoto';

function App() {
  return (
    <div id='app'>
      <Header />
      <AsteroidInfo />
      <MarsPhoto />
    </div>
  );
}

export default App;