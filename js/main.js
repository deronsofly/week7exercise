 var myH1 = document.getElementById("myH1").innerText = "Enterprise is the worst company ever!";

 var myNewH1 = document.getElementById("myNewH1");

 function getInfo() {
 	 var userInput = document.getElementById("userInput").value;
 	 console.log(userInput);
 	 	myNewH1.innerText = userInput
 };

 var myArray = ["Josie", "Annette", "Debriana", "Louis", "Deron"]

 for(var i = 0; i < myArray.length; i++) {
 	console.log(myArray[i]);
 }

 var myDob = {
 	month: "October",
 	Day: 3,
 	Year: "1998"

 };

 var heading1 = document.getElementById("heading1");
 var heading2 = document.getElementById("heading2");
 var heading3 = document.getElementById("heading3");

 	heading1.innerText = myDob.month;
 	heading2.innerText = myDob.Day;
 	heading3.innerText = myDob.Year;

var newArray = [
	{
		firstName: "David",
		lastName: "Sias",
		isEvil: false,
	},
	{
		firstName: "Kelly",
		lastName: "Hunt",
		isEvil: true,
	},
	{
		firstName: "Gloria",
		lastName: "Johnson",
		isEvil: true,
	}
];

for (var i = 0; i < newArray.length; i++) {
	console.log(newArray[i].firstName);
	console.log(newArray[i].lastName);
	console.log(newArray[i].isEvil);


}
