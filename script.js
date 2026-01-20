let errores = [];



fetch("errores.json")

  .then(response => response.json())

  .then(data => errores = data);



function buscarError() {

  const texto = document.getElementById("buscador").value.toLowerCase();

  const resultado = document.getElementById("resultado");



  if (texto.length < 2) {

    resultado.innerHTML = "<p>Escribe al menos 2 caracteres</p>";

    return;

  }



  const encontrados = errores.filter(e =>

    e.codigo.toLowerCase().includes(texto) ||

    e.descripcion.toLowerCase().includes(texto) ||

    e.causa.toLowerCase().includes(texto) ||

    e.solucion.toLowerCase().includes(texto)

  );



  if (encontrados.length === 0) {

    resultado.innerHTML = "<p>No se encontraron resultados</p>";

    return;

  }



  resultado.innerHTML = "";



  encontrados.forEach(e => {

    resultado.innerHTML += `

      <div class="card">

        <h3>${e.codigo} - ${e.descripcion}</h3>

        <p><b>Causa:</b> ${e.causa}</p>

        <p><b>Solución:</b> ${e.solucion}</p>

        <hr>

      </div>

    `;

  });

}
