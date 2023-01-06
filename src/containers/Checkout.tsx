import { connect } from 'react-redux';
import { Dispatch, PassengerInformation, State } from '../types';
import { setEmail, addPassenger } from '../store/userReducer';
import { Checkout } from '../components/Checkout';

const mapStateToProps = (state: State) => ({
  userData: state.userData,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setEmail: (email: string) => dispatch(setEmail(email)),
  addPassenger: (passenger: PassengerInformation) =>
    dispatch(addPassenger(passenger)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
