import ExcelJS, { type CellValue } from "exceljs";

const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile("./data.xlsx");

const rows: number[] = [];
workbook.getWorksheet("1")?.eachRow(function (
  row: ExcelJS.Row,
  rowNumber: number,
) {
  console.log(
    "Row " + rowNumber + " = " + JSON.stringify(row.values[1 as CellValue]),
  );
  rows.push(Number(row.values[1 as CellValue]));
});

console.log(`Total number of rows: ${rows.length}`);

const sorted: number[] = rows.sort((a, b) => b - a);

console.log("The biggest number is: " + sorted[0]);
