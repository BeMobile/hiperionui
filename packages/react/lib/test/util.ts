import tinycolor from 'tinycolor2'

export const toRgbString = (color: string) => tinycolor(color).toRgbString()
export const remToPx = (value: number) => `${value * 16}px`
