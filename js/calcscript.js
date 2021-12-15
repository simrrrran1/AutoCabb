function doShow(val)
		{
			
			var screen=document.querySelector("#screen");
			screen.value=screen.value+val;
		}
	
		function doShowResult()
		{
			var screen=document.querySelector("#screen");
			screen.value=eval(screen.value);

		}
		function doRemove()
		{
			var screen=document.querySelector("#screen");
//			screen.value=screen.value.substr(0,screen.value.length-1);
			screen.value=screen.value.slice(0,-1);
			
		}