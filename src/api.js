const api = {
    register: async (userData) => {
        const response = await fetch(`http://localhost:3000/users`, {
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
        const response = await fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        return response.json();
    },

    checkDNI: async (dni) => {
        const response = await fetch(`http://localhost:3000/check-dni`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ dni }),
        });
        return response.json();
    },
    
    // checkUser: async (dni, email) => {
    //     const response = await fetch(`http://localhost:3000/check-dni`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ dni, email }),
    //     });
    //     return response.json();
    // },

    getUserData: async (userId) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/user/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.json();
    },


    participarEnSorteo: async (userData) => {
        const token = localStorage.getItem('token'); // Verifica que el token se obtiene correctamente
        const response = await fetch(`http://localhost:3000/participar`, {
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

};