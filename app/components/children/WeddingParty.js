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
              <div className="col-md-6" id="leftpanel">
                  <div className="personName">
                    <strong>Molly Briggs</strong> - <em>Bride</em>
                  </div>
                  <img className="personPic" src={require("../../../public/assets/molly.jpg")} />
                  <p className="personDesc">Fun fact: Molly is the cutest cutie in the world!</p>
                  <hr />

                  <div className="personName">
                    <strong>Kathy Briggs</strong> - <em>Maid of Honor</em>
                    <br />
                    <span className="relation">Sister of the Bride</span>
                  </div>
                  <img className="personPic" src={require("../../../public/assets/kathy.jpg")} />
                  <p className="personDesc">Fun fact: Kathy lived in Germany for a year!</p>
                  <hr />

                  <div className="personName">
                    <strong>Emily Kuchenbrod</strong> - <em>Bridesmaid</em>
                    <br />
                    <span className="relation">Friend of the Bride and Groom</span>
                  </div>
                  <img className="personPic" src={require("../../../public/assets/emily.jpg")} />
                  <p className="personDesc">Fun fact: If Emily weren't a teacher, she'd want to be a bartender!</p>
                  <hr />

                  <div className="personName">
                    <strong>Carissa Stone</strong> - <em>Bridesmaid</em>
                    <br />
                    <span className="relation">Friend of the Bride</span>
                  </div>
                  <img className="personPic" src={require("../../../public/assets/carissa.jpg")} />
                  <p className="personDesc">Fun fact: Carissa is crafty and has<br />a tattoo of her cat, Friday!</p>
                  <hr />

                  <div className="personName">
                    <strong>Alicia Sage</strong> - <em>Bridesmaid</em>
                    <br />
                    <span className="relation">Sister of the Groom</span>
                  </div>
                  <img className="personPic" src={require("../../../public/assets/alicia.jpg")} />
                  <p className="personDesc">Fun fact: Alicia makes a mean razzmatazz bar!</p>
                  <hr />

                  <div className="personName">
                    <strong>Catherine Anton</strong> - <em>Bridesmaid</em>
                    <br />
                    <span className="relation">Sister-In-Law of the Groom</span>
                  </div>
                  <img className="personPic" src={require("../../../public/assets/catherine.jpg")} />
                  <p className="personDesc">Fun fact: Catherine is a Pure Barre addict<br />and wannabe wine connoisseur!</p>
              </div>
              <div className="col-md-6" id="rightpanel">
                  <div className="personName">
                    <strong>Tyler Yonke</strong> - <em>Groom</em>
                  </div>
                  <img className="personPic" src={require("../../../public/assets/tyler.jpg")} />
                  <p className="personDesc">Fun fact: Tyler is <em>also</em> the cutest cutie in the world!</p>
                  <hr />

                  <div className="personName">
                    <strong>Andrew Donald</strong> - <em>Best Man</em>
                    <br />
                    <span className="relation">Friend of the Groom and Bride</span>
                  </div>
                  <img className="personPic" src={require("../../../public/assets/andrew.jpg")} />
                  <p className="personDesc">Fun fact: Andrew has a black lab named Ava!</p>
                  <hr />

                  <div className="personName">
                    <strong>Matt Anton</strong> - <em>Groomsman</em>
                    <br />
                    <span className="relation">Brother of the Groom</span>
                  </div>
                  <img className="personPic" src={require("../../../public/assets/matt.jpg")} />
                  <p className="personDesc">Fun fact: Matt is left handed and loves solo camping!</p>
                  <hr />

                  <div className="personName">
                    <strong>Nick Anton</strong> - <em>Groomsman</em>
                    <br />
                    <span className="relation">Brother of the Groom</span>
                  </div>
                  <img className="personPic" src={require("../../../public/assets/nick.jpg")} />
                  <p className="personDesc">Fun fact: Nick is a frequent flyer!</p>
                  <hr />

                  <div className="personName">
                    <strong>Jeff Sage</strong> - <em>Groomsman</em>
                    <br />
                    <span className="relation">Brother-In-Law of the Groom</span>
                  </div>
                  <img className="personPic" src={require("../../../public/assets/jeff.jpg")} />
                  <p className="personDesc">Fun fact: Jeff owns a tree-trimming chainsaw!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Registry;