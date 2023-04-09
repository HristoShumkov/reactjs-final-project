import requestFactory from './requester'

const baseUrl = `http://localhost:3030/users`



const userServiceFactory = (token) => {
    const request = requestFactory(token)

    return {
      login: (data) => request.post(`${baseUrl}/login`, data),
      register: (data) => request.post(`${baseUrl}/register`, data),
      logout: () => request.get(`${baseUrl}/logout`),
      getUserDetails: (accessToken) => request.get(`${baseUrl}/me`),
      updateUser: (data) => request.put(`${baseUrl}/me`, data)
  }
}

export default userServiceFactory


