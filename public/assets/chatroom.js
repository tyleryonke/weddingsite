var config = {
    apiKey: "AIzaSyAxUgMh_dq2yCd_a9AnOLPw-enqUP-_2X4",
    authDomain: "rpsmultiplayer-a3760.firebaseapp.com",
    databaseURL: "https://rpsmultiplayer-a3760.firebaseio.com",
    storageBucket: "rpsmultiplayer-a3760.appspot.com",
    messagingSenderId: "612426642134"
};
 
firebase.initializeApp(config);

var database = firebase.database();
  
//chatroom code
	var myDataRef = database.ref().child("chatroom");
      $("#entry").on("click", function() {
        console.log("blah");
      });

      $('#messageInput').keypress(function (e) {
        console.log("blah");
        if (e.keyCode == 13) {
        	if ($('#nameInput').val()===''){
      			$('#chatError').show();
      			return
      		}

		    $('#chatError').hide();
		    var name = $('#nameInput').val();
		    var text = $('#messageInput').val();
		    myDataRef.push({name: name, text: text});
		    $('#messageInput').val('');
        }
      });
      myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };

//end chatroom code