export const mockApi = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: 'Data submitted' });
            // reject({ message: 'Data format incorrect' });
        }, 500);
    });
}