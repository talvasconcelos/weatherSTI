export const Result = ({today, data}) => {
  const {date, temp, minMax, wind, hum, hpa} = data
  return (
    <div class="card">
      <p>{date}</p>
      <p>{temp}</p>
      <p>{minMax}</p>
      <p>{wind}</p>
      <p>{hum}</p>
      <p>{hpa}</p>
      <hr/>
    </div>
  )
}
