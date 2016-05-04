var app_history = [];

function gotoLink(view) {
	app_history.push(view);
	$('.container').html($(view));
	$(view).show();
}

function goBack() {
}

w3IncludeHTML();

gotoLink('#home');

// goto register page
$('#imageBtn').click(function(event) {
	gotoLink('#register');
});

$('#videoBtn').click(function(event) {
	gotoLink('#video');
});











