import { Button } from '@mui/material'
import { useState } from 'react';
import './ItemDetail.css'
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ItemCount from '../ItemListContainer/ItemCounter';
import { Link } from 'react-router-dom';



const ItemDetail = ({ data }) => {
const [showButton, setShowButton] = useState(false)    
    return (
        <>
        <div>
            <div className='product-container'>
                <div className="product-imagen">
                    <img src={`/${data.imagen}`} alt="imgProduct" />
                </div>
                <div className="product-info">
                    <div className='detail-product-info__title'>
                        <h2>{data.titulo}</h2>
                    </div>
                    <p>${data.precio}</p>
                    <span className='span'>Envios Gratis  </span> <MotorcycleIcon/>
                    <span className='span'>6 Cuotas sin interés de $ {data.precio / 6}</span>
                    {!showButton ?
                    <ItemCount
                    stock={data.stock}
                    setShowButton={setShowButton}
                    />
                    :
                    <Button variant="contained" color="primary"> <Link to='/cart'>Comprar</Link> </Button> }
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetail
