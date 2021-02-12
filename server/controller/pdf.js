module.exports ={
     generateHeader: function(pdfDoc) {
        pdfDoc
          //.image("logo.png", 50, 45, { width: 50 })
          .fillColor("#444444")
          .fontSize(15)
          .text("Adesuyi Transco Ventures", 50, 65)
          .fontSize(10)
          .text("Haulage and Logistice Solution", 200, 65, { align: "right" })
          .text("Lagos, Nigeria", { align: "right" })
          .moveDown();
      },
      
        generateFooter: function (pdfDoc) {
        pdfDoc.fontSize(13).text("...Thanks For your Patronage", 50, 700, {
          align: "center",
          width: 500,
        });
      },
      
        generateInvoiceData: function (pdfDoc, content) {
        pdfDoc
          .fontSize(25)
          .text(`Invoice Number: ${content.number}`, 50, 200)

          .fontSize(20)
          .text(`Company: ${content.company}`, 50, 230)
        //   .fontSize(20)
          .text(`Consignment: ${content.consignment}`, 50, 260)
          .text(`Delivery Status: ${content.delivery}`, 50, 290)
          .text(`Amount: ${content.amount}`, 50, 320)
          .text(`Amount in Words: ${content.amountInWords}`, 50, 350);
      }
      
}