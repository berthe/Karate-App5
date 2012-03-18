/* This file is part of the Karate-App5 project.
 * Karate-App5 is a free and unencumbered software released into the public domain.
 * For more information, please refer to <http://unlicense.org/>
 */

var init_question = function() {
	
	var array_keys = function( array ) {
		var keys = [];
		var key;
		for ( key in array ) {
			if ( array.hasOwnProperty( key ) ) {
				keys[ keys.length ] = key;
			}
		}
		return keys;
	}

	var array_rand = function ( array ) {
		var rand = function ( min, max ) {
			return Math.round( Math.random( ) * max ) + min;
		}
		return array[ rand( 0, array.length - 1 ) ];
	}
	var theme = array_rand( array_keys( karate_data ) );
	var entry = array_rand( karate_data[ theme ] );
	
	// TODO: Selectionner 4 mauvaises réponses dans le même theme
	// TODO: Mélanger bonne et mauvaises réponses
	
	var question_element = document.getElementById( "question" );
	question_element.innerHTML = entry.description;
	
	// TODO: changer ce code
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
