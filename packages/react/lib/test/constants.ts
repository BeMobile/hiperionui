const buttonClassBase = 'hiperion-btn'
const buttonClassSolid = `${buttonClassBase}-solid`
const buttonClassOutlined = `${buttonClassBase}-outlined`

export enum ButtonClass {
	BASE = buttonClassBase,
	SOLID = buttonClassSolid,
	SOLID_MAIN = `${buttonClassSolid}-main`,
	OUTLINED = buttonClassOutlined,
	OUTLINED_MAIN = `${buttonClassOutlined}-main`,
	BIG = `${buttonClassBase}-big`,
	MEDIUM = `${buttonClassBase}-medium`,
	SMALL = `${buttonClassBase}-small`,
}
