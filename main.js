var cars = {};

cars.init = function() {
	cars.$filters = $( '.cars-search__select' );
	cars.$filterTriggers = $( '.cars-search__select-open' );
	cars.$filterOptions = $('.cars-search__select-options').children('li');

	cars.initFilters();
	cars.eventHandlers();
};

cars.eventHandlers = function() {};

cars.initFilters = function() {
	cars.$filterTriggers.bind( 'click', { self: event }, cars.toggleFilter );
	cars.$filterOptions.bind( 'click', { self: event }, cars.selectFilterOption );

	// $.each( cars.$filters, function( index, filter ) {
	// 	var label = $( filter ).find('p').data( 'label' );
	// 	$( filter ).children( 'p' ).text( label );
	// });
};

cars.toggleFilter = function( e ) {
	var $select = $( e.target ).parent();

	cars.$filters.not( $select ).removeClass( 'expanded' );
	$select.toggleClass( 'expanded' );
};

cars.selectFilterOption = function( e ) {
	var $select = $( e.target ).parents( '.cars-search__select' ),
		selection = $( e.target ).text();

	$select.find( '.filterval' ).text( selection );
};

$(document).ready( function() {
	if ( $( '.cars-search' ).length ) {
		cars.init();
	}
});