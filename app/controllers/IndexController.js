

var IndexController = function(){};

IndexController.prototype.render = function(req, res) {

    console.log("IndexController init");
    
    /*
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : 'null'
    });
	*/
	res.locals = {
    	title: 'cabinquest',
    	user: req.user ? JSON.stringify(req.user) : 'null'
  	};
	
	return res.render('index/index');
};

module.exports = IndexController;

//http://stackoverflow.com/questions/12783615/partials-with-node-js-express-hogan-js
//http://www.100percentjs.com/replacing-jade-with-hogan-in-an-express-js-app-the-mean-stack/