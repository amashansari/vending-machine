import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { insertedAmount, selectedPro } from '../ReduxManager/action';

const VendingMachine = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const insertedMoney = useSelector((state) => state.insertedAmt);

  const products = [
    { id: 1, title: 'Lays Classic', price: 5 },
    { id: 2, title: 'Coca-Cola', price: 3 },
    { id: 3, title: 'Snickers', price: 6 },
    { id: 4, title: 'Oreo Cookies', price: 4 },
    { id: 5, title: 'Sprite', price: 3 },
    { id: 6, title: 'Doritos Nacho', price: 6 },
    { id: 7, title: 'KitKat', price: 5 },
    { id: 8, title: 'Pepsi', price: 3 },
    { id: 9, title: 'Twix', price: 5 },
    { id: 10, title: 'Red Bull', price: 7 },
    { id: 11, title: 'Mountain Dew', price: 4 },
    { id: 12, title: "Hershey's Bar", price: 5 },
    { id: 13, title: 'Cheetos', price: 4 },
    { id: 14, title: '7UP', price: 3 },
    { id: 15, title: "M&M's", price: 4 },
    { id: 16, title: 'Fanta Orange', price: 3 },
    { id: 17, title: "Reese's Peanut", price: 6 },
    { id: 18, title: 'Pringles', price: 5 },
    { id: 19, title: 'Lipton Ice Tea', price: 4 },
    { id: 20, title: 'Bounty Bar', price: 5 },
  ];

  const handleProductSelect = (product) => {
    dispatch(selectedPro(product));
  };

  const handleInsertMoney = (amount) => {
    dispatch(insertedAmount(insertedMoney + amount));
  };

  const handlePurchase = () => {
    if (!selectedProduct) {
      swal({ title: 'Please select a product!', icon: 'info' });
      return;
    }

    if (insertedMoney === 0) {
      swal({ title: 'Please insert some amount!', icon: 'info' });
      return;
    }

    if (insertedMoney < selectedProduct.price) {
      swal({
        title: 'Insufficient amount!',
        text: `Please insert $${selectedProduct.price - insertedMoney} more.`,
        icon: 'warning',
      });
      return;
    }

    swal({
      title: `Enjoy your ${selectedProduct.title}!`,
      text: `Change: $${insertedMoney - selectedProduct.price}`,
      icon: 'success',
    });

    dispatch(insertedAmount(0));
    dispatch(selectedPro(null));
  };

  const handleCancel = () => {
    if (insertedMoney === 0) {
      swal({ title: 'No money to refund!', icon: 'info' });
      return;
    }

    swal({
      title: 'Transaction Cancelled!',
      text: `Refunded Amount: $${insertedMoney}`,
      icon: 'success',
    });

    dispatch(insertedAmount(0));
    dispatch(selectedPro(null));
  };

  return (
    <div className="main-panel">
      <div className="machine-wrapper">
        {/* Header Info */}
        <div className="header-info">
          <div><strong>Inserted Money:</strong> ${insertedMoney}</div>
          <div><strong>Selected Item:</strong> {selectedProduct ? selectedProduct.title : 'None'}</div>
          <div><strong>Price:</strong> ${selectedProduct ? selectedProduct.price : 0}</div>
        </div>

        {/* Main Content */}
        <div className="content-row">
          <div className="vending-machine">
            {products.map((product) => (
              <div
                key={product.id}
                className={`machine-items ${selectedProduct?.id === product.id ? 'selected' : ''}`}
                onClick={() => handleProductSelect(product)}
              >
                <div className="machine-items-name">{product.title}</div>
                <div className="machine-items-price">${product.price}</div>
              </div>
            ))}
          </div>

          {/* Money + Actions */}
          <div className="side-selection">
            <h2>Insert Money</h2>
            <div className="money-buttons">
              {[1, 2, 5, 10].map((amount) => (
                <button key={amount} className="money-btn" onClick={() => handleInsertMoney(amount)}>
                  Insert ${amount}
                </button>
              ))}
            </div>

            <div className="action-buttons">
              <button className="buy-btn" onClick={handlePurchase}>Buy</button>
              <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendingMachine;
