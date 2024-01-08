import { SupportedLanguages } from './types'

const jsRegexExpressions = [
  /console\.log\((.*)\)/g,
  /console\.info\((.*)\)/g,
  /console\.warn\((.*)\)/g,
  /console\.error\((.*)\)/g
]

const tsRegexExpressions = [
  /console\.log\((.*)\)/g,
  /console\.info\((.*)\)/g,
  /console\.warn\((.*)\)/g,
  /console\.error\((.*)\)/g
]

const pyRegexExpressions = [/print\((.*)\)/g]

const phpRegexExpressions = [/echo\((.*)\)/g]

const javaRegexExpressions = [
  /System\.out\.println\((.*)\)/g,
  /System\.out\.print\((.*)\)/g
]

const csharpRegexExpressions = [
  /Console\.WriteLine\((.*)\)/g,
  /Console\.Write\((.*)\)/g
]

const cppRegexExpressions = [
  /std::cout << (.*) << std::endl;/g,
  /std::cout << (.*) << std::flush;/g,
  /std::cout << (.*) << std::endl/g,
  /std::cout << (.*) << std::flush/g
]

const cRegexExpressions = [
  /printf\((.*)\)/g,
  /puts\((.*)\)/g,
  /putchar\((.*)\)/g,
  /putch\((.*)\)/g
]

const bashRegexExpressions = [/echo\((.*)\)/g]

const rustRegexExpressions = [
  /println!\((.*)\)/g,
  /print!\((.*)\)/g,
  /eprintln!\((.*)\)/g,
  /eprint!\((.*)\)/g
]

const goRegexExpressions = [/fmt\.Println\((.*)\)/g, /fmt\.Printf\((.*)\)/g]

const rubyRegexExpressions = [/puts\((.*)\)/g, /print\((.*)\)/g]

const kotlinRegexExpressions = [
  /println\((.*)\)/g,
  /print\((.*)\)/g,
  /System\.out\.println\((.*)\)/g,
  /System\.out\.print\((.*)\)/g
]

const swiftRegexExpressions = [
  /print\((.*)\)/g,
  /println\((.*)\)/g,
  /NSLog\((.*)\)/g
]

const perlRegexExpressions = [/print\((.*)\)/g]

const luaRegexExpressions = [/print\((.*)\)/g]

const rRegexExpressions = [/print\((.*)\)/g]

const scalaRegexExpressions = [
  /println\((.*)\)/g,
  /print\((.*)\)/g,
  /Console\.println\((.*)\)/g,
  /Console\.print\((.*)\)/g
]

const dartRegexExpressions = [/print\((.*)\)/g]

const elixirRegexExpressions = [/IO\.puts\((.*)\)/g]

const crystalRegexExpressions = [/puts\((.*)\)/g]

const groovyRegexExpressions = [/println\((.*)\)/g]

const juliaRegexExpressions = [/println\((.*)\)/g]

const ocamlRegexExpressions = [/print_endline\((.*)\)/g]

const perl6RegexExpressions = [/say\((.*)\)/g]

const powershellRegexExpressions = [/Write-Host\((.*)\)/g]

const vbRegexExpressions = [/Console\.WriteLine\((.*)\)/g]

const haskellRegexExpressions = [/putStrLn\((.*)\)/g]

const erlangRegexExpressions = [/io:fwrite\((.*)\)/g]

const nimRegexExpressions = [/echo\((.*)\)/g]

const lispRegexExpressions = [/print\((.*)\)/g]

/**
 * @description Object containing all the regex expressions for each language
 */
export const regexExpressions: Record<SupportedLanguages, RegExp[]> = {
  ts: tsRegexExpressions,
  js: jsRegexExpressions,
  py: pyRegexExpressions,
  php: phpRegexExpressions,
  java: javaRegexExpressions,
  csharp: csharpRegexExpressions,
  cpp: cppRegexExpressions,
  c: cRegexExpressions,
  bash: bashRegexExpressions,
  rust: rustRegexExpressions,
  go: goRegexExpressions,
  ruby: rubyRegexExpressions,
  kotlin: kotlinRegexExpressions,
  swift: swiftRegexExpressions,
  perl: perlRegexExpressions,
  lua: luaRegexExpressions,
  r: rRegexExpressions,
  scala: scalaRegexExpressions,
  dart: dartRegexExpressions,
  elixir: elixirRegexExpressions,
  crystal: crystalRegexExpressions,
  groovy: groovyRegexExpressions,
  julia: juliaRegexExpressions,
  ocaml: ocamlRegexExpressions,
  perl6: perl6RegexExpressions,
  powershell: powershellRegexExpressions,
  vb: vbRegexExpressions,
  haskell: haskellRegexExpressions,
  erlang: erlangRegexExpressions,
  nim: nimRegexExpressions,
  lisp: lispRegexExpressions
}

/**
 * @description Object containing all the language extensions
 */
export const languageExtensions: Record<SupportedLanguages, string> = {
  ts: 'ts',
  js: 'js',
  py: 'py',
  php: 'php',
  java: 'java',
  csharp: 'cs',
  cpp: 'cpp',
  c: 'c',
  bash: 'sh',
  rust: 'rs',
  go: 'go',
  ruby: 'rb',
  kotlin: 'kt',
  swift: 'swift',
  perl: 'pl',
  lua: 'lua',
  r: 'r',
  scala: 'scala',
  dart: 'dart',
  elixir: 'ex',
  crystal: 'cr',
  groovy: 'groovy',
  julia: 'jl',
  ocaml: 'ml',
  perl6: 'pl6',
  powershell: 'ps1',
  vb: 'vb',
  haskell: 'hs',
  erlang: 'erl',
  nim: 'nim',
  lisp: 'lisp'
}
