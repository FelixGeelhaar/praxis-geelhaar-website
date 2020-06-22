import React, { ReactNode, JSXElementConstructor, ReactElement } from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

interface Props {
  color?: string
  className?: string
  children: ReactNode
}

export default function Container({
  children,
  color = "transparent",
  className = "",
}: Props): ReactElement {
  return (
    <div
      css={css`
        padding: 1rem;
        background-color: ${color};
        max-width: 960px;
        margin: 0 auto;
      `}
      className={className}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}
