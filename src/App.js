import {useState} from 'react' ;
import "./App.css";


// const Person = (props) => {
//   return(

//     <>
//     <h1> Name : {props.name}</h1>
//     <h2>Last Name : {props.lastName}</h2>
//     <h2> Age : {props.age}</h2>
    
//     </>

//   )
// }

const App = () => {
  const name = "John";
  const [counter , setCounter] = useState(0);

  return (
    <div className="App">


      {/* <h1>Hello {name}</h1>

      <Person name = "sdfsjld" />
      <Person />
      <Person /> */}
      <br></br>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

    </div>
    
  );
};

export default App;
