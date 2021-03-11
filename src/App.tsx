import * as React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CorpusPage from './components/CorpusPage';
import Header from './components/Header';
import Home from './components/Home';
import Resources from './components/Resources';


interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return <><Router>
    <Header />
    <div className='main-conatiner'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resources/:selected" component={Resources} />
        <Route exact path="/corpus/:corpus" component={CorpusPage} />
      </Switch>
    </div>

  </Router></>
    ;
};

export default App;
