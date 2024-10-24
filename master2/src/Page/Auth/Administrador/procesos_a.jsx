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

function Procesos_A() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const [Procesos, setProcesos] = useState({
    name: 'Título prominente',
    email: 'Identificador del vehículo',
    contact: 'Nombre del cliente',
    position: 'Fecha en que se registró el vehículo en el sistema',
    password: 'Kilometraje actual del vehículo (si aplica).',
    status: 'Activo',
  });

  const handleAddChange = (e) => {
    const { id, value } = e.target;
    setProcesos(prevProcesos => ({
      ...prevProcesos,
      [id]: value,
    }));
  };

  const handleAddChanges = () => {
    console.log('Datos guardados:', Procesos);
  };

  const toggleSidebar = () => {
    setSidebarActive(prevState => !prevState);
  };


  const handleConfirm = () => {
    console.log('Proceso Finalizado');
  };


  return (
    <div id="container">
{/* Header */}
<header className="header black-bg">
        <div className="sidebar-toggle-box" onClick={toggleSidebar}>
          <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Menu"></div>
        </div>
        <Link to="/inicio_a" className="logo"><b>Master Center</b></Link>
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
            <p className="centered"><Link to="/perfil_a"><img src="/img/Master_center.jpg" className="img-circle" width="100" alt="profile" /></Link></p>
           
            <div>
              <li className="mt">
                <Link to="/perfil_a">
                  <i className="fa fa-user" />
                  <span>Ver perfil</span>
                </Link>
              </li>
              <li className="divider" />
              <li className="sub-menu">
                <Link to="/inventario_a">
                  <i className="fa fa-cubes" />
                  <span>Inventario</span>
                </Link>
              </li>
              <li className="sub-menu">
                <Link to="/servicios_a">
                  <i className="fa fa-cogs" />
                  <span>Servicios</span>
                </Link>
              </li>
              <li className="sub-menu">
                <Link to="/personal_a">
                  <i className="fa fa-users" />
                  <span>Personal</span>
                </Link>
              </li>
              <li className="sub-menu">
                <Link to="/peticiones_a">
                  <i className="fa fa-id-badge" />
                  <span>Peticiones de perfil</span>
                </Link>
              </li>
              <li className="sub-menu">
                <Link to="/citas_a">
                  <i className="fa fa-calendar" />
                  <span>Citas</span>
                </Link>
              </li>
              <li className="sub-menu">
                <Link to="/clientes_a">
                  <i className="fa fa-address-book" />
                  <span>Clientes</span>
                </Link>
              </li>
              <li className="sub-menu">
                <Link to="/vehiculos_a">
                  <i className="fa fa-car" />
                  <span>Automóviles registrados</span>
                </Link>
              </li>
              <li className="sub-menu">
                <Link class="active" to="/procesos_a">
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
            </div>
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
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">Añadir proceso</button>
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
  {/* Modal para agregar procesos */}
  <div className="modal fade" id="addModal" tabIndex={-1} role="dialog" aria-labelledby="addModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="addModalLabel">Agregar Proceso</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form id="addProcessForm">
            <div className="form-group">
              <label htmlFor="addMarcaModelo">Marca y Modelo</label>
              <input type="text" className="form-control" id="addMarcaModelo" required />
            </div>
            <div className="form-group">
              <label htmlFor="addNumeroPlaca">Número de Placa</label>
              <input type="text" className="form-control" id="addNumeroPlaca" required />
            </div>
            <div className="form-group">
              <label htmlFor="addPropietario">Propietario</label>
              <input type="text" className="form-control" id="addPropietario" list="clientes" required />
              <datalist id="clientes">
                {/* Opciones de clientes registrados */}
                <option value="Juan Pérez">
                </option><option value="María Rodríguez">
                </option><option value="Carlos García">
                </option><option value="Luis González">
                </option></datalist>
            </div>
            <div className="form-group">
              <label htmlFor="addTecnicoAsignado">Técnico Asignado</label>
              <input type="text" className="form-control" id="addTecnicoAsignado" list="tecnicos" required />
              <datalist id="tecnicos">
                {/* Opciones de técnicos registrados */}
                <option value="Técnico A">
                </option><option value="Técnico B">
                </option><option value="Técnico C">
                </option><option value="Técnico D">
                </option></datalist>
            </div>
            <div className="form-group">
              <label htmlFor="addFechaIngreso">Fecha de Ingreso</label>
              <input type="date" className="form-control" id="addFechaIngreso" required />
            </div>
            <div className="form-group">
              <label htmlFor="addDescripcionServicio">Descripción del Servicio</label>
              <textarea className="form-control" id="addDescripcionServicio" rows={3} required defaultValue={""} />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Modal para ver detalles */}
  <div className="modal fade" id="viewModal" tabIndex={-1} role="dialog" aria-labelledby="viewModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="viewModalLabel">Detalles del Proceso</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p><strong>Marca y Modelo:</strong> Información del vehículo.</p>
          <p><strong>Número de Placa:</strong> Información de la placa.</p>
          <p><strong>Propietario:</strong> Información del cliente.</p>
          <p><strong>Técnico Asignado:</strong> Información del técnico.</p>
          <p><strong>Fecha de Ingreso:</strong> Fecha de ingreso.</p>
          <p><strong>Estado del Proceso:</strong> Estado actual.</p>
          <p><strong>Descripción del Servicio:</strong> Detalles del servicio.</p>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" >Salir</button>
          <button className="btn btn-danger btn-separation" data-bs-toggle="modal" data-bs-target="#confirmModal">Finalizar Proceso</button>
        </div>
      </div>
    </div>
  </div>
  {/* Modal de confirmación */}
  <div className="modal fade" id="confirmModal" tabIndex={-1} role="dialog" aria-labelledby="confirmModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="confirmModalLabel">Confirmar Finalización</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>¿Está seguro de que desea finalizar este proceso?</p>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" >Cancelar</button>
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
                <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true" /></a> cl 134 Bis #45a-20!
                  <br /> Bogotá
                </li>
                <li><a href="#"><i className="fa fa-envelope" aria-hidden="true" /></a>mastercenterplus@gmail.com</li>
                <li><a href="#"><i className="fa fa-volume-control-phone" aria-hidden="true" /></a>+57 3118089487</li>
              </ul>
              <ul className="social_icon">
                <li> <a href="https://www.facebook.com/groups/569329231237225/?ref=share&mibextid=NSMWBT"><i className="fa fa-facebook-f" /></a></li>
                <li> <a href="https://www.tiktok.com/@mastercenter_plus?_t=8oTBfyMPmtS&_r=1"><i className="fa fa-tiktok" /></a></li>
                <li> <a href="https://www.instagram.com/mastercenter_plus?igsh=M2UxMmxpaWpxcWky"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <h3>Menu</h3>
              <div className="menu-container">
                <ul className="link_icon">
                  <li><Link to="/inicio_a">Inicio</Link></li>
                  <li><Link to="/perfil_a">Perfil</Link></li>
                  <li><Link to="/inventario_a">Inventario</Link></li>
                  <li><Link to="/servicios_a">Servicios</Link></li>
                  <li><Link to="/personal_a">Personal</Link></li>
                </ul>
                <ul className="link_icon">
                  <li><Link to="/peticiones_a">Peticiones de Perfil</Link></li>
                  <li><Link to="/citas_a">Citas</Link></li>
                  <li><Link to="/clientes_a">Clientes</Link></li>
                  <li><Link to="/vehiculos_a">Automóviles Registrados</Link></li>
                  <li><Link to="/procesos_a">Procesos Abiertos</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            2014 - Alvarez.is
            <a href="https://templune.com/"></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Procesos_A;
