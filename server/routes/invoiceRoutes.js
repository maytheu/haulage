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
    cb(null, path.join(__dirname, "../../client/public/uploads/"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("file");

module.exports = (app) => {
  //post img inorder to use static url
  app.post("/api/admin/carousel", userAuth, (req, res) => {
    upload(req, res, (err) => {

      if (err) return res.status(500).send("Please upload a file");
      return res.status(200).json({ success: true, img: req.file.filename });
    });
  });

  //save text on images
  app.post("/api/admin/carousel_text", userAuth, (req, res) => {
    const carousel = new Carousel(req.body);
    carousel.save((err, data) => {
      if (err) return res.status(500).send(err);
      return res.status(200).json({ success: true, data });
    });
  });

  //view carousel
  app.get("/api/carousel", (req, res) => {
    const dir = path.resolve(__dirname + "/../../client/public/uploads");
    fs.readdir(dir, (err, item) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(item);
    });
  });

  //load the text from the db
  app.get("/api/carouseL_text", (req, res) => {
    Carousel.find({}, (err, element) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(element);
    });
  });

  //dowload img api
  app.get("/api/carousel/download/:name", (req, res) => {
    const name = req.params.name;
    const dir = path.resolve(
      __dirname + `/../../client/public/uploads/${name}`
    );
    fs.readdir(dir, (err, item) => {
      if (err) return res.status(500).send(err);
      return res.status(200).download(item);
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
      location: req.body.location
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
      return res.status(200).json(print)
    })})

  //view invoice - inv number
  app.get("/api/pdf", (req, res) => {
    let number = req.query.number;
    Invoice.findOne({ number: number }, (err, print) => {
      if (print === null) return res.status(500).send("Invoice not found");
      console.log('here')
      const pdfPath = path.join(
        __dirname,
        `../../client/public/pdf/${number}.pdf`
      );
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
              return  res.status(201)
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
