import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Modal from "../Model";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

const Navbar = () => {
  let data=useCart();
  const navigate=useNavigate();

  const [cartView,setCartView]=useState(false);

  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">
            FoodOps
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {(localStorage.getItem("authToken"))?
              <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">
                MyOrders
              </Link>
            </li>
             :"" }
            </ul>
            {(!localStorage.getItem("authToken"))?
            <div className="d-flex">
                <Link className="btn bg-black text-white mx-1" to="/login">
                  Login
                </Link>                          
                <Link className="btn bg-black text-white mx-1" to="/createUser">
                  Sign Up
                </Link>
            </div>
            :<div>
              <div className="btn bg-black text-white mx-2" onClick={()=>setCartView(true)}>
                MyCart {" "}
                <Badge pill bg="success">{data.length}</Badge>
              </div>
              {cartView?<Modal onClose={()=>setCartView(false)}><Cart></Cart></Modal>:null}
              <div className="btn bg-black text-white mx-2" onClick={handleLogout}>Logout</div>
            </div>
            }  
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
