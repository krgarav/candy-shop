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
      }
    };
    update();
  };
  const liElement = data.map((item) => {
    return (
      <li key={item.id}>
        {item.name} {item.description} {item.price} {item.quantity}
        <button onClick={() => oneHandler(item.id)}>Buy one</button>
        <button onClick={() => twoHandler(item.id)}>Buy two</button>
        <button onClick={() => threeHandler(item.id)}> Buy three</button>
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
    fetch("http://localhost:3000/add-product", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setState((prev) => !prev);
    event.target.pname.value = "";
    event.target.pdes.value = "";
    event.target.pprice.value = "";
    event.target.pqty.value = "";
  };

  return (
    <Fragment>
      <div className="formdiv">
        <form onSubmit={submitHandler}>
          <label htmlFor="pname">Candyname</label>
          <input type="text" name="productName" id="pname" />
          <label htmlFor="pdes">Description</label>
          <input type="text" name="productDescription" id="pdes" />
          <label htmlFor="pprice">Price</label>
          <input type="number" name="productPrice" id="pprice" />
          <label htmlFor="pqty">Quantity</label>
          <input type="number" name="productQuantity" id="pqty" />
          <button type="submit">Add Item</button>
        </form>
      </div>
      <div>
        <ul className="list">{liElement}</ul>
      </div>
    </Fragment>
  );
};

export default Body;
