import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cart, products } from "./Global";
import { useRecoilValue, useRecoilState } from "recoil";
import { iDATA } from "./interface";

const Product: React.FC = () => {
  const data = useRecoilValue(products);

  // setCount(count + 1)  setCount(el => el + 1)

  const [myCart, setMyCart] = useRecoilState(cart);
  const viewCart = useRecoilValue(cart);

  const addToCart = (product: iDATA) => {
    setMyCart((el) => {
      const check = el.find((props) => props.id === product.id);

      if (check) {
        return el.map((item) =>
          item.id === product.id ? { ...product, QTY: item.QTY! + 1 } : item
        );
      } else {
        return [...el, { ...product, QTY: 1, delivered: false }];
      }
    });
  };

  return (
    <div>
      <Container>
        <Wrapper>
          {data.map((props) => (
            <Card key={props.id}>
              <Image src={props.image} />
              <Detail>
                <Title>{props.title}</Title>
                <Cost>₦{props.price}</Cost>
                <br />
                <br />
                <Space />
                <Div>
                  <Button to={`/detail/${props.id}`}>detail</Button>
                  <Button1
                    onClick={() => {
                      addToCart(props);
                    }}
                  >
                    Add to Cart
                  </Button1>
                </Div>
              </Detail>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Product;

const Space = styled.div`
  flex: 1;
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  width: 90%;
`;

const Button = styled(Link)`
  text-decoration: none;

  color: white;
  font-weight: 500;
  font-size: 15px;
  transition: all 350ms;
  text-transform: capitalize;
  background-color: #004080;
  padding: 10px 25px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`;
const Button1 = styled.div`
  color: white;
  font-weight: 500;
  font-size: 15px;
  transition: all 350ms;
  text-transform: capitalize;
  background: red;
  padding: 10px 15px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`;

const Cost = styled.div`
  font-weight: 900;
  font-size: 700;
`;

const Title = styled.div`
  width: 90%;
  margin-bottom: 10px;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  background: #004080;
`;

const Card = styled.div`
  overflow: hidden;
  margin: 10px;
  width: 250px;
  height: 450px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
`;

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  min-height: calc(100vh - 80px);
  height: 100%;
  background-color: aliceblue;
`;
