function calculate_median(arr) {
  //请勿改动函数名   
	var new_arr=[];
	var val,l;
	arr=arr.sort(function(a,b){
		return a-b;
	});	
	for(var i=0;i<arr.length;i++){		
		if(i%2){
			new_arr.push(arr[i]);
		}
	}
	l=new_arr.length;
	var subscript=Math.floor(l/2);	
	console.log('subscript---'+subscript);
	if(l%2){		
		val=new_arr[subscript];
		
	}else{		
		val=(new_arr[subscript]+new_arr[subscript-1])/2;
	}
	return val;
}

module.exports = calculate_median;
