import { jsPDF } from "jspdf";

const doc = new jsPDF({
  orientation: "landscape",
});

doc.setFontSize(40);
doc.text("Hello world!", 50, 20);

doc.save("pdf.pdf");
