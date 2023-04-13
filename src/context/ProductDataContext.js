import { useEffect, useState, createContext } from "react";
import { fakeFetch } from "../Pages/DataBase";

export const ProductDataContext = createContext(null)


export const ProdctDataProvider = ({children}) =>{

    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    // for cart:
    const [cartItem, setCartItem] = useState([])
    const [cartItemCount, setCartItemCount] = useState(0)
    // 
    // wishlist
    const [wishlistItem, setWishlistItem] = useState([])
    const [wishlistItemCount, setWishlistItemCount] = useState(null)
    // 

    const dataFromServer = async () =>{
        setIsLoading(true)
        try{
            const dataResponse = await fakeFetch('https://example.com/api/products');
            if(dataResponse.status === 200){
                setIsLoading(false)
                setProductData(dataResponse.data.products)
            }
        }
        catch(error){
            if(error.status === 404){
               
            }
        }
    }
    useEffect(()=>{
        dataFromServer();
    }, [])


    // for Cart :
    const addItemToCart = (selectedProductData) =>{
        setCartItem((cartItem) => [...cartItem, selectedProductData])
        setCartItemCount(cartItemCount+1)
    }
    const removeItemFromCart = (removedItem) =>{
        // const filteredItems = 
        setCartItem(cartItem.filter(({id}) => id !== removedItem.id))
        setCartItemCount(cartItemCount-1)
    }
    // 
    // Wishlist
    const addItemToWishlist = (selectedItem) =>{
        setWishlistItem((wishlistItem) => [...wishlistItem, selectedItem])
        setWishlistItemCount(wishlistItemCount+1)
    } 
    const removeItemFromWishlist =(removedItem) =>{
        setWishlistItem(wishlistItem.filter(({id}) => id !== removedItem.id))
    }

    return(
        <ProductDataContext.Provider value={{productData, isLoading , addItemToCart, cartItem, cartItemCount,   removeItemFromCart, addItemToWishlist , wishlistItem , wishlistItemCount , removeItemFromWishlist }}>
            {children}
        </ProductDataContext.Provider>
    )
}