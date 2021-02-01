import React from 'react';
import { BrowserRouter as Router, Route, Link , Redirect, Switch} from 'react-router-dom';
import Intro from './Intro';
import Mainscreen from './Mainscreen';
const Routes = () => (
    <Router>
        <Route exact path="/" component={Intro} />
        <Route path="/mainscreen" component={Mainscreen} />
    </Router>
);

export default Routes;