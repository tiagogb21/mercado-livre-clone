import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Header from '../../components/Header';
import { actionCreators } from '../../redux';
import { getProductByName } from '../../services/api';

interface IProducts {
  id: string;
  price: number;
  title: string;
  thumbnail: string;
}

import './styles.css'

const Main: React.FC = () => {
  const [position, setPosition] = useState(0);
  const [products, setProduct] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { addProducts } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const getData = async () => {
      const getProductsData = await getProductByName("computador");
      setProduct(getProductsData.results);
      addProducts(getProductsData.results);
    };
    getData();
  }, []);

  const handleClickMin = () => {
    setPosition((prev: any) => (prev > 0 ? prev - 5 : prev));
  };

  const handleClickMax = () => {
    setPosition((prev: any) => (prev < 50 ? prev + 5 : prev));
  };

  const handleNavigate = (id: any) => {
    navigate(`/products-detail/${id}`);
  };

  return (
    <>
      <Header />
      <main>
        <h3 className="main-title">Baseada na sua última visita</h3>
        <section className="last-visit-products">
          {position > 0 && (
            <button
              className="btn left-arrow"
              type="button"
              onClick={handleClickMin}
            >
              <AiOutlineArrowLeft />
            </button>
          )}
          {products &&
            products
              .slice(position, position + 5)
              .map((item: IProducts) => (
                <article
                  onClick={() => handleNavigate(item.id)}
                  key={item.id}
                  id={item.id}
                  className="box-product"
                >
                  <img src={item.thumbnail} alt={item.title} />
                  <h2 className="box-product__price">
                    {
                      item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })
                    }
                  </h2>
                  <p className="p-frete">Frete grátis</p>
                  <p className="box-product__title">{item.title}</p>
                </article>
              ))}
          {position < products.length - 5 && (
            <button
              className="btn right-arrow"
              type="button"
              onClick={handleClickMax}
            >
              <AiOutlineArrowRight />
            </button>
          )}
        </section>
      </main>
    </>
  );
}

export default Main;
