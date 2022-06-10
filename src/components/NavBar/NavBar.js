import './NavBar.css'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Button } from '@mui/material'
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/material';
import {MenuItem} from '@mui/material';
import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    const menuCat = ["procesador", "graficos", "discos", "tarjetas", "accesorios", "energia"]

    return (
        <>
            <AppBar position="static" color="inherit" className='header-principal'>
                <Toolbar>
                    <div className='container-logo'>
                        <Link to="/">    <img src="./luxoon.png" alt='foto' /> </Link>
                    </div>
                    <ul className='navbar'>
                        <li className='li-inicio'>
                            <Button color="inherit"> <Link to="/">INICIO </Link>
                            </Button>
                        </li>
                        <li className='li-inicio'>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            disableRipple
                            style={{ backgroundColor: 'transparent' }} 
                            variant='text' 
                            className='navbar__btn'
                        >
                            PRODUCTOS
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            {menuCat.map( (cat) => {
                                return <MenuItem onClick={handleClose}><Link to={`/productos/${cat}`}>{cat}</Link></MenuItem>
                            })}
                        </Menu>
                    </li>
                        <li>
                            <Button color="inherit"  >NOVEDADES</Button>
                        </li>
                        <li>
                            <Button color="inherit"  >CONTACTO</Button>
                        </li>
                    </ul>
                    <CartWidget/>
                </Toolbar>
            </AppBar>
        </>

    )

}

export default NavBar 