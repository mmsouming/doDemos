/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
////
var page = sm("do_Page");
var close = ui("close");
close.on("touch",function(){
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
////
var button1 = ui("do_Button_1");
var button2 = ui("do_Button_2");
button1.on("touch", function() {
	app.closePage();
});
button2.on("touch", function() {
	app.openPage({
		source : "source://do_App/view/closepage/page3.ui",
		statusBarState : "transparent"
	});
});