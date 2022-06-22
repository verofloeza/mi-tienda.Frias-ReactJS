import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='cuerpo'>
      <NavBar />
      <ItemListContainer inicial="0" stock="50"/>
    </div>
  );
}

export default App;
