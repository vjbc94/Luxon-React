import { useEffect, useState } from "react"
import productos from "../../utils/mock"
import CardList from "../Item/ItemList"


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

    return(
        <div className='Card-pantalla'>
            <CardList titulo={'PRODUCTOS'} products={productos} />
        </div>
    )

}

export default ItemListContainer