async function getImagesFromFolder() {
  const endpoint = 'fotos/eventos.json';
  
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Erro ao buscar a lista de imagens.');
    }

    const imageNames = await response.json();
    return imageNames;

  } catch (error) {
    console.error('Ocorreu um erro:', error);
    return [];
  }
}

function load() {	
	const div = document.getElementById('idLoad'); // Um elemento div no HTML //Apesar de ser const que nao pode mudar, o conteúdo interno ou propriedade de um obj pode mudar.
	getImagesFromFolder().then(eventos => {
		let table = '<table border=0 id="idFotos">' //let para definir a var como local, evitar não declarar com const ou let e evitar declarar com var, atualmente é assim em JS.
		eventos.forEach(evento => {
			const image = evento[0]
			const desc = evento[1]
			const path = image.substring(0,image.lastIndexOf("/")+1)
			table += `<tr><td width="400px"><a href="index.htm?path=${path}"><img src="${image}" width="400px" height="200px"></a></td><td width="70px">&nbsp;</td>`
			table += `<td align="center">${desc}</td><td width="70px">&nbsp;</td></tr><tr><td height="20px" colspan="4"></td></tr>`
	  });
	  div.innerHTML = table
	});
	
}