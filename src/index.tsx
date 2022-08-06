import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import CommonPage from './client/pages/CommonPage';
import {ContextValue} from "./client/constants/context";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const Context = createContext(ContextValue)

const { Provider } = Context;

root.render(
    <Provider value={ContextValue}>
      <CommonPage />
    </Provider>
);
