import DriverDocumentModel from "../models/DriverDocuments.js";

const goController = async (req, res) => {

    const result = await DriverDocumentModel.find();
    if (req.session.routeData) {
        res.render('go', {
            data: result,
            title: 'Select Ride',
            username: req.session.username,
            pickup: req.session.routeData.pickup,
            dropoff: req.session.routeData.dropoff,
            bikePrice: req.session.routeData.bikePrice,
            miniPrice: req.session.routeData.miniPrice,
            sedanPrice: req.session.routeData.sedanPrice,
            topSedanPrice: req.session.routeData.topSedanPrice,
            xlPrice: req.session.routeData.xlPrice,
            routeData: JSON.stringify(req.session.routeData.route) // Pass routeData as a JSON string
        });
    } else {
        res.render('go', {
            title: 'Select Ride',
            username:'',
            pickup: '',
            dropoff: '',
            bikePrice: 0,
            routeData: null // Handle case where there is no route data
        });
    }

};

export { goController };

