import { useState } from 'react'
import './App.css'
<<<<<<< HEAD
import Registration from './components/Registration'

function App() {
  return (
    <>
      <Registration />
=======

function App() {

  const [page, setPage] = useState(0)

  return (
    <>
      {/* ===== MAIN BUTTONS ===== */}
      {page === 0 && (
        <div 
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            marginTop: "20px"
          }}
        >
          <button onClick={() => setPage(1)}
            style={{ padding: "10px 20px", fontSize: "16px" }}>
            Open Login Part
          </button>

          <button onClick={() => setPage(2)}
            style={{ padding: "10px 20px", fontSize: "16px" }}>
            Register
          </button>
        </div>
      )}

      {/* ===== LOGIN ===== */}
      {page === 1 && (
        <div className="overlay">
          <div className="modal">
            <h2>Login</h2>
            <input type="text" placeholder="Username" /><br />
            <input type="password" placeholder="Password" />

            <div className="actions">
              <button onClick={() => setPage(0)}>Cancel</button>

              <button onClick={() => setPage(3)}>
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== REGISTER ===== */}
      {page === 2 && (
        <div className="overlay">
          <div className="modal">
            <h2>Registration</h2>

            <input type="text" placeholder="Full Name" /><br />
            <input type="email" placeholder="Email" /><br />
            <input type="text" placeholder="Username" /><br />
            <input type="password" placeholder="Password" /><br />
            <input type="password" placeholder="Confirm Password" />

            <div className="actions">
              <button onClick={() => setPage(0)}>Cancel</button>
              <button onClick={() => setPage(1)}>Register</button>
            </div>
          </div>
        </div>
      )}

      {/* ===== DASHBOARD ===== */}
      {page === 3 && (
        <div className="dashboard">
          <h1>Welcome to Dashboard 🎉</h1>
          <p>You have successfully logged in.</p>

          <button onClick={() => setPage(0)}>
            Logout
          </button>
        </div>
      )}
>>>>>>> 3ab3490b53b0a3c58d6c1dab8c85dc20cd024d71
    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 3ab3490b53b0a3c58d6c1dab8c85dc20cd024d71
