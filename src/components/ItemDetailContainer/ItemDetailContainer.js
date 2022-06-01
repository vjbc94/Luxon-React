import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { producto } from "../../utils/mock"


const ItemDetailContainer = () => {
    const [product, setProducts] = useState({})

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(producto)
            }, 2000)
        })
    }

    useEffect(() => {
        getItem()
            .then((res) => {
                console.log("Respuesta getItem: ", res)
                setProducts(res)
            })
    }, [])


    return (
        <>
            <div>
                DETALLE DEL PRODUCTO
            </div>
            <ItemDetail data={product}
            />
        </>

    )
}

export default ItemDetailContainer