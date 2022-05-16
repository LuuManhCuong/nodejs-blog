

class SiteControllers {

    // [GET] /
    index(req, res) {
        res.render('home')
    }

    // [GET] /search
    search(req, res) {
        res.render("search")
    }
}


// khởi tạo và export luôn
module.exports = new SiteControllers