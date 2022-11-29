var selectedRow = null

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null)
        insertNewRecord(formData);
        else
        updateRecord(formData);
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["Nama"]    = document.getElementById("Nama").value;
    formData["Kelas"]   = document.getElementById("Kelas").value;
    formData["Jurusan"] = document.getElementById("Jurusan").value;
    formData["Nilai"]   = document.getElementById("Nilai").value;
    return formData;
}
function insertNewRecord(data){
    var table   = document.getElementById("tabelsiswa").getElementsByTagName('tbody')[0];
    var newRow  =table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Nama;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Kelas;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Jurusan; 
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Nilai;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML =`<a onclick="onEdit(this)">Edit</a>
                      <a onclick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("Nama").value ="";
    document.getElementById("Kelas").value ="";
    document.getElementById("Jurusan").value ="";
    document.getElementById("Nilai").value ="";
}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Nama").value       = selectedRow.cells[0].innerHTML;
    document.getElementById("Kelas").value      = selectedRow.cells[1].innerHTML;
    document.getElementById("Jurusan").value    = selectedRow.cells[2].innerHTML;
    document.getElementById("Nilai").value  = selectedRow.cells[3].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Nama;
    selectedRow.cells[1].innerHTML = formData.Kelas; 
    selectedRow.cells[2].innerHTML = formData.Jurusan;
    selectedRow.cells[3].innerHTML = formData.Nilai;

}
function onDelete(td){
    if (confirm('Are u sure want to delete this record ?')){
        row = td.parentElement.parentElement;   
        document.getElementById("tabelsiswa").deleteRow(row.rowIndex);
        resetForm();
        }
}