import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/ShopPage.module.css';

const CategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Results for {router.query.category}</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch('/api/products');
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { category: product.category },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`/api/products/${params.category}`);
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 120, // In seconds
  };
}

export default CategoryPage;