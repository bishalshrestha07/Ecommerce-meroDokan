import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";

import React from 'react'

function ProductsListScreen() {

  const dispatch = useDispatch()

  dispatch(listProducts())


  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  // useEffect(() => {
    
  //     dispatch(listProducts())
    
  // }, [dispatch])



  return (
    <div>
      {products.map(product =>{
        <p>{product.name}</p>
      })}
    </div>

  )
}

export default ProductsListScreen