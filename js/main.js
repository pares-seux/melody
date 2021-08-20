$(document).ready(function() {
	var currentFloor = 2;
	var currentFlat = 1;
	var floorPath = $(".home-image path");
	var flatsPath = $(".flats path");
	var numberFlat = $(".flat-link");
	var counterUp = $(".counter-up");
	var counterDown = $(".counter-down");
	var modal = $(".modal");
	var modalCloseButton = $(".modal-close-button");
	var viewFlatsButton = $(".view-flats");

	floorPath.on("mouseover", function(){
		floorPath.removeClass("current-floor");
		currentFloor = $(this).attr("data-floor");
		$(".counter").text(currentFloor);
	});

	flatsPath.hover( function() {
		currentFlat = $(this).attr("data-flat");
		$(`[data-link=${currentFlat}]`).toggleClass("choose-link");
	});

	numberFlat.hover( function() {
		currentFlat = $(this).attr("data-link");
		$(`[data-flat=${currentFlat}]`).css({'opacity':'1'});
	}, function() {
		currentFlat = $(this).attr("data-link");
		$(`[data-flat=${currentFlat}]`).css({'opacity':'0'});
	});

	floorPath.on("click", toggleModal);
	modalCloseButton.on("click", toggleModal);
	viewFlatsButton.on("click", toggleModal);
	
	counterUp.on("click", function() {
		if (currentFloor < 18) {
			currentFloor++;
			usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
			$(".counter").text(usCurrentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
		}
	});
	
	counterDown.on("click", function() {
		if (currentFloor > 2) {
			currentFloor--;
			usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
			$(".counter").text(usCurrentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
		}
	});

	function toggleModal () {
		modal.toggleClass("is-open");
		var i = (currentFloor - 2) * 10;
		$(".flat-list li span").each( function (index) {
			$(this).text(index+1+i);
		});
	};

});

	