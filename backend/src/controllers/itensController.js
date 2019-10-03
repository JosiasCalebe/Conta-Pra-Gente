var itens = require('../model/Item')
const jwt = require("jsonwebtoken")

exports.get = (req, res) => {
		// const token = req.headers["x-access-token"];
		// console.log(token);
	
		// if (!token) {
		//   res.status(401).send();
		// }
	
		// jwt.verify(token, "chave", function(error, decoded) {
		//   if (error) {
		// 	res.status(500).send();
		//   }
		// });
    
        itens.find({}, function (err, response) {
            if (err) return handleError(err);
            return res.status(200).send(response);
          })
	
}

exports.getById = (req, res) => {
    const token = req.headers["x-access-token"];
		console.log(token);
	
		if (!token) {
		  res.status(401).send();
		}
	
		jwt.verify(token, "chave", function(error, decoded) {
		  if (error) {
			res.status(500).send();
		  }
		});
	let id = req.params.id
	res.status(200).send(itens.findById(id))
}