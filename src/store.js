import {combineReducers,applyMiddleware,compose} from "redux";
import { legacy_createStore as createStore} from 'redux';
import thunk from "redux-thunk";
//import {composeWithDevTools} from "redux-devtools-extension";

import {  allUsersReducer,  userDetailsReducer,forgotPasswordReducer,profileReducer,userReducer } from "./reducers/userReducer";
import {newProductReducer, productReducer,    newReviewReducer,productDetailsReducer,productsReducer,productReviewsReducer, reviewReducer} from "./reducers/productReducer";

import { cartReducer } from "./reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";



const reducer = combineReducers({
    products:productsReducer,
    productDetails:productDetailsReducer,
    user:userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    product:productsReducer,
    
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    newReview: newReviewReducer,
    newProduct: newProductReducer,
    
    allOrders: allOrdersReducer,
    order: orderReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};


const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))

)
console.log("store is created 3")



export default store ;