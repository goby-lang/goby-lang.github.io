---
id: installation
title: Installation
---

Confirmed Goby runs on Mac OS and Linux for now. Try Goby on Windows and let us know the result.

## Via Homebrew (binary installation for Mac OS)

**Note: Please check the [latest release](https://github.com/goby-lang/goby/releases) before installing Goby via Homebrew**

```
brew tap goby-lang/goby
brew install goby
```

In the case, `$GOBY_ROOT` is automatically configured.

## From Source

Try this if you'd like to contribute Goby! Skip 1 if you already have Golang in your environment.

1. Prepare Golang environment
    - Install Golang >= 1.9
    - Make sure `$GOPATH` in your shell's config file( like .bashrc) is correct
    - Add you `$GOPATH/bin` to `$PATH`
2. Run `go get github.com/goby-lang/goby`
3. Set the Goby project's exact root path `$GOBY_ROOT` manually, which should be:

```
$GOPATH/src/github.com/goby-lang/goby
```

## Installation on a Linux system

In order to install Go, Goby and PostgreSQL on a Linux system, see the [wiki page](https://github.com/goby-lang/goby/wiki/Setup-Go,-Goby-and-PostgreSQL-on-a-Linux-system).

### Verifying Goby installation

1. Run `goby -v` to see the version.
2. Run `goby -i` to launch igb REPL.
3. Type `require "uri"` in igb.

FYI: You can just run `brew test goby` to check Homebrew installation.

**If you have any issue installing Goby, please let us know via [Github issues](https://github.com/goby-lang/goby/issues)**

### Using Docker

Goby has official [docker image](https://hub.docker.com/r/gobylang/goby/) as well. You can try the [Plugin System](https://goby-lang.gitbooks.io/goby/content/plugin-system.html) using docker.

