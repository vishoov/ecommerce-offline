import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Shop = () => {
    const [allProducts, setAllProducts] = useState([]) // ADD THIS
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [categories, setCategories] = useState([])
    const [selectedPrice, setSelectedPrice] = useState(100) // Changed default

    async function fetchData(){
        let url = "https://api.escuelajs.co/api/v1/products"
        try{
            const res = await axios.get(url)
            const uniqueCategories = [
                ...new Set(res.data.map((product)=>product.category.name))
            ]
            setCategories(uniqueCategories)
            setAllProducts(res.data) // Store original
            setProducts(res.data)
        }
        catch(err){
            console.log("error", err)
        }
    }

    function applyFilter(){
        let filtered = allProducts // Start with original data
        
        if(selectedCategory !== 'all'){
            filtered = filtered.filter((product) => product.category.name === selectedCategory)
        }
        
        filtered = filtered.filter((product) => product.price <= selectedPrice)
        setProducts(filtered)
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if(allProducts.length > 0) {
            applyFilter()
        }
    }, [selectedCategory, selectedPrice, allProducts])

    return (
        <div>
            <h1>This is the Shop page</h1>

            <div>
                <label>Filter by Category</label>
                <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="all">All</option>
                    {categories.map((category, index) => {
                        return <option key={index} value={category}>{category}</option>
                    })}
                </select>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
                <label>Max Price: ${selectedPrice}</label>
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="1" 
                    value={selectedPrice} 
                    onChange={(e) => setSelectedPrice(Number(e.target.value))} 
                />
                <output>${selectedPrice}</output>
            </div>

            <p>Showing {products.length} products</p>

            <div className="products" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                {products.map((product) => {
                    return <div key={product.id} className='product-card' 
                    style={{border: '1px solid black', borderRadius: '10px', padding: '10px', margin: '10px', width: '200px', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h1 style={{fontSize:'20px'}}>{product.title}</h1>
                        <p style={{height:'40px', overflow:'hidden'}}>{product.description}</p>
                        <img src={product.images[0]} alt={product.title} style={{width: '100px', height: '100px', objectFit: 'cover'}} />
                        <p>${product.price}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Shop
