/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import Control from "./components/Control";
import StateIphone from "./context/StateIphone";
import StateCart from "./context/StateCart";
import StateSamsung from "./context/StateSamsung";
function App() {
  return (
    <StateCart>
      <StateIphone>
        <StateSamsung>
          <Router>
            <div className="hidden-sn animated deep-purple-skin">
              <Header />
              <main id="mainContainer">
                <div className="container">
                  <section className="section">
                    <Link to="/">
                      <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    </Link>

                    <Control />
                  </section>
                </div>
              </main>
              <Header />
              <Switch>
                {routes.map((route, i) => {
                  return (
                    <Route
                      key={i}
                      path={route.path}
                      exact={route.exact}
                      component={route.main}
                    />
                  );
                })}
              </Switch>
              <Footer />
            </div>
          </Router>
        </StateSamsung>
      </StateIphone>
    </StateCart>
  );
}

export default App;
