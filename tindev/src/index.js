import React, {Fragment} from 'react';
import Login from './pages/Login'

import Routes from './routes'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger', 'Unrecognized WebSocket']);

export default function App() {
  return (
    <Routes />
  );
};