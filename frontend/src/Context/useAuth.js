export const useAuth = () => {
  const isLoggedUser = localStorage.getItem('token')
   if(isLoggedUser){
    return true;
   }else{
    return false
   }
}; 