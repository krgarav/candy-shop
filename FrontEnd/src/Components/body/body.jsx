import React, { Fragment, useEffect, useState } from "react";
import "./body.css";
const Body = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/get-products");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [state]);
  const oneHandler = (e) => {
    const update = async () => {
      const response = await fetch(
        "http://localhost:3000/alter-productOne/" + e
      );
      if (response.ok) {
        setState((prev) => !prev);
      } else {
        alert("Not enough product");
      }
    };
    update();
  };
  const twoHandler = (e) => {
    const update = async () => {
      const response = await fetch(
        "http://localhost:3000/alter-productTwo/" + e
      );

      if (response.ok) {
        setState((prev) => !prev);
      } else {
        alert("Not enough product");
      }
    };
    update();
  };
  const threeHandler = (e) => {
    const update = async () => {
      const response = await fetch(
        "http://localhost:3000/alter-productThree/" + e
      );

      if (response.ok) {
        setState((prev) => !prev);
      } else {
        console.error("Error occured");
        alert("Not enough product");
      }
    };
    update();
  };
  const deleteHandler = (e) => {
    console.log("clicked")
    const deleteProduct = async () => {
      const response = await fetch(
        "http://localhost:3000/delete-product/" + e,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setState((prev) => !prev);
      }
    };
    deleteProduct();
  };
  const liElement = data.map((item) => {
    return (
      <li key={item.id}>
        <span className="box-div">
          <h4>{item.name}</h4>
        </span>
        <span className="box-div">
          <p>{item.description}</p>
        </span>
        <span className="box-div">
          <p>Rs {item.price} /-</p>
        </span>
        <span className="box-div">
          <p> {item.quantity}</p>
        </span>
        <button onClick={() => oneHandler(item.id)}>Buy one</button>
        <button onClick={() => twoHandler(item.id)}>Buy two</button>
        <button onClick={() => threeHandler(item.id)}> Buy three</button>
        <button className="btn-danger" onClick={() => deleteHandler(item.id)}>
          Delete
        </button>
      </li>
    );
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = event.target.pname.value;
    const enteredDescription = event.target.pdes.value;
    const enteredPrice = event.target.pprice.value;
    const enteredQuantity = event.target.pqty.value;
    const obj = {
      name: enteredName,
      description: enteredDescription,
      price: enteredPrice,
      quantity: enteredQuantity,
    };

    const postData = async () => {
      const response = await fetch("http://localhost:3000/add-product", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setState((prev) => !prev);
      }
    };
    postData();
    event.target.pname.value = "";
    event.target.pdes.value = "";
    event.target.pprice.value = "";
    event.target.pqty.value = "";
  };

  return (
    <Fragment>
      <div className="formdiv">
        <form onSubmit={submitHandler}>
          <label htmlFor="pname">Candyname :</label>
          <input type="text" name="productName" id="pname" required />
          <label htmlFor="pdes">Description :</label>
          <input type="text" name="productDescription" id="pdes" required />
          <label htmlFor="pprice">Price :</label>
          <input type="number" name="productPrice" id="pprice" required />
          <label htmlFor="pqty">Quantity :</label>
          <input type="number" name="productQuantity" id="pqty" required />
          <button type="submit">Add Item</button>
        </form>
      </div>
      <div className="list">
        {liElement.length > 0 && (
          <ul>
            <li>
              <span className="box-div">
                <h2>Name</h2>
              </span>
              <span className="box-div">
                <h2>Description</h2>
              </span>
              <span className="box-div">
                <h2>Price</h2>
              </span>
              <span className="box-div">
                <h2> Quantity</h2>
              </span>
              <span className="box-div"></span>
              <span className="box-div"></span>
              <span className="box-div"></span>
            </li>
            <hr/>

            {liElement}
          </ul>
        )}
        {liElement.length === 0 && <h2>No Products Available</h2>}
      </div>
    </Fragment>
  );
};

export default Body;
