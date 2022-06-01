import { useEffect, useState } from "react"
import productos from "../../utils/mock"


const ItemListContainer = ()  => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then((response) => {
                console.log("Listado: ", response)
                setProducts(response)
            })
            .catch((err) => {
                console.log("Sistema: Incovenientes en productos", err)
            })
            .finally(() => {
            })
    }, [])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }

}

export default ItemListContainer