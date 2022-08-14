function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno == 0 || fAno.value > ano ){
        window.alert(`[ERRO]<br>Verifique os dados e tente novamente!`)
    }
    else{ /* TUDO OK */
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''

        var img = document.createElement('img') //Criando um elemento HTML
        img.setAttribute('id','foto') //Criando a id do elemento
        img.style.height = '350px'
        img.style.paddingTop = '15px' 

        if(sex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade <= 5){
                //bebe
                img.setAttribute('src', './img/m-bebe.jpg')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', './img/m-jovem.jpg')
            }
            else if(idade < 60 ){
                //adulto
                img.setAttribute('src', './img/m-adulto.jpg')
            }
            else{
                img.setAttribute('src', './img/m-idoso.jpg')
                //idoso
            }
               

        }



        else if (sex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade <= 5){
                //bebe
                img.setAttribute('src', './img/f-bebe.jpg')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', './img/f-jovem.jpg')
            }
            else if(idade < 60){
                //adulto
                img.setAttribute('src', './img/f-adulto.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', './img/f-idoso.jpg')
            }

        }
      
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //espaço determinado para img criada no JS
        
    }
    
}