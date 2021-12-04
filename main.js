function submit()
{
	// Storing the value of the input in a variable
    var GuestName = document.getElementById("name1").value;

	// Adding items to the array defined in the beggining
	names_of_people.push(GuestName);
	console.log(GuestName);    
    console.log(names_of_people);

	// Getting the length of the array
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);

	// Displaying the array
	document.getElementById("display_name").innerHTML=names_of_people.toString();
   }



function show()
{
	// Seperate the items by creating a new line
	var i= names_of_people.join("<br>");
	console.log(names_of_people);

	// Displaying the array
	document.getElementById("p1").innerHTML=i.toString();

	// Displaying the sort button
	document.getElementById("sort_button").style.display="block";
	}


function sorting()
	{
		// Sorting the array in alphabetical order
		names_of_people.sort();

		// Seperating the array items by creating a new line
		var i= names_of_people.join("<br>");
		console.log(names_of_people);		

		// Displaying the sorted array
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	// Storing the value of the search input in a variable
	var s= document.getElementById("s1").value;

	// Creating variables that will be used in the for loop
	var found=0;
	var j;

	// Starting the for loop
	for(j=0; j<names_of_people.length; j++)
		{
			// If the item contains what the person searches, increase the variable by 1 until the loop reaches the length of the array
			if(s==names_of_people[j]){
				found=found+1;
			}
		}

	// Display the number of items found
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}