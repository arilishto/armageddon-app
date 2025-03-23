export const getUserKey = (): string => {
    if (process.env.NODE_ENV === 'development') {
        return process.env.REACT_APP_API_KEY
    }
    
    let userKey = '';
    try {
       userKey = localStorage.getItem('API_KEY') || "";
    } catch (error) {
        userKey = 'DEMO_KEY';
    }

    if (!userKey) {
        userKey = 'DEMO_KEY';
    }
    
    return userKey; 
} 