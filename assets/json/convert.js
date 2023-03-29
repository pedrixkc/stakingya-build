const { faSave } = require("@fortawesome/free-solid-svg-icons");
var XLSX = require("xlsx"); 

const excelAJSON = () =>{
    const excel = XLSX.readFile("C:\\Users\\PC\\Downloads\\Programación.xlsx");
    var nombreHoja = excel.SheetNames;
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
    console.log(datos);
    
}



excelAJSON();