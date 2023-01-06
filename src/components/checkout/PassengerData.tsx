import { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Sheet from '@mui/joy/Sheet';
import AddIcon from '@mui/icons-material/Add';
import UserInfo from '../../containers/UserInfo';
import { PassengerInformation } from '../../types';
import './PassengerData.css';

type Props = {
  userData: PassengerInformation[];
  userEmail: string;
  setEmail: (email: string) => void;
  addPassenger: (passenger: PassengerInformation) => void;
};

export const PassengerData = ({
  userData,
  userEmail,
  setEmail,
  addPassenger,
}: Props) => {
  const [email, setEm] = useState(userEmail);
  const isMultipleUsers: boolean = userData.length > 1;
  const newPassInfo: PassengerInformation = {
    id: Math.max(...userData.map((user) => user.id)) + 1,
    name: '',
    surname: '',
    discount: '0',
    passengerGroup: 3,
  };

  return (
    <>
      <Sheet variant="outlined" className="ContainerPlace">
        <Typography className="HeaderStyle">
          <h3>Passenger information</h3>
        </Typography>
        <span>
          Please, fill in the passenger data to avoid abuse of your documents.
          The name will be directly on your travel document.
        </span>
        <br />
        <div className={`${isMultipleUsers ? 'MultipleUsers' : 'SingleUser'}`}>
          {userData.map((passenger, idx) => {
            return <UserInfo passengerInfo={passenger} id={idx} />;
          })}
        </div>
        <Button
          className="ButtonPadding"
          startIcon={<AddIcon />}
          onClick={() => addPassenger(newPassInfo)}
        >
          Add next passenger
        </Button>
        <br />
        <Typography className="TextPadding">
          The purchased tickets will be sent to the entered e-mail address.
        </Typography>
        <div className="BoxPadding">
          <TextField
            className="TextFieldWidth"
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
