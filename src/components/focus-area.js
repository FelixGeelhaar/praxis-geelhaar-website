import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"

import Container from "./container"
import useFocusAreas from "../hooks/use-focusareas"

function FocusAreas() {
  const node = useFocusAreas()
  return (
    <section id="focus-area">
      <Container>
        <h2
          css={css`
            font-size: 1.5rem;
            margin: 1.5rem 0;
            @media (min-width: 600px) {
              font-size: 2rem;
            }
          `}
        >
          Unsere Tätigkeitsschwerpunkte
        </h2>
        <div
          css={css`
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            @media (min-width: 600px) {
              > div {
                max-width: 45vw;
              }
            }
            @media (min-width: 1000px) {
              > div {
                max-width: 30vw;
              }
            }
          `}
        >
          {node &&
            node.map(({ id, icon, headline, description }) => (
              <div
                key={id}
                css={css`
                  display: flex;
                  flex-flow: row nowrap;
                  margin: 1rem 0;
                `}
              >
                <div
                  css={css`
                    width: 80px;
                    margin-right: 0.5rem;
                    @media (min-width: 600px) {
                      width: 150px;
                    }
                    @media (min-width: 1000px) {
                      width: 200px;
                      margin-right: 1rem;
                    }
                  `}
                >
                  <Image fluid={icon} alt={headline} />
                </div>
                <div
                  css={css`
                    width: 65vw;
                  `}
                >
                  <h3>{headline}</h3>
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </div>
              </div>
            ))}
        </div>
      </Container>
    </section>
  )
}

export default FocusAreas
