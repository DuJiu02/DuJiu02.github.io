var t1,t2;
var $main = $cloud = mainwidth = null;
var offset1 = 450;
var offset2 = 0;

var offsetbg = 0;
$(document).ready(function(e) {
    // Cloud Float...
    
    
    $(document).ready(
        function () {
            $main = $(".mainbody");
			$body = $("body");
            $cloud1 = $("#cloud1");
			$cloud2 = $("#cloud2");
			
            mainwidth = $main.outerWidth(); 
        }
    );

    /// 飘动
    t1 = setInterval(flutter, 100);
	t2 = setInterval(bg, 100);
});	

function flutter() {
        if (offset1 >= mainwidth) {
            offset1 =  -580;
        }

        if (offset2 >= mainwidth) {
			 offset2 =  -580;
        }
		
        offset1 += 1.1;
		offset2 += 1;
        $cloud1.css("background-position", offset1 + "px 100px");
		$cloud2.css("background-position", offset2 + "px 460px");
    }
function bg() {
		/* if (offsetbg >= mainwidth) {
			offsetbg =  -580;
		} */
        offsetbg += 0.9;
		$main.css("background-position", -offsetbg + "px 0");
        $body.css("background-position", -offsetbg + "px 0");
    }