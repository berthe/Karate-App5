/* This file is part of the Karate-App5 project.
 * Karate-App5 is a free and unencumbered software released into the public domain.
 * For more information, please refer to <http://unlicense.org/>
 */

 
// UTILS
var array_rand = function ( array ) {
	return array[ array_index_rand( array ) ];
}
var array_indexs = function( array ) {
	var indexs = [];
	var index;
	for ( index in array ) {
		if ( array.hasOwnProperty( index ) ) {
			indexs.push( index );
		}
	}
	return indexs;
}
var array_index_rand = function ( array ) {

	//UTILS
	var rand = function ( min, max ) {
		return Math.round( Math.random( ) * max ) + min;
	}
	
	// LOGIC
	array = array_indexs( array );
	return array[ rand( 0, array.length - 1 ) ];
}
var array_index_rands = function ( array, size ) {
	
	// UTILS
	var in_array = function( element, array ) {
		return ( array.indexOf( element ) != -1 );
	}
	
	// LOGIC
	var rands = [];
	if ( size >= array.length ) {
		// TODO : mélanger
		rands = array_indexs( array );
	} else {
		for ( var i=0; i < size; i++ ) {
			var index = array_index_rand( array );
			if ( in_array( index, rands ) ) {
				i--;
			} else {
				rands.push( index );
			}
		}
	}
	return rands;
}

// Karate App5
var karate_app5 = function( ) {

	// UTILS
	var get_user_answer = function( ) {
		for ( var i=0; i < document.karate.answer.length; i++ ) {
			if ( document.karate.answer[i].checked ) {
				return document.karate.answer[i].value;
			}
		}
	}
	var init_question = function( ) {
	
		document.getElementById( "score_good" ).innerHTML = cpt_good;	
		document.getElementById( "score_total" ).innerHTML = cpt_total;
		
		var theme = array_index_rand( karate_data );
		document.getElementById( "question_theme" ).innerHTML = karate_data[ theme ].name;
		
		var index_answers = array_index_rands( karate_data[ theme ].list, 5 );
		index_good_answer = array_rand( index_answers );
		document.getElementById( "definition" ).innerHTML = karate_data[ theme ].list[ index_good_answer ].description;
		var ul_element = document.getElementById( "answers" );
		ul_element.innerHTML = '';
		for ( var i=0; i < index_answers.length; i++ ) {
			ul_element.innerHTML += '<li><label><input type="radio" name="answer" value="'+index_answers[i]+'" /><span>'+karate_data[ theme ].list[ index_answers[i] ].name+'<span></label></li>';
		}
	}
	
	// LOGIC
	var cpt_total = 0;
	var cpt_good = 0;
	var index_good_answer;
	init_question( );
	document.forms['karate'].onsubmit = function( ) {
		var user_answer = get_user_answer( );
		if ( user_answer != null ) {
			if ( user_answer == index_good_answer ) {
				alert( 'good' );
				cpt_good ++ ;
			} else {
				alert( 'bad' );
			}
			cpt_total ++;
		
			init_question( );
		} else {
			alert( 'cocher la réponse');
		}
		return false;
	}
	document.getElementById( "autre" ).onclick = function( ) {
		init_question( );
	
		return false;
	}
}

window.onload = karate_app5;
