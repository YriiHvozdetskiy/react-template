import styles from './TableMobileDetails.module.scss';
import {SubTableMobile} from '../../Variations/Mobile';

export const TableMobileDetails = (props) => {
   const {
      toggle,
      item,
      typeTables,
   } = props;

   return (
      <>
         {toggle && typeTables?.variations?.subTable &&
            <SubTableMobile
               list={item}
               typeTables={typeTables}
            />
         }
      </>
   );
};
