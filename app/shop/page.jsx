"use client"
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/ShopPage.module.css';

const ShopPage = (category) => {
  const [products, setProducts] = useState([{},{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(category);
        const result = await fetch(`/api/products/`);
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

export default ShopPage;