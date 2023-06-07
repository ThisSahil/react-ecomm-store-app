import React, { useState } from "react";

import "./OrderSummary.scss";
import { CartState } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const { products, setProducts } = CartState();

  const navigate = useNavigate();
  let price = 0;

  products.map((item) => {
    if (item.inCart) {
      price += item.cartQty * item.price;
    }
  });

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressForm, setAddressForm] = useState({
    name: "",
    address: "",
  });

  const tempaddresses = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main Street, City, Country",
    },
  ];

  const [addresses, setAddresses] = useState(tempaddresses);

  const handleAddressSelection = (address) => {
    setSelectedAddress(address);
  };

  const handleFormChange = (e) => {
    setAddressForm({
      ...addressForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddAddress = (e) => {
    e.preventDefault();

    const newAddress = {
      id: addresses.length + 1,
      name: addressForm.name,
      address: addressForm.address,
    };

    addresses.push(newAddress);

    setAddressForm({
      name: "",
      address: "",
    });
  };

  const handlePlaceOrderClick = () => {
    if (price != 0) {
      navigate("/greetings");
    }
  };

  return (
    <div className="order-summary-page">
      <h2>Order Summary</h2>
      <div className="order-summary">
        <div className="order-details">
          <h3>Order Details</h3>
          <div className="order-details-table">
            <div className="table-header">
              <div className="product-name">Product Name</div>
              <div className="product-quantity">Quantity</div>
              <div className="product-price">Price</div>
            </div>
            <div className="table-body">
              {products.map(
                (item) =>
                  item.inCart && (
                    <div className="table-row" key={item.id}>
                      <div className="product-name">{item.name}</div>
                      <div className="product-quantity">{item.cartQty}</div>
                      <div className="product-price">
                        ₹{item.price * item.cartQty}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="total">
            <span>Total:</span>
            <span style={{ marginLeft: "5px" }}>₹{price}</span>
          </div>
        </div>
        <div className="address-section">
          <h3>Choose Address</h3>
          <div className="address-list">
            {addresses.map((address) => (
              <div
                key={address.id}
                className={`address-item ${
                  selectedAddress && selectedAddress.id === address.id
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleAddressSelection(address)}
              >
                <span className="name">{address.name},</span>
                <span className="address">{address.address}</span>
              </div>
            ))}
          </div>
          <div className="add-address-form">
            <h3>Add New Address</h3>
            <form onSubmit={handleAddAddress}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={addressForm.name}
                  onChange={handleFormChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={addressForm.address}
                  onChange={handleFormChange}
                />
              </div>
              <button class="add-address-button" type="submit">
                <span class="add-address-button-icon">+</span> Add Address
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="place-order">
        <button onClick={handlePlaceOrderClick} disabled={!selectedAddress}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
