import './App.css';

function App() {
  return (
    <nav>
      <div className='brand'>
        Life<font>Great</font>
      </div>

      <ul className='menu-list'>
        <li>
          <a href='#' className='btn bg-info text-white'>
            <i className='fas fa-user-plus'> Login</i>
          </a>
        </li>
        <li>
          <a href='#' className='btn bg-secondary text-white'>
            <i className='fas fa-sign-in-alt'> Register</i>
          </a>
        </li>
      </ul>
      <div className='menu-icon'>
        <i className='fas fa-bars'></i>
      </div>
    </nav>
  );
}

export default App;
