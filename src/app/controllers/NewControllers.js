

class NewsControllers {

    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send("detail")
    }
}


// khởi tạo và export luôn
module.exports = new NewsControllers