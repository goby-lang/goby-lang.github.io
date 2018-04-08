---
id: block
title: Block
---

## Block

```ruby
def foo(ary: [1, 2, 3])
  ary.each do |s|      # start of the block
    puts s
  end                  # end of the block
end
```

Sentences that are surrounded by `do` and `end` forms a block. Block can take one or more "block variables" surrounded by `| |`.
(`{ }` cannot be used for forming a block.)

### `Block` class

A special class to create a block object (anonymous function). You can perform `Block.new`.

```ruby
b = Block.new do
  100
end

b.call  #=> 100

```

Then you can perform `#call` to execute the block in the block object.

```ruby
def baz
  1000
end

class Foo
  def exec_block(block)
  block.call
  end

  def baz
    100
  end
end

b = Block.new do
  baz
end

f = Foo.new
f.exec_block(b)
```

With `Block` class, you can explicitly pass a block (or more blocks) to methods.

```ruby
b = Block.new do |arg|
  arg + 1000
end

b.call(49) #=> 1049

```

`#call` can take arguments that corresponds to the block parameters (`|arg|` above).

### Special `get_block` keyword

```ruby
def bar(block)
  # runs the block object and the block arg simultaneously
  block.call + get_block.call
end

def foo
  bar(get_block) do # passes two blocks to `bar`
    20
  end
end

foo do
  10
end
```

`get_block` is Goby's original: not a method but a **keyword** to retrive a given block argument as a block object. By this, you can pass around or `call` the given block arguments as block objects.

### `yield`

```ruby
def foo
  yield(10)  # executes the block given
end

foo do |ten|
  ten + 20
end
```

`yield` invokes the given block argument. Not for block object.

## Closure

```ruby
count = 0          # the declaration is used
b = Block.new do
  count += 1       # the block looks preserving the `count`
end

class Foo
  def bar(blk)
    count = 9      # (does not affect)
    puts blk.call  # local variable is resolved to the one above
  end
end

Foo.new.bar b  #=> 1
Foo.new.bar b  #=> 2
Foo.new.bar b  #=> 3

```

When local variables are declared and then forms a block (such as `Block.new`), the local variable within the block behaves as if they are "preserved" within the block when executed like instance variables of the block object.

Actually, when the block is executed, the local variables are simply resolved to the ones in the original environment that the block was formed. In other words, such pre-declared local variables within the block has a **lexical scope** (performs static resolutions), and the behavior is called a **closure**.