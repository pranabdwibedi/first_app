// import logo from './logo.svg';
import './App.css';
import Navbar  from './Modules/NavBar';
import Text from './Modules/Text'

let Name = "TextEditor";
function App() {
  return (
    <>
    <Navbar title = {Name}/>
    <Text heading="Enter Your Text Here :"/>
    </>
  );
}
export default App;
