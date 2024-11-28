const routes = (app) => {
    app.route('/contact')
    .get((req, res) =>
        res.send('GET request successful!')
    )

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
