(function(){  
var newscript = document.createElement('script');     
newscript.type = 'text/javascript';     
newscript.async = true;     
newscript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';  
(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);})();
window.setInterval(function(){var myDiv = $('.pane-body')[1]; if(myDiv.scrollTop != 0) myDiv.scrollTop = 0;}, 500);
