/* HomeController.js */

class HomeController {

    async home(req, res) {
        res.render('home.ejs', {texto: 'texto de teste'});
    }

}

module.exports = new HomeController;