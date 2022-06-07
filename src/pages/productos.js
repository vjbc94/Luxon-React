import { useEffect, useState } from "react"
import CardList from "../components/Item/ItemList"
import productos from "../utils/mock"
import { useParams } from 'react-router-dom'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        setProducts([])
        console.log("categoria: ", categoria)
        getProducts()
            .then((response) => {
                filtroCategoria(response)
            })
    }, [categoria])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            resolve(productos)
        })
    }

    const filtroCategoria = (array) => {
        return array.map((item) => {
            if (item.categoria === categoria) {
                return setProducts([item])
            }
        })
    }

    return (
        <div className='general-container'>
            <CardList title={'LISTADO DE PRODUCTOS'} products={products} />
        </div>
    )
}

export default ProductList