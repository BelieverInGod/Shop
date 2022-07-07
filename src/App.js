import './App.css';
import Header from './components/Header/Header';
import InfoSlider from './components/InfoSlider/InfoSlider'
import decoration from './decoration/dec.png'
import ListItemKatalog from './components/ListItemKatalog/ListItemKatalog'

function App() {
  return (
    <>
      <Header/>
      <div className='dec_pos'>
        <h1>SILICONE_CASE_KOVEL</h1>
      </div>
      <div className='slider_container'>
        <ListItemKatalog/>
        <InfoSlider/>
      </div>

     
    </>
  )
}

export default App;
