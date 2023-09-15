import React, { useState } from 'react'
import PackingList from './PackingList';


const Form = () => {
    const [description, setDescription] = useState("");
    const [selectedItem, setSelectedItem] = useState(1);
    const [parkingItems, setParkingItems] = useState([])
    
    function handleSubmit(e) {
        e.preventDefault()
        if(!description) return
        const newItem = {description, selectedItem, packed:false, id:Date.now()}
        setParkingItems([...parkingItems, newItem]);
        setDescription("")
        setSelectedItem(1)
     
    }

    function handleChange(e){
        setDescription(e.target.value)
    }

    function handleSelect(e){
        setSelectedItem(e.target.value)
    }



  return (
    <>
    <form className='add-form' onSubmit={handleSubmit}>
        <h3>
            What do you need for your trip
        </h3>
        <select value={selectedItem} onChange={handleSelect}>
        {Array.from({length:20}, (_, i)=> i+ 1).map(num => <option key={num}>{num}</option>)}
        </select>
        
        <input placeholder='item...' type='text' value={description} onChange={handleChange}/>
        <button>Add</button>

        
    </form>
    <PackingList parkingItems = {parkingItems}/>
    </>
  )
}

export default Form