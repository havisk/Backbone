
function ArtistTemplate(data){

	if(data.Living === false){
	return `
	<li>${data.Name} on a scale of '1' to '10' has a rating of ${data.Rating}, died at the age of ${data.Age_at_Death}</li>
	`;
	} else{
	return `
	<li>${data.Name} on a scale of '1' to '10' has a rating of ${data.Rating}, still doing ${data.Genre}</li>
	`;
	}
};

export default ArtistTemplate;