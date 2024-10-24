import React, { useState,useEffect } from 'react';
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
import axios from 'axios';
import { getUserProfile, updateUserProfile, deleteUserProfile } from '../../../apiservice';


function Perfil_A() {
  const [data, setData] = useState({
    name: '',
    email: '',
    contact: '',
    position: '',
    password: '',
    status: ''
  });
  const [editingData, setEditingData] = useState(data); // Datos en edición
  const userId = 1; // Puedes obtener esto del contexto de autenticación o similar

  useEffect(() => {
    // Llamada a la API para obtener los datos del perfil del usuario
    getUserProfile(userId)
      .then(response => {
        setData(response.data);
        setEditingData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  }, [userId]);

  const handleSaveChanges = () => {
    // Guardar cambios en el perfil
    updateUserProfile(userId, editingData)
      .then(() => {
        setData(editingData);
        console.log('Perfil actualizado exitosamente');
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };

  const handleDelete = () => {
    // Eliminar perfil
    deleteUserProfile(userId)
      .then(() => {
        console.log('Perfil eliminado exitosamente');
        // Aquí podrías redirigir al usuario o cerrar sesión
      })
      .catch(error => {
        console.error('Error deleting profile:', error);
      });
  };
  const [sidebarActive, setSidebarActive] = useState(false);

  const baseUrl = 'http://localhost:5000/empleados'; // Asegúrate de tener definida la URL base

  // Equivalente de componentDidMount para componentes funcionales
  useEffect(() => {
    peticionGet();
  }, []); // [] asegura que solo se ejecute una vez después del renderizado inicial

  const peticionGet = () => {
    axios.get(baseUrl)
      .then(response => {
        console.log(response.data);
        setData(response.data); // Guardar la respuesta en el estado
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const toggleSidebar = () => {
    setSidebarActive(prevState => !prevState);
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
                <Link class="active" to="/perfil_a">
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
        {/* Banner start */}
        <section className="banner_main">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7">
                <div className="text-bg">
                  <h1>Perfil</h1>
                  <span>Tu Taller Especializado en BMW y Mini Cooper</span>
                  <p>Servicio y reparación de vehículos BMW y Mini Cooper en Bogotá <br /> ¡Visítanos cl 134 Bis #45a-20!</p>
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
              </div>
            </div>
          </div>
        </section>
        {/* end banner */}
        {/* Main content start */}
        <section id="main-content">
          <section className="wrapper">
            <div className="profile-container">
              <div className="row">
                {/* Profile info start */}
                <div className="profile-info">
                  <div className="form-group">
                    <label htmlFor="name">Nombre y apellido:</label>
                    <input type="text" className="form-control" id="name" placeholder="Nombre y apellido"  readOnly />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Dirección de correo electrónico:</label>
                    <input type="email" className="form-control" id="email" placeholder="Correo electrónico"  readOnly />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact">Número de contacto:</label>
                    <input type="tel" className="form-control" id="contact" placeholder="Número de contacto"  readOnly />
                  </div>
                  <div className="form-group">
                    <label htmlFor="position">Puesto:</label>
                    <input type="text" className="form-control" id="position" placeholder="Puesto"  readOnly />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" className="form-control" id="password" placeholder="Contraseña"  readOnly />
                  </div>
                  <div className="form-group">
                    <label htmlFor="status">Estado:</label>
                    <input type="text" className="form-control" id="status" placeholder="Estado"  readOnly />
                  </div>
                </div>
                {/* Profile info end */}
                {/* Action buttons start */}
                <div className="profile-actions">
                  <button className="btn btn-danger btn-separation" data-bs-toggle="modal" data-bs-target="#deleteModal">Borrar</button>
                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
                    Editar
                  </button>
                </div>
                {/* Action buttons end */}
              </div>
            </div>
            {/* Delete confirmation modal */}
            <div className="modal fade" id="deleteModal" tabIndex={-1} role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="deleteModalLabel">Confirmar eliminación</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ¿Estás seguro de que deseas eliminar este perfil?
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Edit profile modal */}
            <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="editModalLabel">Editar perfil</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form id="edit-profile-form">
                      <div className="form-group">
                        <label htmlFor="edit-name">Nombre y apellido:</label>
                        <input type="text" className="form-control" id="name"   />
                      </div>
                      <div className="form-group">
                        <label htmlFor="edit-email">Dirección de correo electrónico:</label>
                        <input type="email" className="form-control" id="email"   />
                      </div>
                      <div className="form-group">
                        <label htmlFor="edit-contact">Número de contacto:</label>
                        <input type="tel" className="form-control" id="contact"   />
                      </div>
                      <div className="form-group">
                        <label htmlFor="edit-password">Contraseña:</label>
                        <input type="password" className="form-control" id="password"   />
                      </div>
                      <div className="form-group">
                        <label htmlFor="edit-status">Estado:</label>
                        <input type="text" className="form-control" id="status"   />
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
          </section>
        </section>
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

export default Perfil_A;
