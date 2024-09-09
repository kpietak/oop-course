import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Technologie obiektowe</span>,
  project: {
    link: 'https://github.com/kpietak/oop-course'
  },
  docsRepositoryBase: 'https://github.com/kpietak/op-course/tree/main',
  editLink : {
    text: null
  },
  feedback: {
    content: 'Zauważyłeś błąd, masz pomysł co poprawić - zgłoś propozycję!'
  },
  footer: {
    text: 'Technologie obiektowe',
  },
}

export default config
