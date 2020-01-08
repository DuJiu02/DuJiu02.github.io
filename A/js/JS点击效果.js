onload = function() {
	var Text = "👩👴🦳🥟";
	console.log(Text.length);
	// alert(Text.length)
    var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function(e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#E94F06";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
		
		/* var n = 5, s = "";
       for(var i = 1; i < n; i++){
           var rand = Math.floor(Math.random() * Text.length * 2);
           console.log(rand / 2);
		   s += Text.charAt(rand);

       }
         $elem.innerText = s; */
	     switch (++click_cnt) {
			case 1:
			case 11:
                $elem.innerText = "😫🙄😖😨🤯😟🙃";
                break;
            case 2:
			case 12:
                $elem.innerText = "🍳🧇🥞🧈🍞🥐🥨🥯";
                break;
			case 3:
			case 13:
            case 30:
                $elem.innerText = "🥖🧀🥗🥙🥪🌮🌯🥫";
                break;
			case 4:
			case 14:
            case 40:
                $elem.innerText = "🍖🍗🥩🍠🥟🥠🥡🍱";
                break;
			case 5:
			case 15:
            case 50:
                $elem.innerText = "🍘🍙🍚🍛🍜🦪🍣🍤";
                break;
			case 6:
			case 16:
            case 60:
                $elem.innerText = "😠😡🤬😷🤒🤕🤢🤮";
                break;
			case 7:
			case 17:
            case 70:
                $elem.innerText = "🎈🎃🎏🎎🖼🎨🦺🧥🩱";
                break;
			case 8:
			case 18:
            case 80:
                $elem.innerText = "🌳🌴🌵🌾🌿🍀🍁🍂🍃";
                break;
			case 9:
			case 19:
            case 90:
                $elem.innerText = "🍸🍹🍺🍻🥂🥃🧊🥤🍖";
                break;
			case 10:
			case 20:
                $elem.innerText = "🚗🚑🚍🏎🚆🛩🛸�";
                break;
				
            default:
                $elem.innerText = "�💔❣💕💞💓💗�";
                break; 
        }
        $elem.style.fontSize = Math.random() * 10 + 8 + "px";
        var increase = 0;
        var anim;
        setTimeout(function() {
            anim = setInterval(function() {
                if (++increase == 150) {
                    clearInterval(anim);
                    $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (150 - increase) / 120;
            }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};