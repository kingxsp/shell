var page = new WebPage();
var url = phantom.args[0] ;
page.open(url, function(status) {
  if ( status === "success" ) {
	page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        var t = page.evaluate(function() {
		var result = "" ;
                $(".topic_content").each(function(){
			result = result + $(this).text() + "\n";
			result = result + " " + "\n";
		});
		result = result + "-----------------------------" + "\n" ;
		$(".reply_content").each(function(){
			result = result + " " + "\n"
			result = result + "***" + $(this).text() + "\n";
		});
                return result;
        });
	console.log(t);
        phantom.exit();
	});
  }
});
