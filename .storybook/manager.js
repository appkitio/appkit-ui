import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import customTheme from './theme'

addons.setConfig({
	theme: customTheme
})
