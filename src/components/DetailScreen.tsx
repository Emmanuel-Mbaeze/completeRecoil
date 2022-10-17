import React, { useEffect } from "react";
import styled from "styled-components";
import { detail } from "./Global";
import { useRecoilValue, useRecoilState } from "recoil";
import axios from "axios";
import { iDATA } from "./interface";
import { useParams } from "react-router-dom";

const DetailScreen: React.FC = () => {
  const [data, setData] = useRecoilState(detail);
  const viewData = useRecoilValue(detail);
  const { id } = useParams();

  const viewState = async () => {
    const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const newData = data.data as iDATA;
    setData(newData);
  };

  console.log(viewData);
  useEffect(() => {
    viewState();
  }, []);
  return (
    <div>
      <Container>
        <Wrapper>
          <Card>
            <Image src={viewData.image} />
            <Detail>
              <Title>{viewData.title}</Title>
              <Cost>₦{viewData.price}</Cost>
              <br />
              <br />
              <Button>Add to Cart</Button>
            </Detail>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default DetailScreen;

const Button = styled.div`
  color: white;
  font-weight: 300;
  font-size: 15px;
  transition: all 350ms;
  text-transform: capitalize;
  background: red;
  padding: 10px 20px;
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
  width: 250px;
  height: 430px;
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
`;
