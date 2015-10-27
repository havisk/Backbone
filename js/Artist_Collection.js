import Backbone from 'backbone';

let ArtistCollection = Backbone.Collection.extend({

	url: 'https://api.parse.com/1/classes/Top_Artists',

	parse: function(data){
		return data.results;
	}
});

export default ArtistCollection