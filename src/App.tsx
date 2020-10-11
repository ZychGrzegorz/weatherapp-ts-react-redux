import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import Search from "./components/Search";
// import Alert from "./components/Alert";
import Weather from "./components/Weather";
import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/weatherActions";
import Alert from "./components/Alert";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="appContainer">
      <Search title="Enter city name and press search button" />
      {loading ? (
        <h2 className="h2">Loading...</h2>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}
      {alertMsg && (
        <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && (
        <Alert
          message={error}
          onClose={() => {
            dispatch(setError());
          }}
        />
      )}
    </div>
  );
};

export default App;
