# Lint Prints

[![GitHub Super-Linter](https://github.com/BuenClima/echo-leaks/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/BuenClima/echo-leaks/actions/workflows/ci.yml/badge.svg)
[![Check dist/](https://github.com/BuenClima/echo-leaks/actions/workflows/check-dist.yml/badge.svg)](https://github.com/BuenClima/echo-leaks/actions/workflows/check-dist.yml)
[![CodeQL](https://github.com/BuenClima/echo-leaks/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/BuenClima/echo-leaks/actions/workflows/codeql-analysis.yml)
[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)

Lint a specific folder looking for prints.

## Example Usage

```yml
- name: Lint src
  id: package
  uses: BuenClima/lint-prints@main
  with:
    path: './src'
```

## Inputs

- `path` Folder path. E.g: `./src`

## Outputs

- `message` result message

## License

Licensed under the MIT License.
