import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store = { store }>
        <App></App>
    </Provider>
);

reportWebVitals();
