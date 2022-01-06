import React from 'react';
import Button from '@mui/material/Button';
import {  Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import useAuth from './../../hooks/useAuth';

const style = {
  textDecoration: 'none',
  marginRight: '10px',
  fontSize: '17px',
  color: 'black'
}

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <Navbar bg="light" variant="light" className='mx-2' collapseOnSelect expand="lg" style={{ backgroundColor: '#0a1735',}}>
      <Navbar.Brand href="#home">
        <h5>
          <img
            src="https://i.ibb.co/B3nYkvY/logo-small.png"
            alt=""
            className='navLogo img-fluid '
          />
        </h5>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Nav className='text-primary align-items-center ms-auto'>
          <Link to='/home' style={style}><Button color="inherit">Home</Button></Link>
          <Link to='/explores' style={style}><Button color="inherit">Explore</Button></Link>
          <Link to='/reviews' style={style}><Button color="inherit">Reviews</Button></Link>
          <Link to='/meetBenefit' style={style}><Button color="inherit">About</Button></Link>
          {
            user.email && <Link to='/dashboard' style={style}><Button color="inherit">Dashboard</Button></Link>
          }
          {
            user.email ? <Button onClick={logout} style={{ backgroundColor: '#e1c265', fontSize: '14px', color: 'white' }}>Log Out</Button> :
              <Link to='/login' style={style}>
                <Button style={{ backgroundColor: '#e1c265', fontSize: '15px', color: 'white' }}>Login</Button>
              </Link>
          }
          {
            user.email && <Avatar
              alt="Remy Sharp"
              src={user?.photoURL}
              sx={{ width: 45, height: 45, m: 1 }}
            />
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  );
};
export default Navigation;