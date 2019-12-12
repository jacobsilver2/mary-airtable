import React, { useState } from "react"
import { setSessionPassword } from "../utils/utils"

const styles = {
  wrapper: {
    height: "100vh",
    background: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: "48px",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    height: "48px",
    fontSize: "1.5rem",
    background: "black",
    color: "white",
    borderRadius: "4px",
    marginTop: "16px",
    textTransform: "uppercase",
    fontWeight: "300",
  },
  buttonHover: {
    background: "#fff",
    color: "#000000",
  },
}

const PasswordProtect = () => {
  const [password, setPassword] = useState("")
  const [isButtonHovered, buttonHover] = useState(false)

  const onSubmit = event => {
    event.preventDefault()
    setSessionPassword(password)
    window.location.reload() // eslint-disable-line
  }

  return (
    <div style={styles.wrapper}>
      <h1>Enter Password</h1>

      <form onSubmit={onSubmit} style={{ width: "320px" }}>
        <input
          name="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          style={styles.input}
        />

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isButtonHovered ? styles.buttonHover : null),
          }}
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
        >
          ENTER
        </button>
      </form>
    </div>
  )
}

export default PasswordProtect
