import { useEffect, useState } from "react"
import FavCartItem from "./FavCartItems"
import api from "../api"

const FavCartPage = () => {
    const fav_code = localStorage.getItem('fav_code')
    const [cartitems, setcartitems] = useState([])

    useEffect(() => {
        api.get(`get_cart?fav_code=${fav_code}`)
        .then(res => {
            console.log(res.data.items)
            setcartitems(res.data.items)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])

    
    if(cartitems.length < 1){
        return(<div className="alert alert-primary my-5 text-center" role="alert">
                 Your cart is empty!
                </div>)
    }

    function deletehome(id){
        api.delete(`delete/${id}`)
            .then(res => {
         setcartitems(predelete => predelete.filter(home => home.id !== id))
     
    })
        .catch(err => {
      console.log(err.message)
    })
 }

    
    return(
        <div className="container my-3 py-3 mt-25" style={{height: "80vh", overflow: "scroll"}}>
            <h5 className="bm-4 text-center mb-3">Favorite</h5>
            <div className="row">
                <div className="col-md-8">
                    {cartitems.map(item => <FavCartItem key={item.id} item = {item} onDelete ={deletehome} />)}

                </div>
            </div>

        </div>
    )
}

export default FavCartPage