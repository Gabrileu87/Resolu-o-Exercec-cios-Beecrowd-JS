var placaFormulario = document.getElementById('placaFormulario');
var resultadoDiv = document.getElementById('resultado');

placaFormulario.addEventListener('submit', function(event) {
    event.preventDefault();

var placa = document.getElementById('placaInput').value.toUpperCase();

var isAlpha = function(ch){
     return typeof ch === "string" && ch.length === 1
            && (ch >= "A" && ch <= "Z");

}; 

var isDigit = function(number){
    return !isNaN(parseInt(number));
 
};
 
 // Verifica se a placa está no formato AAA-1234

    if(isAlpha(placa[0]) && isAlpha(placa[1]) && isAlpha(placa[2])
    &&isDigit(placa[3]) && isAlpha(placa[4]) && isDigit(placa[5]) && isDigit(placa[6])){

// Definição de intervalos de placas para regiões


    if ((placa >= "MZN" && placa <= "NAG") || (placa >= "NXR" && placa <="NXT")
              ||(placa >= "QLU" && placa <= "QLZ") || (placa >= "QWM" && placa <= "QWQ") || (placa == "OXP") || (placa == "OVG")){    
                resultadoDiv.textContent = 'Essa placa é do Acre';

       }


    else if ((placa >= "JWF" && placa <= "JXY") || (placa >= "NOI" && placa <= "NPB") || (placa >= "OAA" && placa <= "OAO") ||
            (placa >=  "PHA" && placa <= "PHZ") || (placa >= "QZA" && placa <= "QZZ") || (placa == "OXM")){ 
            resultadoDiv.textContent = 'Essa placa é de Amazonas';

            }
  
    else if ((placa >= "NBB" && placa <= "NEH") || (placa >= "OHL" && placa <= "OHW") || (placa >= "QTA" && placa <= "QTJ") ||
            (placa >= "RSU" && placa <= "RSZ") || (placa == "OXL") || (placa == "QRA")){ 
            resultadoDiv.textContent = 'Essa placa é de Rondonia';

   }
  else { 
       resultadoDiv.textContent = 'Essa placa não pertence a essas regiões';
    }
  } else {
        resultadoDiv.textContent = 'Essa placa é inválida';
  }



  
});