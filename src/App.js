import React, { useEffect, useState } from 'react'
import Input from './components/Input';
import ToDoList from './components/ToDoList';
import Alert from './components/Alert';
import Navbar from './components/Navbar';

function App() {
  const [AllToDo, setAllToDo] = useState(() => {
    const storedData = localStorage.getItem('AllToDo');
    return storedData ? JSON.parse(storedData, (key, value) => {
      if (key === "Date") {
        return new Date(value);
      }
      return value;
    }) : [{
      Title: "This is Title",
      Date: new Date(),
      Description: "This is Description which writen by Aman Kumar"
    }];
  });

  const AddToCart = (title, date, description) => {
    const updatedToDo = [...AllToDo, {
      Title: title,
      Date: new Date(date),
      Description: description
    }];
    setAllToDo(updatedToDo);
    console.log(updatedToDo)
  }

  useEffect(() => {
    localStorage.setItem('AllToDo', JSON.stringify(AllToDo, (key, value) => {
      if (key === "Date") {
        return value instanceof Date ? value.toISOString() : null;
      }
      return value;
    }));
  }, [AllToDo, setAllToDo]);


  const [PopUp, setPopUp] = useState(false)
  return (<>
    <div className='container '>
      <Navbar/>
      <Alert PopUp={PopUp} setPopUp={setPopUp} />
    </div>
    <div className='container mt-5'>
      <Input AddToCart={AddToCart} setPopUp={setPopUp} setAllToDo={setAllToDo}/>
      <ToDoList AllToDo={AllToDo} setAllToDo={setAllToDo} />
    </div></>
  );
}

export default App;
