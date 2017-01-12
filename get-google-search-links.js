//This will give you all the links in result page of google search.
$('.srg > .g > .rc > .r > a').each(function (i, x){ console.log(x.href);}); // you need Jquery for this.

//if you are sure that they are downloadable files, you can use this to download all of them at once.
$('.srg > .g > .rc > .r > a').each(function (i, x){ window.open(x.href, "_blank");  })

//to read links from a web page and then download them
$.get('https://raw.githubusercontent.com/ZhaoLion/O-Reilly-Offering-Programming-eBooks-for-Free/master/O-Reilly-Offering-Programming-eBooks-for-Free.txt',
null, 
function(data){
	var lines = data.split('\n');
	for(var l = 0; l< lines.length; l++)
		window.open(lines[l], "_blank");
}, null)
