// Include React
var React = require("react");

var Details = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Details</h3>
            </div>
            <div className="panel-body">
              <strong>When:</strong> 5 p.m. Friday, May 18th 2018
              <br/>
              <strong>Where:</strong> Meyer Ballroom at Paramount Theater
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 E. Galena Blvd, Aurora, IL 60506
              <br/>
              <strong>Parking:</strong> Complimentary valet parking is available at Hollywood Casino
              <br/>
              <strong>What:</strong> A celebration of Molly and Tyler's love for each other, followed by dinner and dancing!
              <br/>
              <strong>Accomodations:</strong> A block of rooms has been reserved at the Holiday Inn Express &amp; Suites - Aurora/Naperville.
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Details;