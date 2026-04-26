const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues() {
    const inputValue = document.querySelector('.input-currency').value
    const currencyValueConvert = document.querySelector('.currency-value-real')
    const currencyValueDolar = document.querySelector('.currency-value-dolar')

    const dolarToday = 4.98
    const euroToday = 5.87
    const libraToday = 6.72
    const bitcoinToday = 389.225
    const ieneJaponesToday = 0.031

    if (currencySelect.value == 'dolar') {
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue / dolarToday)
    }

    if (currencySelect.value == 'euro') {
        currencyValueDolar.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValue / euroToday)
    }

    if (currencySelect.value == 'libra') {
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValue / libraToday)
    }

    if (currencySelect.value == 'bitcoin') {
        currencyValueDolar.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputValue / bitcoinToday)
    }

    if (currencySelect.value == 'iene') {
        currencyValueDolar.innerHTML = new Intl.NumberFormat
            ('ja-JP', {
                style: 'currency',
                currency: 'JPY',
            }).format(inputValue / ieneJaponesToday)
    }

    currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValue)

}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImagem = document.querySelector('.currency-img')

    if (currencySelect.value === 'dolar') {
        currencyName.innerHTML = 'U$ Dólar Amaricano'
        currencyImagem.src = './assets/estados-unidos.svg'
    }
    if (currencySelect.value === 'euro') {
        currencyName.innerHTML = '€ Euro'
        currencyImagem.src = './assets/euro.svg'
    }

    if (currencySelect.value === 'libra') {
        currencyName.innerHTML = '£ Libra'
        currencyImagem.src = './assets/libra.svg'
    }

    if (currencySelect.value === 'Bitcoin') {
        currencyName.innerHTML = '₿ Bitcoin'
        currencyImagem.src = './assets/bitcoin.svg'
    }

    if (currencySelect.value === 'iene') {
        currencyName.innerHTML = '¥ Iene Japonês'
        currencyImagem.src = './assets/japaao.svg'
    }
    convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)

