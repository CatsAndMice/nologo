
const apiPath = () => {
    return window.location.protocol === 'https:' ? 'https://nologo.code24.top' : 'http://nologo.code24.top';
}
export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : apiPath();