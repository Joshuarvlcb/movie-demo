import {Switch,Route} from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';

function App() {
  return (
     <Switch>
        <Route exact path = '/'>
            <Home/>
        </Route>
        <Route  path = '/movies/:id'>
            <SingleMovie/>
        </Route>
        <Route  path = '*'>
            <Error/>
        </Route>
     </Switch>
  );
};

export default App;