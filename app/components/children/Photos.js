// Include React
var React = require("react");

var Photos = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Photos</h3>
            </div>
            <div className="panel-body">
              <img className="pic" src={require("../../../public/assets/pic1.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic2.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic3.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic5.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic6.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic7.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic10.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic11.jpg")}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Photos;