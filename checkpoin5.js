
function countTrue(arr) {
        let count =0
        for (let i=0;i<arr.length;i++){
            if (arr[i]==1)count=count +1
            
            }

            return count
}
function afterNYears(names, n) {
	 for (key of Object.keys(names)) {
    names[key] += Math.abs(n);
  }
  return names;

	
	
	
}

function getBudgets(arr) {
	let sum=0
	for (let i=0; i<arr.length;i++){
		sum=sum+arr[i].budget
		}
	return sum
		
		
	
}
function inkLevels(inks) {
	if (inks.cyan<=inks.magenta && inks.cyan<=inks.yellow ) return inks.cyan
	else if (inks.magenta<=inks.cyan && inks.magenta<=inks.yellow ) return inks.magenta
    else if (inks.yellow<=inks.cyan && inks.yellow<=inks.magenta) return inks.yellow
}

function isSameNum(num1, num2) {
	if (num1===num2)
		return true
	else
		return false
	
}
const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	if (GUEST_LIST.hasOwnProperty(name))
		return "Hi! I'm "+name +", and I'm from "+""+ GUEST_LIST[name]+ "."
	else 
		return "Hi! I'm a guest."
}

function objectToArray(obj) {
				return Object.entries(obj)
					
				
}
function getAbsSum(arr) {
		let sum=0
        for (let i=0;i<arr.length;i++){
            if(arr[i]<0) {arr[i]*=(-1)
            sum=sum+arr[i]}
            else  sum=sum+arr[i]


        }
return sum
	
}
function filterArray(arr) {
	let result= arr.filter(arr=> typeof(arr)!== 'string')
	return result
}
function minMax(arr) {
	let max, min
            for(let i=0 ;i<arr.length;i++){
                
                 if(max>arr[i]) max=max
                 else max=arr[i]
							if (min<arr[i]) min=min
							else min=arr[i]
                
                 }
											while(min<=max)
                     return [min,max]
}
//https://edabit.com/user/xSWDMhseEHTniSef5