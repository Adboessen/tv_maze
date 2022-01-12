import React from "react";
import SeriesList from "../../components/SeriesList/SeriesList.js";
class Series extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
    };
    this.onSeriesInputChange = this.onSeriesInputChange.bind(this);
  }

  onSeriesInputChange(event) {
    fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
      .then((response) => response.json())
      .then((json) => this.setState({ series: json }));
    console.log(event);
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        The length of series array - {this.state.series.length}
        <div>
          <input type="text" onChange={this.onSeriesInputChange} />
        </div>
        <SeriesList list={this.state.series} />
      </div>
    );
  }
}

export default Series;
