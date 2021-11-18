import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';

function App() {
  return (
    <div id='app'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
