function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano|| fano.value <1850) {
        window.alert('[ERRO] Dados inválidos!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebemenino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmenino.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebemenina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemenina.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}