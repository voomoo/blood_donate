import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import WelcomePage from "./components/WelcomePage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import SignupContact from "./components/SignupContact";
import SignupBloodGroup from "./components/SignupBloodGroup";
import SignupWeight from "./components/SignupWeight";
import SignupGender from "./components/SignupGender";
import SignupAddress from "./components/SignupAddress";
import SignupAge from "./components/SignupAge";
import SignupImageUpload from "./components/SignupImageUpload";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route exact path="/sign-in">
            <Signin />
          </Route>
          <Route exact path="/sign-up">
            <Signup />
          </Route>
          <Route exact path="/sign-up-contact">
            <SignupContact />
          </Route>
          <Route exact path="/sign-up-blood-group">
            <SignupBloodGroup />
          </Route>
          <Route exact path="/sign-up-weight">
            <SignupWeight />
          </Route>
          <Route exact path="/sign-up-gender">
            <SignupGender />
          </Route>
          <Route exact path="/sign-up-address">
            <SignupAddress />
          </Route>
          <Route exact path="/sign-up-age">
            <SignupAge />
          </Route>
          <Route exact path="/sign-up-image-upload">
            <SignupImageUpload />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/notifications">
            <Notifications />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
