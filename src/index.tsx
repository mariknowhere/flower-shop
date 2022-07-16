import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import CommonPage from './client/pages/CommonPage';
import AboutStore from "./client/store/AboutStore";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const Context = createContext({
  about: new AboutStore(),
})

root.render(
    <Context.Provider value={{
      about: new AboutStore(),
    }}>
      <CommonPage />
    </Context.Provider>
);
