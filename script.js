var my_time;
var count = 0;
// For full scroll :
//    objDiv.scrollTop = 949
//    objDiv.scrollHeight = 1510
//    objDivHeight = 561

setTimeout('pageScroll()', 1200);
function pageScroll() {
    // If condition to set repeat 
	if (count < 1) {
		var objDiv = document.getElementById("scroll");
		objDiv.scrollTop = objDiv.scrollTop + 1;
        console.log("objDiv.scrollHeight= " + objDiv.scrollHeight);
        console.log("objDiv.scrollTop= " + objDiv.scrollTop);
        console.log("objDiv.scrollHeight-1410= " + (objDiv.scrollHeight-1410));
		if (objDiv.scrollTop > objDiv.scrollHeight-1410) {
            // setTimeout(function() {
				objDiv.scrollTop = 101;
				count++;
            // }, 1200);
		}
    //set scrolling time start
		my_time = setTimeout('pageScroll()', 10);
    //set scrolling time end
	}
}