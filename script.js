function insert_Row() {
    //Write your code here
  var table = document.getElementById('sampleTable');
	var row=document.createElement('tr');
	var col1=document.createElement('td');
	var col2=document.createElement('td');
	col1.innerText='New Cell1';
	col2.innerText='New Cell2';
	row.appendChild(col1);
	row.appendChild(col2);
	table.prepend(row);
}