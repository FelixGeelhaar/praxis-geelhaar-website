import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"

import Container from "./container"
import useDoctors from "../hooks/use-doctors"

function Doctors() {
  const data = useDoctors()
  return (
    <section id="doctors">
      <Container>
        {data &&
          data.map(doctor => (
            <div
              key={doctor.name}
              css={css`
                display: flex;
                flex-flow: column nowrap;
                align-items: center;

                @media (min-width: 1000px) {
                  flex-flow: row nowrap;
                  align-items: flex-start;

                  > div {
                    margin: 0 1rem;
                  }
                }
              `}
            >
              <div id={`doctor-${doctor.id}`}>
                <Image fluid={doctor.image} alt={doctor.name} />
                <h3
                  css={css`
                    font-size: 2rem;
                  `}
                >
                  {doctor.name}
                </h3>
                <h4
                  css={css`
                    font-size: 1.2rem;
                  `}
                >
                  {doctor.title}
                </h4>
                <p
                  css={css`
                    color: var(--primary);
                    padding: 1rem 0;
                  `}
                >
                  {doctor.focus_areas}
                </p>
              </div>
              <div
                css={css`
                  ul {
                    list-style: none;
                    li {
                      padding: 0.5rem 0;
                      strong {
                        font-weight: bold;
                        color: #555;
                        display: block;

                        @media (min-width: 600px) {
                          display: inline-block;
                          margin-right: 0.5rem;
                        }
                      }
                    }
                  }
                `}
                dangerouslySetInnerHTML={{
                  __html: doctor.cv.replace(/&nbsp;/g, ""),
                }}
              />
            </div>
          ))}
      </Container>
    </section>
  )
}

export default Doctors
