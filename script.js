// Função para converter moedas
async function converterMoedas() {
    let amountStr = document.getElementById('amount').value.replace(',', '.');
    const amount = parseFloat(amountStr);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    if (fromCurrency === toCurrency) {
        resultDiv.innerHTML = '<p style="color: dark green;">Selecione moedas diferentes para converter.</p>';
        resultDiv.style.display = 'block';
        return;
    }

    if (!amount || amount <= 0 || isNaN(amount)) {
        resultDiv.innerHTML = '<p style="color: red;">Por favor, insira um valor válido.</p>';
        resultDiv.style.display = 'block';
        return;
    }

    try {
        // Fetch para a API usando a moeda de origem
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        if (data.error) {
            throw new Error('Erro na API de câmbio.');
        }

        const rate = data.rates[toCurrency];
        if (!rate) {
            throw new Error('Moeda de destino não encontrada.');
        }

        const convertedAmount = amount * rate;
        const formattedConverted = convertedAmount.toFixed(2).replace('.', ',');
        const formattedRate = rate.toFixed(4).replace('.', ',');
        resultDiv.innerHTML = `<p><strong>${amountStr} ${fromCurrency} = ${formattedConverted} ${toCurrency}</strong></p>
                               <small>Taxa de câmbio: 1 ${fromCurrency} = ${formattedRate} ${toCurrency}</small>`;
        resultDiv.style.display = 'block';
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: red;">Erro ao converter: ${error.message}</p>`;
        resultDiv.style.display = 'block';
    }
}

// Event listener para o form
document.getElementById('converterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    converterMoedas();
});

// Função para formatar o input com vírgula
function formatarValor(input) {
    let value = input.value.replace(/[^\d,]/g, '').replace(',', '.');
    let num = parseFloat(value);
    if (isNaN(num)) num = 0;
    input.value = num.toFixed(2).replace('.', ',');
}

// Event listener para formatar no blur
document.getElementById('amount').addEventListener('blur', function() {
    formatarValor(this);
});

// Event listener para o botão de swap
document.getElementById('swapButton').addEventListener('click', function() {
    const from = document.getElementById('fromCurrency');
    const to = document.getElementById('toCurrency');
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
});