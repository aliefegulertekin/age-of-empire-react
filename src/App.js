import './Styles/App/App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Units from './pages/Units';
import NavigationBar from './components/MainHeader/NavigationBar';
import UnitDetail from './pages/UnitDetail';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <main>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/units' element={<Units/>}/>
        <Route path='/units/unit-detail' element={<UnitDetail/>}/>
      </Routes>
      </main>
      
    </div>
  );
}

export default App;
