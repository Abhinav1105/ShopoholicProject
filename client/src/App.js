import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, NotFound } from './Components/default';
import Header from './Components/Header/Header';
import DetailScreen from './Components/ItemDetails/DetailScreen';
import ContextProvider from './context/ContextProvider';
import Cart from './Components/Cart/Cart';
import { Box } from '@material-ui/core'

function App() {
  return (
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Switch>
              <Route exact path= '/' component={Home} />
              <Route exact path= '/cart' component={Cart} />
              <Route exact path= '/product/:id' component={DetailScreen} />
              <Route component={NotFound} />
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
  );
}

export default App;
