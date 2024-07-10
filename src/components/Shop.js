import React from 'react';
import './Shop.css';

const products = [
  { id: 1, category: 'Watches', name: 'FASTRACK 1', price: 1000, image: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf2a74101/images/Fastrack/Catalog/3287NL01_1.jpg?sw=360&sh=360' },
  { id: 2, category: 'Watches', name: 'FASTRACK 2', price: 1500, image: 'https://www.fastrack.in/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dwa120a1a9/images/login/autologin-banner-desktop-fastrack_500x500.jpg' },
  { id: 3, category: 'Watches', name: 'FASTRACK 3', price: 2645, image: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dweb091449/images/Fastrack/Catalog/3291SM02_1.jpg?sw=360&sh=360' },
  { id: 4, category: 'Watches', name: 'FASTRACK 4', price: 1145, image: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw97ddb6c3/images/Fastrack/Catalog/38105PP03_1.jpg?sw=360&sh=360' },
  { id: 5, category: 'Watches', name: 'FASTRACK 5', price: 2100, image: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw874b4911/images/Fastrack/Catalog/3295QM01_1.jpg?sw=360&sh=360' },
];

const Shop = ({ addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <div className="shop-container">
      <h1 className="shop-header">Shop</h1>
      <div className="shop-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}/-</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
