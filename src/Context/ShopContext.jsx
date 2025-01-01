import { createContext, useState } from "react";
import all_product from "../Utils/all_product"
import new_collections from "../Utils/new_collections"

export const Shopcontext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length + 1; index++){
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const add = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }

    const remove = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCart = () => {
        let total = 0
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product) => product.id === Number(item))
                total += cartItems[item] * itemInfo.new_price
            }
        }
        return total
    }

    const totalcartItems = () => {
        let totalItem = 0
        for (const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue = {all_product, new_collections, cartItems, add, remove, getTotalCart, totalcartItems}

    return(
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopContextProvider;