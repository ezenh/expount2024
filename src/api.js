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


    updateSorteoStatus: async () => {
        const token = localStorage.getItem('token'); // Asegúrate de que el token se obtiene correctamente
        const response = await fetch(`${baseURL}/users/update-sorteo`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Error en la red: Respuesta no OK');
        }

        return response.json();
    }

};