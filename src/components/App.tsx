import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Footer';
import { HeaderMainPage } from './HeaderMainPage';
import { TrainConnections } from './TrainConnections';
import { TrainInfo, UserData } from '../types';
import Checkout from '../containers/Checkout';
import { Order } from './Order';
import SearchBar from '../containers/SearchBar';
import { ConInfo } from '../types';
import { Summary } from './Summary';
import { Provider } from 'react-redux'
import { store } from '../store/store';
import { InformationBlock } from './InformationBlock';

type Props = {
  trains: TrainInfo[];
  userData: UserData;
  setChosenTrain: (train: TrainInfo) => void;
};

export const App = ({ trains, userData, setChosenTrain }: Props) => {
  const [connections, setConnections] = useState<ConInfo>(() => {
    const curD = new Date();
    const defVal: ConInfo = {
      from: '',
      to: '',
      date: curD,
    };
    return defVal;
  });

  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <HeaderMainPage />
        <Routes>
          <Route
            path="/railway/"
            element={
              <>
                <SearchBar dispatch={setConnections} connection = {connections} />
                <InformationBlock />
              </>
            }
          />
          <Route
            path="/connections"
            element={
              <TrainConnections
                dispatch={setConnections}
                connection = {connections}
                trains={trains}
                setChosenTrain={setChosenTrain}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout trainInfo={trains[0]} />}
          />
          <Route
            path="/checkout-order"
            element={<Order trainInfo={trains[0]} userData={userData} />}
          />
          <Route path="/summary" element={<Summary trainInfo={trains[0]} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
    </Provider>
  );
};

export default App;
