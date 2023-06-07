import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { CartState } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import EmptyCartPage from "./EmptyCartPage";
import { AuthContext } from "../Authentication/Authmain";
import LoginFirst from "./LoginFirst";

const Container = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 8px;
`;

const RemoveButton = styled.button`
  background-color: #a1a1aa;
  color: white;
  border: 2px solid #a1a1aa;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
`;

const WishlistButton = styled.button`
  background-color: white;
  color: #6b7280;
  border: 2px solid #e9ecef;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  background-color: #0284c7;
  color: #fff;
  border: none;
  border-radius: 5px;

  &:hover {
    opacity: 0.9;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;

const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  border: 2px solid #94a3b8;
  border-radius: 5px;
  padding: 2px 12px;
  font-size: 24px;
  margin: 2rem;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ccc;
  /* color: #fff; */
  border: none;
  margin: 0 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background-color: #aaa;
  }
`;

const QuantityInput = styled.input`
  width: 50px;
  margin: 0 10px;
  padding: 5px;
  border: none;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

const ProductPrice = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 25px;
  font-weight: 150;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
  flex: 1;
  margin-right: 10px;
`;

const SummaryItemPrice = styled.span`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  flex: 1;
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`;

// Styled component for the Checkout button

const CheckoutButton = styled.button`
  background-color: #8e2de2;
  width: 100%;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f5f9;
    color: #8e2de2;
    animation: ${pulseAnimation} 0.5s forwards;
    border: 2px solid #8e2de2;
  }
`;

const Cart = () => {
  const navigate = useNavigate();

  // let storedFlag;
  // useEffect(() => {

  // }, []);

  let storedFlag = localStorage.getItem("flag");

  if (storedFlag !== null) {
    storedFlag = JSON.parse(storedFlag);
    console.log(storedFlag);
  }

  const { products, setProducts, cartCount, setCartCount } = CartState();

  let temp = 0;

  products.map((prod) => {
    if (prod.inCart) {
      temp += Number(prod.price) * Number(prod.cartQty);
    }
  });

  let [price, setPrice] = useState(temp);

  const handleRemoveBtnClick = (id) => {
    let qty = 0;
    let prodPrice = 0;

    const updatedProducts = products.map((prod) => {
      if (prod._id === id) {
        prod.inCart = false;
        qty = prod.cartQty;
        prodPrice = prod.price;

        prod.cartQty = 1;
      }

      return { ...prod };
    });
    const tobeMinus = qty * prodPrice;
    price -= tobeMinus;

    setPrice(price);

    setCartCount(cartCount - 1);
    setProducts(updatedProducts);
  };

  const handleWishlistBtnClick = (id) => {
    const updatedProducts = products.map((prod) => {
      if (prod._id === id) {
        prod.inWishList = true;
      }

      return { ...prod };
    });

    handleRemoveBtnClick(id);
  };

  const increaseQty = (id) => {
    const updatedProducts = products.map((prod) => {
      if (prod._id === id) {
        if (prod.cartQty < 4) {
          prod.cartQty = prod.cartQty + 1;

          price += Number(prod.price);
          setPrice(price);
        }
      }

      return { ...prod };
    });

    setProducts(updatedProducts);
  };

  const decreaseQty = (id) => {
    const updatedProducts = products.map((prod) => {
      if (prod._id === id) {
        if (prod.cartQty > 1) {
          prod.cartQty = prod.cartQty - 1;

          price -= Number(prod.price);
          setPrice(price);
        }
      }

      return { ...prod };
    });

    setProducts(updatedProducts);
  };

  const handleCheckOutBtn = () => {
    if (price != 0) {
      navigate("/ordersummary");
    }
  };

  if (storedFlag === false) {
    return <LoginFirst />;
  }

  if (price === 0) {
    return <EmptyCartPage />;
  }

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <p
          style={{
            marginTop: "5px",
            borderRadius: "6px",
            textAlign: "center",
            padding: "3px 6px",
            border: "2px solid #8e2de2",
            // width: "50%",
          }}
        >
          The maximum order quantity for each product is limited to 4 units per
          customer
        </p>
        <Top>
          <TopButton onClick={() => navigate("/products")}>
            CONTINUE SHOPPING
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {products.map(
              (prod) =>
                prod.inCart && (
                  <>
                    <Product>
                      <ProductDetail>
                        <Image src={prod.img} alt="" />
                        <Details>
                          <ProductName>
                            <b>{prod.name}</b>
                          </ProductName>
                          <ButtonContainer>
                            <RemoveButton
                              onClick={() => handleRemoveBtnClick(prod._id)}
                            >
                              Remove from Cart
                            </RemoveButton>
                            <WishlistButton
                              onClick={() => handleWishlistBtnClick(prod._id)}
                            >
                              Move to Wishlist
                            </WishlistButton>
                          </ButtonContainer>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <QuantityContainer>
                          <QuantityButton onClick={() => decreaseQty(prod._id)}>
                            -
                          </QuantityButton>
                          <QuantityInput
                            type="number"
                            value={prod.cartQty}
                            readOnly
                          />

                          <QuantityButton onClick={() => increaseQty(prod._id)}>
                            +
                          </QuantityButton>
                        </QuantityContainer>
                        <ProductPrice>₹{prod.price}</ProductPrice>
                      </PriceDetail>
                    </Product>
                    <Hr />
                  </>
                )
            )}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹{price}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Cost</SummaryItemText>
              <SummaryItemPrice>₹45</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-₹45</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹{price}</SummaryItemPrice>
            </SummaryItem>
            <CheckoutButton onClick={handleCheckOutBtn}>
              CHECKOUT NOW
            </CheckoutButton>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
