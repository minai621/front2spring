import React from 'react';
import ReactDOM from 'react-dom';
import {RecoilRoot} from "recoil";
import AppRouter from "./AppRouter";

ReactDOM.render(
    <RecoilRoot>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </RecoilRoot>,
  document.getElementById('root')
);
