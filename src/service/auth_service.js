import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

class AuthService{

  constructor(){
      this.firebaseAuth = getAuth();
      this.googleProvider = new GoogleAuthProvider();
  }

    login(provider){
      const authProvider = this.getProvider(provider);
      return signInWithPopup(this.firebaseAuth, authProvider)

    }

    getProvider(provider_name){
      switch(provider_name){
        case "Google" :
          return this.googleProvider;
        default :
          throw new Error(`not Supported provider: ${provider_name}`)
      }
    }
  

    logout(){
      this.firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged){
      this.firebaseAuth.onAuthStateChanged( (user) => {
        onUserChanged(user);
      })
    }
}

export default AuthService;