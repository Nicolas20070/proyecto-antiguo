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

function Vehiculos_C() {
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
        <Link to="/inicio_c" className="logo"><b>Master Center</b></Link>
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
            <p className="centered"><Link to="/perfil_c"><img src="/img/Master_center.jpg" className="img-circle" width="100" alt="profile" /></Link></p>
            <div>
              <li className="mt">
                <Link to="/perfil_c">
                  <i className="fa fa-user" />
                  <span>Ver perfil</span>
                </Link>
              </li>
              <li className="divider" />
              <li className="sub-menu">
                <Link  to="/servicios_c">
                  <i className="fa fa-cubes" />
                  <span>Servicios</span>
                </Link>
              </li>
              <li className="sub-menu">
                <Link to="/citas_c">
                  <i className="fa fa-cogs" />
                  <span>Agendar Cita</span>
                </Link>
              </li>
              <li  className="sub-menu">
                <Link className="active" to="/vehiculos_c">
                  <i className="fa fa-users" />
                  <span>Mis vehiculos</span>
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
                  <h1>Vehiculos Registrados</h1>
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
            <p><strong>Marca y Modelo:</strong> Título prominente</p>
            <p><strong>Número de Placa:</strong> Identificador del vehículo</p>
            <p><strong>Propietario:</strong> Nombre del cliente</p>
            <p><strong>Fecha de Registro:</strong> Fecha en que se registró el vehículo en el sistema</p>
            <p><strong>Kilometraje:</strong> Kilometraje actual del vehículo (si aplica).</p>
            <p><strong>Estado:</strong> Activo/Inactivo</p>
            <ul>
              <button className="btn btn-danger btn-separation" data-bs-toggle="modal" data-bs-target="#deleteModal">Eliminar</button>
              <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#viewModal">Ver Detalles</button>
              <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#historyModal">Ver historial</button>
            </ul>
          </div>

          {/* Modales */}
          {/* Modal para agregar vehículo */}
          <div className="modal fade" id="addModal" tabIndex={-1} role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="addModalLabel">Agregar Vehículo</h4>
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
                      <label htmlFor="addFechaRegistro">Fecha de Registro</label>
                      <input type="date" className="form-control" id="addFechaRegistro" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addKilometraje">Kilometraje</label>
                      <input type="number" className="form-control" id="addKilometraje" placeholder="Ingrese el kilometraje" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addEstadoVehiculo">Estado del Vehículo</label>
                      <select className="form-control" id="addEstadoVehiculo" required>
                        <option value="Operativo">Operativo</option>
                        <option value="En Reparación">En Reparación</option>
                        <option value="Fuera de Servicio">Fuera de Servicio</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="addNotas">Notas Adicionales</label>
                      <textarea className="form-control" id="addNotas" rows="3" placeholder="Ingrese notas adicionales"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleAddChanges}>Agregar Vehículo</button>
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

          {/* Modal para eliminar */}
          <div className="modal fade" id="deleteModal" tabIndex={-1} role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="deleteModalLabel">Confirmar Eliminación</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  ¿Está seguro de que desea eliminar este vehiculo? Esta acción no se puede deshacer.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal para historial */}
          <div className="modal fade" id="historyModal" tabIndex={-1} role="dialog" aria-labelledby="historyModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="historyModalLabel">Historial del Vehículo</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form id="historyForm">
                    <div className="form-group mb-3">
                      <label htmlFor="startDate">Fecha de Inicio</label>
                      <input type="date" className="form-control" id="startDate" placeholder="dd/mm/aaaa" />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="endDate">Fecha de Fin</label>
                      <input type="date" className="form-control" id="endDate" placeholder="dd/mm/aaaa" />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="serviceType">Tipo de Servicio</label>
                      <select className="form-control" id="serviceType">
                        <option value="Todos">Todos</option>
                        <option value="Mantenimiento">Mantenimiento</option>
                        <option value="Reparación">Reparación</option>
                        <option value="Inspección">Inspección</option>
                      </select>
                    </div>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Fecha</th>
                          <th>Tipo de Servicio</th>
                          <th>Descripción</th>
                          <th>Técnico</th>
                          <th>Costo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2024-01-10</td>
                          <td>Mantenimiento</td>
                          <td>Cambio de aceite y filtros</td>
                          <td>Pedro Gómez</td>
                          <td>$100</td>
                        </tr>
                        <tr>
                          <td>2024-03-15</td>
                          <td>Reparación</td>
                          <td>Reemplazo de frenos</td>
                          <td>María López</td>
                          <td>$250</td>
                        </tr>
                        <tr>
                          <td>2024-06-20</td>
                          <td>Inspección</td>
                          <td>Inspección general del vehículo</td>
                          <td>Jorge Martínez</td>
                          <td>$80</td>
                        </tr>
                        <tr>
                          <td>2024-08-05</td>
                          <td>Mantenimiento</td>
                          <td>Revisión de sistema de enfriamiento</td>
                          <td>Laura Rodríguez</td>
                          <td>$120</td>
                        </tr>
                        <tr>
                          <td>2024-10-12</td>
                          <td>Reparación</td>
                          <td>Cambio de batería</td>
                          <td>Carlos Fernández</td>
                          <td>$150</td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
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
                <li><Link to="#"><i className="fa fa-map-marker" aria-hidden="true" /></Link> cl 134 Bis #45a-20!
                  <br /> Bogotá
                </li>
                <li><Link to="#"><i className="fa fa-envelope" aria-hidden="true" /></Link>mastercenterplus@gmail.com</li>
                <li><Link to="#"><i className="fa fa-volume-control-phone" aria-hidden="true" /></Link>+57 3118089487</li>
              </ul>
              <ul className="social_icon">
                <li> <Link to="https://www.facebook.com/groups/569329231237225/?ref=share&mibextid=NSMWBT"><i className="fa fa-facebook-f" /></Link></li>
                <li> <Link to="https://www.tiktok.com/@mastercenter_plus?_t=8oTBfyMPmtS&_r=1"><i className="fa fa-tiktok" /></Link></li>
                <li> <Link to="https://www.instagram.com/mastercenter_plus?igsh=M2UxMmxpaWpxcWky"><i className="fa fa-instagram" /></Link></li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h3>Servicios adicionales</h3>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <ul className="link_icon">
                    <li> <Link to="/citas_c">Agendar Cita</Link></li>
                    <li> <Link to="/servicios_c">Servicios</Link></li>
                    <li> <Link to="/vehiculos_c">Mis vehiculos</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Vehiculos_C;
