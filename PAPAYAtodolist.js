const textInput = document.querySelector('.textInput'); //建立一個const，抓取textInput(文字欄)的內容
const list = document.querySelector('.list'); //建立一個const，抓取.list的內容
//關鍵字document.querySelector：用來抓取/選擇元素(例如.txtInput、.list)的功能

const button = document.querySelector('.button');//建立抓取.button的參數


function newMission() { //建立一個新任務的function，此function用來新增newMission，也就是如果有新增任務，就會增加到list中
	if (textInput.value ==="") {
		return;
	}
	const mission = document.createElement('li'); //在網頁中插入一個新的html標籤(如li)
	//mission.textContent = textInput.value; //li的內容就是在textInput(待辦清單匡匡內)打的內容
	mission.innerHTML = `
		<input type = "checkbox" class = "checkbox">
		<label>${textInput.value}</label>
		<button class = "garbagecan">🗑️</button>
	`
		//以上innerHTML，用來建立mission的內容，其中包括checkbox、文字內容跟垃圾桶，會由左到右排列
	const garbagecan = mission.querySelector(".garbagecan"); //偵測是否有點到該行垃圾桶
	garbagecan.addEventListener("click", function() {//如果有點到垃圾桶，就刪除該mission
		mission.remove();
	});

	const checkbox = mission.querySelector(".checkbox");
	checkbox.addEventListener("change", function() {
		if (checkbox.checked){
			mission.style.textDecoration = "line-through";
			mission.style.color = "#999";
			list.append(mission);
		} else {
			mission.style.textDecoration = "none";
			mission.style.color = "";
			list.prepend(mission);
		}
	});


	list.append(mission); //把新打的textInput內容加到最下面(.append的功能)
	textInput.value = ""; //輸入完成後把textInput的內容清空
}
 //addEventListener搭配keyup，用來偵測是否有按鍵盤
textInput.addEventListener("keyup", function(e) { //"keyup"為DOM Event定義的事件形態，是特定用法
						  //不能改為"inputKey"或是其他文字，其他關鍵字有keydown、keypress等
	if (e.key === "Enter") { //偵測是否輸入Enter鍵  //.key為keyBoardEvent的參數之一，例如.keycode
		console.log(textInput.value);         //則會回傳49的內碼，.timeStamp則是顯示按下到起來的時間
		newMission(); //若偵測到輸入Enter鍵，則進入newMission的function                             
	}    				
});

button.addEventListener("click", newMission);//要觸發newMission的功能，除了按"Enter"，還可以點網頁中的+

