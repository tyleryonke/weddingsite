// Include React
var React = require("react");

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <div>
            <img className="topPic" id="tyTop" src={require("../../public/assets/tylerpole.jpg")}/>
            <div id="midText">
              <h2><strong>Tyler and Molly's Wedding</strong></h2>
              <br />
              <p className="subtitle" id="topInfo"><em>May 18th, 2018 &#9679; Aurora, IL</em></p>
              <p className="subtitle" id="countdown"></p>
            </div>
            <img className="topPic" id="molTop" src={require("../../public/assets/mollypole.jpg")}/>          
          </div>
          <hr />
          <p>
            <a href="#/OurWedding" className="btn btn-primary btn-lg link">Our Wedding</a>
            <a href="#/Accomodations" className="btn btn-primary btn-lg link">Accomodations</a>
            <a href="#/WeddingParty" className="btn btn-primary btn-lg link">Wedding Party</a>
            <a href="#/Photos" className="btn btn-primary btn-lg link">Photos</a>
            <a href="#/Registry" className="btn btn-primary btn-lg link">Registry</a>
            <a href="#/GuestBook" className="btn btn-primary btn-lg link" id="btn-guestbook">Guest Book</a>
            <a href="#/Playlist" className="btn btn-primary btn-lg link" id="btn-playlist"><img className="icon" src={require("../../public/assets/spotify.png")}/>Playlist</a>
            
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
