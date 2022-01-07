import React from 'react';
import './SeriesList.css'

function SeriesList(props) {
    return (
        <div>
            <ul className = "series-list">
            {props.list.map(series => (
                <li key={series.show.id}>{series.show.name}</li>
            ))}
            </ul>
        </div>
    )
}

export default SeriesList;