//================= PRODUCTS =================== //

function openTab(tabID) {
  var x = document.getElementsByClassName("tab-content");
  var y = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.backgroundColor = "transparent"
    y[i].style.color = "#333333";
  }
  document.getElementById(tabID).style.display = "block";
  document.getElementById('btn-' + tabID).style.backgroundColor = "#f2f2f2";
  document.getElementById('btn-' + tabID).style.color = "#333333";
}

function color(name) {
  var colors = {
    tangerina: ['rgb(234,87,43)', 'rgb(245, 193, 116)', '#f2f2f2'],
    morango: ['rgb(231,52,51)', 'rgb(250, 164, 164)', '#f2f2f2f'],
    laranja: ['rgb(241,135,40)', 'rgb(243, 205, 172)', '#333333'],
    uva: ['rgb(145,74,151)', '#c2c2c2', '#f2f2f2'],
    'limão': ['rgb(82,175,58)', 'rgb(127, 212, 106)', '#f2f2f2'],
    'côco': ['rgb(161,199,69)', '#f2f2f2', '#f2f2f2']
  }
  //muda o nome
  document.getElementById('fruit-name').innerHTML = name
  //muda a cor do bg
  document.getElementById("products").style.backgroundColor = colors[name][0]
  //muda a cor do texto de fora
  document.getElementById("products").style.color = colors[name][2]
  var w = document.getElementById("table-header")
  //muda a cor do bg da box e da tabela
  w.style.backgroundColor = colors[name][1]
  document.getElementById('table').style.borderColor = colors[name][1]
  var z = document.getElementsByClassName("products-box-color");
  for (let i = 0; i < z.length; i++) {
    z[i].style.backgroundColor = colors[name][1]    
  }
  openTab('tab0')
  document.getElementById("products-info").style.width = "50%";
  document.getElementById("products-info").style.transform = 'scale(1)';  
}

