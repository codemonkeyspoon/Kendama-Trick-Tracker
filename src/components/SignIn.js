// import React, { useState } from 'react';

// function SignIn({ onSignIn }) {
//   const [username, setUsername] = useState('');
//   const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

//   const handleSignIn = () => {
//     // Perform your authentication logic here (e.g., check username/password)
//     // For simplicity, we'll assume authentication is successful
//     if (username.trim() !== '') {
//       localStorage.setItem('isAuthenticated', 'true');
//       setIsAuthenticated(true);
//       onSignIn();
//     }
//   };

//   return (
//     <div>
//       {isAuthenticated ? (
//         <p>You are signed in as {username}</p>
//       ) : (
//         <div>
//           <h2>Sign In</h2>
//           <input
//             type="text"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <button onClick={handleSignIn}>Sign In</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SignIn;