import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(1)
  let [Fruit, setFruit] = useState("Product Name")
  function add(){
   count = count+1
   setCount(count)       
  }
  function sub(){
    
    if(count>1){
      count = count-1
      setCount(count)
    }
  }
    
      const items = ["Apple","Banana","Apricote","Atemoya","Avocados","Blueberry","Blackcurrant","Ackee","Cranberry","Cantaloupe","Cherry", "Black sapote/Chocolate pudding fruit","Dragonfruit","Dates","Cherimoya","Buddha’s hand fruit","Finger lime Fig Coconut Cape gooseberry/Inca berry/Physalis","Grapefruit","Gooseberries","Custard apple/Sugar apple/Sweetsop Chempedak","Hazelnut","Honeyberries","Dragon fruit","Durian","Horned melon","Hog plum","Egg fruit",
    "Feijoa/Pineapple guava/Guavasteen","Indian fig","Ice apple","Guava","Fuyu Persimmon","Jackfruit","Jujube","Honeydew melon","Jenipapo","Kiwi","Kabosu","Kiwano","Kaffir lime/Makrut lime"];
    const handleClick = (value) => {
         Fruit=value
         setFruit(Fruit)
       };
  console.log(items.length);
  return (
    <>
     <h1 id='m_h1'>Shopping Cart</h1>
     <div id='nav'>
      <h2>{Fruit}</h2>
      <div id='nav_side'>
      <button className='operarion' onClick={add}>+</button>
      <button className='operarion'>{count}</button>
      <button className='operarion' onClick={sub}>-</button>
      </div>
     </div>
     <div id='listt'>
     <div id='list1'>
      <h3>Fruit List</h3>
      {items.map((item, index) => (
      <h5  key={index}  onClick={()=>handleClick(item)}>{item}</h5>
      ))}   
</div>
     </div>


     <div id='footer'>
      <h2>Your Cart</h2>
      <h3>{Fruit} : {count}</h3>
     </div>
    </>
  )
}

export default App


