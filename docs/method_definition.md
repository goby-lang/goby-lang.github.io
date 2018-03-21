---
id: method-definition
title: Method Definition
---

### Method definition and calling

```ruby
def foo_bar(baz)
  puts baz
end

foo_bar "Hi, Goby!" #=> Hi, Goby!
```

Method name should be "`[a-z][a-z0-9_]+\??`" (snake_case). You can omit the trailing "`()`" only if no parameters are taken.

```ruby
def updated?
  true
end
```

You can add a trailing "`?`"" for indicating a "predicate method". (using "`!`" is **unsupported**)

You should always use the trailing "`?`" for predicate methods.

### Parameters

```ruby
def foo(normal, default="value", hash={}, ary=[], keyword:, keyword_default:"key", *sprat)
end
```

Keep parameters **at most around 2** as far as possible to keep interfaces simple. The order of parameters in method definition is restricted as follows:

1. **normal parameters** (like `a`)
2. **normal parameters with default value** (like `a=1`)
3. **optional parameters** (array or hash, like `ary=[]` or `hs={}`)
4. **keyword parameters** (like `kwd:`) 
5. **keyword parameters with default value** (like `kwd: 1` or `ary: [1,2,3]` or `hsh: {key: "value"}`)
6. **splat parameters** (like `*sp`)

Or you will receive an error.

### Return value

```ruby
PI = 3.14
def area(radius)
  radius * PI      # returns the result of evaluation
end

area 6             #=> 18.84
```

A method returns an object from the last-evaluated expression.

```ruby
def area(radius)
  return radius * PI  # not recommended
end
```

`return` keyword is supported, but in most cases it's redundant (methods would return the last value by default).

```ruby
def my_array
  [1, 2, 3]
end

my_array   #=> [1, 2, 3]
```

If you want to return multiple values, you should explicitly use an array literal `[ ]`. Returning unbracketed values like `1, 2, 3` is unsupported.

### Instance method

```ruby
module Foo
  def bar
    puts "bar"
  end
  
  def baz(count, email: "goby@example.com")
    count.times do
      puts email
    end
  end
end

foo = Foo.new
foo.bar     #=> bar
foo.baz(3)  #↓
goby@example.com
goby@example.com
goby@example.com
```

You can define "public" instance methods by using `def` keyword within the definition of modules or classes.

You can create an instance the defined modules or classes by using `new` method, like `Foo.new`.

You can declare one or more parameters on the method definition by using a trailing `()`. You should always omit `()` if the method definition does not have any parameters.

### Singleton method (class method/module method)

```ruby
str = "Goby"
def str.foo     #1 singleton method on the object
  self * 2
end

str.foo
#=> GobyGoby
```

You can define **singleton methods** by using `def` keyword and `object.methodname` notation. `self` is to refer to the object itself within the object.

A singleton method is specific for the object that it is defined on.

```ruby
module Foo
  def self.bar  #2 singleton method with `self.`
    92
  end
  
  def Foo.bar   #3 singleton method with a class name (not recommended)
end
```

By using the notation above, you can define singleton methods on modules or classes. A singleton methods on a module is a **module method**, and a singleton methods on a class is a **class method**, but they are essentially a **singleton method**.

Both `self.` and `Classname.` can be used, but you should use `self.` notation within the module/class definitions.

```ruby
module Foo end

def Foo.bar      #4 singleton methods outside the Foo
  9999
end

Foo.bar #=> 9999
```

You can define singleton methods by using `def ClassName.method_name` or `def ModuleName.method_name`, outside the module/class definition.

### Attribute accessor method

```ruby
class Foo
  attr_accessor :bar, :baz

  def initialize
    @bar = 42
    @baz = 99
  end
end

foo = Foo.new

foo.bar = 77
foo.baz = 88
```

You can use the following shorthands to declare attribute accessor methods in classes/modules:

* `attr_accessor`
* `attr_reader`
* `attr_writer`

**Note**: `attr_accessor` and `attr_writer` implicitly declares instance variables with the same name when assignment is occurred, but `attr_reader` is not.

```ruby
class Foo
  attr_accessor :foo   # creates `@foo` when assigning to `Foo.foo`
  attr_writer :bar     # creates `@bar` when assinging to `Foo.bar`
  attr_reader :baz     # does not automatically create any instance variables
end
```

### Showing methods

```ruby
String.methods
#» ["fmt", "new", "<", "<=", ">", ">=", "ancestors", "attr_accessor", "attr_reader", "attr_writer", "extend", "include", "name", "superclass", "!", "!=", "==", "block_given?", "class", "exit", "instance_eval", "instance_variable_get", "instance_variable_set", "is_a?", "methods", "nil?", "object_id", "puts", "raise", "require", "require_relative", "send", "singleton_class", "sleep", "thread", "to_s"]

» "string".methods
#» ["!=", "*", "+", "<", "<=>", "==", "=~", ">", "[]", "[]=", "capitalize", "chop", "concat", "count", "delete", "downcase", "each_byte", "each_char", "each_line", "empty?", "end_with?", "eql?", "fmt", "include?", "insert", "length", "ljust", "match", "new", "replace", "replace_once", "reverse", "rjust", "size", "slice", "split", "start_with", "strip", "to_a", "to_bytes", "to_d", "to_f", "to_i", "to_s", "upcase", "!", "block_given?", "class", "exit", "instance_eval", "instance_variable_get", "instance_variable_set", "is_a?", "methods", "nil?", "object_id", "puts", "raise", "require", "require_relative", "send", "singleton_class", "sleep", "thread"]
```

You can call `#methods` against on objects (classes and instances) to show methods.

## Features to Implemented

### Private method (to be implemented)

```ruby
class Foo
  def bar
    42
  end
  
  def _baz  # private method
    99
  end
end
```

Methods that starts with "`_`", like "`_baz`", declares that they are "private". You cannot call them from outside the class/module.

### FYI: Private attribute methods (to be implemented)

```ruby
class Foo
  attr_accessor :_bar, :_baz

  def initialize
    @bar = 42
    @baz = 99
  end
  
  def boo
    _bar = _bar * 2
    _baz = _baz + 2
    puts _bar
    puts _baz
  end
end

foo = Foo.new

foo.boo
#=> 84
#=> 101

foo.bar # Error
foo.baz # Error
```

You can also make the attribute accessor methods private with `_` for private use.

