import * as core from '@actions/core'
import fs from 'fs-extra'
import path from 'path'
import readline from 'readline'
import { supportedLanguages } from './types'
import { regexExpressions } from './regexExpressions'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    // Get the inputs from the workflow file:
    const inputPath = core.getInput('path', { required: true })
    if (!inputPath) {
      core.setFailed('Input required and not supplied: path')
      return
    }

    // Read the folder:
    const files = await fs.readdir(inputPath)

    // Loop through each file:
    for await (const file of files) {
      const language = path.extname(file)
      if (language && supportedLanguages.includes(language))
        await processLineByLine(path.join(inputPath, file), language)
    }
    core.setOutput('message', 'Job finished')
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}

/**
 * Reads a file line by line.
 *
 * @param file - The file to read.
 * @returns {Promise<void>} Resolves when the file has been read.
 */
export async function processLineByLine(
  file: string,
  language: string
): Promise<void> {
  const fileStream = fs.createReadStream(file)

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  })

  for await (const line of rl) {
    analyseLine(line, language, file)
  }
}

/**
 * Analyses a line of code to see if it contains a print statement.
 *
 * @param line - The line to analyse.
 * @param language - The language of the file.
 * @param file - The file being analysed.
 *
 * @returns {void}
 */
export function analyseLine(
  line: string,
  language: string,
  file: string
): void {
  const languageRegexExpressions = regexExpressions[language]
  for (const regexExpression of languageRegexExpressions) {
    const matches = regexExpression.exec(line)
    if (matches) {
      core.warning(`The file ${file} contains a print statement. Line: ${line}`)
    }
  }
}
