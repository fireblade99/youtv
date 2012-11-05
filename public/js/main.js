$(document).on('ready', function(){
	var dev_key =  "AI39si6p8JyCYDoSBE6Fcv16d7Xykw_trX4LVPHooYk9Y5uaY3VlveaH3XYMJO-El2gcQ1J8woIsa1-lGzyBMtmD6uCmu1FJ_w"
	$('#search').submit(function() {
		$("#yt_vids").html('');
    // get all the inputs into an array.
    var inputs = $('#search :input');

  	var query = inputs.serializeArray()[0].value;
  	
  	
  	var url = "https://gdata.youtube.com/feeds/api/videos?q=" + encodeURI(query) + "&key=" + dev_key;
		$.get(url, function(data){

			var entries = $(data).find('entry');
  		for (var vid =0; vid < 10; vid++){
  			var entry = $(entries[vid]);
				var thumbnail = entry.find("thumbnail")[1];
				var thumbnail_url = thumbnail.getAttribute('url');
				var temp = entry.find("content")[1];
  			var vid_url = temp.getAttribute('url');
  			var html = '<div class="row"> <img src = ' + thumbnail_url + '> <h2> Title </h2> </div>';
  			$("#yt_vids").append(html);
  			
  		}
  			
		});

  	
		return false;
		});
});