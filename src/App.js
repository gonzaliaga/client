import './App.css';
import Main from './components/Main'
import Product from './components/Product'

import Header from './components/Header';
import Footer from './components/Footer';

import Profile from './components/Profile'

import Catalog from './components/Catalog'

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import Login from './components/Login';
import Register from './components/Register';

import ProductState from './context/Product/ProductState';
import UserState from './context/User/UserState';
import LayoutState from './context/Layout/LayoutState'

import AuthRoute from './components/Routes/AuthRoute';
import PrivateRoute from './components/Routes/PrivateRoute'
import PublicRoute from './components/Routes/PublicRoute';



function App() {
  return (
    <>
    <LayoutState>
      <ProductState>
        <UserState>
          <Router>
            <Header />

            <Switch>

              {/* RUTAS PRIVADAS */}
              <PrivateRoute exact path="/la-dona-gatona/perfil" component={ Profile } />          

              {/* RUTAS DE AUTENTICACIÓN */}
              <AuthRoute exact path="/la-dona-gatona/iniciar-sesion" component={Login} />
              <AuthRoute exact path="/la-dona-gatona/crear-cuenta" component={Register} />

              {/* RUTAS ESTÁTICAS */}
              <PublicRoute exact path="/la-dona-gatona/catalogo" component={Catalog} />

              {/* RUTAS DINÁMICAS */}
              <PublicRoute exact path="/la-dona-gatona/:productId" component={Product} />

              {/* RUTA BASE */}
              <PublicRoute exact path="/la-dona-gatona/" component={Main} />

            </Switch>

            <Footer />
          </Router>
          </UserState>
        </ProductState>
      </LayoutState>
    </>
  );
}

export default App;
