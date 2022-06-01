import './Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ItemCount from '../ItemListContainer/ItemCounter';

const CardItem = ( {imagen, titulo, precio,stock}) => {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className='card-item'>
                    <div>
                        <img src={`./${imagen}`} />
                    </div>
                    <p>{titulo}</p>
                    <span>$ {precio}</span>
                    <ItemCount stock={stock}/>
                    <Button variant="outlined"> Comprar </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default CardItem