
import { Route,  Routes, Switch } from 'react-router-dom';
import './App.css';
import AddReviews from './component/AddReviews';
import Navbar from './component/Navbar';
import Home from './component/Home';

import Review from './component/Review';
import ReviewLists from './component/ReviewLists';
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'reactstrap';


function App() {


  return (
 
     <div className=" text-center">
     

     <Container>
       <Row>
         <Col sm={2}>
          <Navbar/>
         </Col>
         <Col sm={10}>
          
           <Routes>
           <Route path='/' element={<Home/>} exact></Route>
           <Route path='addreview' element={<AddReviews/>} exact></Route>
           <Route path='viewreviews' element={<ReviewLists/>} exact></Route>

           </Routes>
          
         </Col>
       </Row>
     </Container>
   </div>












  );
}

export default App;
