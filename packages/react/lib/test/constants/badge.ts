const badgeClassBase = 'hiperion-badge'
const badgeClassSolid = `${badgeClassBase}-solid`
const badgeClassOutlined = `${badgeClassBase}-outlined`

export enum BadgeClass {
	BASE = badgeClassBase,
	SOLID = badgeClassSolid,
	OUTLINED = badgeClassOutlined,
	GRAY = `${badgeClassBase}-gray`,
	RED = `${badgeClassBase}-red`,
	GREEN = `${badgeClassBase}-green`,
	ORANGE = `${badgeClassBase}-orange`,
	BIG = `${badgeClassBase}-big`,
	MEDIUM = `${badgeClassBase}-medium`,
	SMALL = `${badgeClassBase}-small`,
}
