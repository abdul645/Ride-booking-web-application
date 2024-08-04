const RideController = (req, res) =>{
    res.render('Ride', {'title': 'Ride',
        // username: req.body.UserName
    })
}
export { RideController }