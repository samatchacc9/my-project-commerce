import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import Topic from './components/Topic/Topic';

function App() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <Topic title={'Products'} />
      <Card />
      <Footer />
    </>
  );
}

export default App;
