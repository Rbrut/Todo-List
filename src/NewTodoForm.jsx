import { useState } from 'react';
export function NewTodoForm({onSubmit}){

    const [newItem, setNewItem] = useState("")

    function addItem(e){
    e.preventDefault() // Prevent the page from refreshing when 
    if(newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

    return(
        <form onSubmit={addItem} className='input-form'>
            <div className='form-row'>
                <label htmlFor='item'>New Item</label>
                <input 
                    value={newItem} 
                    onChange={e => setNewItem(e.target.value)} 
                    type='text' 
                    id='item' 
                />
            </div>
            <button className='add-button'>Add</button>
        </form>
    )
    
}