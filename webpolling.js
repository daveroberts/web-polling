if (Meteor.isClient) {
  Template.mystuff.stuffs = function() {
    return Stuffs.find({});
  }
  Template.mystuff.events({
    'click .remove': function() {
      Stuffs.remove(this._id);
    },
    'keydown input#message' : function(event) {
      if (event.which == 13) {
        var message = document.getElementById('message');
        if (message.value != ''){
          Stuffs.insert({
            name: message.value
          });
          document.getElementById('message').value = '';
          message.value = '';
        }
      }
    }
  });
  /*Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });*/
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
