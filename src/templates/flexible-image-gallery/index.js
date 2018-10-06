import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themeB } from './../../styles/theme'
import { Section, H1, H2, StyledMarkup, PadWrapper } from './../../styles/components'
import { pageData } from './../../components';
import SimpleSlideShow from './SimpleSlideshow'

export default pageData((props) => {
  console.log(props)
  return (
    <Fragment>
      <Section>
        <ThemeProvider theme={themeA}>
          <PadWrapper>
            <H1>{props.title}</H1>
            {(props.content.short_description) && <H2>{props.content.short_description}</H2>}
            <StyledMarkup className={'pad-top'} dangerouslySetInnerHTML={{__html: props.content.description }}/>
          </PadWrapper>
        </ThemeProvider>
      </Section>
      {props.content.layout.map((item, i) =>
        <Section className={item.module} key={props.content.slug + i + item.module}>
          { (item.module === 'simple_slideshow')
            ? <SimpleSlideShow slides={item.slides}/> :
            (item.module === 'slideshow')
            ? <SimpleSlideShow slides={item.slides}/>
            : <H2>{item.module}</H2>
          }
        </Section>
      )}
    </Fragment>
  )
})

// STYLES