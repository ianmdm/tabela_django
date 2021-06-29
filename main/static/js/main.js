$.ajax({
  type: 'GET',
  dataType: 'json',
  contentType:'application/json; charset=utf-8',
  url: "/requisicao",
  success: function(data){
    var info = [];
    data.map((val)=>{
      info.push({produto:val.product_url, dinl:val.product_url__created_at, total:val.c, cl:val.consult_date});
    })
    
    
    info.map((val)=>{
      var new_coluna = document.createElement("th")
      var linha = document.createElement("tr");
      var campo_produto = document.createElement("td");
      var campo_dinl = document.createElement("td");
      var campo_total = document.createElement("td");
      var texto_coluna = document.createTextNode(val.cl);
      var texto_produto = document.createTextNode(val.produto);
      var texto_dinl = document.createTextNode(val.dinl);
      var texto_total = document.createTextNode(val.total);
      new_coluna.appendChild(texto_coluna);
      campo_produto.appendChild(texto_produto);
      campo_dinl.appendChild(texto_dinl);
      campo_total.appendChild(texto_total);
      linha.appendChild(campo_produto);
      linha.appendChild(campo_dinl);
      linha.appendChild(campo_total);
      document.getElementById("titulos").appendChild(new_coluna);
      document.getElementById("body").appendChild(linha);
    })
    
  }
});
