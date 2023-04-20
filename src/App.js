import './App.css';
import Footer from './components/footer/footer';
import Letter from './components/letter/letter';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Proyects from './components/proyects/proyects';
import Tools from './components/tools/tools';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <Letter/>
      <Tools/>
      <Proyects/>
      <Footer/>
    </div>
  );
}

export default App;
