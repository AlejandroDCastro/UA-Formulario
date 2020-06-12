
$(document).ready(function() {

	// Funcion para el estado civil
	$("input[name='radio-civil']").click(function() {

		var valor = $("input[name='radio-civil']:checked").val();

		if(valor == "Casado") {
			$("#div-hijos").slideDown('slow');
			$("#div-otro-estado-civil").slideUp('slow');
		} else if(valor == "Otro") {
			$("#div-otro-estado-civil").slideDown('slow');
			$("#div-hijos").slideUp('slow');
		} else {
			$("#div-hijos").slideUp('slow');
			$("#div-otro-estado-civil").slideUp('slow');
		}
	});


	// Funcion para la edad
	$("input[type='number']").change(function() {

		var edad = $("input[type='number']").val();

		if (edad != "") {

			if(edad < 18  ||  edad > 99) {
				$("#warning").show();
			} else {
				$("#warning").hide();
			}
		} else {
			$("#warning").hide();
		}
	});


	// Funcion para los paises
	var paises = [];
	var map = new Map();
	$.getJSON( "countries.json", function( json ) {
	  	
	  	$.each(json,function(index, item){
	  		map.set(item.name,item.languages);
	  		
	  	})

	  	for(var key of map.keys()){
	  		paises.push(key);
	  	}
	  	
	  	$( "#pais" ).autocomplete({
	      	source: paises
	    });
	});


	var idiomas = [];
	$("#pais").focusout(function(){
    	var pais =$("#pais").val();
    	var paisMapa = map.get(pais);
    	$('#idioma').html('');
    	for(var idioma of paisMapa){
    		$('#idioma').append(`<option>${idioma}</option>`)

    	}	
    	
    });


});