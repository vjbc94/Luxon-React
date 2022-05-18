import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const CardItem = ( {imagen, titulo, precio }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className='card-item'>
                    <div>
                        <img src={`./${imagen}`} />
                    </div>
                    <p>{titulo}</p>
                    <span>$ {precio}</span>
                    <Button variant="outlined"> Comprar </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default CardItem