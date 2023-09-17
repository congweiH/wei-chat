function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Wei Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>You don&apos;t have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;
