import { useState } from 'react';
import './App.css';
import Navigation from './Navigation/Nav'
import Product from './Products/Product';
import Reacomendet from './Reacomendet/Reacomendet';
import SideBar from './SideBar/SideBar';
//Db
import Card from './components/Card';
import {AllProducts}  from './db/data.js'

function App() {
  const [selectedCategory,setSelectedCategory] = useState(null);

  //-----------Input Filter-------------->
  const[query,setQuery] = useState("");

  const handleInputChange = event =>{
    setQuery(event.target.value)
  }
  const filteredItems = AllProducts.filter((product) => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1));
  //-----------Input Filter-------------->

  //-----------Radio Filter-------------->
  const handleChange = event =>{
    setSelectedCategory(event.target.value)
  }
  //-----------Radio Filter-------------->

  //-----------Buttons Filter-------------->
  const handleClick =event =>{
    setSelectedCategory(event.target.value)
  }
  function filterdedData(AllProducts,selected,query){
    let filteredProducts = AllProducts

    //Filtering Input items
    if(query){
      filteredProducts = filteredItems
    }
    //Selected Filter
    if(selected){
      filteredProducts = filteredProducts.filter(
        ({category,color,company,newPrice,title}) =>
          category === selected || 
          color === selected || 
          company === selected || 
          newPrice === selected || 
          title === selected
       ) 
    }
    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice}) =>(
      <Card 
      key={Math.random()}
      img = {img}
      title ={title}
      star ={star}
      reviews={reviews}
      newPrice = {newPrice}
      prevPrice={prevPrice}
      />
    ))
  }
  const result = filterdedData(AllProducts,selectedCategory,query)



  return (
    <>
    <SideBar handleChange = {handleChange}/>
     <Navigation query={query} handleInputChange={handleInputChange}/>
     <Reacomendet handleClick={handleClick}/>
     <Product result={result}/>
    </>
  );
}

export default App;
