import {
   HomePage,
   LoginPage,
   RegisterPage,
} from '../pages';
import {PublicRoute} from '../routes/PublicRoute';
import {PrivateRoute} from '../routes/PrivateRoute';

export const ROUTS = {
   homePage: '/',
   register: '/register',
   listTest: '/list-test',
   editTest: '/list-test/:id',
   login: '/login',
   account: '/account',
};
export const ROUTES_LIST = [
   {
      path: ROUTS.homePage,
      component: <HomePage/>,
   },
   {
      path: ROUTS.register,
      component: <PublicRoute
         component={<RegisterPage/>}
         redirectTo={ROUTS.account}
      />,
   },
   {
      path: ROUTS.login,
      component: <PublicRoute
         component={<LoginPage/>}
         redirectTo={ROUTS.account}
      />,
   },
   {
      path: ROUTS.homePage,
      component: <PrivateRoute
         component={<HomePage/>}
         redirectTo={ROUTS.login}
      />,
   },
   {
      path: ROUTS.homePage,
      component: <PrivateRoute
         component={<HomePage/>}
         redirectTo={ROUTS.login}
      />,
   },
];



