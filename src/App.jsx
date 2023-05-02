
import './App.css'
import Chef from './components/Chef';
import Footer from './components/Footer';
import Header from './components/Header'
import { Outlet } from 'react-router-dom';


function App() {

  

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
