function processCheck()
{
	var refC=document.querySelector("#chkC");
	var refJ=document.querySelector("#chkJ");
	var refW=document.querySelector("#chkW");
	
	var res="";
	
	
	if(refJ.checked==true)
		res=res+refJ.value+",";
	if(refW.checked==true)
		res=res+refW.value+",";
	if(refC.checked==true)
		res=res+refC.value+",";
	
	document.querySelector("#resCheck").innerHTML=res;
		
}
function doCheckUncheckAll()
{
	var refAll=document.querySelector("#chkAll");
	
	var refC=document.querySelector("#chkC");
	var refJ=document.querySelector("#chkJ");
	var refW=document.querySelector("#chkW");

//	if(refAll.checked==true)
//	{
//		refC.checked=true;
//		refW.checked=true;
//		refJ.checked=true;
//	}
//	else
//	{
//		refC.checked=false;
//		refW.checked=false;
//		refJ.checked=false;
//	}	
	
	refC.checked=refAll.checked;
	refW.checked=refAll.checked;
	refJ.checked=refAll.checked;

}
function doRadProcess(value)
{
document.querySelector("#resBranch").innerHTML=value;

}
function doShowSate(value)
{
	alert(value);
}
function doAddState()
{
	var combo=document.querySelector("#states");
	var newState=prompt("Enter new State:");
	
	
	var opt=document.createElement("option");
	opt.text=newState;
	opt.value=newState;
	combo.append(opt);;
}

