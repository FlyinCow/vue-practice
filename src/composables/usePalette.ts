import chroma from "chroma-js"

interface MColor {
  primary: string,
  dark: string,
  bright: string,
  darker: string,
  brighter: string,
  white: string,
  black: string,
  grey: string
}

export function useDefaultPalette(): MColor {
  return usePalette('#77424F')
}

export function usePalette(primaryColor: string): MColor {
  return {
    primary: primaryColor,
    dark: chroma(primaryColor).darken().css(),
    darker: chroma(primaryColor).darken(2).css(),
    bright: chroma(primaryColor).brighten().css(),
    brighter: chroma(primaryColor).brighten(2).css(),
    white: chroma.mix('white', primaryColor, 0.1).css(),
    black: chroma.mix('black', primaryColor, 0.1).css(),
    grey: chroma.mix('grey', primaryColor, 0.1).css()
  }
}