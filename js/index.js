$(appliancePage).ready(function(){
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    var hash = this.hash;
	
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 800) {
          $(this).addClass("slide");
        }
    });
  });
})
//local storage and form submission
if (localStorage.getItem('savedActions') !== null){
    var existingActions = JSON.parse(localStorage.savedActions);
	
    for (var i=0; i< existingActions.length; i++){
        createRowInHtml(existingActions[i]);
    }
}
appliancePage.addEventListener("DOMContentLoaded", function(){
    var form = appliancePage.forms.actionform;
	
    form.onsubmit = function (e){
        e.preventDefault();

        var changeSettings = {
			status: appliancePage.getElementById("status").value,
            temperature: appliancePage.getElementById("temperature").value,
			startDate: appliancePage.getElementById("startDate").value,
			startTime: appliancePage.getElementById("startTime").value
        }
        console.log(changeSettings);
        form.reset();
    }
});

var upcomingActions = {
	status: 'On',
	temperature: '27',
	startDate: '19/05/2016',
	startTime: '05:30 P.M.'
}
localStorage.setItem('upcomingActions', JSON.stringify(upcomingActions));
var actionString = localStorage.getItem('upcomingActions');
var upcomingActions = JSON.parse(actionString);

if (localStorage.getItem('savedActions') === null){
    localStorage.setItem('savedActions', JSON.stringify([newAction]));
} else {
    var existingActions = JSON.parse(localStorage.savedActions);
    existingUsers.push(newAction);
    localStorage.setItem('savedActions', JSON.stringify(existingActions));
}