$(function(){
  // var regex = /^[0-9,]+$/
$('#button').click(function(){
  var number1 = $('#note1').val()
  var number2 = $('#note2').val()
  var number3 = $('#note3').val()
  var number4 = $('#note4').val()
  var number5 = $('#note5').val()
  // var input = $('input')

// if(!regex.test(input)){
//   alert('Il faut un chiffre')
//   return false;
// }

//calcule de la moyenne
var calcul = (Number(number1.replace(',','.')) + Number(number2.replace(',','.')) + Number(number3.replace(',','.'))+ Number(number4.replace(',','.')) +Number(number5.replace(',','.')))/5
console.log(calcul)
//Si le chiffre est plus grand que 20 il ne se passe rien.
if(calcul > 20){
  alert('il faut un chiffre comprit entre 0 et 20')
  return false
  }

if(calcul >= 0 && calcul < 10){
  alert('appréciation : En dessous de la moyenne');
} else if(calcul >= 10 && calcul < 13){
  alert('appréciation : Moyen');
} else if(calcul >= 13 && calcul < 16) {
  alert('appréciation : Bien')
} else if(calcul >= 16 && calcul < 20) {
  alert('appréciation : Très bien')
} else{
  alert('appréciation : Excellent')
}
})
})
