import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/style.css';
import '../assets/css/style-responsive.css';
import '../assets/css/zabuto_calendar.css';
import '../assets/js/gritter/css/jquery.gritter.css';
import '../assets/lineicons/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Procesos_E() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [Vehiculo, setVehiculo] = useState({
    name: 'Título prominente',
    email: 'Identificador del vehículo',
    contact: 'Nombre del cliente',
    position: 'Fecha en que se registró el vehículo en el sistema',
    password: 'Kilometraje actual del vehículo (si aplica).',
    status: 'Activo',
  });
  const [vehicleDetails, setVehicleDetails] = useState({
    marcaModelo: 'BMW Serie 3',
    placa: 'ABC123',
    año: '2020',
    vin: '1HGCM82633A123456',
    color: 'Negro',
    tipoCombustible: 'Gasolina',
    propietario: {
      nombre: 'Juan Pérez',
      telefono: '321-456-7890',
      correo: 'juan.perez@example.com',
      direccion: 'Calle 123 #45-67, Bogotá, Colombia',
    },
    especificaciones: {
      motor: '2.0L Turbo',
      transmision: 'Automática',
      kilometraje: '25,000 km',
      puertas: '4',
      capacidadTanque: '60 L',
    }
  });


  
  const handleAddChange = (e) => {
    const { id, value } = e.target;
    setVehiculo(prevVehiculo => ({
      ...prevVehiculo,
      [id]: value,
    }));
  };

  const handleAddChanges = () => {
    console.log('Datos guardados:', Vehiculo);
  };

  const toggleSidebar = () => {
    setSidebarActive(prevState => !prevState);
  };

  
  const handleDelete = () => {
    console.log('Perfil eliminado');
  };


  return (
    <div id="container">
      {/* Header */}
      <header className="header black-bg">
        <div className="sidebar-toggle-box" onClick={toggleSidebar}>
          <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Menu"></div>
        </div>
        <Link to="/" className="logo"><b>Master Center</b></Link>
        <div className="top-menu">
        </div>
      </header>

      {/* Sidebar */}
      <aside>
        <div
          id="sidebar"
          className={`nav-collapse ${sidebarActive ? 'active' : ''}`}
          style={{
            width: '250px',
            height: '100%',
            position: 'fixed',
            top: '0',
            left: sidebarActive ? '0' : '-250px',
            transition: 'left 0.3s ease',
            zIndex: '1000' // Ensure sidebar is on top
          }}
        >
          <ul className="sidebar-menu" id="nav-accordion">
            <p className="centered"><Link to="/perfil_e"><img src="/img/Master_center.jpg" className="img-circle" width="100" alt="profile" /></Link></p>
            <li className="mt">
              <Link to="/perfil_e">
                <i className="fa fa-user" />
                <span>Ver perfil</span>
              </Link>
            </li>
            <li className="divider" />
            <li className="sub-menu">
              <Link to="/inventario_e">
                <i className="fa fa-cubes" />
                <span>Inventario</span>
              </Link>
            </li>
            <li className="sub-menu">
              <Link to="/servicios_e">
                <i className="fa fa-cogs" />
                <span>Servicios</span>
              </Link>
            </li>
            <li className="sub-menu">
              <Link to="/cita_e">
                <i className="fa fa-calendar" />
                <span>Citas</span>
              </Link>
            </li>
            <li className="sub-menu">
              <Link to="/vehiculos_e">
                <i className="fa fa-car" />
                <span>Automóviles registrados</span>
              </Link>
            </li>
            <li className="sub-menu">
              <Link class="active" to="/procesos_e">
                <i className="fa fa-tasks" />
                <span>Procesos abiertos</span>
              </Link>
            </li>
            <li className="divider" />
            <li className="sub-menu">
              <Link to="/">
                <i className="fa fa-sign-out" />
                <span>Cerrar sesión</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

  
      <div>
  <section className="banner_main">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-lg-7">
          <div className="text-bg">
            <h1>Procesos Abiertos</h1>
            <span>Tu Taller Especializado en BMW y Mini Cooper</span>
            <p>Servicio y reparación de vehículos BMW y Mini Cooper en Bogotá <br /> ¡Visítanos cl 134 Bis #45a-20!</p>
          </div>
        </div>
        <div className="col-md-5 col-lg-5" />
      </div>
    </div>
  </section>
  <div className="container">
    <div className="inventory-actions">
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">Agregar</button>
      <input type="text" id="search" className="form-control search-box" placeholder="Buscar" />
    </div>
    <div className="service-box2">
      <p><strong>Marca y Modelo:</strong> Título prominente.</p>
      <p><strong>Número de Placa:</strong> Identificador del vehículo.</p>
      <p><strong>Propietario:</strong> Nombre del cliente.</p>
      <p><strong>Técnico Asignado:</strong> Nombre del técnico responsable.</p>
      <p><strong>Fecha de Ingreso:</strong> Fecha en que el vehículo ingresó al taller.</p>
      <p><strong>Estado del Proceso:</strong> En progreso, Esperando piezas, Finalizado, etc.</p>
      <p><strong>Descripción del Servicio:</strong> Breve descripción del servicio en curso.</p>
      <ul>
        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#viewModal">Ver Detalles</button>
      </ul>
    </div>
    <div className="service-box2">
      <p><strong>Marca y Modelo:</strong> Título prominente.</p>
      <p><strong>Número de Placa:</strong> Identificador del vehículo.</p>
      <p><strong>Propietario:</strong> Nombre del cliente.</p>
      <p><strong>Técnico Asignado:</strong> Nombre del técnico responsable.</p>
      <p><strong>Fecha de Ingreso:</strong> Fecha en que el vehículo ingresó al taller.</p>
      <p><strong>Estado del Proceso:</strong> En progreso, Esperando piezas, Finalizado, etc.</p>
      <p><strong>Descripción del Servicio:</strong> Breve descripción del servicio en curso.</p>
      <ul>
        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#viewModal">Ver Detalles</button>
      </ul>
    </div>
    <div className="service-box2">
      <p><strong>Marca y Modelo:</strong> Título prominente.</p>
      <p><strong>Número de Placa:</strong> Identificador del vehículo.</p>
      <p><strong>Propietario:</strong> Nombre del cliente.</p>
      <p><strong>Técnico Asignado:</strong> Nombre del técnico responsable.</p>
      <p><strong>Fecha de Ingreso:</strong> Fecha en que el vehículo ingresó al taller.</p>
      <p><strong>Estado del Proceso:</strong> En progreso, Esperando piezas, Finalizado, etc.</p>
      <p><strong>Descripción del Servicio:</strong> Breve descripción del servicio en curso.</p>
      <ul>
      <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#viewModal">Ver Detalles</button>
      </ul>
    </div>
    {/* More service-box2 blocks here */}
  </div>
  {/* Modales */}
  {/* Modal para agregar vehículo */}
  <div className="modal fade" id="addModal" tabIndex={-1} role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="addModalLabel">Agregar Proceso</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form id="addVehicleForm">
                    <div className="form-group">
                      <label htmlFor="addMarca">Marca y Modelo</label>
                      <input type="text" className="form-control" id="addMarca" placeholder="Ingrese la marca y modelo" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addPlaca">Número de Placa</label>
                      <input type="text" className="form-control" id="addPlaca" placeholder="Ingrese el número de placa" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addPropietario">Propietario</label>
                      <input type="text" className="form-control" id="addPropietario" placeholder="Ingrese el nombre del propietario" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addFechaRegistro">Trabajador Asignado</label>
                      <input type="text" className="form-control" id="addFechaRegistro" placeholder="Ingrese el nombre del Trabajaor" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addKilometraje">Fecha de Ingreso</label>
                      <input type="date" className="form-control" id="addKilometraje" placeholder="Ingrese el kilometraje" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addNotas">Descripcion del Servicio</label>
                      <textarea className="form-control" id="addNotas" rows="3" placeholder="Ingrese descripcion del servicio realizado"></textarea>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={handleAddChanges}>Guardar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

  {/* Modal para ver detalles */}
  <div className="modal fade" id="viewModal" tabIndex={-1} role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="viewModalLabel">Detalles del Vehículo</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="form-group mb-3">
                  <h5>Informacion General:</h5>
                    <p><strong>Marca y Modelo:</strong> {vehicleDetails.marcaModelo}</p>
                  </div>
                  <div className="form-group mb-3">
                    <p><strong>Número de Placa:</strong> {vehicleDetails.placa}</p>
                  </div>
                  <div className="form-group mb-3">
                    <p><strong>Año:</strong> {vehicleDetails.año}</p>
                  </div>
                  <div className="form-group mb-3">
                    <p><strong>Número VIN:</strong> {vehicleDetails.vin}</p>
                  </div>
                  <div className="form-group mb-3">
                    <p><strong>Color:</strong> {vehicleDetails.color}</p>
                  </div>
                  <div className="form-group mb-3">
                    <p><strong>Tipo de Combustible:</strong> {vehicleDetails.tipoCombustible}</p>
                  </div>
                  <h5>Propietario:</h5>
                  <p><strong>Nombre:</strong> {vehicleDetails.propietario.nombre}</p>
                  <p><strong>Teléfono:</strong> {vehicleDetails.propietario.telefono}</p>
                  <p><strong>Correo:</strong> {vehicleDetails.propietario.correo}</p>
                  <p><strong>Dirección:</strong> {vehicleDetails.propietario.direccion}</p>
                  <h5>Especificaciones:</h5>
                  <p><strong>Motor:</strong> {vehicleDetails.especificaciones.motor}</p>
                  <p><strong>Transmisión:</strong> {vehicleDetails.especificaciones.transmision}</p>
                  <p><strong>Kilometraje:</strong> {vehicleDetails.especificaciones.kilometraje}</p>
                  <p><strong>Puertas:</strong> {vehicleDetails.especificaciones.puertas}</p>
                  <p><strong>Capacidad del Tanque:</strong> {vehicleDetails.especificaciones.capacidadTanque}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>

  {/* Modal de confirmación */}
  <div className="modal fade" id="confirmModal" tabIndex={-1} role="dialog" aria-labelledby="confirmModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <h4 className="modal-title" id="confirmModalLabel">Confirmar Finalización</h4>
        </div>
        <div className="modal-body">
          <p>¿Está seguro de que desea finalizar este proceso?</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          <button type="button" className="btn btn-primary">Confirmar</button>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <h3>Contactanos</h3>
              <ul className="location_icon">
                <li><i className="fa fa-map-marker" aria-hidden="true" /> cl 134 Bis #45a-20! <br /> Bogotá</li>
                <li><i className="fa fa-envelope" aria-hidden="true" /> mastercenterplus@gmail.com</li>
                <li><i className="fa fa-volume-control-phone" aria-hidden="true" /> +57 3118089487</li>
              </ul>
              <ul className="social_icon">
                <li><a href="https://www.facebook.com/groups/569329231237225/?ref=share&mibextid=NSMWBT"><i className="fa fa-facebook-f" /></a></li>
                <li><a href="https://www.tiktok.com/@mastercenter_plus?_t=8oTBfyMPmtS&_r=1"><i className="fa fa-tiktok" /></a></li>
                <li><a href="https://www.instagram.com/mastercenter_plus?igsh=M2UxMmxpaWpxcWky"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <h3>Menu</h3>
              <div className="menu-container">
                <ul className="link_icon">
                  <li><Link to="/inicio_e">Inicio</Link></li>
                  <li><Link to="/perfil_e">Perfil</Link></li>
                  <li><Link to="/inventario_e">Inventario</Link></li>
                  <li><Link to="/servicios_e">Servicios</Link></li>
                </ul>
                <ul className="link_icon">
                  <li><Link to="/cita_e">Citas</Link></li>
                  <li><Link to="/vehiculos_e">Automóviles Registrados</Link></li>
                  <li><Link to="/procesos_e">Procesos Abiertos</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            2014 - Alvarez.is
            <Link to="#" className="go-top">
              <i className="fa fa-angle-up" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Procesos_E;
