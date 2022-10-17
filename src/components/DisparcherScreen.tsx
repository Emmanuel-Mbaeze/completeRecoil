import React from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { cart, dispatch, products } from "./Global";
import { iDATA } from "./interface";

const DisparcherScreen = () => {
  const holderData = useRecoilValue(dispatch);
  const [myCart, setMyCart] = useRecoilState(dispatch);

  const changeStatus = (product: iDATA) => {
    setMyCart((el) => {
      const check = el.find((props) => props.id === product.id);

      if (check) {
        return el.map((item) =>
          item.id === product.id ? { ...product, delivered: true } : item
        );
      } else {
        return [...el, { ...product, QTY: 1 }];
      }
    });
  };

  return (
    <Container>
      <br />

      <CardHolder>
        <Div>Dispatcher's View</Div>
      </CardHolder>

      <Wrap>
        <View>
          {holderData?.map((props) => (
            <Card key={props.id}>
              <Top>
                <Icon />
                <Line />
              </Top>
              <Out>
                <Day>
                  {/* {props.date} {props.month} {props.year} - {props.time} */}
                </Day>
                <Hold>
                  <NewLine />
                  <Title>{props.title}</Title>
                </Hold>
                <Desc>{props.description}</Desc>

                {props.delivered ? (
                  <Button1>Delivered</Button1>
                ) : (
                  <Button
                    onClick={() => {
                      changeStatus(props);
                    }}
                  >
                    No yet Delivered
                  </Button>
                )}
              </Out>
            </Card>
          ))}
        </View>
      </Wrap>
    </Container>
  );
};

export default DisparcherScreen;
const Button1 = styled.div`
  color: white;
  font-weight: 300;
  font-size: 15px;
  transition: all 350ms;
  text-transform: capitalize;
  background: green;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;

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

const View = styled.div`
  /* background: yellow; */
  overflow-x: scroll;
  display: flex;
  scroll-behavior: smooth;
  flex-wrap: nowrap;
`;
const Wrap = styled.div`
  width: 90%;
  justify-content: center;
  display: flex;
  border-radius: 5px;
  border: 1px solid silver;
`;

const Desc = styled.div`
  font-weight: 500;
  line-height: 1.5;
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 60px;
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  line-height: 1;

  @media screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 1;
  }
`;

const NewLine = styled.div`
  width: 30px;
  height: 7px;
  background: darkorange;
  margin-right: 10px;
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Out = styled.div`
  margin-left: 30px;
`;

const Day = styled.div`
  font-size: 12px;
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

const DateCall = styled.div``;

const Line = styled.div`
  width: 170px;
  height: 7px;
  background: darkorange;
  position: absolute;
  bottom: 0;
`;

const Icon = styled.div`
  font-size: 50px;
  margin-left: 30px;
  margin-top: 30px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;
`;

const Div = styled.div`
  margin-bottom: 30px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 40px;
  color: white;
  background: darkorange;
  border-radius: 20px;
  text-align: center;
  line-height: 1.2;
`;

const Card = styled.div`
  margin: 10px;
  min-width: 300px;
  min-height: 300px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  transition: all 350ms;
  :hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 600px) {
    min-width: 260px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CardHolder = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Date = styled.div`
  padding: 7px 30px;
  border-radius: 20px;
  background: darkorange;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 20px 10px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.02);
    background: rgba(255, 140, 0, 0.2);
  }
`;

const DateHolder = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  overscroll-behavior-inline: contain;
`;

const Dater = styled.div`
  width: 90%;
  min-height: 150px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  padding-top: 150px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
