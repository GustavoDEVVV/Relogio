function carregar(){
var msg= window.document.getElementById('msg')

var img= window.document.getElementById('imagem')

var data= new Date()

var hora= data.getHours()


// para colocar horas manualmente, caso queira deixar hora local do pc só deixe comentado

//var hora = 22
msg.innerHTML = `agora são ${hora} horas.`

if(hora >=0 && hora < 12){
    //bom dia
    img.src =`fotomanha.jpg`
    document.body.style.background = '#3CB371'
} else if(hora >=12 && hora <= 18){
    //boa tarde
    img.src =`fototarde.jpg`
    document.body.style.background = '#DAA520'
}else{
    //boa noite
    img.src =`fotonoite.jpg`
    document.body.style.background = '#483D8B'
}

}