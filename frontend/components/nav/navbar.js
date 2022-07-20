export default function Navbar(){
     return <nav className="nav">
              <a href="/" className='logo'> <img className='logo' src={window.logoURL} alt="logo"/> </a>
              <a class="active" href="#home">Home</a>
                <a href="#about">About</a>
                 <a href="#contact">Contact</a>
                 <div class="search-container">
                   <form action="/action_page.php">
                   <input type="text" placeholder="Search.." name="search"/>
                   <button type="submit">Submit</button>
                   </form>
                </div> 
          </nav>
}