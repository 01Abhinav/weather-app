export const setCurrentLocCoords = (e) => {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
  });
};

export const setCurrentLocName = (e) => {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    axios
      .get(
        `https://us1.locationiq.com/v1/reverse.php?key=pk.bdcb7e53e421a0aac6d3409f8b64fed7&lat=${latitude}&lon=${longitude}&format=json`
      )
      // .then((res) =>)
      .catch((err) => console.log(err));
  });
};
