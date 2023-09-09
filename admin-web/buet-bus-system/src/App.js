import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import Map from './Pages/Map/Map';
import Buses from './Pages/Buses/Buses';
import Employees from './Pages/Employees/Employees';
import BusRoutes from './Pages/BusRoutes/BusRoutes';
import BusRequest from './Pages/BusRequest/BusRequest';
import AddBus from './Pages/AddBus/AddBus';
import EditBus from './Pages/EditBus/EditBus';
import RouteDetails from './Pages/RouteDetails/RouteDetails';
import AddRoute from './Pages/AddRoute/AddRoute';
import { AddEmployee } from './Pages/AddEmployee/AddEmployee';
import { EditEmployee } from './Pages/EditEmployee/EditEmployee';
import { EmployeeDetails } from './Pages/EmployeeDetails/EmployeeDetails';
import { EditRoute } from './Pages/EditRoute/EditRoute';
import { SingleBusDetails } from './Pages/SingleBusDetails/SingleBusDetails';





function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Map' element={<Map/>}></Route>
           {/* Buses  */}
          <Route path='/Buses' element={<Buses/>}></Route>
          <Route path='/AddNewBus' element={<AddBus/>}></Route>
          <Route path='/EditBus/:id' element={<EditBus/>}></Route>
          <Route path='/BusDetails/:id' element={<SingleBusDetails/>}></Route>
          {/* Bus Routes */}
          <Route path='/Routes' element={<BusRoutes/>}></Route>
          <Route path='/RouteDetails/:id' element={<RouteDetails/>}></Route>
          <Route path='/AddRoute' element={<AddRoute/>}></Route>
          <Route path='/EditRoute/:id' element={<EditRoute/>}></Route>
          {/* Employees */}
          <Route path='/Employees' element={<Employees/>}></Route>
          <Route path='/EmployeeDetails/:id' action={({ params }) => {}} element={<EmployeeDetails/>}></Route>
          <Route path='/AddEmployee' element={<AddEmployee/>}></Route>
          <Route path='/EditEmployee/:id' element={<EditEmployee/>}></Route>
          {/* Bus request */}
          <Route path='/BusRequest' element={<BusRequest/>}></Route>

          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
