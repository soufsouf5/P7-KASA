import { useParams } from "react-router-dom";
import products from "../Data/logements.json";

import Rating from "../components/Rating";
import Server from "../components/Server";
import Slider from "../components/Slider";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";
import PageNotFound from "../pages/PageNotFound";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  return (
    <>
      {!product?(
      <PageNotFound />
      ):(
        <div className="singleproduct">
      <Slider slides={product.pictures} />
      <div className="singleproduct__content">
        <div className="singleproduct__informations">
          <h1 className="singleproduct__title">{product.title}</h1>
          <p className="singleproduct__location">{product.location}</p>
          <div className="singleproduct__tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="singleproduct__rating-and-host">
          <Rating rating={product.rating} />
          <Server host={product.host} />
        </div>
      </div>
      <div className="singleproduct__dropdowns">
        <Collapse title="description" content={product.description} />
        <Collapse title="équipements" content={product.equipments} />
      </div>
      </div>
      )
      }
    </>
  );
};

export default SingleProduct;
