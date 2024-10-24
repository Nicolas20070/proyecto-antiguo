import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/style.css';
import '../assets/css/style-responsive.css';
import '../assets/css/zabuto_calendar.css';
import '../assets/js/gritter/css/jquery.gritter.css';
import '../assets/lineicons/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import 'bootstrap';
import Cookies from 'universal-cookie';

import { getInventoryItems, addInventoryItem, updateInventoryItem, deleteInventoryItem, getStockReports } from '../../../apiservice';

const Inventario_A = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editFormData, setEditFormData] = useState({
    nombre: '',
    categoria: '',
    cantidad: '',
    proveedor: '',
    precio: '',
    descripcion: '',
    codigo: '',
    ubicacion: '',
    fecha_ultima_actualizacion: '',
  });
  const [addFormData, setAddFormData] = useState({
    nombre: '',
    categoria: '',
    cantidad: '',
    proveedor: '',
    precio: '',
    descripcion: '',
    codigo: '',
    ubicacion: '',
    fecha_ultima_actualizacion: '',
  });
  const [stockReports, setStockReports] = useState([]);

  const toggleSidebar = () => {
    setSidebarActive(prevState => !prevState);
  };

  useEffect(() => {
    const fetchInventory = async () => {
      const items = await getInventoryItems();
      setInventory(items);
    };
    fetchInventory();
  }, []);

  useEffect(() => {
    const fetchStockReports = async () => {
      const reports = await getStockReports();
      setStockReports(reports);
    };
    fetchStockReports();
  }, []);
  const cerrarSesion = () => {
    const cookies = new Cookies();
    cookies.remove('id', { path: "/" });
    cookies.remove('nombre', { path: "/" });
    cookies.remove('cargo', { path: "/" });
    cookies.remove('edad', { path: "/" });
    cookies.remove('email', { path: "/" });
    cookies.remove('telefono', { path: "/" });
    cookies.remove('CC', { path: "/" });
    cookies.remove('estado', { path: "/" });
    window.location.href = '/login';
  };
  const cookies = new Cookies();
  const navigate = useNavigate();
  const handleEditChange = (e) => {
    const { id, value } = e.target;
    setEditFormData({
      ...editFormData,
      [id]: value,
    });
  };

  const loadItemData = (item) => {
    setSelectedItem(item);
    setEditFormData({
      nombre: item.nombre || '',
      categoria: item.categoria || '',
      cantidad: item.cantidad || '',
      proveedor: item.proveedor || '',
      precio: item.precio || '',
      descripcion: item.descripcion || '',
      codigo: item.codigo || '',
      ubicacion: item.ubicacion || '',
      fecha_ultima_actualizacion: item.fecha_ultima_actualizacion || '',
    });
  };

  const handleSaveChanges = async () => {
    const updatedItem = {
      ...selectedItem,
      ...editFormData,
    };

    try {
      await updateInventoryItem(updatedItem);
      setInventory(inventory.map(item => (item.id === updatedItem.id ? updatedItem : item)));
      setSelectedItem(null);
      setEditFormData({
        nombre: '',
        categoria: '',
        cantidad: '',
        proveedor: '',
        precio: '',
        descripcion: '',
        codigo: '',
        ubicacion: '',
        fecha_ultima_actualizacion: '',
      });
      document.getElementById('editModal').classList.remove('show');
      document.querySelector('.modal-backdrop').remove();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleAddChange = (e) => {
    const { id, value } = e.target;
    setAddFormData({
      ...addFormData,
      [id]: value,
    });
  };

  const handleAddChanges = async () => {
    const newItem = {
        nombre: document.getElementById('addNombre').value,
        categoria: document.getElementById('addCategoria').value,
        cantidad: parseInt(document.getElementById('addCantidad').value),
        proveedor: document.getElementById('addProveedor').value,
        precio: parseFloat(document.getElementById('addPrecio').value),
        descripcion: document.getElementById('addDescripcion').value,
        codigo: document.getElementById('addCodigo').value,
        ubicacion: document.getElementById('addUbicacion').value,
        fecha_ultima_actualizacion: document.getElementById('addFechaRegistro').value,
    };

    try {
        const addedItem = await addInventoryItem(newItem);
        if (addedItem) {
            setInventory(prevInventory => [...prevInventory, addedItem]); // Actualiza el inventario
            document.getElementById('addVehicleForm').reset();
            // Cierra el modal automáticamente
            const modal = new window.bootstrap.Modal(document.getElementById('addModal'));
            modal.hide(); // Usando Bootstrap 5
        }
    } catch (error) {
        console.error('Error al agregar el producto:', error);
    }
};

  const handleDelete = async () => {
    await deleteInventoryItem(selectedItem.id);
    setInventory(inventory.filter(item => item.id !== selectedItem.id));
  };

  return (
    <div id="container">
      {/* Header */}
      <header className="header black-bg">
        <div className="sidebar-toggle-box" onClick={toggleSidebar}>
          <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Menu"></div>
        </div>
        <Link to="/inicio_a" className="logo"><b>Master Center</b></Link>
        <div className="top-menu"></div>
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
                <Link to="/procesos_a">
                  <i className="fa fa-tasks" />
                  <span>Procesos abiertos</span>
                </Link>
              </li>
              <li className="divider" />
              <li className="sub-menu">
                <button onClick={cerrarSesion} className="btn btn-link">
                  <i className="fa fa-sign-out" />
                    <span>Cerrar sesión</span>
                 </button>
              </li>
            </div>
          </ul>
        </div>
      </aside>
      <section className="banner_main">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-lg-7">
          <div className="text-bg">
            <h1>Inventario</h1>
            <span>Tu Taller Especializado en BMW y Mini Cooper</span>
            <p>Servicio y reparacion de vehiculos BMW y Mini Cooper en Bogotá <br /> ¡Visitanos cl 134 Bis #45a-20!</p>
          </div>
        </div>
        <div className="col-md-5 col-lg-5">
        </div>
      </div>
    </div>
  </section>

      {/* Main Content */}
      <section id="main-content">
        <section className="wrapper">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  {/* Table Title */}
  <h3 style={{ marginTop: '20px' }}>Inventario de Productos</h3>

  {/* Table */}
  <table className="table table-striped" style={{ width: '80%', margin: '20px auto' }}>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Categoría</th>
        <th>Cantidad</th>
        <th>Proveedor</th>
        <th>Precio</th>
        <th>Descripción</th>
        <th>Código</th>
        <th>Ubicación</th>
        <th>Fecha de Actualización</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {inventory.map((item) => (
        <tr key={item.id}>
          <td>{item.nombre}</td>
          <td>{item.categoria}</td>
          <td>{item.cantidad}</td>
          <td>{item.proveedor}</td>
          <td>{item.precio}</td>
          <td>{item.descripcion}</td>
          <td>{item.codigo}</td>
          <td>{item.ubicacion}</td>
          <td>{item.fecha_ultima_actualizacion}</td>
          <td>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => loadItemData(item)}
              data-bs-toggle="modal"
              data-bs-target="#editModal"
            >
              Editar
            </button>
            <button
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
              onClick={() => setSelectedItem(item)}
            >
              Eliminar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  {/* Buttons just below the table */}
  <div style={{ marginTop: '20px' }}>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal" style={{ marginRight: '10px' }}onClick={() => setIsModalOpen(true)}>Agregar Item
    </button>
  </div>
</div>


   {/* Modal para agregar Item */}
<div className="modal fade" id="addModal" tabIndex={-1} role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title" id="addModalLabel">Agregar Item</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form id="addVehicleForm">
          {/* Campo para el nombre del producto */}
          <div className="form-group">
            <label htmlFor="addNombre">Nombre del Producto</label>
            <input type="text" className="form-control" id="addNombre" placeholder="Ingrese el nombre del producto" required />
          </div>
          
          {/* Campo para la categoría */}
          <div className="form-group">
            <label htmlFor="addCategoria">Categoría</label>
            <input type="text" className="form-control" id="addCategoria" placeholder="Ingrese la categoría" required />
          </div>

          {/* Campo para cantidad de stock */}
          <div className="form-group">
            <label htmlFor="addCantidad">Cantidad de Stock</label>
            <input type="number" className="form-control" id="addCantidad" placeholder="Ingrese la cantidad de stock" required />
          </div>

          {/* Campo para proveedor */}
          <div className="form-group">
            <label htmlFor="addProveedor">Proveedor</label>
            <input type="text" className="form-control" id="addProveedor" placeholder="Ingrese el proveedor" required />
          </div>

          {/* Campo para precio */}
          <div className="form-group">
            <label htmlFor="addPrecio">Precio</label>
            <input type="number" className="form-control" id="addPrecio" placeholder="Ingrese el precio" required />
          </div>

          {/* Campo para descripción */}
          <div className="form-group">
            <label htmlFor="addDescripcion">Descripción</label>
            <textarea className="form-control" id="addDescripcion" rows="3" placeholder="Ingrese la descripción"></textarea>
          </div>

          {/* Campo para código del producto */}
          <div className="form-group">
            <label htmlFor="addCodigo">Código del Producto</label>
            <input type="text" className="form-control" id="addCodigo" placeholder="Ingrese el código del producto" required />
          </div>

          {/* Campo para ubicación en almacén */}
          <div className="form-group">
            <label htmlFor="addUbicacion">Ubicación en Almacén</label>
            <input type="text" className="form-control" id="addUbicacion" placeholder="Ingrese la ubicación en el almacén" required />
          </div>

          {/* Campo para fecha de última actualización */}
          <div className="form-group">
            <label htmlFor="addFechaRegistro">Fecha de Última Actualización</label>
            <input type="date" className="form-control" id="addFechaRegistro" required />
          </div>
          <br />
          <button type="button" className="btn btn-primary" onClick={handleAddChanges}>Agregar Item</button>
        </form>
      </div>
    </div>
  </div>
</div>

      {/* Modal para editar Item */}
<div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="editModalLabel">Editar Item</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          {/* Campo Nombre */}
          <div className="form-group">
  <label htmlFor="nombre">Nombre del Producto</label>
  <input
    type="text"
    className="form-control"
    id="nombre"
    value={editFormData.nombre}  // Aquí se carga el valor desde el estado
    onChange={handleEditChange}  // Actualiza el estado cuando cambies el valor
  />
</div>

<div className="form-group">
  <label htmlFor="categoria">Categoría</label>
  <input
    type="text"
    className="form-control"
    id="categoria"
    value={editFormData.categoria}
    onChange={handleEditChange}
  />
</div>

<div className="form-group">
  <label htmlFor="cantidad">Cantidad</label>
  <input
    type="number"
    className="form-control"
    id="cantidad"
    value={editFormData.cantidad}
    onChange={handleEditChange}
  />
</div>

<div className="form-group">
  <label htmlFor="proveedor">Proveedor</label>
  <input
    type="text"
    className="form-control"
    id="proveedor"
    value={editFormData.proveedor}
    onChange={handleEditChange}
  />
</div>

<div className="form-group">
  <label htmlFor="precio">Precio</label>
  <input
    type="number"
    className="form-control"
    id="precio"
    value={editFormData.precio}
    onChange={handleEditChange}
  />
</div>

<div className="form-group">
  <label htmlFor="descripcion">Descripción</label>
  <textarea
    className="form-control"
    id="descripcion"
    value={editFormData.descripcion}
    onChange={handleEditChange}
  />
</div>

<div className="form-group">
  <label htmlFor="codigo">Código del Producto</label>
  <input
    type="text"
    className="form-control"
    id="codigo"
    value={editFormData.codigo}
    onChange={handleEditChange}
  />
</div>

<div className="form-group">
  <label htmlFor="ubicacion">Ubicación en el Almacén</label>
  <input
    type="text"
    className="form-control"
    id="ubicacion"
    value={editFormData.ubicacion}
    onChange={handleEditChange}
  />
</div>

<div className="form-group">
  <label htmlFor="fecha_ultima_actualizacion">Fecha de Última Actualización</label>
  <input
    type="date"
    className="form-control"
    id="fecha_ultima_actualizacion"
    value={editFormData.fecha_ultima_actualizacion}
    onChange={handleEditChange}
  />
</div>


          {/* Botón Guardar Cambios */}
          <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
            Guardar Cambios
          </button>
        </form>
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
              ¿Está seguro de que desea eliminar este Item? Esta acción no se puede deshacer.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-danger" onClick={() => handleDelete(/* Aquí deberías pasar el ID del item */)}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para reportes de stock */}
      <div className="modal fade" id="stockReportsModal" tabIndex={-1} role="dialog" aria-labelledby="stockReportsModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="stockReportsModalLabel">Reportes de Stock</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Aquí puedes colocar la información sobre los reportes de stock */}
              <p>Información sobre los reportes de stock...</p>
            </div>
          </div>
        </div>
      </div>
        </section>
      </section>

      <footer
  className="site-footer"
  style={{
    textAlign: 'center',
    padding: '20px',
    position: 'relative', // Cambiado a 'relative' para evitar que tape contenido
    bottom: '0',
    width: '100%',
    marginTop: 'auto', // Asegura que el footer siempre esté al final
  }}
>
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-6 col-sm-6">
        <h3>Contáctanos</h3>
        <ul className="location_icon">
          <li>
            <a href="#"><i className="fa fa-map-marker" aria-hidden="true" /></a>
            cl 134 Bis #45a-20!
            <br /> Bogotá
          </li>
          <li>
            <a href="#"><i className="fa fa-envelope" aria-hidden="true" /></a>
            mastercenterplus@gmail.com
          </li>
          <li>
            <a href="#"><i className="fa fa-volume-control-phone" aria-hidden="true" /></a>
            +57 3118089487
          </li>
        </ul>
        <ul className="social_icon">
          <li> 
            <a href="https://www.facebook.com/groups/569329231237225/?ref=share&mibextid=NSMWBT">
              <i className="fa fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@mastercenter_plus?_t=8oTBfyMPmtS&_r=1">
              <i className="fa fa-tiktok" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mastercenter_plus?igsh=M2UxMmxpaWpxcWky">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6">
        <h3>Menú</h3>
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
};

export default Inventario_A;
