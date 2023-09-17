function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Wei Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/17977593/pexels-photo-17977593.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>congwei</span>
        <button>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
