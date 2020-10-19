/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LazyLoadPage from './containers/LazyLoadPage';
// Lazily load routes and code split with webpack
const LazySelectionPage = React.lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return import(
    /* webpackChunkName: "SelectionPage" */ './containers/SelectionPage'
  );
});
const LazyDashboardPage = React.lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return import(
    /* webpackChunkName: "DashboardPage" */ './containers/DashboardPage'
  );
});
// const LazyDashboardPage = React.lazy(() =>
//   import(/* webpackChunkName: "DashboardPage" */ './containers/DashboardPage')
// );
const SelectionPage = (props: Record<string, unknown>) => (
  <React.Suspense fallback={<LazyLoadPage />}>
    <LazySelectionPage {...props} />
  </React.Suspense>
);

const DashboardPage = (props: Record<string, unknown>) => (
  <React.Suspense fallback={<LazyLoadPage />}>
    <LazyDashboardPage {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.SELECTION} component={SelectionPage} />
        <Route path={routes.DASHBOARD} component={DashboardPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
