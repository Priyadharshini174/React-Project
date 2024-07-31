//import logo from './logo.svg';
import './App.css';
const App = () => {
  const handleClick = () => {
    alert("Message from Javascript alert!");
    console.log("Message to developer");
  }
  return (
    <div>
     <button onClick={() => handleClick()}>Submit</button>
    
    </div>
  );    
}
export default App;