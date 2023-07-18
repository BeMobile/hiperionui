const buttonClassBase = 'hiperion-btn'
const buttonClassSolid = `${buttonClassBase}-solid`
const buttonClassOutlined = `${buttonClassBase}-outlined`

export enum ButtonClass {
	BASE = buttonClassBase,
	SOLID = buttonClassSolid,
	SOLID_MAIN = `${buttonClassSolid}-main`,
	SOLID_SECONDARY = `${buttonClassSolid}-secondary`,
	OUTLINED = buttonClassOutlined,
	OUTLINED_MAIN = `${buttonClassOutlined}-main`,
	OUTLINED_SECONDARY = `${buttonClassOutlined}-secondary`,
	BIG = `${buttonClassBase}-big`,
	MEDIUM = `${buttonClassBase}-medium`,
	SMALL = `${buttonClassBase}-small`,
}
