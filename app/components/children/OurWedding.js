// Include React
var React = require("react");

var OurWedding = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Our Wedding</h3>
            </div>
            <div className="panel-body">
                Welcome to the website for the wedding of Tyler and Molly Briggs-Yonke!
                <br/>
                <br/>
                We are excited for our big day and can't wait to share it with all of you. Please feel free to browse for details on our celebration, photographs, information on our registry and our wedding playlist!
                <br/>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you,
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Molly and Tyler
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = OurWedding;