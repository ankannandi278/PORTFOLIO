import clsx from 'clsx'

/** Thin wrapper around clsx so components import from one place. */
export function cn(...args) {
  return clsx(...args)
}
