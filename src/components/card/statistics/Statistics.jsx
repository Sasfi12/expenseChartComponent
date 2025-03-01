import "./Statistics.css"
export default function Statistics({ value , day , first }) {
    return (
        <div className="statistic-bar-container">
            <div className="statistic-number">{value}</div>
            <div className="statistic-bar" style={{height: `${value * 2}px`}} id={first ?"isFirst" : ""}>

            </div>
            <div className="statistic-day">
                {day}
            </div>
        </div>
    )

} 