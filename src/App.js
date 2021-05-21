import Item from './components/Item/index.js';
import Card from './components/Card/index.js';

const App = () =>{
  return(
    <div>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <Item texto='item1' />
        <Item texto='item2' />
        <Item texto='item3' />
      </ul>
      <Card />
    </div>
    
  )

}

export default App;