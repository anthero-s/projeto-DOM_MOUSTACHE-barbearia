document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-agendamento");
  const listaContainer = document.getElementById("lista-agendamentos");
  const mensagemVazia = document.getElementById("mensagem-vazia");

  // Função para formatar data (AAAA-MM-DD para DD/MM/AAAA)
  const formatarData = (dataStr) => {
    const partes = dataStr.split("-");
    return partes.length === 3
      ? `${partes[2]}/${partes[1]}/${partes[0]}`
      : dataStr;
  };

  // Função para atualizar a visibilidade da mensagem de "lista vazia"
  const verificarListaVazia = () => {
    const cards = listaContainer.querySelectorAll(".card");
    if (cards.length === 0) {
      mensagemVazia.classList.remove("d-none");
    } else {
      mensagemVazia.classList.add("d-none");
    }
  };

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Captura os valores digitados
      const nome = document.getElementById("nome").value;
      const telefone = document.getElementById("telefone").value;
      const servico = document.getElementById("servico").value;
      const data = document.getElementById("data").value;
      const hora = document.getElementById("hora").value;

      // Cria o elemento de Card do Bootstrap na tela
      const card = document.createElement("div");
      card.className = "card bg-dark text-light border-secondary p-3 shadow-sm";

      card.innerHTML = `
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h4 class="h6 fw-bold text-warning mb-1">${nome}</h4>
                        <p class="mb-1 small"><strong>Serviço:</strong> ${servico}</p>
                        <p class="mb-1 small"><strong>Data/Hora:</strong> ${formatarData(data)} às ${hora}</p>
                        <p class="mb-0 small text-secondary"><strong>Contato:</strong> ${telefone}</p>
                    </div>
                    <button class="btn btn-outline-danger btn-sm fw-bold btn-excluir">
                        Excluir
                    </button>
                </div>
            `;

      // Adiciona o evento de remoção diretamente no botão "Excluir" deste card
      const btnExcluir = card.querySelector(".btn-excluir");
      btnExcluir.addEventListener("click", () => {
        card.remove();
        verificarListaVazia();
      });

      // Insere o novo card na tela e limpa o formulário
      listaContainer.appendChild(card);
      verificarListaVazia();
      form.reset();
    });
  }
});
