import { useEffect, useState, createContext } from "react";
import { fakeFetch } from "../Pages/DataBase";

export const ProductDataContext = createContext(null)


export const ProdctDataProvider = ({children}) =>{

    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // for cart:
    const [cartItem, setCartItem] = useState([])
    const [cartItemCount, setCartItemCount] = useState(null)
    // 

    // wishlist
    const [wishlistItem, setWishlistItem] = useState([])
    const [wishlistItemCount, setWishlistItemCount] = useState(null)
    // 
    // Fetching Data from fakefetch
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


    // for Cart functions :
    const addItemToCart = (selectedProductData) =>{
        if(!cartItem.find(({id})=> id === selectedProductData.id)){
            setCartItem((cartItem) => [...cartItem, selectedProductData])
            setCartItemCount(cartItemCount+1)
        }
    }
    const removeItemFromCart = (removedItem) =>{
        setCartItem(cartItem.filter(({id}) => id !== removedItem.id))
        setCartItemCount(cartItemCount-1)
    }
    // 


    // Wishlist functions
    const addItemToWishlist = (selectedItem) =>{
        if(!wishlistItem.find(({id})=> id === selectedItem.id)){  
            setWishlistItem((wishlistItem) => [...wishlistItem, selectedItem])
            setWishlistItemCount(wishlistItemCount+1)
        }
    } 
    const removeItemFromWishlist =(removedItem) =>{
        setWishlistItem(wishlistItem.filter(({id}) => id !== removedItem.id))
        setWishlistItemCount(wishlistItemCount-1)
    }

    return(
        <ProductDataContext.Provider value={{productData, isLoading , addItemToCart, cartItem, cartItemCount,   removeItemFromCart, addItemToWishlist , wishlistItem , wishlistItemCount , removeItemFromWishlist }}>
            {children}
        </ProductDataContext.Provider>
    )
}