// Include React
var React = require("react");

var Playlist = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Playlist</h3>
            </div>
            <div className="panel-body centerText">
              Here are some songs to get you in the dancing mood!
              <br />
              <iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3A123649382%3Aplaylist%3A55QSFwoDcDdAtaYII0e305" width="1000" height="380" frameborder="0" allowtransparency="true"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Playlist;