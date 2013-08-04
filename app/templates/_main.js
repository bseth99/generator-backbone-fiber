
require( [
   'jquery',
   'backbone',
   'underscore',
   'backbone-fiber',
   'text'
],
function( $, Backbone, _ ) {

      /* Configure components */

      _.templateSettings.variable = 'data';

      Backbone.Fiber.start();
});