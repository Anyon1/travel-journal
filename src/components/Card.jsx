import React from "react"

export default function Card(props) {
    return (
        <div className="outer-box">
            <div>
                <img src={props.img} alt={props.title} className="card--img" />
            </div>
            <div>

                <span>
                    <img src="/location-icon.svg" alt="" className="location" />{props.location}<a href={props.mapLink} className="google-link">View on Google Maps</a>
                </span>

                <h1 className="title">{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p className="description">{props.description}</p>
            </div>

        </div>

    )
}
