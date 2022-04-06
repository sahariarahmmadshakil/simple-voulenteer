import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
function App() {

  return (
    <div className="App">
      <Home></Home>
      <Header></Header>
      <Friends></Friends>
      <About></About>
    </div>
  );
}

export default App;
