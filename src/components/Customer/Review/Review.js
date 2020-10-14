import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ReviewForm from './ReviewForm';

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <section>
        <div className=" m-2 row"> 
      <div className="col-md-4">
      <img src={logo} alt="" className="img-fluid" width="60%"/>
      </div>
      <div className="col-md-4 d-flex justify-content-start">
          <h1>Add Service</h1>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          
        <h2>{loggedInUser.name}</h2>
        </div>
      </div>
      <div className="container-fluid row ml-5 mt-5">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8  order-Form">
          <ReviewForm></ReviewForm>
        </div>
      </div>
    </section>
  );
};

export default Review;