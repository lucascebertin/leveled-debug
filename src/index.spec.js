import { createConsoleDebugger } from './index'

const testModuleName = 'lib'

/**
 * Method to help test all console output methods.
 * 
 * @param {string} logger - Name of the console method to use.
 * 
 * @example testLogger('log')
 */
const testLogger = (logger) => {
  const logMessage = '#test-123-test-123#'
    
  /* eslint-disable-next-line no-console */
  console[logger] = (info) => {
    expect(info).toContain(`${testModuleName}:${logger}`)
    expect(info).toContain(logMessage)
  }

  const loggers = createConsoleDebugger(testModuleName)
  const loggerPicked = loggers[logger]
  
  loggerPicked(logMessage)
}

describe('Lib', () => {
  it('Should send message to console.log method', () => testLogger('log'))
  it('Should send message to console.trace method', () => testLogger('trace'))
  it('Should send message to console.warn method', () => testLogger('warn'))
  it('Should send message to console.info method', () => testLogger('info'))
  it('Should send message to console.error method', () => testLogger('error'))
  it('Should send message to console.debug method', () => testLogger('debug'))
})