import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
// Importar el CSS del tema, puedes elegir cualquier tema disponible
import "primereact/resources/themes/saga-blue/theme.css"; // Puedes cambiar 'saga-blue' por otro tema

// Importar los estilos principales de PrimeReact
import "primereact/resources/primereact.min.css";

// Importar PrimeIcons para usar íconos
import "primeicons/primeicons.css";

// Importar primeflex para utilidades de CSS
import "primeflex/primeflex.css";

        

import Login from './Page/Auth/login';
import Register from './Page/Auth/register';
import Servicios from './Page/Auth/servicios';
import Index from './Page/Auth/index';

import Citas_C from './Page/Auth/Cliente/citas_c';
import Inicio_C from './Page/Auth/Cliente/inicio_c';
import Perfil_C from './Page/Auth/Cliente/perfil_c';
import Servicios_C from './Page/Auth/Cliente/servicios_c';
import Vehiculos_C from './Page/Auth/Cliente/vehiculos_c';

import Citas_E from './Page/Auth/Empleado/cita_e';
import Inicio_E from './Page/Auth/Empleado/inicio_e';
import Perfil_E from './Page/Auth/Empleado/perfil_e';
import Servicio_E from './Page/Auth/Empleado/servicios_e';
import Vehiculo_E from './Page/Auth/Empleado/vehiculos_e';
import Inventario_E from './Page/Auth/Empleado/inventario_e';
import Procesos_E from './Page/Auth/Empleado/procesos_e';

import Citas_A from './Page/Auth/Administrador/citas_a';
import Inicio_A from './Page/Auth/Administrador/inicio_a';
import Inventario_A from './Page/Auth/Administrador/inventario_a';
import Cliente_A from './Page/Auth/Administrador/clientes_a';
import Personal_A from './Page/Auth/Administrador/personal_a';
import Peticiones_A from './Page/Auth/Administrador/peticiones_a';
import Perfil_A from './Page/Auth/Administrador/perfil_a';
import Procesos_A from './Page/Auth/Administrador/procesos_a';
import Servicios_A from './Page/Auth/Administrador/servicios_a';
import Vehiculos_A from './Page/Auth/Administrador/vehiculos_a';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/citas_c" element={<Citas_C />} />
        <Route path="/inicio_c" element={<Inicio_C />} />
        <Route path="/perfil_c" element={<Perfil_C />} />
        <Route path="/servicios_c" element={<Servicios_C />} />
        <Route path="/vehiculos_c" element={<Vehiculos_C />} />

        <Route path="/cita_e" element={<Citas_E />} />
        <Route path="/inicio_e" element={<Inicio_E />} />
        <Route path="/inventario_e" element={<Inventario_E />} />
        <Route path="/perfil_e" element={<Perfil_E />} />
        <Route path="/procesos_e" element={<Procesos_E />} />
        <Route path="/servicios_e" element={<Servicio_E />} />
        <Route path="/vehiculos_e" element={<Vehiculo_E />} />

        <Route path="/citas_a" element={<Citas_A />} />
        <Route path="/inicio_a" element={<Inicio_A />} />
        <Route path="/inventario_a" element={<Inventario_A />} />
        <Route path="/clientes_a" element={<Cliente_A />} />
        <Route path="/personal_a" element={<Personal_A />} />
        <Route path="/peticiones_a" element={<Peticiones_A />} />
        <Route path="/perfil_a" element={<Perfil_A />} />
        <Route path="/procesos_a" element={<Procesos_A />} />
        <Route path="/servicios_a" element={<Servicios_A />} />
        <Route path="/vehiculos_a" element={<Vehiculos_A />} />
      </Routes>
    </Fragment>
  );
}

export default App;
