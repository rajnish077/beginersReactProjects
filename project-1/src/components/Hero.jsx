const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>
          YOUR FEET DESERVES THE BEST AND WE aRE HERE TO HELP YOU WITH OUR
          SHOES. YOUR FEET DESERVES THE BEST AND WE aRE HERE TO HELP YOU WITH
          YOUR SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available on</p>
          <div className="brand-icons">
            <img src="/public/images/flipkart.png" alt="flipkart" />
            <img src="/public/images/amazon.png" alt="amazone" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/public/images/hero-image.png" alt="Shoes" />
      </div>
    </main>
  );
};

export default Hero;
