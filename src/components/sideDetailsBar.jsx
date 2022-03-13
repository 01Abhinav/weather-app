const SideDetailsBar = ({ info }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  function day() {
    const d = new Date();
    day = d.getDay();
    return weekday[day];
  }
  return (
    <>
      <div className="row m-2 display-1">{info?.name}</div>
      <div className="row m-2 display-6">
        <br></br>
        {Math.round(info?.main.temp - 273)}
        {" °C"}
      </div>
      <div className="row m-2 display-5">{day()}</div>
    </>
  );
};

export default SideDetailsBar;
