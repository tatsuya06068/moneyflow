import { useAuth0 } from "@auth0/auth0-react"
import '../layouts/App.sass'
import { Button } from "@material-ui/core"

function LogoutButton(props: any) {
  const { isAuthenticated, logout } = useAuth0();

    return isAuthenticated ? (
      <Button
        variant="outline-primary"
        style={{color: 'white', fontSize: '1.2em'}}
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
        {...props}
      >
        Log out
      </Button>

  ) : null;
}

export default LogoutButton;