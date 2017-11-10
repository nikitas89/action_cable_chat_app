App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    // alert('connected');
  },
  disconnected: function() {},
  received: function(data) {
    // alert('new msg');
    // alert(data.content);

    if (data.content.blank == null) {
$('#messages-table').append('<div class="message">' + '<div class="message-user">' + data.username + ":" + '</div>' + '<div class="message-content">' + data.content + '</div>' + '</div>');
}

  }
});
