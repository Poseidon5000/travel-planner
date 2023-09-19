
import './App.css';
import Form from './components/Form';
import Logo from './components/Logo';
import Stats from './components/Stats';
import PackingList from './components/PackingList';
import { useState } from 'react';

function App() {
  const [parkingItems, setParkingItems] = useState([]);

  function handleDelete(id){
    setParkingItems(parkingItems.filter(items => items.id !== id))
}

function handleAddItems(item){
  setParkingItems([...parkingItems, item]);
 
}

function handleToggleItem (id){
  setParkingItems(parkingItems.map(item => 
    item.id === id ? {...item, packed: !item.packed} : item
  ))
}
  

  return (
    <div className="app">
     
    <Logo/>
    <Form handleAddItems={handleAddItems}/>
    <PackingList parkingItems={parkingItems} handleDelete={handleDelete} handleToggleItem={handleToggleItem}/>
    <Stats parkingItems={parkingItems}/>
  
    </div>
  );
}



export default App;
