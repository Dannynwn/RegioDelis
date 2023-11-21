

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function crearSucursal() {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var descripcion = document.getElementById('descripcion').value;
    var ubicacion = document.getElementById('ubicacion').value;
    var ubicacion_gmaps = document.getElementById('ubicacion_gmaps').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var dias = document.getElementById('dias').value;
    var horario = document.getElementById('horario').value;

    // Validar que todos los campos estén completos
    if (nombre && descripcion && ubicacion && ubicacion_gmaps && telefono && correo && dias && horario) {
        // Crear la tarjeta de sucursal
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
      <div class="Scs">
      <div class="mapa">
          ${ubicacion_gmaps}
      </div>
      <div class="infoSucu">
          <div class="imgSucu">
              <img id="sucursal" src="../img/Sucursales/s1.png">
              <h1 class="titulo-sucursal">${nombre}</h1>
          </div>
          <div class="placeSucu">
              <a id="descripcion">${descripcion}</a>
              <a id="direccion">${ubicacion}</a>
              <a id="email">${correo}</a>
              <a id="numero">${telefono}</a>
              <a id="dias">De${dias} con un horario de ${horario}</a>
              <button class="btn-reservacion" id="miBoton1">Hacer reservación</button>
              <div class="dropdown-content" id="miDropdown">
                  <img class="Resrlogo" src="../img/logo.png">
                  <a>Elige una mesa disponible</a>
                  <select id="tipoReservacion">
                      <option value="opcion1">Mesa 1</option>
                      <option value="opcion2">Mesa 2</option>
                      <option class="notchair" value="opcion3">Mesa 3</option>
                      <option value="opcion4">Mesa 4</option>
                      <option value="opcion5">Mesa 5</option>
                      <option value="opcion6">Mesa 6</option>
                  </select>
                  <a>Selecciona la hora de la reservación</a>
                  <!-- Botones de selección -->
                  <input type="time" id="datepicker" placeholder="Selecciona una fecha">
                  <a>Selecciona el dia de la reservación</a>
                  <div class="upload">
                      <input type="date" class="up1" id="datepicker" placeholder="Selecciona una fecha">
                      <a type="submit" class="btn-reservacion up2" href="../Sesion/login.html">
                          Confirmar</a>
                  </div>
              </div>
          </div>
      </div>

  </div>
      `;

        // Agregar la tarjeta al contenedor
        document.getElementById('sucursalesContainer').prepend(card);

        // Cerrar el modal
        closeModal();
    }
}

// Evento click fuera del modal para cerrarlo
window.addEventListener('click', function (event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
});