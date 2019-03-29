let communicateSpeed;
let ajaxTimer, isConnect,  isReceive;
let currentDataForSend = '5a 5a 5a ad a2 05 f6 00 00 14 05 00 00 00 08 00 00 00 00 00 00 00 00 00 be aa'
let information,readyStateDisplay
let waitTimes = 0
let repeats = 0

function init() {
    communicateSpeed = 20;
    readyStateDisplay = document.getElementById('readyStateDisplay')
    information = document.getElementById('information')
}

function startAjaxTimer(){
    initAjax()
    waitTimes = 0
    repeats = 0
    ajaxTimer = setInterval(requestData, communicateSpeed); //
    isConnect = true;
    isReceive = true;
}

function stopAjaxTimer(){
    clearInterval(ajaxTimer);
}

function requestData(){
    if (isReceive) {
        setAjax()
        xmlHttp.open('post','http://192.168.1.48',true);
        setAjaxHeader()
        xmlHttp.send(currentDataForSend);
        currentDataForSend = '5a 5a 5a ad a2 05 7a 00 00 14 01 00 00 00 08 00 00 00 00 00 00 00 00 00 ba aa'
        isReceive = false
    } else {
        waitTimes++
        if (waitTimes === 50) { // 未接收到数据 等待
            waitTimes = 0
            repeats++
            if (repeats < 4) { // 连接3次等待都未收到数据
                waitTimes = 0
                isReceive = true;
            } else {
                console.log('waitTimes: ' + waitTimes)
                console.log('repeats: ' + repeats)
                information.innerText = '通讯结束'
                stopAjaxTimer()
            }
        }
    }
}

function setAjaxHeader() {
    // xmlHttp.setRequestHeader('content-type', 'text')
}

function setAjax() { // 放在Open之前
    let str
    xmlHttp.onreadystatechange = stateChange
    xmlHttp.onprogress = function (oEvent) {
        if (oEvent.lengthComputable) {
            let percentComplete = oEvent.loaded / oEvent.total
        } else {
            let percentComplete = '进度未知'
        }
    }
    xmlHttp.onabort = function () {
        str = '------------------------------请求被中止----------------------------'
        console.log(str)
        information.innerText = str
    }
    xmlHttp.onerror = function () {
        str = '------------------------------请求失败------------------------------'
        console.log(str)
        information.innerText = str
    }
    xmlHttp.ontimeout = function () {
        str = '------------------------------超时了------------------------------'
        console.log(str)
        information.innerText = str
    }
}

function stateChange() { // onreadyChange必须放在open和send的前面
    let str = 'readyState:' + xmlHttp.readyState + '  status:' + xmlHttp.status
    console.log(str)
    readyStateDisplay.innerText = str
    if(xmlHttp.readyState === 4 && xmlHttp.status === 200 && isReceive===false){//xmlHttp.readyState === 4 && xmlHttp.status === 200
        isReceive = true
        information.innerText = ''
        repeats = waitTimes = 0
    }else{

    }
}


function initAjax(){
    isReceive = false;
    isConnect = true;
    getHttpRequest();
    // startAjaxTimer();
}

function getHttpRequest(){
    if(window.XMLHttpRequest){
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlHttp = new XMLHttpRequest();
        // xmlHttp.keepalive = false;
    }else{
        // IE6, IE5 浏览器执行代码
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
}
