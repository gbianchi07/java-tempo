//retorna a data

//let data = new Date()
//document.write(data)
//document.write("<br><br>")


//retorna a data padrão americana
msg = document.getElementById('msgData')
let data1 = new Date()
//document.write(data1.toDateString());
//document.write("<br><br>");

msg.innerHTML +=`<p>${data1}</p>`

//tempo
function BemVindo(){
    alert("ola,dev tudo bem")
}
setTimeout(BemVindo,1000)


// retorna a data padrao do navegador

//let data2 = new Date
//document.write(data2.toLocaleDateString());
//document.write("<br><br>");

//retorna a data com array
//let data3 = new Date()
//let diaSemana = ['domingo','segunda','terca','quarta','quinta','sexta','sabado',]
//document.write(diaSemana[data3.getDay()]);
//document.write("<br><br>");


// horas

//let hour = new Date()
//document.write(hour.getHours());
//document.write("<br><br>")
//hour.setHours(hour.getHours()+2);
//document.write(hour.getHours());
//document.write("<br><br>");

//retorno minutos

//let minutes =  new Date()
//document.write(minutes.getMinutes());

// retorna os segundos
//let segundos = new Date()
//document.write(segundos.getSeconds());
//document.write("<br><br>");
