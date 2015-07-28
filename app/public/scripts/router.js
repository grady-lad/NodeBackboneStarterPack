define(["backbone", "events"], function(Backbone, Events) {
	var photoRouter = Backbone.Router.extend({
		initialize: function() {
			var self = this;
		    Events.on("router:navigate", function(url) {
		        self.navigate(url, { trigger: true });
		      });
	    },
	    
	    routes: {
	    	//Add Routes here
	    }
	});
	return photoRouter;
});