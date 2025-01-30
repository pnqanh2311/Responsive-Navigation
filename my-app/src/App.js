import './App.css';
import Navbar from './components/index';
const App = () => {
 
  return (
    <div>
      <div className="App">
      <Navbar/>
      <h1>Annie's Skincare</h1>
      <nav>
        <ul id="nav-links" >
            <li><a href="App.js">Home</a></li>
            <li><a href="#menu" >Menu</a>
                <ul class="submenu">
                    <li><a href="#bodycare">BodyCare</a></li>
                    <li><a href="#skincare">Skincare</a></li>
                    <li><a href="#makeup">Makeup</a></li>
                </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
      <main>
        <h2>Welcome to Annie's Skincare</h2>
        <p>How can I help you today?</p>
      </main>
    </div>
    </div>
  );
}
   
export default App;
