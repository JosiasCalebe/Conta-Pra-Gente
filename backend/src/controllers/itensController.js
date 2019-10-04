var itens = require('../model/Item')
const jwt = require("jsonwebtoken")

exports.get = async (req, res) => {
        itens.find({}, function (err, response) {
			if (err) {
				return handleError(err);
			}
            return res.status(200).send(response);
          })
	
}

exports.getById = (req, res) => {
    // const token = req.headers["x-access-token"];
	// 	console.log(token);
	
	// 	if (!token) {
	// 	  res.status(401).send();
	// 	}
	
	// 	jwt.verify(token, "chave", function(error, decoded) {
	// 	  if (error) {
	// 		res.status(500).send();
	// 	  }
	// 	});
	
		let id = req.params.id
		// itens.findById(id, function (err, response) {
		// 	if (err) {
		// 		return res.status(404).send({'mensagem' : "Erro." + err});
		// 	}
        //     return res.status(200).send(response);
		//   })
		  itens
            .findById(req.params.id)
            .exec(function(err, item) {
                if (err) return res.status(500).send(err);
                if (item) return res.status(200).json(item);
                return res.status(404).json({"mensagem":"item não encontrado."});
            });
		// res.status(200).send(itens.findById(id))
}

exports.post = async (req, res) => {
	// todo melhorar funcao para verificar token
	const token = req.headers["x-access-token"];
	console.log(req.body)
			
	if (!token) {
		return res.status(401).send();
	}

	jwt.verify(token, "chave", function(error, decoded) {
		if (error) {
			return res.status(401).send({ "mensagem" : "Token Inválido." });
		}
	});
	
	itens.create(req.body, function (err, response) {
		if (err) {
			return handleError(err);
		}
		return res.status(200).send({ "mensagem" : "Cadastrado com sucesso." });
	  })

}