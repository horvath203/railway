import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { SubmitHandler, useForm } from 'react-hook-form';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import * as toArray from 'dayjs/plugin/toArray';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, Button, Grid, Stack, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import './SearchBar.css';
import { ConInfo } from '../types';
import cities from '../mock-data/cities.json';
import { RootState } from '../store/store';
import { setSearchInfo } from '../store/searchInfoReducer';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'http2';

const favouriteRoute1 = {
  departureTime: '12:13',
  arrivalTime: '18:03',
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
  connection: ConInfo;
};

export const SearchBar = ({
  dispatch,
  connection,
}: SearchBarProps) => {
  const changeDate = (newDate: Dayjs | null) => {
    if(newDate != null){
    const data = newDate.toDate();
      dispatch({
        ...connection,
        date: data,
      });
    }
    console.log("date change: ", newDate?.toDate(), connection)
  };

  const navigate = useNavigate();
  const navigateToInfo = () => {
    navigate('/connections');
  };

  //const formVals = useSelector((state: RootState) => state.searchInfo);
  //const reduxDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<ConInfo>({ defaultValues: connection });


  const onSubmit: SubmitHandler<ConInfo> = (data) => {
    //reduxDispatch(setSearchInfo(data));
    //console.log(data, connection);
  };
  const SwapDestinations = () => {
    const toDestination = getValues('to');
    setValue('to', getValues('from'));
    setValue('from', toDestination);
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
                type="button"
                variant="outlined"
                style={{ padding: '0px 10px', backgroundColor: 'white' }}
                onClick={() => navigate('/checkout-order')}
              >
                <h2>
                  <span>
                    {favouriteRoute1.fromDestination}
                    {' - '}
                    {favouriteRoute1.toDestination}
                  </span>
                </h2>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                type="button"
                variant="outlined"
                style={{ padding: '0px 10px', backgroundColor: 'white' }}
                onClick={() => navigate('/checkout-order')}
              >
                <h2>
                  <span>
                    {favouriteRoute2.fromDestination}
                    {' - '}
                    {favouriteRoute2.toDestination}
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
                defaultValue={connection.from}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="From"
                    value={connection.from}
                    className="textField"
                  />
                )}
                onChange={(event: any, newValue: any) => {
                  dispatch({
                    ...connection,
                    from: newValue,
                  })
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <Button
                type="button"
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
                defaultValue={connection.to}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="To"
                    value={connection.to}
                    className="textField"
                  />
                )}
                onChange={(event: any, newValue: any) => {
                  dispatch({
                    ...connection,
                    to: newValue,
                  })
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DateTimePicker
                    label="Date&Time picker"
                    value={connection.date}
                    onChange={changeDate}
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
                type="button"
                variant="outlined"
                className="submitbtn"
                size="large"
                onClick={(e) => {
                  navigateToInfo();
                }}
                disabled={!connection.from || !connection.to}
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
