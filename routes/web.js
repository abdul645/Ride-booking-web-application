import express from 'express'
const router = express.Router();
// import Path from 'path';
// import multipleUpload from '../middlewares/MulterConfig.js';



//import controllers
import { homeController } from '../controllers/homeController.js';
import { signinSignupRideController } from '../controllers/signinSignupRideController.js';
import { signinsignupDriveController } from '../controllers/signinsignupDriveController.js';

import { RideController } from '../controllers/RideController.js';
import { goController } from '../controllers/goController.js';

import { driverSignupController } from '../controllers/driverSignupController.js';
import { driverSigninController} from '../controllers/driverSigninController.js';
import { driverSigninFormControlller } from '../controllers/driverSigninFormController.js';
import { driverSignupFormController } from '../controllers/driverSignupFormController.js';

import { rideSigninController } from '../controllers/rideSigninController.js';
import { rideSignupController } from '../controllers/rideSignupController.js';
import { rideSignupFormController } from '../controllers/rideSignupFormController.js';
import { rideSigninFormController } from '../controllers/rideSigninFormController.js';
import { HomeDriverController } from '../controllers/HomeDriverController.js';
import { DriverDetailsController } from '../controllers/DriverDeatilsController.js'; 
import { AllDriverDocumentsController } from '../controllers/AllDriverDocumentsController.js';
import { AllDriverDocument } from '../controllers/AllDriverDocument.js';
import { HomeRideController } from '../controllers/HomeRideController.js';
import { searchController } from '../controllers/searchController.js';
import multer from 'multer';

var storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null, 'public/uploads')
    },
    filename: function(req, file , cb){
        cb(null, Date.now() + file.originalname)
    }
})

var upload = multer({storage});


// Define routes
router.get('/', homeController)
router.get('/signin-signup-ride', signinSignupRideController)
router.get('/signin-signup-Drive', signinsignupDriveController)


router.get('/driverSignup', driverSignupFormController)
router.post('/driverSignup', driverSignupController)

router.get('/driverSignin', driverSigninFormControlller)
router.post('/driverSignin', driverSigninController)


router.get('/rideSignup', rideSignupFormController)
router.post('/rideSignup', rideSignupController)

router.get('/rideSignin', rideSigninFormController)
router.post('/rideSignin', rideSigninController)

router.get('/Ride', RideController)
router.post('/Ride', searchController);
// router.get('/go', goController)
router.post('/go', searchController)


router.get('/homeDriver', HomeDriverController);
router.get('/driverDetails', DriverDetailsController);

router.get('/AllDriverDocuments', AllDriverDocumentsController)
// router.post('/AllDriverDocuments', upload.single('LicenceImageName'),AllDriverDocument)// Handle image upload along with other details

//uploading Driver document 
// Define the route with multer middleware
// router.post('/AllDriverDocuments', multipleUpload, AllDriverDocument);


router.post('/AllDriverDocuments', 
    upload.fields([
            { name: 'LicenseImageName', maxCount: 1 },
            { name: 'ProfileImageName', maxCount: 1 },
            { name: 'PanCardImageName', maxCount: 1 },
            { name: 'RCImageName', maxCount: 1 },
            { name: 'InsuranceImageName', maxCount: 1 },
            { name: 'vehicleImageName', maxCount: 1 }
        ]), AllDriverDocument);

router.get('/HomeRide', HomeRideController)
router.post('/homeDriver', HomeDriverController)



export default router