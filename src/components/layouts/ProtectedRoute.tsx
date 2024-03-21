import {ReactNode} from "react";
import Unauthorized from "../../pages/Unauthorized";
import {currentToken} from "../../redux/features/auth/authSlice";
import {useAppSelector} from "../../redux/hooks";

const ProtectedRoute = ({children} : {children: ReactNode}) => {
  const token = useAppSelector(currentToken)

  if(!token){
    return <Unauthorized />
  }

  return children
};

export default ProtectedRoute;