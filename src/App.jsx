import { useState } from "react";
import "./index.css";

function App() {
  const [products , setProducts]= useState([]);
  const [inputProduct, setInputProduct]= useState("");
  const [inputPrice, setInputPrice]= useState("");

const AddProduct =()=>{
  if(inputProduct !== '' && inputPrice !== ''){
    const newProct ={
      name : inputProduct,
      Price:parseFloat(inputPrice),
      Quantity : 1,
    }
    setProducts([...products , newProct]);
    setInputProduct("");
    setInputPrice("");
   
  }
 

}

const increesing =( index)=>{
const updateProduct = products.map((product , i) =>{
  if(i === index){
    return {...product , Quantity: product.Quantity + 1}
  }
  return product
}
)
setProducts(updateProduct);

}

const negative =( index)=>{
  const updateProduct = products.map((product , i) =>{
    if(i === index  && product.Quantity >= 1){
      return {...product , Quantity: product.Quantity -1}
    }
    return product
  }
  )
  setProducts(updateProduct)
  }

const removeProduct =( index)=>{
  const updateProduct = products.filter((_ , i) => i !== index)
  setProducts(updateProduct)
  }
const totalPrice = products.reduce((total , product )=>
total + product.Price * product.Quantity,0)
  return (
    <div className="app-container">
      <h1>Simple Shopping Cart</h1>
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Product name"  
          onChange={(e)=> setInputProduct(e.target.value)}
          value={inputProduct}
        />
        <input 
          type="number"  
          placeholder="Price" 
          onChange={(e)=> setInputPrice(e.target.value)}
          value={inputPrice}
        />
        <button onClick={AddProduct}>Add Product</button>
      </div>
<div></div>
      <ul>
        <>
        { products.length > 0 ? products.map((product , index) => (
        <div>
  <li key={index} className="product-item">
          <div className="product-details">
            <div>
              <p><strong>Product:</strong> {product.name}</p>
              <p><strong>Price:</strong> $ {product.Price.toFixed(2)}</p>
            </div>
            <button onClick={()=> removeProduct (index)} className="remove-button">Remove</button>
          </div>

          <div className="quantity-controls">
            <button onClick={()=> negative(index)}>-</button>
            <span>{product.Quantity}</span>
            <button onClick={()=> increesing(index)}>+</button>
          </div>
       
        </li>
      
        </div>
        
       
      )) : <h3>This cart is Empity </h3> }
        </>
        
      
       
      </ul>
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  )
}

export default App;