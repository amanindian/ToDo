import React, { useState } from "react";

export default function Input({ AddToCart, setPopUp, setAllToDo }) {
  const MoveToCart = (event) => {
    event.preventDefault();
    if (Title === "" || Description === "") {
      setPopUp(true);
    } else {
      AddToCart(Title, Date, Description);
    }
  };

  const [Description, setDescription] = useState("");
  const [Title, setTitle] = useState("");
  const [Date, setDate] = useState("");

  return (
    <React.Fragment>
      <form className="row g-3 mt-4">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="Enter To Do Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Date To Do
          </label>
          <input
            type="date"
            className="form-control"
            id="inputPassword4"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Enter To Do Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className="col-12">
          <button
            onClick={MoveToCart}
            type="submit"
            className="btn btn-primary"
          >
            Add To Do
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              if (window.confirm("Do you really want to clear ToDo List?")) {
                setAllToDo([]);
              }
            }}
            type="submit"
            className="btn btn-danger mx-5"
          >
            Clear ToDo List
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
