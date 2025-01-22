import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const exportToPDF = () => {
    const element = document.getElementById("responseContent"); // The container you want to export
    
    html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * pageWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("output.pdf");
    });
};
