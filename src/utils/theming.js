// Desc: Helper functions for theming
// Usage: import { setBackground } from './utils/theming'

export const formatBackground = (theme) => {

    if (theme === 'dark') return 'bg-zinc-900 text-white'
    else return 'bg-zinc-200 text-black'
}

export const formatSectionBackground = (theme) => {
    if (theme === 'light') return 'bg-white text-gray-700'
    else return 'bg-zinc-800/60 text-gray-300'
}