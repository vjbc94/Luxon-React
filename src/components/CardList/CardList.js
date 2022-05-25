import CardItem from '../Card/Card'
import { Grid } from '@mui/material';

const CardList = ({ titulo }) => {
    const productos = [
        {
            titulo: 'Ryzen 5',
            precio: 36000,
            imagen: 'raizen.png',
            stock: 7,
            id: 1
        },
        {
            titulo: 'Grafica Geforce',
            precio: 95000,
            imagen: 'gforce.jpg',
            stock: 7,
            id: 2
        },
        {
            titulo: 'Disco SSD',
            precio: 7500,
            imagen: 'ssd.jpg',
            stock: 7,
            id: 3
        },
        {
            titulo: 'Motherboard',
            precio: 15000,
            imagen: 'asus-600.png',
            stock: 7,
            id: 4
        },
        {
            titulo: 'Gabinete',
            precio: 8000,
            imagen: 'gabinete.jpg',
            stock: 7,
            id: 5
        },
        {
            titulo: 'Fuente de Alimentacion',
            precio: 12000,
            imagen: 'redragon.jpg',
            stock: 7,
            id: 6
        },
    ]
    return (
        <>
            <h2>{titulo}</h2>
            <Grid container spacing={4} >
                <Grid item md={4}>
                    <CardItem titulo={"Ryzen"} precio={36000} imagen={"raizen.png"} stock={7} id={1} />
                </Grid>
                <Grid item md={4}>
                    <CardItem titulo={"Grafica Geforce"} precio={95000} imagen={"gforce.jpg"} stock={7} id={2}/>
                </Grid>
                <Grid item md={4}>
                    <CardItem titulo={"Disco Kingston"} precio={7500} imagen={"ssd.jpg"} stock={7} id={3} />
                </Grid>
                <Grid item md={4}>
                    <CardItem titulo={"Motherboard Asus 600"} precio={15000} imagen={"asus-600.png"} stock={7} id={4} />
                </Grid>
                <Grid item md={4}>
                    <CardItem titulo={"Gabinete Level-Up"} precio={8000} imagen={"gabinete.jpg"} stock={7} id={5} />
                </Grid>
                <Grid item md={4}>
                    <CardItem titulo={"Fuente Alimentacion Redragon"} precio={12000} imagen={"redragon.jpg"} stock={7}  id={6} />
                </Grid>
            </Grid>
        </>
    )
}

export default CardList