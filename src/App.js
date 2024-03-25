import './App.css';
import Navigation from './Navigation/Nav'
import Product from './Products/Product';
import Reacomendet from './Reacomendet/Reacomendet';
import SideBar from './SideBar/SideBar';

function App() {
  return (
    <>
    <SideBar/>
     <Navigation/>
     <Reacomendet/>
     <Product/>
    </>
  );
}

export default App;
