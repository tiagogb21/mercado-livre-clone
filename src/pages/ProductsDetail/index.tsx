import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import FavoriteButton from '../../components/FavoriteButton';

interface IProductsDetail {
  id?: string;
  thumbnail?: string;
  title?: string;
  price?: string;
}

const ProductsDetail: React.FC = () => {
  const [item, setItem] = useState<IProductsDetail | undefined>(undefined);

  const location = useLocation();

  // const { setProducts } = useSelector((select) => select);

  useEffect(() => {
    const getIdFromPage = location.pathname.split("/")[2];

    // const getInfoItem = setProducts?.products.find(
    //   (item: IProductsDetail) => item.id === getIdFromPage
    // );

    // if (getInfoItem) {
    //   localStorage.setItem("product", JSON.stringify(getInfoItem));
    // }

    const localData = localStorage.getItem("product") || '';

    const infoItemFromLocal = JSON.parse(localData);

    // const t = getInfoItem || infoItemFromLocal;

    // setItem(t);
  }, []);
  return (
    <>
      <Header />
      {item && (
        <section className="product-detail__container">
          <img src={item.thumbnail} alt={item.id} />
          <article className="product-detail__box">
            <article className="box-title">
              <h2>{item.title}</h2>
              {/* <FavoriteButton id={item.id} /> */}
            </article>
            <p>
              {Number(item.price).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </article>
        </section>
      )}
    </>
  );
}

export default ProductsDetail;
