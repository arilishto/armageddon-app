export const getUserKey = (): string => {
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