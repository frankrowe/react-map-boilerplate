var React = require('react');

var Map = React.createClass({
  componentDidMount: function() {
    this.map = L.map(this.refs.map).setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([51.5, -0.09]).addTo(this.map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  },
  render: function() {
    return (
      <div className="map" ref="map"></div>
    )
  }
})

module.exports = Map
