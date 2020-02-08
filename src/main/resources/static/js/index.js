function copyPassword(e) {
	var pwd = getPwd();
	alert(`get pwd: ${pwd}`);
  	copyToClipboard(pwd);
}

function getPwd() {
	var pwdEl = document.getElementById('password');
	var pwd = pwdEl.innerText;
	return pwdEl.innerText.match(/(?<=\().+(?=\))/)[0];
}	

function copyToClipboard (text) {
  var textArea = document.createElement("textarea");
  textArea.style.opacity = 0;
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();

  try {
  	if (!document.execCommand) {
  		alert('不支持 execCommand');
  	}
    var successful = document.execCommand('copy');
    var msg = successful ? '成功复制到剪贴板' : '该浏览器不支持点击复制到剪贴板';
   alert(msg);
  } catch (err) {
    alert('该浏览器不支持点击复制到剪贴板');
  }

	document.body.removeChild(textArea);
}