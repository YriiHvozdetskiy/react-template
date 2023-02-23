import styles from './MySelect.module.scss';
import React from 'react';
import Select from 'react-select';
import {ErrorText} from '../ErrorText';

const css = {
   control: base => ({
      ...base,
      fontFamily: 'Roboto',
      fontSize: '1.6rem',
      lineHeight: '1.9rem',
      height: '100%',
   }),
   menu: base => ({
      ...base,
      fontFamily: 'Roboto',
      fontSize: '1.6rem',
      lineHeight: '1.9rem',
   }),
};

export const MySelect = ({options, field, formProps}) => {

   return (
      <div className={styles.select}>
         <Select
            styles={css}
            // defaultValue={options[0]}
            options={options}
            value={options ? options.find(option => option?.value === field?.value) : ''}
            onChange={(options) => formProps?.setFieldValue(field?.name, options?.value)}
         />
         <ErrorText
            name={'question'}
            tag={'p'}
         />
      </div>
   );
};
