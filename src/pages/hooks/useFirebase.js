import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from "../Home/Home/Login/Firebase/Firebase.init"

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the DB
                saveUser(email, name);

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                // redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                // redirect
                const destination = location?.state?.from || '/';
                history.push(destination);
                setAuthError('');
               
                // const newUser = {email, displayName: name };
                
                //update to db 
                saveOneTimeUser(result.user.email, result.user.displayName)
                
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    // set Admin
    useEffect(() => {
        fetch(`https://stormy-wave-87937.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            
        }).catch((error) => {
           
        })
        .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://stormy-wave-87937.herokuapp.com/users', {
            method: 'POST',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    const saveOneTimeUser = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://stormy-wave-87937.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}
export default useFirebase;