import { Provider } from 'react-redux';
import store from './store'
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)