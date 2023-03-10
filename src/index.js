import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './redux/store';
import {AppRouter} from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <AppRouter/>
         </PersistGate>
      </Provider>
   </BrowserRouter>,
);
