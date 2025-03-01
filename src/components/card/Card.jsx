import "./Card.css"
import logo from "./../../../public/images/logo.svg"
import Statistics from "./statistics/Statistics"
import data from "../../../data.json"
export default function Card() {
    return (
        <section className="card-container">
            <div className="upper-card">
                <div className="upper-card-left">
                    <p>My balance</p>
                    <h1>$921.48</h1>
                </div>
                <img src= {logo} alt="logo" />
            </div>
            <div className="main-card">
                    <h1>Spending - Last 7 days </h1>
                    <div className="card-statistics">
                        {data.map((e , index) => {
                            return (
                            <Statistics  key={index} value={e.amount} day={e.day} />
                        )
                        })}
                    </div>
                    <hr />
                    <div className="card-footer">
                        <div className="card-footer-current">
                            <p>Total this month</p>
                            <h1>$478.33</h1>
                        </div>
                        <div className="card-footer-previous">
                            <p>from last month</p>
                            <h1>+2.4%</h1>
                        </div>
                    </div>
            </div>
        </section>
    )
}