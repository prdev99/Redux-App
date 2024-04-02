const Home = () => {
  return (
    <>
      <div className="add-to-cart">
        <img src="https://media.istockphoto.com/id/1201806395/vector/shopping-cart-line-icon-black-editable-stroke-trolley-basket-business-concept-shopping-cart.jpg?s=612x612&w=0&k=20&c=KmXx8oRPoNgNzwhxu3zCsacUF-HSVMtpvGEi3hBbe2w="></img>
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://cdn.jsdelivr.net/gh/react-native-community/datetimepicker/docs/images/ios_time.png"></img>
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $6000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To cart</button>
        </div>
      </div>
    </>
  );
};
export default Home;
