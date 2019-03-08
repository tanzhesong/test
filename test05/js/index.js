$(function(){
	var col = $('.gallery .row').children('div');
	// console.log(col);
	var colIndex = 0;
	var width = 0;
	col.mouseover(function(){
		colIndex = $(this).index();
		// console.log(colIndex);
		width = $(this).children('h5').width() - 40;
		// console.log(width);
		$(this).children('.module').width(width);
	});
})