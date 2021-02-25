const mongoose = require("mongoose");
const SHA1 = require("crypto-js/sha1");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const PDFDocument = require("pdfkit");

const Invoice = mongoose.model("invoices");
const Carousel = mongoose.model("carousels");

const userAuth = require("../middleware/authAdmin");
const pdf = require("../controller/pdf");

//multer config
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //    cb(null, path.join(__dirname, "../../client/public/uploads/"));
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("file");

module.exports = (app) => {
  //post img inor der to use static url
  app.post("/api/admin/carousel", userAuth, (req, res) => {
    upload(req, res, (err) => {
      if (err) return res.status(500).send("Please upload a file");
      return res.status(200).json({ success: true, img: req.file.filename });
    });
  });

  app.get("/api/carousel/:img", (req, res) => {
    const img = req.params.img;
    res.sendFile(path.join(__dirname, `../uploads/${img}`));
  });

  //save text on images
  app.post("/api/admin/carousel_text", userAuth, (req, res) => {
    const carousel = new Carousel(req.body);
    carousel.save((err, data) => {
      if (err) return res.status(500).send(err);
      return res.status(200).json({ success: true, data });
    });
  });

  //load the text from the db
  app.get("/api/carouseL_text", (req, res) => {
    Carousel.find({}, (err, element) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(element);
    });
  });

  app.get("/api/admin/del/carousel_text", userAuth, (req, res) => {
    const image = req.query.image;
    fs.unlink(path.join(__dirname, `../uploads/${image}`), (err) => {
      if (err) return res.status(500).send("Error deleting image");
      Carousel.findOneAndDelete({ img: image }, (err) => {
        if (err) return res.status(500).send("Error deleting slide");
        return res.status(200).json({ success: true });
      });
    });
  });

  //save invoice
  app.post("/api/admin/save_invoice", userAuth, (req, res) => {
    let date = new Date();
    let number = `ATV${date.getSeconds()}${date.getMilliseconds()}-${SHA1(
      req.admin._id
    )
      .toString()
      .substring(0, 8)}`;
    const data = new Invoice({
      number,
      company: req.body.company,
      consignment: req.body.consignment,
      delivery: req.body.delivery,
      amount: req.body.amount,
      amountInWords: req.body.amountInWords,
      location: req.body.location,
    });
    data.save((err, invoice) => {
      if (err) return res.status(500).send(err);
      return res.status(200).json({ success: true, invoice });
    });
  });

  //edit invoice
  app.post("/api/admin/edit_invoice", userAuth, (req, res) => {
    let number = req.query.number;
    Invoice.findOneAndUpdate(
      { number },
      { $set: req.body },
      { new: true },
      (err, update) => {
        if (err) return res.status(500).sen(err);
        return res.status(200).json({ success: true, update });
      }
    );
  });

  app.post("/api/invoice", (req, res) => {
    let number = req.body.number;
    Invoice.findOne({ number: number }, (err, print) => {
      if (print === null) return res.status(500).send("Invoice not found");
      return res.status(200).json(print);
    });
  });

  app.get("/api/invoice/print/:number", (req, res) => {
    const number = req.params.number;
    return res.download(
      path.join(__dirname, `../pdf/${number}.pdf`),
      `${number}.pdf`,
      (err) => {
        if (err) return res.status(500).send("Cant find file");
        fs.unlink(path.join(__dirname, `../pdf/${number}.pdf`), (err) => {
          if (err) return res.status(500).send("Cant find file");
        });
      }
    );
  });

  //view invoice - inv number
  app.get("/api/pdf", (req, res) => {
    let number = req.query.number;
    Invoice.findOne({ number: number }, (err, print) => {
      if (print === null) return res.status(500).send("Invoice not found");
      const pdfPath = path.join(__dirname, `../pdf/${number}.pdf`);
      const pdfDoc = new PDFDocument({ margin: 50 });
      try {
        res.setHeader(
          "Content-Disposition",
          'attachment; filename="' + number + '" '
        );
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "application/pdf");
        pdfDoc.pipe(fs.createWriteStream(pdfPath));
        pdf.generateHeader(pdfDoc);
        pdf.generateInvoiceData(pdfDoc, print);
        pdfDoc.pipe(res);
        pdf.generateFooter(pdfDoc);
        pdfDoc.end();
        return res.status(201);
      } catch (err) {
        return res.status(500).send(err);
      }
    });
  });

  //view all invoices
  app.get("/api/admin/invoices", userAuth, (req, res) => {
    Invoice.find({}, (err, invoices) => {
      if (err) return res.status(500).send(err);
      return res.status(200).json({ success: true, invoices });
    });
  });
};
