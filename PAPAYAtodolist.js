const textInput = document.querySelector('.textInput'); //建立一個const，抓取textInput(文字欄)的內容
const list = document.querySelector('.list'); //建立一個const，抓取.list的內容

function newMission() { //建立一個新任務的function
	const mission = document.createElement('li'); //主要目的在於創建html中的li
	mission.textContent = textInput.value; //li的內容就是在textInput(待辦清單匡匡內)打的內容
	list.append(mission); //把新打的textInput內容加到最下面(.append的功能)
	textInput.value = ""; //輸入完成後把textInput的內容清空
}

textInput.addEventListener("keyup", function(e) { //"keyup"為DOM Event定義的事件形態，是特定用法
						  //不能改為"inputKey"或是其他文字
	if (e.key === "Enter") { //偵測是否輸入Enter鍵  //.key為keyBoardEvent的參數之一，例如.keycode
		console.log(textInput.value);         //則會回傳49的內碼，.timeStamp則是顯示按下到起來的時間
		newMission(); //若偵測到輸入Enter鍵，則進入newMission的function                             
	}    			  
						                     
	
});
