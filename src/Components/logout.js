import { GoogleLogout } from "react-google-login";
const clientId =
  "264497336364-odq4po0p3itht7bpminpohspji9p55s2.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Log out successfull");
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;

// import React from "react";
// import { GoogleLogout } from "react-google-login";

// const clientId =
//   "264497336364-odq4po0p3itht7bpminpohspji9p55s2.apps.googleusercontent.com";

// function LogoutButton() {
//   const onLogoutSuccess = () => {
//     console.log("Logout Successful");
//     // Perform any additional logout actions here, such as clearing session or state
//   };

//   const onFailure = error => {
//     console.log("Logout Failed. Error:", error);
//   };

//   return (
//     <div id="logoutButton">
//       <GoogleLogout
//         clientId={clientId} // Pass the same client ID here
//         buttonText="Logout"
//         onLogoutSuccess={onLogoutSuccess}
//         onFailure={onFailure}
//       />
//     </div>
//   );
// }

// export default LogoutButton;
