import './App.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import EventsList from './components/eventlist';
// import LoginForm from './components/login';
// import Signup from './components/signup';
import Home from './components/Home';

function App() {
  return(
  // <Signup />,
  // <LoginForm/>,
  <Home />
  // <EventsList />
)
  // return (
  //   <Router>
  //     <div>
  //       <Switch>
  //         <Route path="/signin" component={LoginForm} />
  //         <Route path="/signup" component={SignUp} />
  //         {/* Add additional routes as needed */}
  //       </Switch>
  //     </div>
  //   </Router>
  // );
}

export default App;

// return(
//   <Signup />,
//   <LoginForm/>
//   // <EventsList />
// )
// }