// Include React
var React = require("react");

var GuestBook = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Guest Book</h3>
            </div>
            <div className="panel-body">
							<span>Under development</span>
				    {/*<button id='entry'>
						Submit
					</button>
		<form id="nameInputZone">
			<div id="nameInputZoneInterior">
			    <label>
			    		<span>Name:</span> 
				    <input type="text" id='nameInput' placeholder='Name' />
			    </label>
			</div>
		</form>

	<div id='leaveZone'>
		<button id='leaveButton'>Leave</button>
	</div>

	
	<div id='chatError'>Enter your name above to chat.</div>
	<div id='chatRoom'>
		<form id='chatWhite'>
		    <div>
		        <div id='messagesDiv' className="msg-wrapper"></div>
		        <hr />
		    </div>

		    <div>
		    	<label id='messageLabel'>Message :
		        	<textarea id='messageInput' placeholder='Message'></textarea>
		    	</label>
		  	</div>
		</form>
	</div>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GuestBook;