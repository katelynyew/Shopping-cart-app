import productReducer from "../features/ShopCart/productSlice";
import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "../features/ShopCart/cartSlice";
const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    }
})

export default store