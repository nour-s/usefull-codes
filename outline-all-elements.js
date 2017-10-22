(function outline () {
    if(typeof jQuery == 'undefined')
    {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://code.jquery.com/jquery-latest.min.js');
    if (typeof jQuery == 'undefined') { document.getElementsByTagName('head')[0].appendChild(s);  }
    }
    [].forEach.call($("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})
    })();
