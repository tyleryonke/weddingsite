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
            <div className="panel-body centerText" id="photoText">
              Here are a few pictures of us from over the years!
              <br /><br />
              <img className="pic" src={require("../../../public/assets/pic1.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic2.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic3.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic5.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic6.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic7.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic10.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pic11.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pics/pic4.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pics/pic8.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pics/pic9.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pics/pic12.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pics/pic13.jpg")}/>
              <img className="pic" src={require("../../../public/assets/pics/pic14.jpg")}/>
              {/*<img className="pic" src={require("../../../public/assets/pics/pic15.jpg")}/>*/}
              <img className="pic" src={require("../../../public/assets/pics/pic16.jpg")}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Photos;