import React from 'react'
import { Link } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../../styles/theme'
import { flexColumn, media } from './../../../styles/mixins'
import { CardP, ExcerptWrapper, ProjectTitle } from './../../../styles/components'
import { shared, spacing } from './../../../styles/theme.json'

export default props => (
  <CardWrapper className={`${props.data.style}`}>
    <ThemeProvider theme={themes[props.data.theme] || themeA}>
      <CardLink to={props.cardData.post_type === "page" ? `/${props.cardData.slug}` : `/${props.slug}/${props.cardData.slug}`}>
        <ProjectTitle dangerouslySetInnerHTML={{ __html: props.cardData.title }}/>
        {(props.cardData.short_description && props.data.show_description) &&
          <ExcerptWrapper>
            <CardP>{props.cardData.short_description}</CardP>
          </ExcerptWrapper>
        }
      </CardLink>
    </ThemeProvider>
  </CardWrapper>
)

// STYLES
const CardWrapper = styled.li`
  ${flexColumn};
  position: relative;
  &.border {
    border-bottom: ${shared.border_thin};
    padding-bottom: ${spacing.double_pad};
    ${media.desktopNav`
    &.two_col {
      &:nth-child(odd) {
        border-right: ${shared.border_thin};
      }
    }
    &:last-child {
      border-bottom: 0;
    }
  `}
`;

const CardLink = styled(Link)`
  text-decoration: none !important;
  * {
    text-decoration: none !important;
  }
  ${media.desktopNav``}
`;
