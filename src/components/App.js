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
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/quiz/:id" component={Quiz} />
            <Route exact path="/result/:id" component={Result} />
            {/* <Route exact path="/" >
              <Home />
            </Route>
            <Route  path="/signup" >
              <Signup />
            </Route>
            <Route  path="/login" >
              <Login />
            </Route>
            <PrivateRoute path="/quiz">
               <Quiz />
            </PrivateRoute>
            <PrivateRoute path="/result" >
                <Result />
            </PrivateRoute> */}
            
          </Switch>
        </Layout>
      </Router>
      </AuthProvider>
  
    
  );
}

export default App;
