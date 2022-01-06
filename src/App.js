import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './pages/Context/AuthProvider';
import Home from './pages/Home/Home';
import BathroomFeetings from './pages/Home/Home/BathroomFeetings/BathroomFeetings';
import CcTvs from './pages/Home/Home/CcTvs/CcTvs';
import AddProducts from './pages/Home/Home/Dashboard/AdminDashboard/AddProducts';
import Dashboard from './pages/Home/Home/Dashboard/Dashboard';
import MyOrders from './pages/Home/Home/Dashboard/MyOrders';
import Payment from './pages/Home/Home/Dashboard/Payment';
import SendReviews from './pages/Home/Home/Dashboard/SendReviews';
import EcoMaterials from './pages/Home/Home/EcoMaterials/EcoMaterials';
import Explores from './pages/Home/Home/Explores/Explores';
import Furnitures from './pages/Home/Home/Furnitures/Furnitures';
import InteriorDesigns from './pages/Home/Home/InteriorDesigns/InteriorDesigns';
import Login from './pages/Home/Home/Login/Login/Login';
import Register from './pages/Home/Home/Login/Register/Register';
import MeetBenefits from './pages/Home/Home/MeetBenefits/MeetBenefits';
import NotFound from './pages/Home/Home/NotFound/NotFound';
import Products from './pages/Home/Home/Products/Products';
import PurchaseBathroom from './pages/Home/Home/PurchaseBathroom/PurchaseBathroom';
import PurchaseCcTv from './pages/Home/Home/PurchaseCctv/PurchaseCcTv';
import PurchaseEco from './pages/Home/Home/PurchaseEco/PurchaseEco';
import PurchaseFurniture from './pages/Home/Home/PurchaseFurniture/PurchaseFurniture';
import PurchaseInterior from './pages/Home/Home/PurchaseInterior/PurchaseInterior';
import PurchaseProducts from './pages/Home/Home/PurchaseProducts/PurchaseProducts';
import PurchaseSolar from './pages/Home/Home/PurchaseSolar/PurchaseSolar';
import Reviews from './pages/Home/Home/Reviews/Reviews';
import SolarEnergies from './pages/Home/Home/SolarEnergies/SolarEnergies';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
              <Home></Home>
           </Route>
          <Route exact path='/home'>
              <Home></Home>
           </Route>
          <Route exact path='/products'>
              <Products></Products>
           </Route>
          <Route exact path='/explores'>
              <Explores></Explores>
           </Route>
          <PrivateRoute path='/purchaseProducts/:productId'>
              <PurchaseProducts></PurchaseProducts>
           </PrivateRoute>
          <PrivateRoute path='/purchaseEco/:ecoId'>
              <PurchaseEco></PurchaseEco>
           </PrivateRoute>
          <PrivateRoute path='/purchaseSolar/:solarId'>
              <PurchaseSolar></PurchaseSolar>
           </PrivateRoute>
          <PrivateRoute path='/purchaseFurniture/:furnitureId'>
              <PurchaseFurniture></PurchaseFurniture>
           </PrivateRoute>
          <PrivateRoute path='/purchaseBathroom/:bathroomId'>
              <PurchaseBathroom></PurchaseBathroom>
           </PrivateRoute>
          <PrivateRoute path='/purchaseCctv/:ccTvId'>
              <PurchaseCcTv></PurchaseCcTv>
           </PrivateRoute>
          <PrivateRoute path='/purchaseInterior/:interiorId'>
              <PurchaseInterior></PurchaseInterior>
           </PrivateRoute>
          <Route exact path='/meetBenefit'>
              <MeetBenefits></MeetBenefits>
           </Route>
          <Route exact path='/reviews'>
              <Reviews></Reviews>
           </Route>
          <Route exact path='/login'>
              <Login></Login>
           </Route>
          <Route exact path='/register'>
              <Register></Register>
           </Route>
          <Route path='/dashboard'>
              <Dashboard></Dashboard>
           </Route>
          <Route exact path='/payment'>
              <Payment></Payment>
           </Route>
          <Route exact path='/myOrder'>
              <MyOrders></MyOrders>
           </Route>
          <Route exact path='/addReviews'>
              <SendReviews></SendReviews>
           </Route>
          <Route exact path='/addProducts'>
              <AddProducts></AddProducts>
           </Route>
          <Route exact path='/interior'>
              <InteriorDesigns></InteriorDesigns>
           </Route>
          <Route exact path='/cctv'>
              <CcTvs></CcTvs>
           </Route>
          <Route exact path='/bathroomfeetings'>
              <BathroomFeetings></BathroomFeetings>
           </Route>
          <Route exact path='/ecomaterials'>
              <EcoMaterials></EcoMaterials>
           </Route>
          <Route exact path='/solarenergy'>
              <SolarEnergies></SolarEnergies>
           </Route>
          <Route exact path='/furniture'>
              <Furnitures></Furnitures>
           </Route>
          <Route exact path='*'>
              <NotFound></NotFound>
           </Route>
        </Switch>
       </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
