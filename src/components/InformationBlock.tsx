import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import LuggageIcon from '@mui/icons-material/Luggage';

export const InformationBlock = () => {
  return (
    <div style={{ display: 'block', color: '#002664' }}>
      <Typography
        style={{ padding: '40px 0px 0px 20%' }}
        gutterBottom
        variant="h5"
        component="div"
      >
        Take with you
      </Typography>
      <div className="InformationCardContainer">
        <Card sx={{ maxWidth: 305 }}>
          <PetsIcon sx={{ fontSize: 50, margin: '30px 0px 0px 15px' }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Transporting animals
            </Typography>
            <Typography variant="body2">
              On the trains of Železničná spoločnosť Slovensko you can transport
              your animal pets in the 2nd class carriages.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 305 }}>
          <PedalBikeIcon sx={{ fontSize: 50, margin: '30px 0px 0px 15px' }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bicycles
            </Typography>
            <Typography variant="body2">
              We offer the transportation of bikes or e-bikes in almost all
              trains operated by Železničná spoločnosť Slovensko.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 305 }}>
          <LuggageIcon sx={{ fontSize: 50, margin: '30px 0px 0px 15px' }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Luggage, prams and ski
            </Typography>
            <Typography variant="body2">
              Are you travelling with luggage? If your luggage is of a smaller
              size, you can carry it with you in the compartment or open-space
              coach, for free. Bigger pieces of luggage can be transported in
              designated areas or in the mobile luggage storage.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
