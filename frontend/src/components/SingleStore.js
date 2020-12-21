/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Categories from "../constants/Categories";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";
import getProductsByStore from "../services/getProductsByStore";
import getStoreById from "../services/getStoreById";
import Product from "./Product";

export default function SingleStore() {
  const storeLink = window.location.href;
  const pos = storeLink.lastIndexOf("/");
  const storeId = storeLink.substr(pos + 1);

  const [storeName, setStoreName] = useState([]);
  const [products, setProducts] = useState([]);
  const [meat, setMeat] = useState([]);
  const [milk, setMilk] = useState([]);
  const [cheese, setCheese] = useState([]);

  useEffect(() => {
    getStoreById(storeId)
      .then((data) => setStoreName(data))
      .catch((error) => console.error(error.message));
    getProductsByStore(storeId)
      .then((data) => setProducts(data))
      .catch((error) => console.error(error.message));
  }, []);

  useEffect(() => {
    setMilk(products.filter((el) => el.category === Categories.categoryMilk));
    setCheese(
      products.filter((el) => el.category === Categories.categoryCheese)
    );
    setMeat(products.filter((el) => el.category === Categories.categoryMeat));
  }, [products]);

  return (
    <Section>
      {storeName.map(({ id, name }) => (
        <h1 key={id}> {name}</h1>
      ))}

      <h2>Milk</h2>

      <ProductBox>
        {milk ? (
          milk.map(({ id, name, price, manufacturer }) => (
            <Product
              key={id}
              name={name}
              price={price}
              manufacturer={manufacturer}
            />
          ))
        ) : (
          <h2>No Milk</h2>
        )}
      </ProductBox>

      <h2>Cheese</h2>

      <ProductBox>
        {cheese.length > 0 ? (
          cheese.map(({ id, name, price, manufacturer }) => (
            <Product
              key={id}
              name={name}
              price={price}
              manufacturer={manufacturer}
            />
          ))
        ) : (
          <h2>No Cheese</h2>
        )}
      </ProductBox>

      <h2>Meat</h2>

      <ProductBox>
        {meat ? (
          meat.map(({ id, name, price, manufacturer }) => (
            <Product
              key={id}
              name={name}
              price={price}
              manufacturer={manufacturer}
            />
          ))
        ) : (
          <h2>No Meat</h2>
        )}
      </ProductBox>
    </Section>
  );
}

const Section = styled.section`
  color: ${Colors.headers};
  display: grid;
  gap: 2rem;
  margin-bottom: 3.75rem;
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: ${FontSizes.toolarge};
  }
`;

const ProductBox = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 10px;
`;
