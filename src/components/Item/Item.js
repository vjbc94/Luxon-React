import './Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';


const CardItem = ({ imagen, titulo, precio, id }) => {
    const { addProductToCart } = useContext(CartContext)
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className='card-item'>
                    <div className='img-btn'>
                        <img src={`/${imagen}`} />
                    </div>
                    <p>{titulo}</p>
                    <span>$ {precio}</span>
                    <span>$ {precio}</span>
                    <Button variant={'outlined'} >
                        <Link to={`/product/${id}`}> Ver Detalle </Link> </Button>
                    <Button  onClick={() => addProductToCart({ imagen, titulo, precio, id})}> Agregar Al Carrito</Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default CardItem