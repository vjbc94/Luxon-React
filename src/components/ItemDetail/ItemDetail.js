import { Button } from '@mui/material'
import './ItemDetail.css'
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
const ItemDetail = ({ data }) => {
    console.log(data)
    return (

        <div>
            <div className='product-container'>
                <div className="product-imagen">
                    <img src={`/${data.imagen}`} alt="imgProduct" />
                </div>
                <div className="product-info">
                    <div className='detail-product-info__title'>
                        <h2>{data.titulo}</h2>
                    </div>
                    <p>{data.precio}</p>
                    <span className='span'>Envios Gratis  </span> <MotorcycleIcon/>
                    <span className='span'>6 Cuotas sin interés de $ {data.precio / 6}</span>
                    <Button variant="contained" color="primary"> Agregar Al Carrito </Button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
