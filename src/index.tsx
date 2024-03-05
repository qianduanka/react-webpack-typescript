import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Navigate,
  NavLink,
  Link,
  Route,
} from 'react-router-dom';

// @ts-ignore
import { routerLnks } from './router/index';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {routerLnks.map((item: any) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={<item.element />}
              ></Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    );
  }
}

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
