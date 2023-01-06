import { connect } from 'react-redux';
import { Dispatch, State } from '../types';
import { UserInfo } from '../components/checkout/UserInfo';
import {
  removePassenger,
  setDiscount,
  setGroupAge,
  setName,
  setRegistrationNumber,
  setSurname,
} from '../store/userReducer';

const mapStateToProps = (state: State) => ({
  isMultipleUsers: state.userData.passengerInformation.length > 1,
});

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
  removePassenger: (passengerId: number) =>
    dispatch(removePassenger(passengerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
