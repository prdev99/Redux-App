import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart } from "../services/actions/Action";
import { removeToCart } from "../services/actions/Action";

const mapStateToProps = (state) => ({
  // data:state.cardItems
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
