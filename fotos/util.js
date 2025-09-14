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
			const path = image.substring(0,image.lastIndexOf("/"))
			table += `<tr><td width="400px"><a href="evento.htm?path=${path}"><img src="${image}" width="400px" height="200px"></a></td><td width="70px">&nbsp;</td>`
			table += `<td align="center">${desc}</td><td width="70px">&nbsp;</td></tr><tr><td height="20px" colspan="4"></td></tr>`
	  });
	  div.innerHTML = table
	});	
}

function getURLParam(param) {

	// Cria um objeto URLSearchParams a partir da query string da URL
	// window.location.search retorna a parte da URL que começa com '?'
	// se precisar, window.location.href retorna URL completa da página
	const params = new URLSearchParams(window.location.search);
	
	// Recupera o valor de um parâmetro específico
	const paramValue = params.get(param);
	
	return paramValue;

}

async function preCarregarImagens() {
	const pathOrigin = window.location.origin;
	const pathParam = getURLParam("path");
	let div = "";
	let a = '<a href="PATH" data-pswp-width="1200" data-pswp-height="800"><img src="PATH" width="300" height="300" alt="" /></a>&nbsp;&nbsp;';
	for (let i = 0; i <= 150; i++) {
		const pathIMG = `${pathOrigin}/${pathParam}/${i}.jpg`;
		let aIMG = a.replaceAll("PATH", pathIMG)
		//console.log(pathIMG)		
		try {

			// Cria uma promessa para tentar carregar a imagem
			const promessaDeCarregamento = new Promise((resolve, reject) => {
				const img = new Image();
				img.onload = () => resolve(img);
				img.onerror = () => reject();
				img.src = pathIMG;
			});

			// Aguarda o resultado da promessa
			await promessaDeCarregamento;
			div += aIMG;

		} catch (error) {
			// Gera erro se não encontrar a imagem, a promessa é rejeitada e o 'catch' é executado			
			// O 'return' em uma função async dentro de um loop tem o mesmo efeito
			// que o 'break'. Ele para a execução da função.
			document.getElementById('my-gallery').innerHTML = div;
			lightbox.init();
			return;
		}
	}
}

function loadEvento() {
	// Chama a função para iniciar o pré-carregamento
	preCarregarImagens();
}