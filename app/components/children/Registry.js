// Include React
var React = require("react");

var Registry = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Registry</h3>
            </div>
            <div className="panel-body centerText">
              Follow the links below to our registries!
              <br />
              <a href="https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=544700134&eventType=Wedding&pwsurl=" target="_blank" className="btn btn-primary btn-lg"><img className="registryicon" src={require("../../../public/assets/bbb.png")} /></a>
              <a href="https://www.amazon.com/wedding/tyler-yonke-molly-briggs-aurora-may-2018/registry/2VRP8CIKO1WK2" target="_blank" className="btn btn-primary btn-lg"><img className="registryicon" id="amazon" src={require("../../../public/assets/amazon.png")} /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Registry;