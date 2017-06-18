function wan(v){
	var n = parseInt(v);
	if(n<10000){
		return n;
	}
	var n = n/10000;
	n = n.toFixed(2);
	return n+"w";
}



export {wan};