import './Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ItemCount from '../ItemListContainer/ItemCounter';
import { Link } from 'react-router-dom';

const CardItem = ( {imagen, titulo, precio,stock, id}) => {
console.log ("Respuesta : ", id)
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className='card-item'>
                    <div className='img-btn'>
                        <img src={`./${imagen}`} />
                        <Button variant={'outlined'} >
                            <Link to={`/product/${id}`}> Ver Detalle </Link> </Button>
                    </div>
                    <p>{titulo}</p>
                    <span>$ {precio}</span>
                    <ItemCount stock={stock}/>
                    <Button variant="contained" className='btn-comprar'> Comprar </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default CardItem