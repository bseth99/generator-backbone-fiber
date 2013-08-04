define(['backbone'], function( Backbone ) {

   var Model = Backbone.Model.extend({

      defaults: {

      }

   });

   return {

      Model: Model,

      Collection: Backbone.Collection.extend({

         model: Model

      })
   }

});