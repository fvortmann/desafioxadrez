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

const imagesContainer = document.getElementById('idLoad'); // Um elemento div no HTML

// Chama a função para buscar a lista de imagens
getImagesFromFolder().then(imageNames => {
  imageNames.forEach(name => {
    // Constrói a URL completa de cada imagem
    const imageUrl = `https://seuservidor.com/imagens/${name}`;
	
	alert(imageUrl)

    // Cria um novo elemento <img>
    /*const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = name; // Atributo alt é importante para acessibilidade*/

    // Adiciona a imagem ao contêiner na página
    //imagesContainer.appendChild(imgElement);
  });
});