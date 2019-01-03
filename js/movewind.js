var x,y,dx=1, dy=1,winx,wborder,hborder,intervalID;
 function movewin(theURL,winName,features,bx,by,wx,hy,acc,timeout)
{
 x=bx; y=by;
 winx= window.open(theURL,winName,features);
 if (timeout != 0) setTimeout('winx.window.close();',timeout);  // timeout=0 就不会自动关闭,单位毫秒
 winx.moveTo(x,y);
 if (acc != 0)     // acc=0 窗口就不移动
    {intervalID=window.setInterval("moving()",acc);
     wborder=screen.availWidth-wx;
     hborder=screen.availHeight-hy-25;
    }
}

function moving()
{
 if (winx.closed) {clearInterval(intervalID); return;}
 if ((x+dx > wborder) || (x+dx < 0)) dx = -dx;
 if ((y+dy > hborder) || (y+dy < 0)) dy = -dy;
 x+=dx; y+=dy;
 winx.moveTo(x,y);
}
