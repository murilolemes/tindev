// import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/login';
import Main from './pages/main';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main
  })
)

// export default function App() {
//   return (
//     <Login />
//   );
// }
