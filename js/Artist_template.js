
function AristTemplate(data){
	if(data.Living === false){
	return`
	<li>${data.Name} died at the age of ${data.Age_at_Death}</li>
}, else {
	return <li>${data.Name}</li>`;
}

export default AristTemplate