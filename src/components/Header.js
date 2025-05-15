import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Header.css';

function Header() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const checkServerAndUser = async () => {
      try {
        const res = await fetch("http://localhost:8000/ping");
        if (!res.ok) throw new Error("Server unreachable");

        // Server is up, now check user
        const user = JSON.parse(localStorage.getItem("saas_user"));
        if (user && user.name) {
          setUserName(user.name);
        }
      } catch (error) {
        console.log("Server down or restarted. Clearing localStorage...");
        localStorage.removeItem("saas_user");
        setUserName(""); 
      }
    };

    checkServerAndUser();
  }, []);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>SA<span className="highlight">AS</span></h1>
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>
              {userName ? (
                <span>Hello, {userName}</span>
              ) : (
                <Link to="/signup">Sign Up</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
