// Include React
var React = require("react");

var GuestBook = React.createClass({
	componentWillMount: function() {
		const script = document.createElement("script");

		script.id = "guestbookLogic";
    script.src = "assets/chatroom.js";
    script.async = true;

    document.body.appendChild(script);
  },

	componentWillUnmount: function() {
		firebase.app().delete();

		var targetScript = document.getElementById("guestbookLogic");
		document.body.removeChild(targetScript);
  },

  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Guest Book</h3>
            </div>
            <div className="panel-body">
							<span>Please post a message you would like the bride and groom (and guests) to see!</span>
							<hr />
							<div id='chatRoom'>
								<form id='chatWhite'>
		    					<div>
		        				<div id='messagesDiv' className="msg-wrapper"></div>
		    					</div>
									<div id="nameInputZoneInterior">
			    					<label id='nameLabel'>
			    						<span>Name:</span> 
				    					<input type="text" id='nameInput' placeholder='Who are you?' />
			    					</label>
									</div>
		    					<div>
		    						<label id='messageLabel'>Message:
		        					<textarea id='messageInput' placeholder='What would you like to say?'></textarea>
		    						</label>
		  						</div>
								</form>
								<div id='chatError'>Error: You must enter your name above to post a message.</div>
								<button id='entry'>Submit</button>
							</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GuestBook;