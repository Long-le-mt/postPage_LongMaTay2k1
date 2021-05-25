const __nav = $('.pagination-item__link');

__nav.on('click', function(){
	fn_d();
$(this).addClass('active');
return false;
})

function fn_d (){
	$.each(__nav, function(){
		$(this).removeClass('active');
	})
}
