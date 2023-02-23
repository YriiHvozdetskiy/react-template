import styles from './CommentQuiz.module.scss';
import {Field, Form, Formik} from 'formik';
import {Button} from '../Button';
import React, {useEffect, useState} from 'react';
import {Input} from '../Input';
import {MySelect} from '../MySelect';
import {useReactMediaRecorder} from 'react-media-recorder';
import {apiCommentsTest} from '../../api';
import * as Yup from 'yup';
import {validationSchema} from '../../utils';
import {ErrorText} from '../ErrorText';

export const CommentQuiz = ({typeComment, setAddComment, options}) => {
   const {
      status,
      startRecording,
      stopRecording,
      mediaBlobUrl,
      error,
   } = useReactMediaRecorder({audio: true});

   const [formProps, setFormProps] = useState({});
   const handleSubmit = async (values, actions) => {
      const formDataValues = new FormData();

      for (const key in values) {
         let value = values[key];

         formDataValues.append(key, value);
      }
      formDataValues.append('author', 2);

      const {data} = await apiCommentsTest(formDataValues, null, 'POST');

      setAddComment(prev => !prev);
   };

   let initialValues = {};
   let schemaValidation = null;

   switch (typeComment) {
      case TYPE_COMMENT.text:
         initialValues = {
            text: '',
            question: '',
         };
         schemaValidation = Yup.object({
            text: validationSchema.description,
            question: validationSchema.commitQuestion,
         });
         break;
      case TYPE_COMMENT.video:
         initialValues = {
            video: '',
            question: '',
         };
         schemaValidation = Yup.object({
            video: validationSchema.commitVideo,
            question: validationSchema.commitQuestion,
         });
         break;
      case TYPE_COMMENT.audio:
         initialValues = {
            audio: '',
            question: '',
         };
         schemaValidation = Yup.object({
            audio: validationSchema.commitAudio,
            question: validationSchema.commitQuestion,
         });
         break;
      default:
         initialValues = {question: ''};
   }

   const handleStartRecorder = () => {
      startRecording();
   };

   const handleStopRecorder = (props) => {
      stopRecording();

      setFormProps(props);
   };

   const handleClick = () => {
      setAddComment(prev => !prev);
   };

   const getAudio = async (file) => {
      let blob = await fetch(file).then(r => r.blob());

      let type = blob.type.split('/')[1];

      const audio = new File([blob], "audio." + type, {type: blob.type});

      formProps?.setFieldValue('audio', audio);
   };

   useEffect(() => {
      (mediaBlobUrl) && getAudio(mediaBlobUrl);
   }, [mediaBlobUrl]);

   return (
      <div className={styles.wrapper}>
         <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schemaValidation}
         >
            {(formProps) => (
               <Form className={styles.form}>
                  <div className={styles.box}>
                     <Field
                        component={({field, form}) =>
                           <MySelect
                              formProps={form}
                              options={options}
                              field={field}
                           />}
                        name={'question'}
                     />
                     <Button
                        type={'button'}
                        text={'Cansel'}
                        handleClick={handleClick}
                     />
                  </div>
                  {typeComment === TYPE_COMMENT.text &&
                     <Input
                        type={'text'}
                        name={'text'}
                        placeholder={'Text here'}
                        nameClass={'input_commitText'}
                        as={'textarea'}
                     />
                  }
                  {typeComment === TYPE_COMMENT.video &&
                     <Input
                        type={'url'}
                        name={'video'}
                        placeholder={'video link'}
                        nameClass={'input_commitVideo'}
                     />
                  }
                  {typeComment === TYPE_COMMENT.audio &&
                     <>
                        <ErrorText
                           name={'audio'}
                           tag={'p'}
                        />
                     </>
                  }
                  <div className={styles.submit}>
                     <Button
                        type={'submit'}
                        text={'Save'}
                        modifier={'button_accent'}
                     />
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};