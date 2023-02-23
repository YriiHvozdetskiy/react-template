import * as Yup from 'yup';

export const validationSchema = {
   name:
      Yup.string()
      .required('required')
      .trim('fill in the field')
      .min(1, 'minimum 1 character')
      .max(64, 'maximum 64 characters'),
   description:
      Yup.string()
      .required('required')
      .trim('fill in the field'),
   questions:
      Yup.array()
      .of(
         Yup.object().shape({
            question_name: Yup.string()
            .required('required')
            .trim('fill in the field')
            .min(1, 'minimum 1 character')
            .max(64, 'maximum 64 characters'),
            question_link: Yup.string()
            .required('required')
            .min(1, 'minimum 1 character')
            .max(200, 'maximum 200 characters'),
            // .matches(
            //    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            //    'Enter correct url!',
            // ),
            question_answer: Yup.string()
            .required('required')
            .min(1, 'minimum 1 character')
            .max(200, 'maximum 200 characters'),
            // .matches(
            //    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            //    'Enter correct url!',
            // ),
         }),
      ),
   //Personal information
   middle_name:
      Yup.string()
      .trim('fill in the field')
      .min(1, 'minimum 1 character')
      .max(64, 'maximum 64 characters'),
   email:
      Yup.string()
      .required('required')
      .email('must be a valid email')
      .trim('fill in the field')
      .min(1, 'minimum 1 character')
      .max(64, 'maximum 64 characters'),
   surname:
      Yup.string()
      .required('required')
      .trim('fill in the field')
      .min(1, 'minimum 1 character')
      .max(64, 'maximum 64 characters'),
   //change password
   old_password:
      Yup.string()
      .required('required')
      .trim('fill in the field')
      .min(1, 'minimum 1 character')
      .max(64, 'maximum 64 characters'),
   new_password:
      Yup.string()
      .required('Required')
      .trim('fill in the field')
      .min(1, 'minimum 1 character')
      .max(64, 'maximum 64 characters'),
   confirm_password:
      Yup.string()
      .oneOf([Yup.ref('new_password'), null], "Passwords don't match!")
      .required('Required')
      .trim('fill in the field')
      .min(1, 'minimum 1 character')
      .max(64, 'maximum 64 characters'),
   //login
   password:
      Yup.string()
      .required('required')
      .trim('fill in the field'),
   //reset password
   code_email:
      Yup.string()
      .required('required')
      .trim('fill in the field'),
   // commit
   commitQuestion:
      Yup.string()
      .required('required'),
   commitVideo:
      Yup.string()
      .required('required')
      .min(1, 'minimum 1 character')
      .max(200, 'maximum 200 characters'),
   commitAudio:
      Yup.string()
      .required('required'),
   // create company
   senior_admin:
      Yup.object().shape({
         email:
            Yup.string()
            .required('required')
            .email('must be a valid email')
            .trim('fill in the field')
            .min(1, 'minimum 1 character')
            .max(64, 'maximum 64 characters'),
         name:
            Yup.string()
            .required('required')
            .trim('fill in the field')
            .min(1, 'minimum 1 character')
            .max(64, 'maximum 64 characters'),
         middle_name:
            Yup.string()
            .required('required')
            .trim('fill in the field')
            .min(1, 'minimum 1 character')
            .max(64, 'maximum 64 characters'),
         surname:
            Yup.string()
            .required('required')
            .trim('fill in the field')
            .min(1, 'minimum 1 character')
            .max(64, 'maximum 64 characters'),
         password:
            Yup.string()
            .required('Required')
            .trim('fill in the field')
            .min(1, 'minimum 1 character')
            .max(64, 'maximum 64 characters'),
         confirm_password:
            Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords don't match!")
            .required('Required')
            .trim('fill in the field')
            .min(1, 'minimum 1 character')
            .max(64, 'maximum 64 characters'),
      }),
};