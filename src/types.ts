/**
 * Supported languages
 * @description List of supported languages
 */
export const supportedLanguages: string[] = [
  'ts',
  'js',
  'py',
  'java',
  'php',
  'csharp',
  'cpp',
  'c',
  'go',
  'rust',
  'ruby',
  'bash',
  'kotlin',
  'swift',
  'perl',
  'lua',
  'r',
  'scala',
  'dart',
  'elixir',
  'crystal',
  'groovy',
  'julia',
  'ocaml',
  'perl6',
  'powershell',
  'vb',
  'haskell',
  'erlang',
  'nim',
  'lisp'
]

/**
 * Supported languages inferred type
 */
export type SupportedLanguages = (typeof supportedLanguages)[number]
