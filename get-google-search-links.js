//This will give you all the links in result page of google search.
$('.srg > .g > .rc > .r > a').each(function (i, x){ console.log(x.href);}); // you need Jquery for this.

//if you are sure that they are downloadable files, you can use this to download all of them at once.
$('.srg > .g > .rc > .r > a').each(function (i, x){ window.open(x.href, "_blank");  })
