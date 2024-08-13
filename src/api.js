const baseURL = 'https://expount2024.vercel.app';


const api = {
    register: async (userData) => {
        const response = await fetch(`${baseURL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (!response.ok) {
            throw data;
        }
        return data;
    },

    login: async (credentials) => {
        const response = await fetch(`${baseURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        return response.json();
    },

    checkDNI: async (dni) => {
        const response = await fetch(`${baseURL}/check-dni`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ dni }),
        });
        return response.json();
    },

    getUserData: async (userId) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`${baseURL}/user/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.json();
    },


    participarEnSorteo: async (userData) => {
        const token = localStorage.getItem('token'); // Verifica que el token se obtiene correctamente
        const response = await fetch(`${baseURL}/participar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ userId: userData._id }) // Asegúrate de enviar solo el userId
        });
    
        if (!response.ok) {
            throw new Error('No se pudo participar en el sorteo');
        }
    
        return response.json();
    },


// Añade esta nueva función en tu objeto api en api.js
resetSorteoForAllUsers: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No hay token de autenticación');
    }
    const response = await fetch(`${baseURL}/reset-sorteo`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        if (response.status === 403) {
            throw new Error('No tienes permiso para realizar esta acción');
        }
        throw new Error('Error al reiniciar el sorteo');
    }

    return response.json();
},

};