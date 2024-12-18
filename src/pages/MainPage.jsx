import React from 'react';
import styles from '../styles/MainPage.module.css';

const MainPage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>ShopMate</div>
                <div className={styles.nav}>
                    <input className={styles.search} type="text" placeholder="Search Products..." />
                    <div className={styles.navLinks}>
                        <a href="/shop">Shop</a>
                        <a href="/cart">Cart</a>
                        <a href="/profile">Profile</a>
                    </div>
                </div>
            </header>

            <main className={styles.mainContent}>
                <h1 className={styles.title}>Welcome to ShopMate!</h1>
                <p className={styles.description}>Find the best deals on your favorite products.</p>

                <div className={styles.productList}>
                    {/* Example of a product listing */}
                    <div className={styles.productCard}>
                        <img className={styles.productImage} src="/assets/˚⭑· ͟͟͞͞➳ ᴬⁱ ᴬʳᵗ.jpg" alt="Product" />
                        <h2 className={styles.productName}>Product Name</h2>
                        <p className={styles.productPrice}>$49.99</p>
                        <button className={styles.addToCart}>Add to Cart</button>
                    </div>
                    <div className={styles.productCard}>
                        <img className={styles.productImage} src="/assets/ae56f920-7ea2-4551-8103-906872202b04.jfif" alt="Product" />
                        <h2 className={styles.productName}>Product Name</h2>
                        <p className={styles.productPrice}>$49.99</p>
                        <button className={styles.addToCart}>Add to Cart</button>
                    </div>
                    <div className={styles.productCard}>
                        <img className={styles.productImage} src="/assets/download.jfif" alt="Product" />
                        <h2 className={styles.productName}>Product Name</h2>
                        <p className={styles.productPrice}>$49.99</p>
                        <button className={styles.addToCart}>Add to Cart</button>
                    </div>
                    
                    {/* More products can be added similarly */}
                </div>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerLinks}>
                    <a href="/terms">Terms of Service</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/contact">Contact Us</a>
                </div>
                <p>© 2024 ShopMate</p>
            </footer>
        </div>
    );
};

export default MainPage;
