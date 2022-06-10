import { Button } from '@mui/material'
import { useState } from 'react';
import './ItemDetail.css'
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ItemCount from '../ItemListContainer/ItemCounter';
import { Link } from 'react-router-dom';



const ItemDetail = ({ data }) => {
    const [count, setCount] = useState(0)
    const [showButton, setShowButton] = useState(false);

    const addProductToCart = () => {
        console.log("Producto a agregar", data)
    }

    return (
        <>
            <div>
                <div className='product-container'>
                    <div className="product-imagen">
                        <img src={`/${data.imagen}`} alt="img" />
                    </div>
                    <div className="product-info">
                        <div className='detail-product-info__title'>
                            <h2>{data.titulo}</h2>
                        </div>
                        <p>${data.precio}</p>
                        <span className='span'>Envios Gratis  </span> <MotorcycleIcon />
                        <span className='span'>6 Cuotas sin interés de $ {data.precio / 6}</span>
                        <div>
                            {!showButton ?
                                <ItemCount
                                    setShowButton={setShowButton}
                                    count={count}
                                    setCount={setCount}
                                />
                                :
                                <Button
                                    variant="contained"
                                    color="primary">
                                    <Link to='/cart'>Terminar Compra</Link>
                                </Button>}
                        </div>
                        <Button onClick={() => addProductToCart({ data })}
                            variant={'contained'}
                            className="item-button-agregar">
                            Agregar al Carrito</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
