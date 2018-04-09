export class AuthService {

  isLoggedIn = false;

  isAuth() {
    return new Promise( (resolve , reject ) => {
      setTimeout( () => {
       resolve(this.isLoggedIn);
      }, 1000);
    });
  }

  logIn() {
    this.isLoggedIn = true;
    alert('You logged in!');
  }

  logOut() {
    this.isLoggedIn = false;
    alert('You logged out!');
  }
}
