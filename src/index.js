import ReactDOM from 'react-dom';
import { renderRoutes } from './Routes.jsx';
import './main.scss';

ReactDOM.render(
  renderRoutes(),
  document.getElementById('app')
);
