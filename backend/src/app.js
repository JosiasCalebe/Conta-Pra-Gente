const jwt = require("jsonwebtoken");
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

//Rotas
const index = require('./routes/index')
const itensRoute = require('./routes/itensRoute')

//Modelos
const users = require("./model/Usuario.js");

// mongodb
var mongoose = require("mongoose");
// mongoose.connect("mongodb://admin:admin132@ds329058.mlab.com:29058/contapragente");
mongoose.connect("mongodb://127.0.0.1:27017/contapragente");

// verificar se foi conectado mesmo
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("conexão feita com sucesso.");
});

// cors
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})

app.use(express.json());
app.use('/', index)
app.use('/api/itens', itensRoute)

app.post("/api/login", (req, res) => {
	authenticatesUser(req.body, (error, id) => {
	  let token;
  
	  if (error) {
		return res.status(error.code).send(error.message);
	  }
  
	  token = jwt.sign({ id }, "chave", {
		expiresIn: 300
	  });
  
	  res.send({ auth: true, token });
	});
  });
  
  function authenticatesUser(authUser, cb) {

	users.findOne(
	  {
		email: authUser.email,
		senha: authUser.senha
	  },
	  function(error, response) {
		if (error) {
		  return cb({ code: 500, message: "Usuário ou senha inválidos." });
		} else if (response === null) {
		  return cb({ code: 500, message: "Usuário ou senha inválidos." });
		} else {
		  return cb(null, response.id);
		}
	  }
	);
  }
  
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}...`));

module.exports = app
