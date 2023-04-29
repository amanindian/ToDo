import React from "react";
import Delete from "./delet.png";

export default function ToDoList({ AllToDo, setAllToDo }) {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  const DeleteToDo = (index) => {
    let newProductList = [...AllToDo];
    newProductList.splice(index, 1);
    setAllToDo(newProductList);
  };

  return (
    <>
      <h1 className="mt-3">Our All To Do List</h1>
      <div style={containerStyle}>
        {AllToDo.map((element, index) => {
          return (
            <div className="card my-2 mx-1 " key={index}>
              <span
                className="badge text-bg-info position-absolute"
                style={{ top: "-10px", left: "-5px" }}
              >
                {index + 1}
              </span>
              <span
                className="badge text-bg-info position-absolute"
                style={{ top: "5px", right: "5px" }}
              >
                <img
                  index={index}
                  onClick={DeleteToDo}
                  src={Delete}
                  alt="Delete ToDo"
                  style={{ maxWidth: "18px" }}
                />
              </span>
              <div className="card-body">
                <h5 className="card-title">{element.Title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {element.Date.toDateString()}{" "}
                </h6>
                <p className="card-text">{element.Description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
