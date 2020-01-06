import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

function footer() {
  return (
    <footer
      css={css`
        background-color: var(--primary);
        padding: 1rem;
        color: #fff;
        display: flex;
        justify-content: space-between;
      `}
    >
      <span>© {new Date().getFullYear()} Praxis Geelhaar</span>
      <Link to="/impressum">Impressum</Link>
    </footer>
  )
}

export default footer
