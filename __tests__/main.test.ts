/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * These should be run as if the action was called from a workflow.
 * Specifically, the inputs listed in `action.yml` should be set as environment
 * variables following the pattern `INPUT_<INPUT_NAME>`.
 */
/* eslint-disable jest/no-identical-title */
import * as core from '@actions/core'
import * as main from '../src/main'
import fs from 'fs-extra'

// Mock the GitHub Actions core library
let warningMock: jest.SpyInstance
let getInputMock: jest.SpyInstance
let setFailedMock: jest.SpyInstance
let setOutputMock: jest.SpyInstance

beforeEach(() => {
  jest.clearAllMocks()

  warningMock = jest.spyOn(core, 'warning').mockImplementation()
  getInputMock = jest.spyOn(core, 'getInput').mockImplementation()
  setFailedMock = jest.spyOn(core, 'setFailed').mockImplementation()
  setOutputMock = jest.spyOn(core, 'setOutput').mockImplementation()
})

describe('analyseLine', () => {
  it('should fail if the path input is not set', async () => {
    getInputMock.mockReturnValueOnce('')
    await main.run()
    expect(setFailedMock).toHaveBeenCalledWith(
      'Input required and not supplied: path'
    )
  })

  it('should fail if the path input is not set', async () => {
    getInputMock.mockReturnValueOnce('')
    await main.run()
    expect(setFailedMock).toHaveBeenCalledWith(
      'Input required and not supplied: path'
    )
  })

  it('should warn if a print statement is found in a line', () => {
    const line = 'console.log("Hello, world!")'
    const language = 'js'
    const file = 'test.js'

    main.analyseLine(line, language, file)

    expect(warningMock).toHaveBeenCalledWith(
      'The file test.js contains a print statement. Line: console.log("Hello, world!")'
    )
  })

  it('should not warn if no print statement is found in a line', () => {
    const line = 'const message = "Hello, world!"'
    const language = 'js'
    const file = 'test.js'

    main.analyseLine(line, language, file)

    expect(warningMock).not.toHaveBeenCalled()
  })

  describe('processLineByLine', () => {
    it('should analyze each line in the file', async () => {
      const file = './__tests__/test.file.ts'
      const language = 'ts'

      jest.spyOn(main, 'analyseLine').mockImplementation(() => {})

      await main.processLineByLine(file, language)

      expect(warningMock).toHaveBeenCalledTimes(1)
    })
  })

  describe('run', () => {
    it('should fail if the path input is not set', async () => {
      getInputMock.mockReturnValueOnce('')
      await main.run()
      expect(setFailedMock).toHaveBeenCalledWith(
        'Input required and not supplied: path'
      )
    })

    it('should read the folder and process each file', async () => {
      const inputPath = './__tests__/'
      const files = ['test.file.js']

      const readdirMock = jest.spyOn(fs, 'readdir')
      getInputMock.mockReturnValueOnce(inputPath)
      readdirMock.mockResolvedValueOnce(files)

      await main.run()

      expect(readdirMock).toHaveBeenCalledWith(inputPath)
      expect(setOutputMock).toHaveBeenCalledWith('message', 'Job finished')
    })

    it('should set the workflow run as failed if an error occurs', async () => {
      const inputPath = '/path/to/folder'
      const error = new Error('Something went wrong')
      const readdirMock = jest.spyOn(fs, 'readdir')

      getInputMock.mockReturnValueOnce(inputPath)
      readdirMock.mockRejectedValueOnce(error)

      await main.run()

      expect(readdirMock).toHaveBeenCalledWith(inputPath)
      expect(setFailedMock).toHaveBeenCalledWith(error.message)
    })
  })
})
