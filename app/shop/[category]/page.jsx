"use client"
import { usePathname } from 'next/navigation';

import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ProductCard';
import styles from '../../../styles/ShopPage.module.css';
const CategoryPage = () => {
    const route = usePathname();
    const apiRoute = route.replace('/shop/', '');
  
    const [products, setProducts] = useState([{},{}]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          
          const result = await fetch(`/api/products/${apiRoute}`);
          const res = await result.json();
          console.log('Fetched products:', res);
          setProducts(res);
        } catch (error) {
          console.error('Failed to fetch products:', error);
        }
      };
      fetchData();
    }, []);
  
    if (!products) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>All Results</h1>
        <div className={styles.cards}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };

export default CategoryPage;



