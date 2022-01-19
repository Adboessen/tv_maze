import React from "react";

function EpisodeListItem({ episode }) {
  const episodeID = episode.id;
  const episodeName = episode.name;
  const episodeNumber = episode.number;
  const episodeAirDate = episode.airdate;

  let episodeImage = "https://place-hold.it/107x150";

  try {
    episodeImage = episode.image.medium;
  } catch (e) {}

  return (
    <li key={episodeID}>
      <div className="ib w50">
        <img src={episodeImage} alt="" />
      </div>

      <div className="ib w50">
        <h2>Name: {episodeName}</h2>

        <div>Episode Number: {episodeNumber}</div>

        <div>Air Date: {episodeAirDate}</div>
      </div>
    </li>
  );
}

function EpisodeList(props) {
  return (
    <div className="show-list-container">
      <ul className="show-list">
        {props.list.map((episode) => (
          <EpisodeListItem episode={episode} key={episode.id} />
        ))}
      </ul>
    </div>
  );
}

export default EpisodeList;
