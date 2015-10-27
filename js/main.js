import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';


import ArtistCollection from './artist_collection';
import ArtistTemplate from './artist_template';
console.log('Hello, World');


$.ajaxSetup({
	headers: {
		'X-Parse-Application-Id': 'Hb9fpOtQM6AIAlMG19jxv1ccpcLMnVTw6ZNhoUYx',
		'X-Parse-REST_API_KEY': 'QjyClBI5IbrTpjL1wpyzVJhlE2WJnfQmh1C6J040'
	}
});

let artist =  new ArtistCollection();

function showArtist(){
	let $ol = $('<ol></ol>');

	artist.each(function(performer){

		let data = artist.toJSON();
		console.log('data', data);
	})
}