// import multer from 'multer';

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');  // Specify the directory to save the uploaded files
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);  // Specify the file naming convention
//     }
// });

// const upload = multer({ storage: storage });


// const multipleUpload = upload.fields([
//     { name: 'LicenseImageName', maxCount: 1 },
//     { name: 'ProfileImageName', maxCount: 1 },
//     { name: 'PanCardImageName', maxCount: 1 },
//     { name: 'RCImageName', maxCount: 1 },
//     { name: 'InsuranceImageName', maxCount: 1 },
//     { name: 'PermitImageName', maxCount: 1 }
// ]);


// export default multipleUpload;