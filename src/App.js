import Header from './Header';
import Main from './Main';
import Section from './Section';
import Footer from './Footer';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className='main-section'>
      <Main />
      <Section />
      </div>
      <Footer />
    </div>
  );
}

export default App;
