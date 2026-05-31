import { auth } from './firebase-config.js';
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


export const logoutUser = (e) => {
    if (e) e.preventDefault(); 

    return signOut(auth)
        .then(() => {
          
            localStorage.clear();
            sessionStorage.clear();
            
            alert("Logged out successfully!");
            window.location.href = "login.html"; 
        })
        .catch((error) => {
            console.error("Logout Error:", error);
            alert("Logout failed: " + error.message);
        });
};

export const checkAuth = (callback) => {
    onAuthStateChanged(auth, callback);
};