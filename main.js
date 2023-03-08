let arr=[45,16,78,21,51,46,33,35,6,89,9,12,2,34,48,75,77,18,10];
let n=parseInt(prompt("enter the element"));
function nsmall(arr,n)
{
	for(i=0;i<arr.length;i++)
	{
		for(j=i+1;j<arr.length;j++)
		{
			if(arr[i]<arr[j])
			{
				temp=arr[j];
				arr[j]=arr[i];
				arr[i]=temp;
			}
		}
		console.log(arr[i]);
	}
	let small=arr[n-1]
	return small;
}
console.log("2rd Largest Number")
console.log(nsmall(arr,n));