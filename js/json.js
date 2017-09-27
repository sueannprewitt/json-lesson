$().ready(function(){
	$("button").click(function() {

		$.getJSON(
			"http://localhost:51464/Students/List",
			function(students){
				console.log(students);
			}
			);
	});



});