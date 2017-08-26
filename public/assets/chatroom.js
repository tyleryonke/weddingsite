var config = {
    apiKey: "AIzaSyALIQci2e8_QQspj4U2l0P9TGev-fQBGsA",
    authDomain: "weddingchat-1e802.firebaseapp.com",
    databaseURL: "https://weddingchat-1e802.firebaseio.com",
    projectId: "weddingchat-1e802",
    storageBucket: "weddingchat-1e802.appspot.com",
    messagingSenderId: "1045528648680"
  };
 
firebase.initializeApp(config);

var database = firebase.database();
  
//chatroom code
	var myDataRef = database.ref().child("chatroom");
      $("#entry").on("click", function() {
        if ($('#nameInput').val()===''){
      			$('#chatError').show();
      			return
      		}

		    $('#chatError').hide();
		    var name = $('#nameInput').val();
		    var text = $('#messageInput').val();
		    myDataRef.push({name: name, text: text});
		    $('#messageInput').val('');
      });

      $('#messageInput').keypress(function (e) {
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
        $('<div/>').text(text).prepend($('<em/>').text(name+':    ')).append("<hr/>").appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };