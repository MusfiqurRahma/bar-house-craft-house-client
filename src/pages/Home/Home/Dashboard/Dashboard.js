import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from '../../../hooks/useAuth';
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import Reviews from '../Reviews/Reviews';
import MakeAdmin from './AdminDashboard/MakeAdmin';
import ManageProducts from './AdminDashboard/ManageProducts';
import AddProducts from './AdminDashboard/AddProducts';
import ManageAllOrder from './AdminDashboard/ManageAllOrder';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BadgeIcon from '@mui/icons-material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Payment from './Payment';
import AddBathoomFeetings from './AdminDashboard/AddBathoomFeetings';
import AddccTv from './AdminDashboard/AddccTv';
import AddInteriorDesign from './AdminDashboard/AddInteriorDesign';
import AddEcoMaterial from './AdminDashboard/AddEcoMaterial';
import AddSolarEnergy from './AdminDashboard/AddSolarEnergy';
import AddFurniture from './AdminDashboard/AddFurniture';



const style = {
  textDecoration: 'none', 
  color:'#0561c1'
}

const drawerWidth = 240;

function Dashboard(props) {
  const { logout,admin,user} = useAuth();

     const { window } = props;
     const [mobileOpen, setMobileOpen] = React.useState(false);
     
  let { path, url } = useRouteMatch();
     const handleDrawerToggle = () => {
     setMobileOpen(!mobileOpen);
     };

   const drawer = (
     <div>
       <Typography variant='h6' sx={{color:'#0d3562',backgroundColor:'#d5d9dc',p:2}}><AccountCircleIcon/> Profile</Typography>
       <Toolbar />     
       <Avatar alt="Cindy Baker" src={user.photoURL} style={{ margin: 'auto', marginBottom: '10px' }} />
       <Typography variant='h6' sx={{color:'#0d3562'}}>{user.displayName}</Typography> <br />
      <Divider />

       {/* Admin Route */}
       {admin ? <Box>
         <Link to='/home' style={style}>
         <Button color='inherit'><HomeIcon/>Home</Button>
         </Link><br />
         
        <Link to={`${url}/manageAllOrder`} style={style}>
         <Button color='inherit'><BadgeIcon/> Manage All Order</Button>
       </Link>

       <Link to={`${url}/addProducts`} style={style}>
         <Button color='inherit'> <ProductionQuantityLimitsIcon/> Add A Product</Button>
         </Link>
         
       <Link to={`${url}/addBathroomFeetings`} style={style}>
         <Button color='inherit'> <ProductionQuantityLimitsIcon/> Add A Bathroom Feetings</Button>
         </Link>
         
       <Link to={`${url}/cctv`} style={style}>
         <Button color='inherit'> <ProductionQuantityLimitsIcon/> Add CC Tv</Button>
         </Link>
         
       <Link to={`${url}/interiorDesign`} style={style}>
         <Button color='inherit'> <ProductionQuantityLimitsIcon/> Add Interior Design</Button>
         </Link>
         
       <Link to={`${url}/ecoMaterial`} style={style}>
         <Button color='inherit'> <ProductionQuantityLimitsIcon/> Add Eco Materials</Button>
         </Link>
         
       <Link to={`${url}/solarEnergy`} style={style}>
         <Button color='inherit'> <ProductionQuantityLimitsIcon/> Add Solar Energy</Button>
         </Link>
         
       <Link to={`${url}/addFurniture`} style={style}>
         <Button color='inherit'> <ProductionQuantityLimitsIcon/> Add Furniture</Button>
       </Link>

       <Link to={`${url}/manageProducts`} style={style}>
         <Button color='inherit'><ManageAccountsIcon/> Manage Products</Button>
       </Link>

       <Link to={`${url}/makeAdmin`} style={style}>
         <Button color='inherit'><AdminPanelSettingsIcon/> Make Admin</Button>
       </Link> <br />

       <Link to={`${url}/logout`} style={style}><Button onClick={logout} color='inherit'><LogoutIcon/> Log Out</Button></Link>
       </Box> :
         <Box>

           <List>
        <Link to='/home' style={style}>
           <Button><HomeIcon />Home</Button>
        </Link>        
           </List>
           
           <List>
        <Link to='/myOrder' style={style}>
           <Button><ShoppingBagIcon />My Orders</Button>
        </Link>       
           </List>
           
         <List>
        <Link to='/addReviews' style={style}>
           <Button><ReviewsIcon />Review</Button>
        </Link>       
           </List>
           
        <Link to='/home' style={style}>
           <Button onClick={logout}><LogoutIcon />Log Out</Button>
        </Link>
           
         </Box>}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        style={{backgroundColor:'#d5d9dc',color:'#0d3562'}}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Barhouse Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        {/* nested route */}
        
        <Switch>
        <Route exact path={path}>
          <Reviews></Reviews>
        </Route>
          <AdminRoute path={`${path}/manageAllOrder`}>
            <ManageAllOrder></ManageAllOrder>
        </AdminRoute>
          <AdminRoute path={`${path}/addProducts`}>
            <AddProducts></AddProducts>
        </AdminRoute>
          <AdminRoute path={`${path}/addBathroomFeetings`}>
            <AddBathoomFeetings></AddBathoomFeetings>
        </AdminRoute>
          <AdminRoute path={`${path}/cctv`}>
            <AddccTv></AddccTv>
        </AdminRoute>
          <AdminRoute path={`${path}/interiorDesign`}>
            <AddInteriorDesign></AddInteriorDesign>
        </AdminRoute>
          <AdminRoute path={`${path}/ecoMaterial`}>
            <AddEcoMaterial></AddEcoMaterial>
        </AdminRoute>
          <AdminRoute path={`${path}/solarEnergy`}>
            <AddSolarEnergy></AddSolarEnergy>
        </AdminRoute>
          <AdminRoute path={`${path}/addFurniture`}>
            <AddFurniture></AddFurniture>
        </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
        </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <Route path={`${path}/payment/:productId`}>
              <Payment></Payment>
           </Route>
      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;