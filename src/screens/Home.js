import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../style.css";
import { BASE_URL } from './Helper';

const Home = () => {
  const [search,setSearch]=useState('');
  const [foodCat,setFoodCat]=useState([]);
  const [foodItem,setFoodItem]=useState([]);

  const loadData=async ()=>{
    let response=await fetch(`${BASE_URL}/api/foodData`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    });
    response=await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1]);
  }

  useEffect(()=>{
    loadData();
  },[])

  return (
    <div id="home-container">
      <div><Navbar /></div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{objectFit:"contain !important"}}
        >
          <div className="carousel-inner " id="carousel" >
            <div class=" carousel-caption  " style={{ zIndex: "9" }}>
              <div className=" d-flex justify-content-center">
                {" "}
                {/* justify-content-center, copy this <form> from navbar for search box */}
                <input
                  className="form-control me-2 w-75 bg-white text-dark"
                  type="search"
                  value={search}
                  onChange={(e)=>{setSearch(e.target.value)}}
                  placeholder="Type in..."
                  aria-label="Search"
                />
                {/* <button className="btn text-white bg-success" type="submit">
                  Search
                </button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/600x600/?burger"
                className="d-block w-100"
                style={{ filter: "brightness(70%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/600x600/?pastry"
                className="d-block w-100"
                style={{ filter: "brightness(70%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/600x600/?barbeque"
                className="d-block w-100"
                style={{ filter: "brightness(70%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {
          foodCat!==[]?
          foodCat.map((data)=>{
            return(
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr/>
                {foodItem!==[]?
                  foodItem.filter((item)=>(item.CategoryName===data.CategoryName)  && (item.name.toLowerCase().includes(search.toLowerCase())))
                  .map(filterItems=>{
                    return(
                      <div key={filterItems._id} className="col-12 col-md-6 col-lg-4" id="foodItem-card">
                        <Card foodItem={filterItems}
                          options={filterItems.options[0]}
                          
                        ></Card>
                      </div>
                    )
                  }):<div>No Such Data Found </div>
                }
              </div>
            )
          }):""
        }
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default Home;
