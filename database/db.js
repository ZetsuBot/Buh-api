var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = 'https://satoru.up.railway.app/';
try {
if(url == 'https://satoru.up.railway.app/') throw console.log(color('Verifique a configuração do banco de dados, o url var não foi preenchido','red'));
} catch (e) {
	return;
	}
var db = monk(url);

db.then(() => {
  console.log(color('Connected correctly to server, ZhirrrGanss','green'))
})
.catch ((e) => {
	console.log(color('Error : '+ e +'\n\nFalha ao conectar ao banco de dados, \verifique a configuração do banco de dados se a URL de conexão está correta','red'))
	})


module.exports = db
