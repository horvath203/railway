import { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Sheet from '@mui/joy/Sheet';
import AddIcon from '@mui/icons-material/Add';
import UserInfo from '../../containers/UserInfo';
import { PassengerInformation } from '../../types';

type Props = {
  userData: PassengerInformation[];
  userEmail: string;
  setEmail: (email: string) => void;
};

export const PassengerData = ({ userData, userEmail, setEmail }: Props) => {
  const [email, setEm] = useState(userEmail);
  const newPassInfo = {
    name: '',
    surname: '',
    discount: 'NO DISCOUNT',
    passengerGroup: '3',
  };
  console.log({ userData });
  return (
    <>
      <Sheet
        variant="outlined"
        style={{ padding: '30px 20px 20px 20px', margin: '0px 0px 30px 0px' }}
      >
        <Typography
          sx={{
            width: '33%',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
        >
          <h3>Passenger information</h3>
        </Typography>
        <span>
          Please, fill in the passenger data to avoid abuse of your documents.
          The name will be directly on your travel document.
        </span>
        <br />
        {userData.map((passenger, idx) => {
          return <UserInfo passengerInfo={passenger} id={idx} />;
        })}
        {/*        onClick={() => dispatch(addPassenger())}*/}
        <Button style={{ padding: '15px 0 0 25px' }} startIcon={<AddIcon />}>
          Add next passenger
        </Button>
        <br />
        <Typography style={{ padding: '15px 0 0 15px' }}>
          The purchased tickets will be sent to the entered e-mail address.
        </Typography>
        <div style={{ padding: '7px 0 0 30px' }}>
          <TextField
            style={{ width: '270px' }}
            id="email-field"
            label="e-mail"
            variant="outlined"
            size="small"
            value={email}
            onChange={(event) => setEm(event.target.value)}
            onBlur={(event) => setEmail(event.target.value)}
          />
        </div>
      </Sheet>
    </>
  );
};
