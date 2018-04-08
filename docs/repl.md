---
id: repl
title: REPL
sidebar_label: REPL
---

You can run Goby program interactively via the Goby's REPL (igb)

## 1. Basic operations

1. `goby -i` to start REPL.

* startup massage with version no. and a fortune is shown randomly.
* green prompt `»` are shown.

```ruby
Goby 0.0.9 😽 😉 🤓
»
```

2. type `help` and hit return to show the following help messages:

```ruby
» help
commands:
   help
   reset
   exit
»
```

The commands above can be auto-completed by hitting Tab key.
See the shortcuts below.

3. type `reset` and Return key to reset REPL

```ruby
Restarting Igb...
Goby 0.0.9 😎 😛 😪
»
```

4. type `exit` and Return key to exit REPL

```ruby
» exit
Bye!
```

You can exit by `Ctrl`+`C` on green `»`.

5. You can suppress echo back by adding a trailing `;`

```ruby
» 5*7;
»
```

6. When entering a block, the heading changes to red `¤`. When finishing a block, the heading gets back to green `»` and then the outputs are shown on the yellow heading `#»`.

```ruby
» module MyName
¤   attr_reader :name
¤
¤   def initialize
¤     @name = self.class.to_s
¤   end
» end
#» MyName

```

You can cancel entering the current block by `Ctrl`+`C` on red `¤`.

```ruby
» module MyName
¤    -- block cleared
»
```

7. You can copy the code on REPL with heading `»` or `¤` and paste it to REPL again. The redundant headings are automatically removed.

```ruby
» module MyName
¤   attr_reader :name
¤
¤   def initialize
¤     @name = self.class.to_s
¤   end
» end

# copying the codes with headings above and pasting to REPL removes headings↓

» module MyName
¤   attr_reader :name
¤
¤   def initialize
¤     @name = self.class.to_s
¤   end
» end
```

## Shortcuts

(Based on [readline](https://github.com/chzyer/readline/blob/master/doc/shortcut.md))

`Meta`+`B` means press `Esc` and `n` separately.
Users can change that in terminal simulator(i.e. iTerm2) to `Alt`+`B`
Notice: `Meta`+`B` is equals with `Alt`+`B` in windows.

* Shortcut in normal mode

| Shortcut           | Comment                           |
| ------------------ | --------------------------------- |
| `Ctrl`+`A`         | Beginning of line                 |
| `Ctrl`+`B` / `←`   | Backward one character            |
| `Meta`+`B`         | Backward one word                 |
| `Ctrl`+`C`         | Exit (or discard the current block)|
| `Ctrl`+`D`         | Delete one character              |
| `Meta`+`D`         | Delete one word                   |
| `Ctrl`+`E`         | End of line                       |
| `Ctrl`+`F` / `→`   | Forward one character             |
| `Meta`+`F`         | Forward one word                  |
| `Ctrl`+`G`         | Cancel                            |
| `Ctrl`+`H`         | Delete previous character         |
| `Ctrl`+`I` / `Tab` | Command line completion           |
| `Ctrl`+`J`         | Line feed                         |
| `Ctrl`+`K`         | Cut text to the end of line       |
| `Ctrl`+`L`         | Clear screen                      |
| `Ctrl`+`M`         | Same as Enter key                 |
| `Ctrl`+`N` / `↓`   | Next line (in history)            |
| `Ctrl`+`P` / `↑`   | Prev line (in history)            |
| `Ctrl`+`R`         | Search backwards in history       |
| `Ctrl`+`S`         | Search forwards in history        |
| `Ctrl`+`T`         | Transpose characters              |
| `Meta`+`T`         | Transpose words (TODO)            |
| `Ctrl`+`U`         | Cut text to the beginning of line |
| `Ctrl`+`W`         | Cut previous word                 |
| `Backspace`        | Delete previous character         |
| `Meta`+`Backspace` | Cut previous word                 |
| `Enter`            | Line feed                         |


* Shortcut in Search Mode (`Ctrl`+`S` or `Ctrl`+`r` to enter this mode)

| Shortcut                | Comment                                 |
| ----------------------- | --------------------------------------- |
| `Ctrl`+`S`              | Search forwards in history              |
| `Ctrl`+`R`              | Search backwards in history             |
| `Ctrl`+`C` / `Ctrl`+`G` | Exit Search Mode and revert the history |
| `Backspace`             | Delete previous character               |
| Other                   | Exit Search Mode                        |

* Shortcut in Complete Select Mode (double `Tab` to enter this mode)

| Shortcut                | Comment                                  |
| ----------------------- | ---------------------------------------- |
| `Ctrl`+`F`              | Move Forward                             |
| `Ctrl`+`B`              | Move Backward                            |
| `Ctrl`+`N`              | Move to next line                        |
| `Ctrl`+`P`              | Move to previous line                    |
| `Ctrl`+`A`              | Move to the first candicate in current line |
| `Ctrl`+`E`              | Move to the last candicate in current line |
| `Tab` / `Enter`         | Use the word on cursor to complete       |
| `Ctrl`+`C` / `Ctrl`+`G` | Exit Complete Select Mode                |
| Other                   | Exit Complete Select Mode                |