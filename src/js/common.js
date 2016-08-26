(function () {

	var $courseItem = $(".courses__item");
	var $checkbox = $(".courses__item__checkbox");
	var $box = $(".courses__item__checkbox-box")
	var active = "active-course";
	var checked = "checked";
	var time = 1000;



	$checkbox.on("click",function(){
		var $this = $(this);
		var $courseItem = $this.parent()


		$this.children($box).addClass(checked)

		$courseItem.addClass(active);
		setTimeout(function(){
			$courseItem.remove();
		},time)
	})

})();