import {Route, Routes} from 'react-router-dom';
import {ROUTES_LIST} from '../constants';
import {Toaster} from 'react-hot-toast';

export const AppRouter = () => {

   return (
      <>
         <Toaster
            toastOptions={{
               success: {
                  style: {
                     background: 'green',
                     color: '#fff',
                  },
               },
               error: {
                  style: {
                     background: 'red',
                     color: '#fff',
                  },
               },
            }}
         />
         <Routes>
            {ROUTES_LIST.map((
               {
                  path,
                  component,
                  isPrivate,
               }, index) => (
               <Route
                  key={index}
                  path={path}
                  element={component}/>
            ))}
         </Routes>
      </>
   );
};
