import "./cards.css"
import Data from "../../data.json"


export const Cards = ({timeframe}) => {


  

  let time = timeframe.daily ?? timeframe.monthly ?? timeframe.weekly;
  
  let time2 = 
  time === "daily" ? "day" :
  time === "monthly" ?"month" :
  time === "weekly" && "week" ;
  


  return (
   

    <div className="main__container">

    {Data.map((data) => (
      <div key={data.title} style={{background:data.color}}  className="activity">
        <img className="activity__image" src={data.imagePath} alt="" />
        <div className="activity__info">
          <p className="activity__title">{data.title} <span className="activity__ellipsis">...</span></p>
          <h1 className="activity__current-time">
            {data.timeframes[time || "weekly"].current}
          </h1>
          <p className="activity__last-time">
            Last {time2 || "week"} - {data.timeframes[time || "weekly"].previous}hrs
          </p>
        </div>
      </div>
    ))}

  </div>
    
  )
}
