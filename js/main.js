var a=$("#VA").val();
var b=$("#VB").val();
var c=$("#VC").val();
var d=$("#VD").val();
var ts=$("#VT").val();

function calculo() 
{	
		
	
	a*=ts;
	b*=ts;
	c*=ts;
	d*=ts;
	
	ad=Math.exp(a);
	bd=(b/a-c)*(Math.exp(a)- Math.exp(c));
	cd=0;
	dd=Math.exp(d);
	$("#ValorAd").html(ad);
	$("#ValorBd").html(bd);
}