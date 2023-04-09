import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userServiceFactory from "../services/userService";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    const userService = userServiceFactory(auth.accessToken)
    const navigate = useNavigate()


    const onLoginSubmit = async (values) => {
        try {
          const result = await userService.login(values)
    
          setAuth(result)
    
          navigate('/')
    
        } catch (error) {
          console.log(userService.login(values))
        }
    
      }

      const onRegisterSubmit = async (data) => {
        try {
          const result = await userService.register(data)
    
          setAuth(result)
    
          navigate('/')
        }
        catch (error) {
          console.log(error)
        }
    
      }
    
      const onLogout = async () => {
        await userService.logout()
    
        navigate('/')
    
        setAuth({})
      }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        auth,
        profilePic: auth.pfp,
        username: auth.username,
        userId: auth._id,
        accessToken: auth.accessToken,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};
