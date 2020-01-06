import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const Container = ({
  children,
  color = "transparent",
  className,
  style = {},
}) => (
  <div
    css={css`
      padding: 1rem;
      background-color: ${color};
    `}
    className={className}
    style={style}
  >
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
