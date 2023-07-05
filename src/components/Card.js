import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart,useCart } from './ContextReducer';

const Card = (props) => {
  let dispatch=useDispatchCart();
  let options=props.options;
  let priceOptions=Object.keys(options);
  // let foodItem=props.foodItem;
  const [qty,setQty]=useState(1);
  const [size,setSize]=useState("");

  let data=useCart();
  const priceRef=useRef();

  const handleAddToCart=async()=>{
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return;
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.foodItem.img })
        // console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    // await console.log(data);
  }

  let finalPrice=qty*parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[]);

  return (
    <div>
        <div class="card mt-3" style={{width: "18rem",maxHeight:"360px"}}>
          <img src={props.foodItem.img} style={{height:"160px",objectFit:"fill"}} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.foodItem.name}</h5>
            {/* <p class="card-text">
              some important text here.
            </p> */}
            <div className="container w-100">
              <select className="m-2 h-100 rounded " onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(6),(e,i)=>{
                  return(
                    <option key={i+1} value={i+1}>
                      {i+1}
                    </option>
                  )
                })}
              </select>

              <select className="m-2 h-100 rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                {priceOptions.map((data)=>{
                  return(
                    <option key={data} value={data}>{data}</option>
                  )
                })}
                {/* <option value="half">Half</option>
                <option value="Full">Full</option> */}
              </select>

              <div className="d-inline h-100 fs-5">
                RS.{finalPrice}/-
              </div>
            </div>
            <hr />
            <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
    </div>
  )
}

export default Card;