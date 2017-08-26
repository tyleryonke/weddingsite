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
              <div id="detailsText">
                Copley Theatre (Paramount) in Aurora, IL
                <br /><br />
                Friday, May 18th, 2018
                <br /><br />
                Doors open at 5 p.m.
                <br /><br />
                Ceremony begins at 5:30 p.m.
                <br /><br />
                Cocktails and reception to follow
                <br /><br />
                Semi-formal attire
              </div>

              <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11904.981305604299!2d-88.3142326!3d41.7583682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a6f28a4936d334d!2sParamount+Theatre!5e0!3m2!1sen!2sus!4v1501626092446" frameBorder="0" style={{border: 0}} allowFullScreen>
            </iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

/*Welcome to the website for the wedding of Tyler and Molly Briggs-Yonke!
<br/>
<br/>
We are excited for our big day and can't wait to share it with all of you. Please feel free to browse for details on our celebration, photographs, information on our registry and our wedding playlist!
<br/>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you,
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Molly and Tyler*/

module.exports = OurWedding;