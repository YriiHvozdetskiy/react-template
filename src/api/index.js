import axios from "axios";
import {
   COMMENTS,
   COMPANY,
   EVALUATE,
   LOGIN,
   LOGOUT,
   REGISTER,
   SORT_COMPANY,
   SORT_TESTS,
   UPDATE_COMPANY,
   UPDATE_QUESTIONS,
   USER,
   USER_TEST,
} from '../constants';
import {createAsyncThunk} from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const token = {
   set (token) {
      axios.defaults.headers.common.Authorization = `token ${token}`;
   },
   unset () {
      axios.defaults.headers.common.Authorization = '';
   },
};

export const apiRegister = createAsyncThunk('user/register',
   async credentials => {
      try {
         const {data} = await axios.post(REGISTER, credentials);

         token.set(data.token);

         return data;
      } catch (e) {
         return Promise.reject(new Error('error registration'));
      }
   });

export const apiLogIn = createAsyncThunk('user/login',
   async (credentials, thunkAPI) => {
      try {
         const {data} = await axios.post(LOGIN, credentials);

         if (data.token.length === 0) {
            return Promise.reject(new Error('invalid token'));
         }

         token.set(data.token);

         toast('Welcome', {
            icon: '👋',
         });

         return data;
      } catch (error) {
         toast.error('error');

         return thunkAPI.rejectWithValue(error.message);
         // return Promise.reject(new Error('error'));
      }
   });

export const apiLogOut = createAsyncThunk('user/logout',
   async (_, thunkAPI) => {
      try {
         await axios.post(LOGOUT);

         token.unset();

         toast('Goodbye', {
            icon: '👋',
         });
      } catch (error) {
         toast.error('error');

         return thunkAPI.rejectWithValue(error.message);
      }
   });

export const apiRefreshUser = createAsyncThunk('user/refresh',
   async (_, thunkAPI) => {
      // Reading the token from the state via getState()
      const state = thunkAPI.getState();

      const persistedToken = state.user.token;
      if (persistedToken === null) {
         // If there is no token, exit without performing any request
         return thunkAPI.rejectWithValue('Unable to fetch user');
      }

      try {
         // If there is a token, add it to the HTTP header and perform the request
         token.set(persistedToken);

         const {data} = await axios.get(USER);

         return data;
      } catch (error) {

         if (error?.response?.data?.detail) {
            token.unset();
         }

         return thunkAPI.rejectWithValue(error.message);
      }
   },
);

export const apiDeleteQuestion = async (id) => {
   try {
      await axios.delete(UPDATE_QUESTIONS(id));

      toast.success('removed');
   } catch (e) {
      toast.error('error');
      console.log(e);
   }
};

export const apiSortListQuiz = async (flag, page) => {
   try {
      return await axios.get(SORT_TESTS(flag, page));
   } catch (e) {
      console.log(e);
   }
};

export const apiCreateCompany = async (value) => {
   try {
      const data = await axios.post(COMPANY, value);

      if (data.status === 201) {
         toast.success('success');

         return true;
      }

      return false;
   } catch (error) {
      if (error?.response?.data?.senior_admin?.email[0]) {
         console.log('email', error?.response?.data?.senior_admin?.email[0]);
         toast.error(`${error?.response?.data?.senior_admin?.email[0]}`,
            {
               style: {
                  fontWeight: 700,
                  fontSize: '1.5rem',
               },
            });
      }

      if (error?.response?.data?.name[0]) {
         console.log('name', error?.response?.data?.name[0]);
         toast.error(`${error?.response?.data?.name[0]}`,
            {
               style: {
                  fontWeight: 700,
                  fontSize: '1.5rem',
               },
            });
      }

      return false;
   }
};

export const apiCompanies = async (flag, page) => {
   try {
      return await axios.get(SORT_COMPANY(flag, page));
   } catch (e) {
      console.log('e', e);
   }
};

export const apiEditCompany = async (slug) => {
   try {
      return axios.get(UPDATE_COMPANY(slug));
   } catch (e) {
      console.log('e', e);
      return false;
   }
};

export const apiUserAnswersTest = async (user, test) => {
   try {
      return await axios.get(USER_TEST(user, test));
      // console.log('data',data)

      // if (data.status === 200) {
      //    toast.success('success');
      //
      //    return true;
      // }
      // return false;
   } catch (e) {
      // console.log(e);
      toast.error('error');

      return false;
   }
};

export const apiEvaluateQuestion = async (value, id, method) => {
   try {
      const data = await axios({
         method: method,
         url: EVALUATE(id),
         data: value,
      });

      if (data.status === 201 || data.status === 200) {
         toast.success('success');

         return data;
      }

      return false;
   } catch (error) {
      toast.error('error');

      return false;
   }
};

export const apiCommentsTest = async (value, id, method) => {
   try {
      return await axios({
         method: method,
         url: COMMENTS(id),
         data: value,
      });

   } catch (e) {
      // console.log(e);
      toast.error('error');

      return false;
   }
};