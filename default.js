/**
 * 
 */

var url = window.location.pathname;
var tmp = url.split('/');
var tt = tmp[tmp.length-1].replace('.html', '');
$('.page_list>a[href$="'+tt+'.html"').css('color', 'gray').attr('href', null);