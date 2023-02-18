import React, { useState } from 'react';
import './ProductList.css';
import ProductItem from './ProductItem';
const data = [
  {
    id: 1,
    img__url: 'https://images.unsplash.com/photo-1675215452934-ab9954f0aa78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
    category: 'media',
    category__title: 'rock records'
  },
  {
    id: 2,
    img__url: 'https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    category: 'media',
    category__title: 'kim ceramics'
  },
  {
    id: 3,
    img__url: 'https://images.unsplash.com/photo-1672435902815-29f81d9ff104?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
    category: 'media',
    category__title: 'channel beauty'
  }
]
function ProductList() {
  const [products, setProducts] = useState(data)
  return (
    <>
      {
        products && products.length > 0 &&
        products.map(item => {
          return (
            <ProductItem data={item}  key={item.id}/>
          )
        })
      }
    </>
  )
}

export default ProductList