function calcul_moyenne(){
var n1= prompt("Donner la première note: ") 

var n2= prompt ("Donner la deuxième note"); ;
    
var n3= prompt("Donner la troisième note: ");

var somme = Number (n1)+Number (n2)+Number (n3);

document.write ("Voici la somme: "+somme+ "<br>");

var moyenne= somme/3;

document.write("Voici la moyenne: "+moyenne+"<br>");

if (moyenne<10)
document.write("non admit");
else
document.write("admit");
}

function test_age(){
    let age = prompt('Quelle est votre age?');


     if(age< 18){
        
        document.write("Vous etes mineur"); 
        document.bgColor="red";
        
    }
        
    else{
        document.write("Vous etes majeur");
        document.bgColor="green";
        
    }
   }
    
   function simple_affichage()
   {
    var n1=prompt("donner votre nom prenom")
    document.write("bonjour" +n1);

   }

   function test_couleur(){

    let c = prompt("Donner une couleur")
    
    if(c == "rouge" || c == "ROUGE" || c == "R")
    { document.body.style.background = "red"
   }
    
    else if (c == "bleu" || c == "Bleu" || c == "B"){ 
        document.body.style.background = "blue"
    }
    
    else{
    
    document.write("Couleur non comprise")
    
    }

    }
   
    
    
    

    