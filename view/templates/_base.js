define( ['backbone'], function( Backbone ) {

   /*
   *  Defines view <%= name %>
   *
   */
   return Backbone.View.extend({

      setup: function() {
         // Initialize instance variables
      },

      beforeRender: function() {
         // Modify stuff; cancel rendering
      },

      afterRender: function() {
         // Initialize widgets, if any
         // Cache DOM references
      },

      events: {
         // Data and state changes
      },

      destroy: function() {
         // Delete instance variables, if needed
      }
   });
});
