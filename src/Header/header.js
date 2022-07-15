import React from 'react'
import './header.css'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import himg1 from '../assets/bars-solid.svg';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
function Header() {
    
const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    sx={{ width:250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem key={1} disablePadding>
            <ListItemButton>
              <ListItemText>
                <Link to={'/'} className='hdbtn'>Home</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem key={2} disablePadding>
            <ListItemButton>
              <ListItemText>
                <Link to={'/aboutus'} className='hdbtn'>About Us</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem key={3} disablePadding>
            <ListItemButton>
              <ListItemText>
              <Link to={'/contactus'} className='hdbtn'>Contact Us</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem key={4} disablePadding>
            <ListItemButton>
              <ListItemText>
              <Link to={'/alumini'} className='hdbtn'>Alumni</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <>
        <nav className='main-nav'>
            <div className='margin-div'>
                <div className='main-logo-div'>
                    <div>
                        <h1>Reconnect</h1>
                    </div>
                </div>
                <div className='main-menus'>
                    <div><Button variant="text"><Link to={'/alumini'} className='hdbtn'>Alumni</Link></Button></div>
                    <div><Button variant="text"><Link to={'/aboutus'} className='hdbtn'>About Us</Link></Button></div>
                    <div><Button variant="text"><Link to={'/contactus'} className='hdbtn'>Contact Us</Link></Button></div>
                </div>
                <div className='empty-header-div'></div>
                <Button variant="text" className='muiheadbtn'><div className='guhh'>
                    <img src={himg1} alt="" />
                    <div className='tgl'>
                        {[''].map((anchor) => (
                            <React.Fragment >
                            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                            </React.Fragment>
                        ))}
                    </div> 
                </div></Button>
            </div>
        </nav>
    </>
  )
}
export default Header 