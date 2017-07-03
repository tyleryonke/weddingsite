// Include React
var React = require("react");

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h2><strong>Molly and Tyler's Wedding</strong></h2>
          <p className="subtitle"><em>An event to end all weddings (or at least top them)</em></p>
          <p className="subtitle" id="countdown"></p>
          <hr />
          <p>
            <a href="#/OurWedding" className="btn btn-primary btn-lg">Our Wedding</a>
            <a href="#/Details" className="btn btn-primary btn-lg">Details</a>
            <a href="#/Photos" className="btn btn-primary btn-lg">Photos</a>
            <a href="#/Registry" className="btn btn-primary btn-lg">Registry</a>
            <a href="#/GuestBook" className="btn btn-primary btn-lg">Guest Book</a>
            <a href="#/WeddingParty" className="btn btn-primary btn-lg">Wedding Party</a>
            <a href="#/Playlist" className="btn btn-primary btn-lg" id="btn-playlist"><img className="icon" src={require("../../public/assets/spotify.png")}/>Playlist</a>
            
          </p>
        </div>

        <div className="row">

          {/* This code will dump the correct Child Component */}
          {this.props.children}

        </div>

      </div>

    );
  }
});

// Export the componen back for use in other files
module.exports = Main;
