import Backbone from 'backbone';

let ArtistModel = Backbone.Model.extend({

	urlRoot: 'https://api.parse.com/1/classes/top_artists',

	idAttribute: 'objectId'
});

export default ArtistModel;