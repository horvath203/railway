import { Button } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TrainCard } from './TrainCard';
import { TrainInfo } from '../types';
import { useNavigate } from 'react-router-dom';
import { SmallSearchBar } from './SmallSearchBar';

type Props = {
  trains: TrainInfo[];
  setChosenTrain: (train: TrainInfo) => void;
};

export const TrainConnections = ({ trains, setChosenTrain }: Props) => {
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate('/checkout');
  };
  return (
    <>
      <SmallSearchBar/>
      <div className="TrainConnectionsContainer">
        <span className="DayStyle">
          <h1>Connection search</h1>
          <h2>Today 07.11.2022</h2>
        </span>
        <Button
          id="previousConnections"
          variant="outlined"
          endIcon={<ExpandLessIcon />}
        >
          Previous connections
        </Button>
        <div className="DayStyle"></div>
      </div>
      <div className="TrainConnectionsContainer">
        {trains.map((train: TrainInfo) => {
          return (
            <div className="TrainCard">
              {' '}
              <TrainCard
                train={train}
                navigateToCheckout={navigateToCheckout}
                setChosenTrain={setChosenTrain}
              />{' '}
            </div>
          );
        })}
      </div>
      <div className="TrainConnectionsContainer">
        <Button
          id="nextConnections"
          variant="outlined"
          endIcon={<ExpandMoreIcon />}
        >
          Next connections
        </Button>
      </div>
    </>
  );
};
