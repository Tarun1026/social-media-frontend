// import React from 'react';
// import { use } from 'react-router-dom';
// import Cookies from 'js-cookie';

// const ProtectedRoute = ({  ...rest }) => {
//   const isAuthenticated = !!Cookies.get('accessToken');

//   return (
//     <Route
//       {...rest}
//       render={() =>
//         isAuthenticated ? (
//           <Redirect to="/post" /> 
//         ) : (
//           <Redirect to="/" /> 
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;
