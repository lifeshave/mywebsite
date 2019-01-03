
/* CSS Document */

document.write("<span id='clock'></span>");
var nowDate,theDate,theMonth,theHour,theMin,theSec,timeValue;
function ShowDateTime()
{
 nowDate = new Date();

 theDate = nowDate.getDate();
 theMonth = nowDate.getMonth() + 1;
 theHour = nowDate.getHours();
 theMin = nowDate.getMinutes(); if (theMin < 10) theMin = "0"+theMin;  // 小於 10 分补 0
 theSec = nowDate.getSeconds(); if (theSec < 10) theSec = "0"+theSec;  // 小於 10 秒补 0
 timeValue=theMonth+"月"+theDate+"日 "+" "+theHour+":"+theMin+":"+theSec;
 clock.innerHTML = timeValue;
 setTimeout("ShowDateTime()",1000);
}
ShowDateTime();
