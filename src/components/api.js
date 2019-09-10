import axios from "axios";

export const fetchData = currentCity => {
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=ecf9fbe6ae568f243ec667ec0cb15b00`
    )
    .then(({ data }) => data);
};
