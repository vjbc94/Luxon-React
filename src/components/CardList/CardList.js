import CardItem from '../Card/Card'
import { Grid } from '@mui/material';

const CardList = ({ titulo }) => {
    const productos = [
        {
            titulo: 'Ryzen 5',
            precio: 36000,
            imagen: 'raizen.png'
        },
        {
            titulo: 'Grafica Geforce',
            precio: 95000,
            imagen: 'gforce.jpg'
        },
        {
            titulo: 'Disco SSD',
            precio: 7500,
            imagen: 'ssd.jpg'
        },
        {
            titulo: 'Motherboard',
            precio: 15000,
            imagen: 'asus-600.png'
        },
        {
            titulo: 'Gabinete',
            precio: 8000,
            imagen: 'gabinete.jpg'
        },
        {
            titulo: 'Fuente de Alimentacion',
            precio: 12000,
            imagen: 'redragon.jpg'
        },
    ]
    return (
        <>
            <h2>{titulo}</h2>
            <Grid container spacing={4} >
                <Grid item md={4} >
                    <CardItem titulo={"Ryzen"} precio={36000} imagen={"raizen.png"} />
                </Grid>
                <Grid item md={4}>
                    <CardItem titulo={"Grafica Geforce"} precio={95000} imagen={"gforce.jpg"} />
                </Grid>
                <Grid item md={4}>
                    <CardItem titulo={"Disco Kingston"} precio={7500} imagen={"ssd.jpg"} />
                </Grid>
                <Grid item md={4}>
                    <CardItem titulo={"Motherboard Asus 600"} precio={15000} imagen={"asus-600.png"} />
                </Grid>
                <Grid item md={4}>
                    <CardItem titulo={"Gabinete Level-Up"} precio={8000} imagen={"gabinete.jpg"} />
                </Grid>
                <Grid item md={4}>
                    <CardItem titulo={"Fuente Alimentacion Redragon"} precio={12000} imagen={"redragon.jpg"} />
                </Grid>
            </Grid>
        </>
    )
}

export default CardList