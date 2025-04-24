async function pegarConselho() {
    try {
      const resposta = await fetch('https://api.adviceslip.com/advice');
      const dados = await resposta.json();
      const numero = dados.slip.id;
      const conselho = dados.slip.advice;
  
      // Atualiza o conteúdo da página
      document.getElementById('advice-number').innerText = `ADVICE #${numero}`;
      document.getElementById('advice-text').innerText = `“${conselho}”`;
    } catch (erro) {
      console.error('Erro ao buscar conselho:', erro);
    }
  }

  