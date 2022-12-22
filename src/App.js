import { Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Section from './Components/Section';
import Contact from './Components/Contact';
import Login from './Components/Login';
import back1 from './imags/model-s.jpg'
import back2 from './imags/model-y.jpg'
import back3 from './imags/model-3.jpg'
import back4 from '~./imags/model-x.jpg'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/ModelS' element={ <Section
      title="Model S"
      describtion="Order Online For Touchless Delivery"
      backgroundImg={back1}
      leftBtnText="Custom Order"
      rightBtnText="Existing inventory"
      />}/>
      <Route path='/ModelY' element={ <Section
      title="Model Y"
      describtion="Order Online For Touchless Delivery"
      backgroundImg={back2}
      leftBtnText="Custom Order"
      rightBtnText="Existing inventory"
      />}/>
      <Route path='/Model3' element={ <Section
      title="Model 3"
      describtion="Order Online For Touchless Delivery"
      backgroundImg={back3}
      leftBtnText="Custom Order"
      rightBtnText="Existing inventory"
      />}/>
      <Route path='/ModelX' element={<Section
      title="Model X"
      describtion="Order Online For Touchless Delivery"
      backgroundImg={back4}
      leftBtnText="Custom Order"
      rightBtnText="Existing inventory"
      />}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
