import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selector";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user-actions";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from "./components/error-boundary/error-boundary";

const AboutUs = lazy(() => import("./pages/about-us/about-us"));
const Results = lazy(() => import("./pages/results/results"));
const AddItems = lazy(() => import("./pages/add-items/add-items"));
const SignInAndSignUpPage = lazy(() => import("./pages/Sign-in-up/Sign-in-up"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={AddItems} />
            <Route path="/results" component={Results} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
            <Route exact path="/add-items" component={AddItems} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
