import React from "react";
function Header(props) {
  console.warn(props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://media.istockphoto.com/id/1201806395/vector/shopping-cart-line-icon-black-editable-stroke-trolley-basket-business-concept-shopping-cart.jpg?s=612x612&w=0&k=20&c=KmXx8oRPoNgNzwhxu3zCsacUF-HSVMtpvGEi3hBbe2w=" />
      </div>
    </div>
  );
}

export default Header;
