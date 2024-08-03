const textInput = document.querySelector('.textInput');
const list = document.querySelector('.list');

function newMission() {
	const mission = document.createElement('li');
	mission.textContent = textInput.value;
	list.append(mission);
	textInput.value = "";
}

textInput.addEventListener("keyup", function(e) { //"keyup"為DOM Event定義的事件形態，是特定用法
						  //不能改為"inputKey"或是其他文字
	if (e.key === "Enter") { //偵測是否輸入Enter鍵  //.key為keyBoardEvent的參數之一，例如.keycode
		console.log(textInput.value);         //則會回傳49的內碼，.timeStamp則是顯示按下到起來的時間
		newMission();                              
	}    			  
						                     
	
});
