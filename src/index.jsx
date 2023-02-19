import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { spotifyCoreApi } from './redux/services/spotifyCore';

import './index.css';
import App from './App';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ApiProvider api={spotifyCoreApi}> */}
        <Router>
          <App />
        </Router>
      {/* </ApiProvider> */}
    </Provider>
  </React.StrictMode>,
);
