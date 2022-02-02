/* if(par.style.display === 'block'){
      setInterval(function() {
         par.style.display = 'none'
      }, 2000)
   }
   else{
      
         setInterval(function() {
            par.style.display = 'none'
         }, 2000)
   }*/

//Entrar

var entrar = document.querySelector('.entrarclick')
var escond = document.getElementById("escond-login-page")
entrar.onclick = () =>{
   if(escond.style.display === 'block'){
     escond.style.display = 'none'
    
   }else{
      escond.style.display = 'block'
      
   }
} 

var enviar = document.getElementById('enviar')
var carregar = document.getElementById('carregar')
var erro = document.querySelector(".erro")
var email = document.getElementById('email')

enviar.onclick = () => {
      if(email === ''){
         alert('erro')
         carregar.style.display = 'none'
      }
      else{
         setTimeout(function(){
            carregar.style.display ='block'
           }, 1000)
           setTimeout( function(){
            carregar.style.display ='none'
           }, 4000)
            
         }
      
          if(escond.style.display === 'block'){
            escond.style.display = 'none'
            setTimeout(function() {
               par.style.display = 'block'
            }, 4000)
            setTimeout(function() {
               par.style.display = 'none'
               location.reload()
            }, 11000)
         }
      
      }
  
    


//carregar

var porcent = document.querySelector(".porcentagem")
var par = document.querySelector(".parabenizaco")
var animate = document.getElementById('enviar')


/*function animate(){
 
   
   if(carregar.style.display = 'block'){
      carregar.style.display = 'none'
   }else{
    
      setTimeout(function(){
         carregar.style.display ='block'
        }, 1000)
        setTimeout( function(){
         carregar.style.display ='none'
        }, 4000)
   }

    if(escond.style.display === 'block'){
      escond.style.display = 'none'
      setTimeout(function() {
         par.style.display = 'block'
      }, 4000)
      setTimeout(function() {
         par.style.display = 'none'
         location.reload()
      }, 11000)
   }

   
}*/


//Redes sociais

var redes = document.querySelector(".redes")

function  redesSociais(){
  

   if(carregar.style.display === 'block'){
      carregar.style.display = 'none'
      
   }else{
     setTimeout(function(){
      carregar.style.display ='block'
     }, 1000)
     setTimeout( function(){
      carregar.style.display ='none'
     }, 4000)
      
   }

    if(escond.style.display === 'block'){
      escond.style.display = 'none'
      setTimeout(function() {
         par.style.display = 'block'
      }, 4000)
      setTimeout(function() {
         par.style.display = 'none'
         location.reload()
      }, 11000)
   }

      
   
}


//Olho

var senha = document.querySelector('.senha')
var btn = document.querySelector('.olho')

btn.onclick = () =>{
   if (senha.type === 'password'){
       
    senha.type = 'text'
    btn.src = "imagens/Cadastro/icons8-olho-fechado-20.png"
   }
   else{
    senha.type = 'password'
   btn.src="imagens/Cadastro/olho-aberto.png"
   }
}



//Erro de dados

