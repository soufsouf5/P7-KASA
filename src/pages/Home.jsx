import React from "react";
import { Link } from "react-router-dom";
import image from "../design/banner.png";
import products from "../Data/logements.json";
import marketdata from "../Data/aboutData";
import Herobanner from "../components/Herobanner";
import Thumbnails from "../components/Thumbnails";

const slogan = marketdata.slogan;

const Products = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <Herobanner image={image} title={slogan} />
      </div>{" "}
      <section className="home__products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Thumbnails image={product.cover} title={product.title} />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Products;