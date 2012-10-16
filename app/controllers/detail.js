Ti.App.addEventListener('MVC:tab:itemSelected', function(e) {
	$.result.text = e.name+': $'+e.price;
});

