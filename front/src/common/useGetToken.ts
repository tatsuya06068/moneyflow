import { useAuth0 } from '@auth0/auth0-react'

 function useGetToken() {
    const { getAccessTokenSilently } = useAuth0();
    const Token =  async() => {
        const token = await getAccessTokenSilently();
        return token
    }
    Token()
}
export default useGetToken;