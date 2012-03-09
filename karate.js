
var init_question = function() {
	var descriptions = [
		"Debout, les pieds l'un contre l'autre",
		"Debout, les talons joints, les pointes des pieds écartées",
		"Debout, un pied devant l'autre, formant un L",
		"Debout, un pied devant l'autre, formant un T",
		"Debout, les pieds écartés et parallèles"
	];
	var positions = [
		"HEISOKU DACHI",
		"MUSUBI DACHI",
		"REINOJI DACHI",
		"TEÏJI DACHI",
		"HEIKO DACHI"
	];

	var index = Math.round( Math.random( ) * ( descriptions.length - 1 ) );

	var question_element = document.getElementById( "question" );
	question_element.innerHTML = descriptions[ index ];
	
	var ul_element = document.getElementById( "answers" );
	var labels = ul_element.getElementsByTagName( "label" );
	if ( labels ) {
		for ( var i=0; i<labels.length; i++ ) {
			labels[ i ].childNodes[ 0 ].value = i;
			labels[ i ].childNodes[ 1 ].innerHTML = positions[ i ];
			if ( i == index ) {
				labels[ i ].onclick = function( ){ alert('Bonne réponse'); init_question(); return false; };
			} else {
				labels[ i ].onclick = function( ){ alert('Mauvaise réponse'); init_question(); return false; };
			}
		}
	}
	
}

window.onload = init_question;