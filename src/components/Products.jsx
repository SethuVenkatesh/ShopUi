import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product";
import React from 'react'
const Conatiner=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;


const Products = () => {
  return (
    <Conatiner>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}></Product>
        ))}
    </Conatiner>
  )
}

export default Products
