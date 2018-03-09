import debug from 'debug'

/**
 * @typedef {Object} Debuggers
 * @property {Function} debug - Method for pipe the debug to console.debug.
 * @property {Function} warn - Method for pipe the debug to console.warn.
 * @property {Function} trace - Method for pipe the debug to console.trace.
 * @property {Function} info - Method for pipe the debug to console.info.
 * @property {Function} log - Method for pipe the debug to console.log.
 * @property {Function} error - Method for pipe the debug to console.error.
 */

/**
 * Method to create custom debuggers.
 * 
 * @param {string} module - Name of your module.
 * 
 * @example const customDebugger = createCustomDebugger('your-module-name')
 * 
 * @returns {Function(level:string, fn:Function)} - Another function that awaits for the severity level and the function to handle it.
 */
const createCustomDebugger = (module) => 
  (level, fn) => {
    const defaultDebug = debug(`${module}:${level}`)
    defaultDebug.log = fn
    return defaultDebug
  }

/**
 * Method to create severity levels binded to console out methods.
 * 
 * @param {string} module - Name of your module.
 * 
 * @example const consoleDebug = createConsoleDebugger('your-module-name')
 * 
 * @returns {Debuggers} - Useful log methods.
 */
export function createConsoleDebugger(module) {
  const consoleDebugger = createCustomDebugger(module)

  
  const debuggers = {
    /* eslint-disable-next-line no-console  */
    debug: consoleDebugger('debug', console.debug.bind(console)),
    /* eslint-disable-next-line no-console  */
    warn: consoleDebugger('warn', console.warn.bind(console)),
    /* eslint-disable-next-line no-console  */
    log: consoleDebugger('log', console.log.bind(console)),
    /* eslint-disable-next-line no-console  */
    trace: consoleDebugger('trace', console.trace.bind(console)),
    /* eslint-disable-next-line no-console  */
    info: consoleDebugger('info', console.info.bind(console)),
    /* eslint-disable-next-line no-console  */
    error: consoleDebugger('error', console.error.bind(console))

  }

  return debuggers
}
