firestore-utils-cli
=================

Google firebase firestore utility cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g firestore-utils-cli
$ firestore-utils COMMAND
running command...
$ firestore-utils (--version)
firestore-utils-cli/1.0.0 linux-x64 node-v16.15.1
$ firestore-utils --help [COMMAND]
USAGE
  $ firestore-utils COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`firestore-utils export-data`](#firestore-utils-export-data)
* [`firestore-utils help [COMMAND]`](#firestore-utils-help-command)
* [`firestore-utils plugins`](#firestore-utils-plugins)
* [`firestore-utils plugins:install PLUGIN...`](#firestore-utils-pluginsinstall-plugin)
* [`firestore-utils plugins:inspect PLUGIN...`](#firestore-utils-pluginsinspect-plugin)
* [`firestore-utils plugins:install PLUGIN...`](#firestore-utils-pluginsinstall-plugin-1)
* [`firestore-utils plugins:link PLUGIN`](#firestore-utils-pluginslink-plugin)
* [`firestore-utils plugins:uninstall PLUGIN...`](#firestore-utils-pluginsuninstall-plugin)
* [`firestore-utils plugins:uninstall PLUGIN...`](#firestore-utils-pluginsuninstall-plugin-1)
* [`firestore-utils plugins:uninstall PLUGIN...`](#firestore-utils-pluginsuninstall-plugin-2)
* [`firestore-utils plugins update`](#firestore-utils-plugins-update)

## `firestore-utils export-data`

Export data from firebase firestore database

```
USAGE
  $ firestore-utils export-data

DESCRIPTION
  Export data from firebase firestore database

EXAMPLES
  $ firestore-utils-cli export-data
```

_See code: [dist/commands/export-data/index.ts](https://github.com/farsabbutt/firestore-utils-cli/blob/v1.0.0/dist/commands/export-data/index.ts)_

## `firestore-utils help [COMMAND]`

Display help for firestore-utils.

```
USAGE
  $ firestore-utils help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for firestore-utils.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `firestore-utils plugins`

List installed plugins.

```
USAGE
  $ firestore-utils plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ firestore-utils plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `firestore-utils plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ firestore-utils plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ firestore-utils plugins add

EXAMPLES
  $ firestore-utils plugins:install myplugin 

  $ firestore-utils plugins:install https://github.com/someuser/someplugin

  $ firestore-utils plugins:install someuser/someplugin
```

## `firestore-utils plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ firestore-utils plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ firestore-utils plugins:inspect myplugin
```

## `firestore-utils plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ firestore-utils plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ firestore-utils plugins add

EXAMPLES
  $ firestore-utils plugins:install myplugin 

  $ firestore-utils plugins:install https://github.com/someuser/someplugin

  $ firestore-utils plugins:install someuser/someplugin
```

## `firestore-utils plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ firestore-utils plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ firestore-utils plugins:link myplugin
```

## `firestore-utils plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ firestore-utils plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ firestore-utils plugins unlink
  $ firestore-utils plugins remove
```

## `firestore-utils plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ firestore-utils plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ firestore-utils plugins unlink
  $ firestore-utils plugins remove
```

## `firestore-utils plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ firestore-utils plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ firestore-utils plugins unlink
  $ firestore-utils plugins remove
```

## `firestore-utils plugins update`

Update installed plugins.

```
USAGE
  $ firestore-utils plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
