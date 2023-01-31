import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

import App from './App';
const client = new Styletron();
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StyletronProvider value={client}>
    <App />
  </StyletronProvider>
);
