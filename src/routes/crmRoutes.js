const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from; ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, (req, res, next) => {
        res.send('GET request successful!')
    })

    .post((req, res) =>
        res.send('POST reqvest successful!')
    )

    app.route('/contact/:contactId')
    .put((req, res) =>
        res.send('PUT reqvest successful!!')
    )

    .delete((req, res) =>
        res.send('DELETE reqvest successful!')
    )
}

export default routes;
