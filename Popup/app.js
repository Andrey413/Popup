// Открытие окна POPUP
$('.js-content-link').click(function() {
	$('.wrap').css('filter','blur(5px)');
	$('.js-popup-wrap').fadeIn();
	$('.js-popup-wrap').addClass('disabled');
});
//Закрытие на крестик
$('.js-popup-close').click(function() {
	$('.js-popup-wrap').fadeOut();
	$('.wrap').css('filter','none');
});
//ЗАкрытие по клику вне окна
$(document).mouseup(function (e) {
	var pop = $('.js-popup-content');
	if (e.target!=pop[0]&&popup.has(e.target).lenght === 0){
		$('.js-popup-wrap').fadeOut();
		$('.wrap').css('filter','none');
	}
});