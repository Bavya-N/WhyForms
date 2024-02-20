import './App.css';
import MyForm from './Forms/Forms';
import Navbar from './Navbar/Navbar';
import Footer from './Navbar/footer';

function App() {
  return (
    <div className="App overflow-y-hidden">
      <Navbar/>
      <MyForm/>
      <Footer/>
    </div>
  );
}

export default App;
