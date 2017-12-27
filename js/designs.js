// Select color input
const color = $("#colorPicker");

// When size is submitted by the user, call makeGrid()
$(document).ready(function(){

	$("#result_submit").click(makeGrid);

	function makeGrid(e) {
		//阻止浏览器的默认行为，跳转页面
		e.preventDefault();
		// Select size input
		let height = $("#input_height").val();
		let width = $("#input_width").val();
		//清除DOM，以防多次点击提交产生的累加情况
		$("tr").remove();
		$("td").remove();
		// Creat canvas
		const table = $('#pixel_canvas');
		for(let i = 0; i < height; i++){
			table.append("<tr></tr>");
		}
		for(let j = 0; j < width; j++){
			$("tr").append("<td></td>");
		}

		$("td").click(function(){
			$(this).css({"background-color": color.val()});	
		});
	}
});

