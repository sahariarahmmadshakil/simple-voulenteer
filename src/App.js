
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFound from  './components/NotFound/NotFound';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Volenters from './components/Volenters/Volenters';
function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Main></Main>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/volenters' element={<Volenters></Volenters>}></Route>
      </Routes>

    </div>
  );
}

export default App;
