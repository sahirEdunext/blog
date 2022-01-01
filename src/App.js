import logo from './logo.svg';
import './App.css';
import RouterPageComponent from './pages/RouterPage';
function App(props) {
  //console.log(props);
  return (
      <>
      <RouterPageComponent path={props}/>
      </>
  );
}

export default App;
