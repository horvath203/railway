import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TrainIcon from '@mui/icons-material/Train';
import ScheduleIcon from '@mui/icons-material/Schedule';
import RouteIcon from '@mui/icons-material/Route';
import PersonIcon from '@mui/icons-material/Person';
import { TrainInfo } from '../types';
import { ReactNode, SyntheticEvent, useState } from 'react';
import { RouteInfo } from './RouteInfo';

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type Props = {
  train: TrainInfo;
  navigateToCheckout: () => void;
  setChosenTrain: (train: TrainInfo) => void;
};

export const TrainCard = ({
  train,
  navigateToCheckout,
  setChosenTrain,
}: Props) => {
  const [expand, setExpand] = useState(false);
  const [value, setValue] = useState(0);

  const toggleAccordion = () => {
    setExpand((prev) => !prev);
  };
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Accordion expanded={expand}>
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className="Align">
                <span>
                  {train.departureTime} {train.fromDestination}
                  <br /> {train.arrivalTime} {train.toDestination}
                </span>
                <div className="TrainName">
                  <TrainIcon />
                  <br />
                  <span>
                    {train.trainType} {train.trainNumber}
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="BuyButton">
                <Button
                  variant="contained"
                  fullWidth
                  endIcon={<ShoppingCartIcon />}
                  onClick={() => {
                    setChosenTrain(train);
                    navigateToCheckout();
                  }}
                >
                  <span>
                    {train.price} €<br /> Buy
                  </span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={9}>
              <div className="AlignTime">
                <div className="AlignClocks">
                  <ScheduleIcon />
                  <span>
                    {train.travelDuration.split(':')[0]} hrs.{' '}
                    {train.travelDuration.split(':')[1]} min.
                  </span>
                </div>
                <div>{train.distance} km</div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <Button
                size="small"
                variant="outlined"
                endIcon={<ExpandMoreIcon />}
                onClick={toggleAccordion}
              >
                <span>Details</span>
              </Button>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth"
            >
              <Tab
                icon={<RouteIcon />}
                iconPosition="start"
                label="Route"
                {...a11yProps(0)}
              />
              <Tab
                icon={<PersonIcon />}
                iconPosition="start"
                label="Occupancy"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <RouteInfo stops={train.stops} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TrainIcon /> {train.trainType} {'  '} {train.trainNumber}
            <div style={{ padding: '0px 0px 0px 30px' }}>
              <br />
              <span>1. trieda - {train.capacity.freePlaces1} places</span>
              <hr />
              <span>2. trieda - {train.capacity.freePlaces2} places</span>
              <hr />
              <span>Miest. bicykel - {train.capacity.bicyclePlace} places</span>
            </div>
          </TabPanel>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
