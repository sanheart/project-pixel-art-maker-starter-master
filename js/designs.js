// Select color input
const color = $("#colorPicker");
// creat canvas
const table = $('#pixel_canvas');
// When size is submitted by the user, call makeGrid()
$(document).ready(function(){
	//默认显示10*10的表格
	for(let i = 0; i < 15; i++){
		table.append("<tr></tr>");
	}
	for(let j = 0; j < 15; j++){
		$("tr").append("<td></td>");
	}
    //绘制h
    for(let x = 3; x < 12; x++){
    	//选择器中有变量时 需使用+号连接
    	$("table tr:eq(" + x + ") td:eq(3)").css({"background-color": "black"});
    	$("table tr:eq(" + x + ") td:eq(6)").css({"background-color": "black"});	
    }
    for(let x = 4; x < 6; x++){
    	$("table tr:eq(7) td:eq("+ x + ")").css({"background-color": "black"});		   		
    }
    //绘制i
    for(let x = 3; x < 4; x++){
    	$("table tr:eq(" + x + ") td:eq(11)").css({"background-color": "black"});    	
    }
    for(let x = 6; x < 12; x++){
        $("table tr:eq(" + x + ") td:eq(11)").css({"background-color": "black"});    	
    }
	//用户自定义
	$("#result_submit").click(makeGrid);
	function makeGrid(e) {
		//阻止浏览器的默认行为，跳转页面
		e.preventDefault();
		// Select size input
		let height = $("#input_height").val();
		let width = $("#input_width").val();
		if(height > 100 || width > 100){
			//提示弹框
			alert("请输入100以内");
		}else{
			//清除DOM，以防多次点击提交产生的累加情况
			$("tr, td").remove();
			// Creat canvas
			//循环行数
			for(var i = 0; i < height; i++){
				//每次生成一个<tr>
				var $tr = $("<tr></tr>");
				//循环列数
				for(var j = 0; j < width; j++){
				//给tr append td
					$tr.append("<td></td>");
				}
				//给table每次循环添加上边的<tr>
				table.append($tr);
			}
			/*
			for(let i = 0; i < height; i++){
				table.append("<tr></tr>");
			}
			for(let j = 0; j < width; j++){
				$("tr").append("<td></td>");
			}
			*/

			/*$("td").click(function(){
				$(this).css({"background-color": color.val()});
				console.log($(this).css("background-color") + color.val());	
			});*/
				
			/*var times = 0;
			$("td").click(function(){
				if (times % 2 == 0) {
					$(this).css({"background-color": color.val()});	
				}else{
					$(this).css({"background-color": "white"});	
				}
				times++;
			})*/
	
			$("td").click(function(){
				//console.log(($(this).css("background-color")));
				if ($(this).css("background-color") == "rgba(0, 0, 0, 0)"){
					$(this).css({"background-color": color.val()});	
				}else{
					$(this).css({"background-color": "rgba(0, 0, 0, 0)"});	
				}	
			})
		}

	}
});

