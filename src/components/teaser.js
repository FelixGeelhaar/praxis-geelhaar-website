import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"

import useTeasers from "../hooks/use-teasers"

function Teaser() {
  const data = useTeasers()

  return (
    <section
      id="teaser"
      css={css`
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
      `}
    >
      {data.map(({ id, headline, description, image, background }) => (
        <div
          css={css`
            background-image: url(${background});
            background-position: top 20% center;
            background-size: cover;
            display: flex;
            flex-flow: column nowrap;

            @media (min-width: 650px) {
              flex-flow: row nowrap;
              min-height: 35vh;
              justify-content: center;
            }
          `}
          key={id}
        >
          <div
            css={css`
              padding: 0 1rem;

              @media (min-width: 650px) {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                flex-basis: 100vw;
              }
            `}
          >
            <h2
              css={css`
                padding: 0.5rem 0;
                font-size: 2rem;

                @media (min-width: 800px) {
                  padding: 2rem;
                  font-size: 3rem;
                }
              `}
              dangerouslySetInnerHTML={{ __html: headline }}
            />
            <blockquote
              css={css`
                padding: 0.5rem 0;
                font-weight: 400;
                font-style: italic;
                @media (min-width: 650px) {
                  padding: 0 1rem;
                }
              `}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div
            css={css`
              width: 250px;
              align-self: flex-end;
              @media (min-width: 650px) {
                flex-basis: 60vw;
              }

              @media (min-width: 800px) {
                flex-basis: 30vw;
                padding-top: 1rem;
              }
            `}
          >
            <Image
              fluid={image}
              alt={headline}
              css={css`
                max-width: 450px;
              `}
            />
          </div>
        </div>
      ))}
    </section>
  )
}

export default Teaser
