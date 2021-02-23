function getIcon(temp) {
  switch (true) {
    case temp < 0:
      return (<i class="fas fa-icicles"></i>)
    case temp < 10:
      return (<i class="far fa-snowflake"></i>)
    case temp > 25:
      return (<i class="fas fa-fire"></i>)
    default:
      return (<i class="far fa-sun"></i>)
  }
}

export const Result = ({ today, data }) => {
  const { date, temp, minMax, wind, hum, hpa } = data;
  let dateString;
  const humanDate = new Date(date * 1000);
  const day = (`0${  humanDate.getDate()}`).slice(-2);
  const month = (`0${  humanDate.getMonth() + 1}`).slice(-2);
  const year = humanDate.getFullYear()
  dateString = today ? `${day}/${month}/${year}` : `${day}/${month}`;
  return (
    <div class={`card ${today ? "today" : ""}`}>
      <div class="date">
        {today && <p>Today</p>}
        <p>{dateString}</p>
      </div>
      <div class="temp">
        {getIcon(Math.round(temp))}
        <span>{Math.round(temp)}&deg;</span>
      </div>
      <div class="resume">
        <p>
          <i class="fas fa-temperature-low" />
          <span>{minMax[0]}&deg; / {minMax[1]}&deg;</span>
        </p>
        <p>
          <i class="fas fa-wind" />
          <span>{wind} m/s</span>
        </p>
        <p>
          <i class="fas fa-tint" />
          <span>{hum}%</span>
        </p>
        <p>
          <i class="fas fa-long-arrow-alt-down" />
          <span>{hpa} hPa</span>
        </p>
      </div>
    </div>
  );
};
