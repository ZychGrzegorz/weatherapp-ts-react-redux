import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/actions/alertActions";
import { getWeather, setLoading } from "../store/actions/weatherActions";
type SearchProps = {
  title: string;
};

const Search: React.FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === "") {
      return dispatch(setAlert("City is required"));
    }
    dispatch(setLoading);
    dispatch(getWeather(city));
    setCity("");
  };
  return (
    <div>
      <div>
        <h1 className="title">{title}</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name=""
            className="inpiut"
            id=""
            placeholder="enter city name"
            value={city}
            onChange={changeHandler}
          />
          <button className="button">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
