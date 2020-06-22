import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { css } from "@emotion/core"

import Icon from "./Icon"
import Container from "./Container"

interface Activity {
  node: {
    frontmatter: {
      title: string
      icon: string
      updated: string
    }
    id: string
    body: string
  }
}

export default function FocusActivities() {
  return (
    <StaticQuery
      query={graphql`
        query ActivitiesQuery {
          allMdx {
            activities: edges {
              node {
                frontmatter {
                  title
                  icon
                }
                id
                body
              }
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Container>
            <h2>Unsere Tätigkeitsschwerpunkte</h2>
            <div
              css={css`
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: flex-start;
              `}
            >
              {data.allMdx.activities.map(({ node: activity }: Activity) => {
                return (
                  <article
                    key={activity.id}
                    css={css`
                      display: grid;
                      grid-template-columns: 25% 75%;
                      justify-content: stretch;
                      grid-gap: 0.5rem;
                      column-gap: 0.5rem;
                      h3 {
                        padding: 1rem 0;
                        font-size: 1rem;
                        font-weight: 400;
                      }
                    `}
                  >
                    <div
                      css={css`
                        margin: auto 0;
                      `}
                    >
                      <Icon
                        id={activity.frontmatter.icon}
                        name={activity.frontmatter.title}
                      />
                    </div>
                    <div
                      css={css`
                        padding: 0.5rem;
                      `}
                    >
                      <MDXRenderer title={activity.frontmatter.title}>
                        {activity.body}
                      </MDXRenderer>
                    </div>
                  </article>
                )
              })}
            </div>
          </Container>
        </>
      )}
    />
  )
}
