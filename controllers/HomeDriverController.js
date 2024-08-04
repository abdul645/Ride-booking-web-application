const HomeDriverController = (req, res) => {
    res.render('HomeDriver', {
        title: 'Driver Dashboard',
        username: req.session.username,
        pickup: req.session.pickup // Ensure pickup location is stored in the session
    });
};

export { HomeDriverController };
