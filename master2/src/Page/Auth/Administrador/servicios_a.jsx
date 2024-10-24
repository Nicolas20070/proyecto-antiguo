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

function Servicios_A() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [Servicio, setServicio] = useState({
    name: 'Título prominente',
    email: 'Identificador del vehículo',
    contact: 'Nombre del cliente',
    position: 'Fecha en que se registró el vehículo en el sistema',
    password: 'Kilometraje actual del vehículo (si aplica).',
    status: 'Activo',
  });

  const handleEditChange = (e) => {
    const { id, value } = e.target;
    setServicio(prevServicio => ({
      ...prevServicio,
      [id]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Aquí puedes implementar la lógica para guardar los cambios
    console.log('Datos guardados:', Servicio);
  };

  
  const handleAddChange = (e) => {
    const { id, value } = e.target;
    setServicio(prevServicio => ({
      ...prevServicio,
      [id]: value,
    }));
  };

  const handleAddChanges = () => {
    console.log('Datos guardados:', Servicio);
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
                <Link class="active" to="/servicios_a">
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
            <h1>Servicios</h1>
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
      <h3>Servicio: Cambio de Aceite</h3>
      <p><strong>Descripción:</strong> Reemplazo del aceite del motor y filtro para asegurar el buen funcionamiento del motor.</p>
      <p><strong>Duración Estimada:</strong> 30 minutos</p>
      <p><strong>Costo Aproximado:</strong> $50</p>
      <p><strong>Categoría:</strong> Mantenimiento</p>
      <p><strong>Estado:</strong> Disponible</p>
      <p><strong>Proveedor:</strong> Interno</p>
      <ul>
        <button className="btn btn-danger btn-separation" data-bs-toggle="modal" data-bs-target="#deleteModal">Borrar</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal"> Editar</button>
      </ul>
    </div>
    <div className="service-box2">
      <h3>Servicio: Cambio de Pastillas de Freno</h3>
      <p><strong>Descripción:</strong> Sustitución de las pastillas de freno desgastadas para garantizar la seguridad del vehículo.</p>
      <p><strong>Duración Estimada:</strong> 1 hora</p>
      <p><strong>Costo Aproximado:</strong> $80</p>
      <p><strong>Categoría:</strong> Frenos</p>
      <p><strong>Estado:</strong> Disponible</p>
      <p><strong>Proveedor:</strong> Interno</p>
      <ul>
        <button className="btn btn-danger btn-separation" data-bs-toggle="modal" data-bs-target="#deleteModal">Borrar</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal"> Editar</button>
      </ul>
    </div>
    <div className="service-box2">
      <h3>Servicio: Alineación y Balanceo</h3>
      <p><strong>Descripción:</strong> Ajuste de la alineación y balanceo de las ruedas para un manejo seguro y estable.</p>
      <p><strong>Duración Estimada:</strong> 45 minutos</p>
      <p><strong>Costo Aproximado:</strong> $60</p>
      <p><strong>Categoría:</strong> Suspensión</p>
      <p><strong>Estado:</strong> Disponible</p>
      <p><strong>Proveedor:</strong> Interno</p>
      <ul>
        <button className="btn btn-danger btn-separation" data-bs-toggle="modal" data-bs-target="#deleteModal">Borrar</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal"> Editar</button>
      </ul>
    </div>
    <div className="service-box2">
      <h3>Servicio: Cambio de Bujías</h3>
      <p><strong>Descripción:</strong> Reemplazo de las bujías del motor para asegurar una correcta combustión.</p>
      <p><strong>Duración Estimada:</strong> 30 minutos</p>
      <p><strong>Costo Aproximado:</strong> $40</p>
      <p><strong>Categoría:</strong> Motor</p>
      <p><strong>Estado:</strong> Disponible</p>
      <p><strong>Proveedor:</strong> Interno</p>
      <ul>
        <button className="btn-separado" data-toggle="modal" data-target="#deleteModal">Eliminar</button>
        <button className="btn-separado" data-toggle="modal" data-target="#editModal">Editar</button>
      </ul>
    </div>
    <div className="service-box2">
      <h3>Servicio: Revisión General</h3>
      <p><strong>Descripción:</strong> Inspección completa del vehículo para identificar posibles problemas.</p>
      <p><strong>Duración Estimada:</strong> 2 horas</p>
      <p><strong>Costo Aproximado:</strong> $100</p>
      <p><strong>Categoría:</strong> Diagnóstico</p>
      <p><strong>Estado:</strong> Disponible</p>
      <p><strong>Proveedor:</strong> Interno</p>
      <ul>
        <button className="btn btn-danger btn-separation" data-bs-toggle="modal" data-bs-target="#deleteModal">Borrar</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal"> Editar</button>
      </ul>
    </div>
    {/* More service-box2 blocks here */}
  </div>
  {/* Modales */}
  
  {/* Modal para agregar Servicio */}
  <div className="modal fade" id="addModal" tabIndex={-1} role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="addModalLabel">Añadir Servicio</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form id="addVehicleForm">
                    <div className="form-group">
                      <label htmlFor="addMarca">Nombre del Servicio</label>
                      <input type="text" className="form-control" id="addMarca" placeholder="Ingrese el nombre dle servicio" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addNotas">Decripción</label>
                      <textarea className="form-control" id="addNotas" rows="3" placeholder="Ingrese la descripción"></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="addPlaca">Duracion estimada</label>
                      <input type="text" className="form-control" id="addPlaca" placeholder="Ingrese la duracion estimada" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addPropietario">Costo Aproximado</label>
                      <input type="number" className="form-control" id="addPropietario" placeholder="Ingrese el costo aproximado" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addKilometraje">Categoria</label>
                      <input type="text" className="form-control" id="addKilometraje" placeholder="Ingrese la categoria" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addKilometraje">Estado</label>
                      <input type="text" className="form-control" id="addKilometraje" placeholder="Ingrese el Estado" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addFechaRegistro">Proveedor</label>
                      <input type="text" className="form-control" id="addFechaRegistro" placeholder="Ingrese el Proveedor" required />
                    </div>
              <br />
                    <button type="button" className="btn btn-primary" onClick={handleAddChanges}>Agregar Servicio</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
 {/* Edit Inventario modal */}
 <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="editModalLabel">Editar Item</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form id="edit-profile-form">
                    <div className="form-group">
                      <label htmlFor="addMarca">Nombre del Servicio</label>
                      <input type="text" className="form-control" id="addMarca" placeholder="Ingrese el nombre dle servicio" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addNotas">Decripción</label>
                      <textarea className="form-control" id="addNotas" rows="3" placeholder="Ingrese la descripción"></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="addPlaca">Duracion estimada</label>
                      <input type="text" className="form-control" id="addPlaca" placeholder="Ingrese la duracion estimada" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addPropietario">Costo Aproximado</label>
                      <input type="number" className="form-control" id="addPropietario" placeholder="Ingrese el costo aproximado" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addKilometraje">Categoria</label>
                      <input type="text" className="form-control" id="addKilometraje" placeholder="Ingrese la categoria" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addKilometraje">Estado</label>
                      <input type="text" className="form-control" id="addKilometraje" placeholder="Ingrese el Estado" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="addFechaRegistro">Proveedor</label>
                      <input type="text" className="form-control" id="addFechaRegistro" placeholder="Ingrese el Proveedor" required />
                    </div>
                      
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Guardar cambios</button>
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
                  ¿Está seguro de que desea eliminar este Servicio? Esta acción no se puede deshacer.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
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
    </div>
  );
}

export default Servicios_A;
