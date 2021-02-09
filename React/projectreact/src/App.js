import logo from './logo.svg';
import './App.css';
import './main.css';

function App() {
  return (
    <div class="wrapper">
        <header>
          <img src=".\images\logo\logo.png" alt="company Logo"/>
          <div class="search-bar">
          <form action='/' method="POST">
            
              <input type="text" name="search_input"/>
              <input type="submit" value="search"/>
            
          </form>
          </div>
          <nav class="nav">
            <ul class="nav-links">
              <li><a href="/"/>Home</li>
              <li><a href="/"/>SHOP</li>
              <li><a href="/"/>Collections</li>
              <li><a href="/"/>Blog</li>
              <li><a href="/"/>Contact</li>

            </ul>
          </nav>
            
        </header>
      

        
    </div>
  );
}

export default App;
    