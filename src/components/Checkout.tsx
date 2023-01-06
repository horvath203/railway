import { Button, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { PassengerData } from './checkout/PassengerData';
import { TrainTicketSelection } from './checkout/TrainTicketSelection';
import { Payment } from './checkout/Payment';
import { useNavigate } from 'react-router-dom';
import { PassengerInformation, UserData } from '../types';
import { TrainInfo } from '../types';

type Props = {
  userData: UserData;
  trainInfo: TrainInfo;
  setEmail: (email: string) => void;
  addPassenger: (passenger: PassengerInformation) => void;
};

export const Checkout = ({ userData, setEmail, addPassenger }: Props) => {
  const navigate = useNavigate();
  const navigateToOrder = () => {
    navigate('/checkout-order');
  };
  const navigateToInfo = () => {
    navigate('/connections');
  };
  return (
    <div style={{ padding: '40px 0 0 0' }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={6}
        columns={20}
      >
        <Grid item xs={10}>
          <PassengerData
            userData={userData.passengerInformation}
            userEmail={userData.email}
            setEmail={setEmail}
            addPassenger={addPassenger}
          />
          <TrainTicketSelection />
          <Payment />
          <div className="AlignSecondButton">
            <Button
              variant="outlined"
              size="large"
              startIcon={<ArrowBackIosIcon />}
              onClick={navigateToInfo}
            >
              Back
            </Button>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIosIcon />}
              onClick={navigateToOrder}
            >
              Continue
            </Button>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="SummaryInCheckout">
            <span>Price: 18.68 €</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
