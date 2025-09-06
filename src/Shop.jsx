import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
const Shop = () => {


//npm install axios
    //products state
    const [products, setProducts] = useState([]);
    const [filteredproducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedPrice, setSelectedPrice] = useState(1000);
    const [searchQuery, setSearchQuery] = useState("");
    //Fetch the products from the api
    async function fetchProducts(){
        const url = "https://api.escuelajs.co/api/v1/products";

        try{
            const response = await axios.get(url);

            //get unique categories from the products
            const uniqueCategories = [...new Set(response.data.map(product => product.category.name))]
            setCategories(uniqueCategories);
            console.log(uniqueCategories);


            setProducts(response.data);


            setFilteredProducts(response.data);
            console.log(response.data);
        }
        catch(error){
            console.log(error);
        }

    }

    function applyFilter(){
        //all products -> filter -> map 
        //category filter 
        let filtered = products;

        if(selectedCategory !== 'all'){
            filtered = filtered.filter(
                (product)=> product.category.name === selectedCategory
            );
        }

        //price filter
        filtered = filtered.filter(
            (product)=>product.price<=selectedPrice
        )

        //search filter
        if(searchQuery.trim() !== ""){
            filtered = filtered.filter((product)=>{
                return (
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
                )
            })
        }
        
        setFilteredProducts(filtered);
    }

    useEffect(()=>{
        fetchProducts();
    }, [])

    useEffect(()=>{
     
        //check the selected category and apply filter
        if(products.length){
            applyFilter();
        }
    }, [selectedCategory, products, selectedPrice, searchQuery]);

  return (
    <div style={{width:"100vw"}}>
        <h1 style={{textAlign:"center"}}>Welcome to the shop</h1>

        <div className="searchbar">
            <label>Search:</label>
            <input 
            type='text'
            placeholder='Search Products'
            value={searchQuery}
            onChange={(e)=>{
                setSearchQuery(e.target.value);
            }}
            />

        </div>


        {/* select category */}

        <div>
            <label>Filter by Category</label>

            <select
            value={selectedCategory}
            onChange={(e)=>{
                setSelectedCategory(e.target.value);
            }}>
                <option value="all">All</option>
                {categories.map((category, index)=>{
                    return (
                        <option key = {index} value={category}>{category}</option>
                    )
                })}
            </select>
        </div>

                <div className="priceselector">
                    <label>Filter by Price</label>

                    <input 
                    type='range'
                    min='0'
                    max='1000'
                    step='10'
                    value={selectedPrice}
                    onChange = {(e)=> setSelectedPrice(Number(e.target.value))}
                    />
                    <output>${selectedPrice}</output>
                </div>


        <div className='products' style={{display:"flex", flexWrap:"wrap", justifyContent:'center', gap:"20px", padding:"20px"}}>   
            {filteredproducts.map((product)=>{
                return(
                    <div 
                    key={product.id}
                    style={{
                        border:"1px solid gray",
                        borderRadius:"10px",
                        padding:"10px",
                        width:"200px",
                        textAlign:"center",
                        display:'flex',
                        flexDirection:"column",
                        justifyContent:"space-between",
                        height:"350px"
                    }}>
                        <img src={product.images[0]} alt={product.title} 
                        style={{
                            width:'100%',
                            height:"200px",
                            objectFit:"contain",
                            overflow:"hidden"
                        }} />

                        <h3
                        style={{
                            fontSize:"16px",
                            fontWeight:"bold",
                            margin:"5px 0"
                        }}>{product.title}</h3>
                        <p
                        style={{
                            fontSize:"10px",
                            color:"gray",
                            overflow:"hidden",
                            height:"40px"

                        }}
                        >{product.description.slice(0, 50)}...</p>
                        <div className="buttons"
                        style={{
                            display:"flex",
                            justifyContent:"space-between",
                            alignItems:"center",
                            // marginTop:"10px"
                        }}
                        >
                        <button
                        style={{
                            backgroundColor:"#224EE0",
                            color:"white",
                            border:"none",
                            padding:"5px 10px",
                            borderRadius:"8px",
                            cursor:"pointer"
                        }}
                       
                        >
                            Add to cart
                        </button>
                        <p>$ {product.price}</p>
                        </div>
                        </div>
                )
            })}
        </div>
    </div>
  )
}

export default Shop