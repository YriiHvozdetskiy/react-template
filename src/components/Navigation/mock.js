import {
   Account,
   Users,
} from '../../assets/icons';

export const loggedIn = (routs) => {
   return [
      {
         navigate: 'Account',
         link: routs?.account,
         svg: <Account/>,
      },
      {
         navigate: 'User tests',
         link: routs?.user,
         svg: <Users/>,
      },
   ];
};

export const notLoggedIn = (routs) => {
   return [
      {
         navigate: 'F.A.Q.',
         link: routs?.faq,
      },
      {
         navigate: 'About us',
         link: routs?.about,
      },
      {
         navigate: 'Contact',
         link: routs?.contact,
      },
   ];
};