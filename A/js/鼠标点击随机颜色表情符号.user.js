// ==UserScript==
// @name         鼠标点击随机颜色表情符号
// @version      1.0
// @description  243个符号随机出现
// @author       日狗少年
// @include      /^https?\:\/\/[^\s]*/
// @grant        GM_addStyle
// @require      https://cdn.bootcss.com/jquery/2.2.0/jquery.min.js
// @run-at       document_start
// @grant        unsafeWindow
// @namespace    
// ==/UserScript==

(function() {
    var chars=['☺','☹','☻','😀','😁','😂','😃','😄','😅','😆','😇','😈','😉','😊','😋','😌','😍','😎','😏','😐','😑','😒','😓','😔','😕','😖','😗','😘','😙','😚','😛','😜','😝','😞','😟','😠','😡','😢','😣','😤','😥','😦','😧','😨','😩','😪','😫','😬','😭','😮','😯','😰','😱','😲','😳','😴','😵','😶','😷','😸','😹','😺','😻','😼','😽','😾','😿','🙀','🙅','🙆','🙇','🙈','🙉','🙊','🙋','🙌','🙍','🙎','🙏','🚀','🚁','🚂','🚃','🚄','🚅','🚆','🚇','🚈','🚉','🚊','🚋','🚌','🚍','🚎','🚏','🚐','🚑','🚒','🚓','🚔','🚕','🚖','🚗','🚘','🚙','🚚','🚛','🚜','🚝','🚞','🚟','🚠','🚡','🚢','🚣','🚤','🚥','🚦','🚧','🚨','🚩','🚪','🚫','🚬','🚭','🚮','🚯','🚰','🚱','🚲','🚳','🚴','🚵','🚶','🚷','🚸','🚹','🚺','🚻','🚼','🚽','🚾','🚿','🛀','🛁','🛂','🛃','🛄','🛅','❦','❧','☙','❥','❣','♡','♥','❤','➳','ღ','💌','🏩','💓','💔','💕','💖','💗','💘','💙','💚','💛','💜','💝','💞','💟','💑','⚜','✥','✤','✻','✼','✽','✾','❀','✿','❁','❃','❇','❈','❉','❊','❋','⚘','⁕','ꙮ','ꕤ','ꕥ','☘','᪥','🍀','🌼','🌻','🌺','🌹','🌸','🌷','💐','★','☆','✪','✫','✯','✡','⚝','⚹','✵','❉','❋','✺','✹','✸','✶','✷','✵','✴','✳','✲','✱','✧','✦','⍟','⊛','⁕','🔯','🌠','🌟','﹡','❃','❂','✼','✻','✰','⍣','✭'];
	jQuery(document).ready(function($) {
		$("html").click(function(e) {
			var n = 0;
            var color = "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
            var sty=" style='color:"+color+";'";
            var id=Math.ceil(Math.random()*243);
			var $i;
            $i = $("<b "+sty+"></b>").text(chars[id]);
            n = Math.round(Math.random() * 10 + 6);
			var x = e.pageX,
				y = e.pageY;
			$i.css({
				"z-index": 9999,
				"top": y - 20,
				"left": x,
				"position": "absolute",
				"font-size": n,
				"-moz-user-select": "none",
				"-webkit-user-select": "none",
				"-ms-user-select": "none"
			});
			$("body").append($i);
			$i.animate({
				"top": y - 180,
				"opacity": 0
			}, 1500, function() {
				$i.remove();
			});
		});
	});
})();