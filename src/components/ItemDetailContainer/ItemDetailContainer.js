import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import  productos  from "../../utils/mock"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProducts] = useState({})

   /*  const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    } */

    useEffect(() => {
            const productFilter = productos.find((product) => {
                return product.id === parseInt(id);
            })
            setProducts(productFilter)
    }, [id])


    return (
        <>
            <div>
                DETALLE DEL PRODUCTO
            </div>
            {<ItemDetail data={product}/>}
            
        </>

    )
}

export default ItemDetailContainer