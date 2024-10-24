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

function Vehiculos_A() {
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
                <Link class="active" to="/vehiculos_a">
                  <i className="fa fa-car" />
                  <span>Automóviles registrados</span>
                </Link>
              </li>
              <li className="sub-menu">
                <Link to="/procesos_a">
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
    {/* More service-box2 blocks here */}
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
              <textarea className="form-control" id="addNotas" rows={3} placeholder="Ingrese notas adicionales (opcional)" defaultValue={""} />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Agregar</button>
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
          <div className="service-box2">
            <h5><strong>Información General</strong></h5>
            <p><strong>Marca y Modelo:</strong> <span id="viewMarcaModelo">BMW Serie 3</span></p>
            <p><strong>Número de Placa:</strong> <span id="viewPlaca">ABC123</span></p>
            <p><strong>Año:</strong> <span id="viewAno">2020</span></p>
            <p><strong>VIN:</strong> <span id="viewVIN">1HGCM82633A123456</span></p>
            <p><strong>Color:</strong> <span id="viewColor">Negro</span></p>
            <p><strong>Tipo de Combustible:</strong> <span id="viewCombustible">Gasolina</span></p>
          </div>
          <div className="service-box2">
            <h5><strong>Propietario</strong></h5>
            <p><strong>Nombre:</strong> <span id="viewPropietario">Juan Pérez</span></p>
            <p><strong>Teléfono:</strong> <span id="viewTelefonoPropietario">321-456-7890</span></p>
            <p><strong>Correo Electrónico:</strong> <span id="viewCorreoPropietario">juan.perez@example.com</span></p>
            <p><strong>Dirección:</strong> <span id="viewDireccion">Calle 123 #45-67, Bogotá, Colombia</span></p>
          </div>
          <div className="service-box2">
            <h5><strong>Especificaciones Técnicas</strong></h5>
            <p><strong>Motor:</strong> <span id="viewMotor">2.0L Turbo</span></p>
            <p><strong>Transmisión:</strong> <span id="viewTransmision">Automática</span></p>
            <p><strong>Kilometraje:</strong> <span id="viewKilometraje">25,000 km</span></p>
            <p><strong>Número de Puertas:</strong> <span id="viewNumeroPuertas">4</span></p>
            <p><strong>Capacidad del Tanque:</strong> <span id="viewCapacidadTanque">60 L</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal para historial del vehículo */}
  <div className="modal fade" id="historyModal" tabIndex={-1} role="dialog" aria-labelledby="historyModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="historyModalLabel">Historial del Vehículo</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          {/* Filtros */}
          <form id="historyFilters">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="startDate">Fecha de Inicio</label>
                <input type="date" className="form-control" id="startDate" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="endDate">Fecha de Fin</label>
                <input type="date" className="form-control" id="endDate" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="serviceType">Tipo de Servicio</label>
              <select className="form-control" id="serviceType">
                <option value>Todos</option>
                <option value="Mantenimiento">Mantenimiento</option>
                <option value="Reparación">Reparación</option>
                <option value="Inspección">Inspección</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
            </div>
          </form>
          {/* Tabla de historial */}
          <div className="table-responsive mt-4">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Tipo de Servicio</th>
                  <th>Descripción</th>
                  <th>Técnico</th>
                  <th>Costo</th>
                </tr>
              </thead>
              <tbody id="historyTableBody">
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
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal para editar */}
  <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="editModalLabel">Editar Vehículo</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form id="editVehicleForm">
            <div className="form-group">
              <label htmlFor="editMarca">Marca y Modelo</label>
              <input type="text" className="form-control" id="editMarca" placeholder="Ingrese la marca y modelo" required />
            </div>
            <div className="form-group">
              <label htmlFor="editPlaca">Número de Placa</label>
              <input type="text" className="form-control" id="editPlaca" placeholder="Ingrese el número de placa" required />
            </div>
            <div className="form-group">
              <label htmlFor="editPropietario">Propietario</label>
              <input type="text" className="form-control" id="editPropietario" placeholder="Ingrese el nombre del propietario" required />
            </div>
            <div className="form-group">
              <label htmlFor="editFechaRegistro">Fecha de Registro</label>
              <input type="date" className="form-control" id="editFechaRegistro" required />
            </div>
            <div className="form-group">
              <label htmlFor="editKilometraje">Kilometraje</label>
              <input type="number" className="form-control" id="editKilometraje" placeholder="Ingrese el kilometraje" required />
            </div>
            <div className="form-group">
              <label htmlFor="editEstadoVehiculo">Estado del Vehículo</label>
              <select className="form-control" id="editEstadoVehiculo" required>
                <option value="Operativo">Operativo</option>
                <option value="En Reparación">En Reparación</option>
                <option value="Fuera de Servicio">Fuera de Servicio</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="editNotas">Notas Adicionales</label>
              <textarea className="form-control" id="editNotas" rows={3} placeholder="Ingrese notas adicionales (opcional)" defaultValue={""} />
            </div>
            <button type="submit" className="btn btn-warning">Guardar Cambios</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Modal para eliminar */}
  <div className="modal fade" id="deleteModal" tabIndex={-1} role="dialog" aria-labelledby="deleteModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="deleteModalLabel">Eliminar vehiculo</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>¿Estás seguro de que deseas eliminar este vehiculo?</p>
          <button type="button" className="btn btn-danger" id="confirmDelete">Eliminar</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
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

export default Vehiculos_A;
