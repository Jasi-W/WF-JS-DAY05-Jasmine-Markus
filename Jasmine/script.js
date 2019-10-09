
var sandwiches = {"sandwich": "Hamburger", "calories": "260"};
var fries = {"fries_size": "Large French Fries", "calories": "570"};


document.getElementById("exercise_1").innerText = 
	"My favorite burger is a " +sandwiches.sandwich+ 
	" which has approximately " +sandwiches.calories+ 
	" calories, along with it I enjoy eating " +fries.fries_size+ 
	" which have about " +fries.calories+ " calories.";
			

var schema = {
	"$schema": "Employees",
	"title": "Employees",
	"description": "A list of all employees",
	"type": "object",
   
   "properties": {
       "id": {
           "description": "The unique identifier for a employee",
           "type": "integer"
       },
	   
       "firstname": {
           "description": "Firstname of a employee",
           "type": "string"
       },
	   
       "lastname": {
           "description": "Lastname of a employee",
           "type": "string"
       },
	   
       "mail": {
           "description": "Mail address of a employee",
           "type": "string"
       },
	   	   
       "salary": {
           "description": "salary for a year",
           "type": "number"
       }
   }
}


var json = { "Employees": [
   {
       "id": "01",
       "firstname": "User1",
       "lastname": "A",
       "mail": "user1@test.com",
       "job": "job1",
       "salary": "100"
   },
   
   {
       "id": "02",
       "firstname": "User2",
       "lastname": "B",
       "mail": "user2@test.com",
       "job": "job2",
       "salary": "200"
   },
   
   {
       "id": "03",
       "firstname": "User3",
       "lastname": "C",
       "mail": "user3@test.com",
       "job": "job3",
       "salary": "300"
   },
   
   {
       "id": "04",
       "firstname": "User4",
       "lastname": "D",
       "mail": "user4@test.com",
       "job": "job4",
       "salary": "400"
   },
   
   {
       "id": "05",
       "firstname": "User5",
       "lastname": "E",
       "mail": "user5@test.com",
       "job": "job5",
       "salary": "500"
   },
   
   {
       "id": "06",
       "firstname": "User6",
       "lastname": "F",
       "mail": "user6@test.com",
       "job": "job6",
       "salary": "600"
   },
   
   {
       "id": "07",
       "firstname": "User7",
       "lastname": "G",
       "mail": "user7@test.com",
       "job": "job7",
       "salary": "700"
   },
   
   {
       "id": "07",
       "firstname": "User7",
       "lastname": "H",
       "mail": "user7@test.com",
       "job": "job7",
       "salary": "700"
   },
   
   {
       "id": "08",
       "firstname": "User8",
       "lastname": "I",
       "mail": "user8@test.com",
       "job": "job8",
       "salary": "800"
   },
   
   {
       "id": "09",
       "firstname": "User9",
       "lastname": "J",
       "mail": "user9@test.com",
       "job": "job9",
       "salary": "900"
   }
]}


var table = document.getElementById("table_employees");
var tr = document.createElement("tr");

	tr.innerHTML = 
		"<th>Firstname</th>" + 
		"<th>Lastname</th>" + 
		"<th>Mail</th>" + 
		"<th>Job</th>" + 
		"<th>Salary</th>" 
		table.appendChild(tr);


json.Employees.forEach(function(Employees) {
	var tr = document.createElement("tr");
	
	tr.innerHTML = 
		"<td>" +Employees.firstname+ "</td>" + 
		"<td>" +Employees.lastname+ "</td>" +
		"<td>" +Employees.mail+ "</td>" +
		"<td>" +Employees.job+ "</td>" +
		"<td>" +Employees.salary+ "</td>"
		table.appendChild(tr);
});


var bookKey = {"Books": [
	{
	'title': 'Javascript for Dummies',
	'author': 'X',
	'read': 'false',
	"source": "img/001.jpg"
	},

	{
	'title': 'Java for Dummies',
	'author': 'Y',
	'read': 'false',
	"source": "img/002.jpg"
	},
	
	{
	'title': 'C for Dummies',
	'author': 'Z',
	'read': 'true',
	"source": "img/003.jpg"
	}
]}


bookKey.Books.forEach(function(Books) {
	var list = document.getElementById("bookslist")
	var list1 = document.createElement("li");
	var img1 = document.createElement("img");
	var p1 = document.createElement("p");
	
	img1.src = Books.source;
	p1.innerText = Books.title+ " - " +Books.author;
	
	list.appendChild(list1);
	list1.appendChild(img1);
	list1.appendChild(p1);
	
	if(Books.read == "true") {
		Books.getElementById('bookslist').className = "read";
	}
	
})

