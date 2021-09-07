import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import "../Styles/App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";

function App() {
  return (
      <AuthProvider>
        <Router>
        <Layout>
          <Switch>
            
            <Route exact path="/" >
              <Home />
            </Route>
            <Route  path="/signup" >
              <Signup />
            </Route>
            <Route  path="/login" >
              <Login />
            </Route>
            <Route  path="/quiz" >
              <Quiz />
            </Route>
            <Route  path="/result" >
              <Result />
            </Route>
            
          </Switch>
        </Layout>
      </Router>
      </AuthProvider>
  
    
  );
}

export default App;
