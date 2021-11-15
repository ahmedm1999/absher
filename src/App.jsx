
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home";
import "./assets/style/main.scss";
import Individuals from "./components/Pages/Individuals";
import IndividualsHeader from "./components/blocks/IndividualsHeader";
import Footer from "./components/blocks/Footer";
import IndividualsHeaderResponsive from "./components/blocks/IndividualsHeaderResponsive";
import { useState } from "react";
import Business from "./components/Pages/Business";
import BusinessHeader from "./components/blocks/BusinessHeader";
import BusinessFooter from "./components/blocks/BusinessFooter";
import OTP from "./components/Pages/OTP";
import UserInfo from "./components/Pages/UserInfo";
import FinalOTP from "./components/Pages/FinalOTP";
import BusinessHeaderResponsive from "./components/blocks/BusinessHeaderResponsive";

function App() {
    const [headerResp, setHeaderResp] = useState(window.innerWidth <= 993 ? true : false);

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 990) {
            setHeaderResp(true);
        } else {
            setHeaderResp(false);
        }
    })

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/individuals">
                    {
                        !headerResp ? <IndividualsHeader /> : <IndividualsHeaderResponsive />
                    }
                    <Individuals />
                    <Footer />
                </Route>
                <Route path="/business">
                    {
                        !headerResp ? <BusinessHeader /> : <BusinessHeaderResponsive />
                    }
                    <Business />
                    <BusinessFooter />
                </Route>
                <Route path="/otp">
                    {
                        !headerResp ? <IndividualsHeader /> : <IndividualsHeaderResponsive />
                    }
                    <OTP />
                    <Footer />
                </Route>
                <Route path="/userinfo">
                    {
                        !headerResp ? <IndividualsHeader /> : <IndividualsHeaderResponsive />
                    }
                    <UserInfo />
                    <Footer />
                </Route>
                <Route path="/finalotp">
                    {
                        !headerResp ? <IndividualsHeader /> : <IndividualsHeaderResponsive />
                    }
                    <FinalOTP />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
