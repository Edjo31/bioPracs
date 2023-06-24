import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cuadricula from './componentes/cuadricula';
import Proyectos from './componentes/proyectos';

function App() {
  return (
    <BrowserRouter basename="/prueba">
      <Switch>
        <Route exact path="/" component={Cuadricula} />
        <Route exact path="/proyectos" component={Proyectos} />
      </Switch>
    </BrowserRouter>
  );
}
export default App