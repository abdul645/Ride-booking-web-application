const searchController = async (req, res) => {
    try {

       // Get pickup,dropoff, bikePrice from the request body
       const { pickup, dropoff, bikePrice,miniPrice,sedanPrice,topSedanPrice,xlPrice,route } = req.body;

      const routeData = req.session.routeData = {
        pickup,
        dropoff,
        bikePrice,
        miniPrice,
        sedanPrice,
        topSedanPrice,
        xlPrice,
         route
        // Other route details as needed
    };
    // res.redirect('/go');

    // Store data in session (example using req.session)
    req.session.routeData = routeData;
    //    console.log(req.body); // Check request body data
    //    console.log(req.session); // Check session data
         // Store values in the session
        // req.session.pickup = pickup; 
        // req.session.dropoff = dropoff;
        // req.session.bikePrice = bikePrice,
        // req.session.miniPrice =miniPrice ,
        // req.session.sedanPrice = sedanPrice,
        // req.session.topSedanPrice =topSedanPrice ,
        // req.session.xlPrice = xlPrice,

        res.status(200).json({ message: 'Session variables set successfully' });
    } catch (error) {
        console.error('Error setting session variables:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
export { searchController }