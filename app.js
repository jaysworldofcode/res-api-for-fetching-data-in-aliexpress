const express = require('express')
const app = express()
const port = 3000

app.get('/product/details', (req, res) => {
    const scrape = require('aliexpress-product-scraper');
    const productId = req.query.id;
 
    try {
        const product = scrape(productId);
        product.then(result => {
          res.send(result)
        });
    } catch (err) {
        res.status(500)
        res.render('error', { error: err })
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})