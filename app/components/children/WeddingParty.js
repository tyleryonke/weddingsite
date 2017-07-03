// Include React
var React = require("react");

var Registry = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Wedding Party</h3>
            </div>
            <div className="panel-body">
              <div className="col-md-6">
                  <div className="personName">
                    <strong>Molly Briggs</strong> - <em>Bride</em>
                  </div>
                  <img className="personPic" src={require("../../../public/assets/molly.jpg")} />
                  <p className="personDesc">Fun fact: Molly is the cutest cutie in the world!</p>
              </div>
              <div className="col-md-6" id="rightpanel">
                  <div className="personName">
                    <strong>Tyler Yonke</strong> - <em>Groom</em>
                  </div>
                  <img className="personPic" src={require("../../../public/assets/tyler.jpg")} />
                  <p className="personDesc">Fun fact: Tyler is <em>also</em> the cutest cutie in the world!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Registry;