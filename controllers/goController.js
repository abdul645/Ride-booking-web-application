import DriverDocumentModel from "../models/DriverDocuments.js";

const goController = async (req, res) => {
    // const { username, pickup, dropoff, bikePrice, miniPrice, sedanPrice, topSedanPrice, xlPrice } = req.session;
    
    // try{
    //     const result = await DriverDocumentModel.find();
    //     res.render("go", {data: result, 
    //         title: 'Go for a ride',
    //         username: req.session.username,
    //         pickup: req.body.pickup, // Ensure pickup location is passed
    //         dropoff: req.body.dropoff,
    //         bikePrice: req.body.bikePrice,
    //         // miniPrice: req.body.miniPrice,
    //         // sedanPrice: req.body.sedanPrice,
    //         // topSedanPrice: req.body.topSedanPrice,
    //         // xlPrice: req.body.xlPrice
        
    // }) 
    // }catch(err){
    //     console.log(err);
    // }
    
    res.render('go', { 
        title: 'Go for a ride',
        username: req.session.username,
        pickup: req.body.pickup, // Ensure pickup location is passed
        dropoff: req.body.dropoff,
        bikePrice: req.body.bikePrice,
        miniPrice: req.body.miniPrice,
        sedanPrice: req.body.sedanPrice,
        topSedanPrice: req.body.topSedanPrice,
        xlPrice: req.body.xlPrice
    });
};

export { goController };

// const homeDriverController = (req, res) => {
//     const username = req.session.username;
//     res.render('HomeDriver', { title: 'Driver Dashboard', username });
// };

// export { homeDriverController };
