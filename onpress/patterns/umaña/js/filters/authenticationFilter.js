class AuthenticationFilter {
    execute(request) {
        console.log('Authenticating request:', request);
        if (!this.isAuthenticated()) {
            throw new Error('User not authenticated');
        }
    }

    isAuthenticated() {
        // Simulando autenticación siempre exitosa
        return true;
    }
}

export default AuthenticationFilter;

