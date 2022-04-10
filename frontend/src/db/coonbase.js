const fs  = require("fs");
const excelToJson = require("convert-excel-to-json");

const result = excelToJson({
    sourceFile: "Coonbase.xlsb",
    sheets:[{
        name: "table",
        header: {
            rows: 1
        },
        columnToKey: {
            "*": "{{columnHeader}}"
        }
    }]
    
})

console.log(result)

const data = JSON.stringify(result)
fs.writeFileSync("coonbase.json", data)