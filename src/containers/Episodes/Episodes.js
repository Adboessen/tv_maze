import React from "react";
import EpisodeList from "../../containers/EpisodeList/EpisodeList";
import { useParams } from "react-router-dom";

class WrappedEpisodes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: [],
    };
  }
  componentDidMount() {
    const seasonID = this.props.params.id;

    // get the episodes of the show

    fetch(`https://api.tvmaze.com/seasons/${seasonID}/episodes`)
      .then((response) => response.json())

      .then((json) => this.setState({ episodes: json }));
  }
  render() {
    const { episodes } = this.state;

    return (
      <div>
        <EpisodeList list={episodes} />
      </div>
    );
  }
}

function Episodes(props) {
  const params = useParams();

  return <WrappedEpisodes {...props} params={params} />;
}

export default Episodes;
