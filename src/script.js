document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-agendamento');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome').value;
            const servico = document.getElementById('servico').options[document.getElementById('servico').selectedIndex].text;
            const data = document.getElementById('data').value;
            const hora = document.getElementById('hora').value;

            alert(`Obrigado, ${ nome }! Seu agendamento para ${ servico } no dia ${ data } às ${ hora } foi recebido com sucesso!`);
            form.reset();
        });
    }
});