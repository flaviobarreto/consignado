document.getElementById('simulateBtn').addEventListener('click', function() {
    let saldoFgts = parseFloat(document.getElementById('saldoFgts').value);
    let salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    let dataNascimento = document.getElementById('dataNascimento').value;

    if (saldoFgts && salarioBruto && dataNascimento) {
        let fgtsValor = salarioBruto * 0.08;
        document.getElementById('valorResgate').textContent = `R$ ${fgtsValor.toFixed(2)}`;
        document.getElementById('resultSection').classList.remove('hidden');
        
        let whatsappLink = `https://wa.me/5511999999999?text=Simulação%20de%20resgate%20FGTS%20-%20Valor%20disponível:%20R$ ${fgtsValor.toFixed(2)}`;
        document.getElementById('whatsappLink').setAttribute('href', whatsappLink);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
