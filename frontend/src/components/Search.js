import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Colors from "../constants/Colors";
import FontSizes from "../constants/FontSizes";
import getCategories from "../services/getCategories";
import getProductsByCategory from "../services/getProductsByCategory";
import CategoryButton from "./CategoryButton";
import ProductWithStore from "./ProductWithStore";

export default function Search() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error(error.message));
  }, []);

  function handleCategory(categoryId) {
    getProductsByCategory(categoryId)
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }

  return (
    <SearchPage>
      <Section>
        {categories ? (
          categories.map(({ id, name }) => (
            <CategoryButton key={id} id={id} onClick={handleCategory}>
              {name}
            </CategoryButton>
          ))
        ) : (
          <h3>No Internet</h3>
        )}
      </Section>

      <Section>
        {products ? (
          products.map(
            ({ id, manufacturer, name, price, store, postalCode, street }) => (
              <ProductWithStore
                key={id}
                name={name}
                price={price}
                manufacturer={manufacturer}
                store={store}
                postalCode={postalCode}
                street={street}
              />
            )
          )
        ) : (
          <h3>No Products</h3>
        )}
      </Section>
    </SearchPage>
  );
}

const SearchPage = styled.div`
  color: ${Colors.headers};
  text-align: center;
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-evenly;
  margin-bottom: 3.75rem;
  padding: 2rem;

  h1 {
    font-size: ${FontSizes.toolarge};
  }
`;
