import React, { useState } from 'react';
import { useAuth } from '../ruteo/AuthContext'; // (7). Importando contexto
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  
  const { signIn } = useAuth();                 // (7). Usando el contexto

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();


  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, completa ambos campos.');
      return;
    }

    try {
      await signIn(email, password);
      // Inicio de sesión exitoso: limpiar el error
      setError(null);
      navigate('/sistema-crud'); // Redirigir a ruta /sistema-crud
    } catch (error) {
      setError('Error al iniciar sesión: ' + error.message);
    }
  }

  return (
    <div id='public' style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <h2>Iniciar Sesion</h2>
        <form className='card card-body' onSubmit={handleSignIn}>
          <div className='form-group input-group' style={{ width: '100%' }}>
            <div className='input-group-text bd-light'>
              <i className='material-icons'>group_add</i>
            </div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ width: '100%' }}>
            <i className='material-icons'>group_add</i>
            <label>Contraseña:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%' }} />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className='btn btn-primary btn-block' type="submit">Iniciar Sesion</button>
        </form>
      </div>
    </div>
  );
  
}


export default LoginForm;


/*
const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, completa ambos campos.');
      return;
    }

    try {
      await signIn(email, password);
      // Inicio de sesión exitoso: limpiar el error
      setError(null);
      navigate('/sistema-crud'); // Redirigir a ruta /sistema-crud
    } catch (error) {
      setError('Error al iniciar sesión: ' + error.message);
    }
  }
*/
