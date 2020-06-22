import React from "react"
import { css } from "@emotion/core"

interface Props {
  hour: string
  minute: string
}
export default function Time({ hour, minute }: Props) {
  return (
    <span
      css={css`
        font-size: 1.6rem;
        margin: 0.5rem;
        color: var(--primary);
        font-family: "Open Sans";
        sup {
          font-size: 1rem;
        }
      `}
    >
      {hour} <sup>{minute}</sup>
    </span>
  )
}
