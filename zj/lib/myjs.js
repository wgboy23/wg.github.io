window.onload=function()
			{
				window.requestAnimationFrame(getDate)
			}
			
			function getDate()
			{
				window.setTimeout(function(){
					window.requestAnimationFrame(getDate)
				},1000/2)
				var d=new Date();   
				var year=d.getFullYear()  //获取年
				var month=d.getMonth()+1;  //获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
				var day=d.getDay()    //获取日
				var days=d.getDate() //获取日期
				var hour=d.getHours()   //获取小时
				var minute=d.getMinutes()  //获取分钟
				var second=d.getSeconds()   //获取秒
				
				var month1=month
				var days1=days
				if(month<10) month="0"+month
				if(days<10) days="0"+days
				if(hour<10) hour="0"+hour
				if(minute<10) minute="0"+minute
				if(second<10) second="0"+second
				var Tools=document.getElementById("time")
				//var da=year+"年"+month1+"月"+days1+"日"+" "+hour+":"+minute+":"+second
				var da=year+"年"+month1+"月"+days1+"日"
				Tools.innerHTML=da+" "+hour+":"+minute+":"+second
				
				var Tools1=document.getElementById("kssj")
                                                                var minute1=minute
                                                                var hour1=hour
                                                                minute1=minute-15
                                                                if(minute1<0) {minute1=60+minute1;hour1=hour-1;if(hour1<10) hour1="0"+hour1}
				if(minute1<10) minute1="0"+minute1
                                                                if(hour<21) {var da1=year+"-"+month+"-"+days+" "+hour1+":"+minute1+":"+"00"}
                                                                else{var da1=year+"-"+month+"-"+days+" "+"07"+":"+"30"+":"+"00"}
				Tools1.innerHTML=da
				var Tools2=document.getElementById("jssj")
                                                                if(hour<21) {var da2=year+"-"+month+"-"+days+" "+"22"+":"+"30"+":"+"00"}
                                                                else{var da2=year+"-"+month+"-"+days+" "+hour1+":"+minute1+":"+"00"}
				Tools2.innerHTML=da
				document.all['name'].innerText="臧迪"
				document.all['sex'].innerText="男"
				document.all['xh'].innerText="2201002053"
				document.all['sjh'].innerText="15321667580"
				document.getElementById("touxiangid").src = "http://81.70.195.192/crm/zd/touxiang.jpg";
			}