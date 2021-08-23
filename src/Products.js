import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className='productsRow'  >
      <section className="images">
        <div >
        <div className='photo' >
          <a href="https://ritual.com/shop-multivitamins">
            <img src="Multivitamin.jpg" alt="photo" />
            <p className="productsText" >Shop Multivitamin</p>
          </a>
        </div>
        </div>

       <div  >
       <div className='photo' >
          <a href="https://ritual.com/shop-protein">
            <img src="Protein.jpg" alt="photo" />
            <p className="productsText">Shop Protein</p>
          </a>
        </div>
       </div>
        
        <div >
        <div className='photo' >
          <a href="https://ritual.com/shop-pregnancy">
            <img src="Pregnancy.jpg" alt="photo" />
            <p className="productsText">Shop Pregnancy</p>
          </a>
        </div>
        </div>
        
        <div>
        <div className='photo'  >
          <a href="https://ritual.com/shop-bundles">
            <img src="Bundles.jpg " />
            <p className="productsText" >Shop Bundles</p>
          </a>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
