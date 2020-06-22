import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Container from "./Container"
import Time from "./Time"

const Headline = styled.h3`
  margin: 1rem 0;
  color: #626262;
  font-size: 0.8rem;
  border-bottom: 1px solid var(--primary);
`

interface Props {
  multiple?: boolean
}

const Section = styled.div(({ multiple = false }: Props) => ({
  display: "grid",
  gridTemplateColumns: "15% 75%",
  gridTemplateAreas: `"icon-one area-one"
    "icon-two area-two"`,
  rowGap: `${multiple ? "1rem" : 0}`,
  margin: "0.5rem 0",
  alignItems: "center",
}))

const ContactSection = () => {
  return (
    <>
      <h2>Kontakt</h2>
      <h3>Praxis Geelhaar</h3>
      <Section id="address" multiple={true}>
        <i
          className="fa fa-map-marker"
          css={css`
            grid-area: icon-one;
          `}
        ></i>
        <address
          css={css`
            grid-area: area-one;
          `}
        >
          Kurhausdamm 1 75378 <br /> Bad Liebenzell
        </address>
        <i
          className="fa fa-map-marker"
          css={css`
            grid-area: icon-two;
          `}
        ></i>
        <address
          css={css`
            grid-area: area-two;
          `}
        >
          Marxzeller Straße 46 <br /> 75305 Neuenbürg
        </address>
      </Section>
      <hr />
      <Section id="mail">
        <i
          className="fa fa-envelope"
          css={css`
            grid-area: icon-one;
          `}
        ></i>
        <a
          href="mailto:kontakt@praxis-geelhaar.de"
          css={css`
            grid-area: area-one;
          `}
        >
          kontakt[@]praxis-geelhaar.de
        </a>
      </Section>
      <hr />
      <Section id="phone">
        <i
          className="fa fa-phone"
          css={css`
            grid-area: icon-one;
          `}
        ></i>
        <p
          css={css`
            grid-area: area-one;
          `}
        >
          07052 / 930 930
        </p>
      </Section>
      <hr />
      <Section id="web">
        <i
          className="fa fa-globe"
          css={css`
            grid-area: icon-one;
          `}
        ></i>
        <p
          css={css`
            grid-area: area-one;
          `}
        >
          www.praxis-geelhaar.de
        </p>
      </Section>
    </>
  )
}

const OpeningHours = () => {
  return (
    <>
      <h2>Sprechzeiten</h2>
      <Headline>Montag, Dienstag, Donnerstag</Headline>
      <>
        <Time hour="08" minute="30" /> – <Time hour="12" minute="30" />
      </>
      <>
        <Time hour="13" minute="30" /> – <Time hour="18" minute="00" />
      </>
      <Headline>Mittwoch & Freitag</Headline>
      <>
        <Time hour="08" minute="00" /> – <Time hour="13" minute="00" />
      </>
    </>
  )
}

export default function Contact() {
  return (
    <section
      css={css`
        background-color: #fcecde;
        hr {
          border: 1px solid #fff;
        }
      `}
    >
      <Container
        css={css`
          display: grid;
        `}
      >
        <div
          css={css`
            background-color: #ee7810;
            color: #fff;
            padding: 1.5rem;

            h2,
            h3 {
              color: #fff;
            }
          `}
        >
          <ContactSection />
        </div>
        <div
          css={css`
            padding: 1.5rem;
          `}
        >
          <OpeningHours />
        </div>
      </Container>
    </section>
  )
}
