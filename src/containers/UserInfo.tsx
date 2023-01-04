import { connect } from 'react-redux';
import { Dispatch } from '../types';
import { UserInfo } from '../components/checkout/UserInfo';
import {
  setDiscount,
  setGroupAge,
  setName,
  setRegistrationNumber,
  setSurname,
} from '../store/userReducer';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setName: (name: string, id: number) => dispatch(setName({ name, id })),
  setSurname: (surname: string, id: number) =>
    dispatch(setSurname({ surname, id })),
  setGroupAge: (groupAge: number, id: number) =>
    dispatch(setGroupAge({ groupAge, id })),
  setDiscount: (discount: string, id: number) =>
    dispatch(setDiscount({ discount, id })),
  setRegistrationNumber: (number: string, id: number) =>
    dispatch(setRegistrationNumber({ number, id })),
});

export default connect(null, mapDispatchToProps)(UserInfo);
