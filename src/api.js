const api = {
    register: async (userData) => {
        const response = await fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return response.json();
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
    
    getUserData: async (userId) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/user/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.json();
    },
};