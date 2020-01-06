import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"

import Container from "./container"
import Address from "./address"
import useContact from "../hooks/use-contact"

function Contact() {
  const data = useContact()

  return (
    <section
      id="contact"
      css={css`
        background-color: #fcecde;
      `}
    >
      <Container
        css={css`
          > div {
            margin-bottom: 2rem;
          }
          @media (min-width: 1000px) {
            display: flex;
            flex-flow: row nowrap;

            > div {
              margin-bottom: 0;
            }
          }
        `}
      >
        {data.content.map(content => (
          <div
            key={content.id}
            css={css`
              @media (min-width: 1000px) {
                margin: 0 1rem;
                width: 45vw;
                flex-basis: 75vw;
              }
            `}
          >
            <Image fluid={content.image} alt={content.headline} />
            <h2
              css={css`
                margin: 1rem 0;
              `}
            >
              {content.headline}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: content.content }} />
          </div>
        ))}
        <Container
          color="var(--primary)"
          css={css`
            @media (min-width: 1000px) {
              margin: 0 1rem;
              width: 45vw;
            }
          `}
        >
          <h2
            css={css`
              color: #fff;
              margin: 1rem 0;

              @media (min-width: 1000px) {
                margin-top: 0;
              }
            `}
          >
            Kontakt
          </h2>
          {data.contact.map(address => (
            <Address key={address.id} {...address} />
          ))}
        </Container>
        <div
          css={css`
            @media (min-width: 1000px) {
              margin: 0 1rem;
              width: 45vw;
            }
          `}
        >
          <h2>Sprechzeiten</h2>
          {data.openingTime.map(time => {
            return (
              <div
                key={time.id}
                css={css`
                  display: flex;
                  flex-flow: column nowrap;
                  align-items: center;
                  strong {
                    color: var(--secondary);
                    font-size: 1rem;
                    font-weight: 200;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid var(--primary);
                  }
                  p {
                    color: var(--primary);
                    font-size: 2.2rem;
                    font-weight: 400;
                    sup {
                      margin-left: 0.2rem;
                      font-size: 1.5rem;
                      font-weight: 200;
                    }
                  }

                  @media (min-width: 1000px) {
                    display: block;
                  }
                `}
              >
                <p dangerouslySetInnerHTML={{ __html: time.opening_time }} />
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Contact
