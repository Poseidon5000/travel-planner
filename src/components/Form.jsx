import React, { useState } from 'react'


const Form = ({handleAddItems}) => {
    const [description, setDescription] = useState("");
    const [selectedItem, setSelectedItem] = useState(1);
    
    
    function handleSubmit(e) {
        e.preventDefault()
        if(!description) return
        const newItem = {description, selectedItem, packed:false, id:Date.now()}
        handleAddItems(newItem)
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
   
    </>
  )
}

export default Form