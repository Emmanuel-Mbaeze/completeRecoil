import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cart } from "./Global";
import { useRecoilValue, useRecoilState } from "recoil";

const Header: React.FC = () => {
  const viewCart = useRecoilValue(cart);
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>Test Build</Logo>
          <Navigation>
            <Nav to="/">Product</Nav>
            <Nav to="/cart">Cart: {viewCart.length}</Nav>
            <Nav to="/dispatch">Dispatcher</Nav>
          </Navigation>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Nav = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 20px;
  transition: all 350ms;
  margin-right: 20px;
  text-transform: uppercase;
  :hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`;

const Navigation = styled.div`
  display: flex;
  margin-left: 30px;
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 35px;
  transition: all 350ms;
  margin-right: 20px;

  :hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`;

const Wrapper = styled.div`
  width: 90%;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #004080;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;
