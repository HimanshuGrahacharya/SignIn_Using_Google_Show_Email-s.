import { GoogleLogin } from "react-google-login";

// Google Client ID
const clientId =
  "264497336364-odq4po0p3itht7bpminpohspji9p55s2.apps.googleusercontent.com";

function Login() {
  const onSuccess = res => {
    console.log("Login Success! Current user: ", res.profileObj); // Corrected the typo here from 'profileobj' to 'profileObj'
  };

  const onFailure = res => {
    console.log("LOGIN FAILED! res:", res);
  };

  return (
    <div id="signInButton" style={{margin:"2vh"}}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess} // Correctly point to onSuccess
        onFailure={onFailure} // Correctly point to onFailure
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
