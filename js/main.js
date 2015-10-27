import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';


import ArtistCollection from './artist_collection';
import ArtistTemplate from './artist_template';



$.ajaxSetup({
	headers: {
		'X-Parse-Application-Id': 'KZubsuaEP5mWngRddElnioU22ok9OskFZazZsHeu',
		'X-Parse-REST-API-KEY': 'lHBHuvBoNoPpDNxNgHg5Akjey5zLNJswmL7wgAI8'
	}
});

let artist =  new ArtistCollection();

function showArtist(){
	let $ol = $('<ol></ol>');

	artist.each(function(performer){

		let data = performer.toJSON();

		let $li = $( ArtistTemplate(data) );

		$ol.append($li);
	});
	 $('body').html($ol);
}
artist.fetch().then(showArtist);


// window.ArtistModel = ArtistModel;
// window.ArtistCollection = ArtistCollection;
// window.artist = artist;
// window.showArtist = showArtist;
