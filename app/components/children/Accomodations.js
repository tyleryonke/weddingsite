// Include React
var React = require("react");

var Accomodations = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Accomodations</h3>
            </div>
            <div className="panel-body">
              <div id="accomodationsText">
                Our host hotel for the wedding will be 
                <br />
                the Holiday Inn Express &amp; Suites - Aurora, IL.
                <br /><br />
                The hotel is located just three blocks from the venue
                <br />
                at 111 N. Broadway.
                <br /><br />
                You can book our special rate:
                <br />
                Over the phone at 630-896-2800
                <br />
                by mentioning rate code IL4D4
                <br />
                or
                <br />
                Online by following <a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/aurora/auzar/hoteldetail?qAdlt=1&qBrs=6c.hi.ex.rs.ic.cp.in.sb.cw.cv.ul.vn.ki.sp.nd.ct&qChld=0&qCpid=100235822&qFRA=1&qGRM=0&qIta=99502056&qPSt=0&qRRSrt=rt&qRef=df&qRms=1&qRpn=1&qRpp=20&qSHp=1&qSmP=3&qSrt=sBR&qWch=0&srb_u=1&icdv=99502056" target="_blank">this link</a>.
                <br />
                Please make sure you type our names in 
                <br />
                the Special Request section of the reservation.
                <br /><br />
                The hotel is not holding a block of rooms,
                <br />
                so we encourage anyone looking to book a room to do so early!
              </div>

              <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.2405884882746!2d-88.31373653490934!3d41.758470361680544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880efabb42a82417%3A0xbc81141d6d4747e0!2sHoliday+Inn+Express+%26+Suites+Aurora+-+Naperville!5e0!3m2!1sen!2sus!4v1502220030702" frameBorder="0" allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

/*<strong>When:</strong> 5 p.m. Friday, May 18th 2018
<br/>
<strong>Where:</strong> Meyer Ballroom at Paramount Theater
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 E. Galena Blvd, Aurora, IL 60506
<br/>
<strong>Parking:</strong> Complimentary valet parking is available at Hollywood Casino
<br/>
<strong>What:</strong> A celebration of Molly and Tyler's love for each other,
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;followed by dinner and dancing!
<br/>
<strong>Accomodations:</strong> Hotel information forthcoming.*/

module.exports = Accomodations;