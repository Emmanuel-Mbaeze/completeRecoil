import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { cart, dispatch, products } from "./Global";
import { iDATA } from "./interface";
import { usePaystackPayment } from "react-paystack";

const CartScreen: React.FC = () => {
  const [myCart, setMyCart] = useRecoilState(cart);
  const [dispatcher, setDispatcher] = useRecoilState(dispatch);
  const viewCart = useRecoilValue(cart);

  const removeOne = (product: iDATA) => {
    setMyCart((el) => {
      const check = el.find((props) => props.id === product.id);

      if (check) {
        return el.map((item) =>
          item.id === product.id ? { ...product, QTY: item.QTY! - 1 } : item
        );
      } else {
        return [...el, { ...product, QTY: 1 }];
      }
    });
  };

  const addOne = (product: iDATA) => {
    setMyCart((el) => {
      const check = el.find((props) => props.id === product.id);

      if (check) {
        return el.map((item) =>
          item.id === product.id ? { ...product, QTY: item.QTY! + 1 } : item
        );
      } else {
        return [...el, { ...product, QTY: 1 }];
      }
    });
  };

  const remove = (product: iDATA) => {
    setMyCart((el) => {
      return el.filter((props) => props.id !== product.id);
    });
  };

  const getTotal = (product: iDATA[]) =>
    product.reduce((a: number, b) => a + b.QTY! * b.price, 0);

  const getQTY = (product: iDATA[]) =>
    product.reduce((a: number, b) => a + b.QTY!, 0);

  const [cost, setCost] = useState(getTotal(viewCart));

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: Math.ceil(getTotal(viewCart)),
    publicKey: "pk_test_d632bf4b9aa1e74745eb158cec8034961dc13b18",
  };

  const onSuccess = () => {
    const reference = new Date().getTime().toString();
    setDispatcher(viewCart);
    setMyCart([]);
    console.log("Success", reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);
  console.log(cost);
  console.log(Math.ceil(getTotal(viewCart)));
  return (
    <div>
      <Container>
        <Holder>
          <Hold>
            <Cost>Total Price: ₦{Math.ceil(getTotal(viewCart))}</Cost>
            <Cost>Total QTY: {getQTY(viewCart)}</Cost>
          </Hold>
          <Button
            onClick={() => {
              initializePayment(onSuccess, onClose);
              console.log("Pay...");
            }}
          >
            Pay With Paystack
          </Button>
        </Holder>
        <Wrapper>
          {viewCart.map((props) => (
            <Card key={props.id}>
              <Image src={props.image} />
              <Detail>
                <Title>{props.title}</Title>
                <Cost>₦{props.price}</Cost>
                <Cost>{props.QTY}</Cost>
                <br />

                <Div>
                  <Button1
                    onClick={() => {
                      removeOne(props);
                    }}
                  >
                    Remove
                  </Button1>
                  <Cost>0</Cost>
                  <Button1 onClick={() => addOne(props)}>Add</Button1>
                </Div>
                <Button
                  onClick={() => {
                    remove(props);
                  }}
                >
                  Remove from Cart
                </Button>
              </Detail>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

export default CartScreen;

const Hold = styled.div`
  display: flex;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

const Holder = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  padding: 30px;
  border: 1px solid gray;
  /* margin-top: 50px; */
  border-radius: 10px;
`;

const Div = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Button1 = styled.div`
  color: white;
  font-weight: 500;
  font-size: 15px;
  transition: all 350ms;
  text-transform: capitalize;
  background: gray;
  padding: 10px 20px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`;
const Button = styled.div`
  color: white;
  font-weight: 300;
  font-size: 15px;
  transition: all 350ms;
  text-transform: capitalize;
  background: red;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  :hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`;

const Cost = styled.div`
  font-weight: 900;
  font-size: 700;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
`;

const Title = styled.div`
  width: 90%;
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
  margin: 10px;
  overflow: hidden;
  width: 250px;
  height: 530px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 10px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
