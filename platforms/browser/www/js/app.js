var app_history = [];

function gotoLink(view) {
	app_history.push(view);
	$('.container').html($(view).children());
	// $(view).show();
}

function goBack() {
}


w3IncludeHTML();

gotoLink('#home');

// goto register page
$('#imageBtn').click(function(event) {
	gotoLink('#image');
});

$('#videoBtn').click(function(event) {
	gotoLink('#video');
});

$('#audioBtn').click(function(event) {
	gotoLink('#audio');
});










