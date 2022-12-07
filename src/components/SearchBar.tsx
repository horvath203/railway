import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { SubmitHandler, useForm } from 'react-hook-form';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, Button, Grid, Stack, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import './SearchBar.css';
import { ConInfo } from '../types';
import cities from '../mock-data/cities.json';

type FormValues = {
  from: string;
  to: string;
  day: number;
  month: number;
  hour: number;
  minute: number;
};

const favouriteRoute1 = {
  departureTime: '14:13',
  arrivalTime: '20:03',
  fromDestination: 'Bratislava',
  toDestination: 'Košice',
};

const favouriteRoute2 = {
  departureTime: '08:13',
  arrivalTime: '12:03',
  fromDestination: 'Košice',
  toDestination: 'Bratislava',
};

type SearchBarProps = {
  dispatch: React.Dispatch<React.SetStateAction<ConInfo>>;
  from: string;
  to: string;
  setFrom: (from: string) => void;
  setTo: (to: string) => void;
};

export const SearchBar = ({dispatch, from, to, setFrom, setTo}: SearchBarProps) => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(new Date()));

  const handleChange = (newDate: Dayjs | null) => {
    setDate(newDate);
  };

  const navigate = useNavigate();
  const navigateToInfo = () => {
    navigate('/connections');
  };
  const DefVals = () => {
    const curD = new Date();
    const defVal: FormValues = {
      from: '',
      to: '',
      day: curD.getDate(),
      month: curD.getMonth() + 1,
      hour: curD.getHours(),
      minute: curD.getMinutes(),
    };
    return defVal;
  };
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: DefVals() });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch({
      from: data.from,
      to: data.to,
      month: data.month,
      day: data.day,
      hour: data.hour,
      minute: data.minute,
    });
  };
  const SwapDestinations = () => {
    const tmp = getValues('to');
    setValue('to', getValues('from'));
    setValue('from', tmp);
  };

  return (
    <div className="SearchContainer">
      <div className="SearchBar">
        <form onSubmit={handleSubmit(onSubmit)} className="searchForm">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1>Choose your favorite route:</h1>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                style={{ padding: '0px 10px', backgroundColor: 'white' }}
                onClick={() => navigate('/checkout-order')}
              >
                <h2>
                  <span>
                    {favouriteRoute1.fromDestination}
                    {' - '}
                    {favouriteRoute1.toDestination}
                    <br /> {favouriteRoute1.departureTime}
                    {' - '}
                    {favouriteRoute1.arrivalTime}
                  </span>
                </h2>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                style={{ padding: '0px 10px', backgroundColor: 'white' }}
                onClick={() => navigate('/checkout-order')}
              >
                <h2>
                  <span>
                    {favouriteRoute2.fromDestination}
                    {' - '}
                    {favouriteRoute2.toDestination}
                    <br /> {favouriteRoute2.departureTime}
                    {' - '}
                    {favouriteRoute2.arrivalTime}
                  </span>
                </h2>
              </Button>
            </Grid>
            <Grid item xs={4}></Grid>
            <hr className="line" />
            <Grid item xs={12}>
              <h1 className="searchTitle">Connections and tickets:</h1>
            </Grid>
            <Grid item xs={5}>
              <Autocomplete
                freeSolo
                id="fromDestination"
                includeInputInList
                options={cities.map((option) => option.city)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="From"
                    value={from}
                    className="textField"
                    onBlur={(event) => setFrom(event.target.value)}
                  />
                )}
              />
            </Grid>
            <Grid item xs={1}>
              <Button
                size="large"
                className="swapIcon"
                onClick={SwapDestinations}
              >
                <RouteOutlinedIcon fontSize="large" />
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Autocomplete
                freeSolo
                id="toDestination"
                includeInputInList
                options={cities.map((option) => option.city)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="To"
                    value={to}
                    className="textField"
                    onBlur={(event) => setTo(event.target.value)}
                  />
                )}
              />
            </Grid>
            <Grid item xs={5}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DateTimePicker
                    label="Date&Time picker"
                    value={date}
                    onChange={handleChange}
                    renderInput={(params) => (
                      <TextField {...params} className="textField" />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={2.5}></Grid>
            <Grid item xs={4} style={{ padding: '16px 0px 0px 9px' }}>
              <Button
                variant="outlined"
                className="submitbtn"
                size="large"
                onClick={() => {
                  navigateToInfo();
                }}
                disabled={!from || !to}
              >
                Search Connections
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};
