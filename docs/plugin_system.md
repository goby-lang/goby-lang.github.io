---
id: plugin-system
title: Plugin System
---
## Introduction
`Plugin System` is one of the Goby's best feature. It allows you to [load and access Go files during runtime](#use-existed-go-file-with-use-method-). Or you can even use it to [compose several Go packages into a custom plugin](#generate-a-plugin-dynamically-with-generate-method-) on the fly, and use it very easily!

## Usages
There are two ways to use the Plugin class:

### Use existed Go file with .use method
Assume we already have a plugin.go file

```go
package main

type Bar struct {
    name string
}

func NewBar(name string) (*Bar, error) {
    return &Bar{name: name}, nil
}

func (b *Bar) Name() string {
    return b.name
}

func main() {}
```

And we can call the Bar method in Goby like:

```ruby
require "plugin"

p = Plugin.use "path_to_plugin/plugin.go"
# go_func is the method we use to calling Go's function
# First parameter is the method name, the rest are arguments for that method.
b, err = p.go_func("NewBar", "Foo")
# b is an instance of GoObject and holds *Bar
name = b.go_func("Name")
puts(name) #=> "Foo"
```

The following diagram illustrate how Plugin#use worked. The Plugin#use method will compile plugin.go with -buildmode=plugin flag, which will generate a .so file. Then Goby will open that file with Go's plugin package and create a Plugin object.

Note that the go file needs to be main package. And all the methods, types or variables that will be called from Goby need to be exported.

![](/img/plugin-use.png)

### Generate a plugin dynamically with .generate method

This usage is very powerful, because you can generate a plugin without writing/having any Go files. Furthermore, you can use import other Go's library into your plugin on the fly.

Here's an example: We want to use Go's built in sql package with postgresql's adapter package pq. And we want to connect and ping the database see if it's alive.

First, we generate a plugin called db (you can give your plugin any name)

```ruby
require "plugin"

p = Plugin.generate("db")
```

Then we need to import the `sql` and `pq` Go package we need with `#import_pkg` method. The first argument is the package name (see [here](https://golang.org/ref/spec#Import_declarations) for how `import` works in Go). And the second argument is the package path.

```ruby
require "plugin"

p = Plugin.generate("db") do |p|
  p.import_pkg("", "database/sql")
  p.import_pkg("_", "github.com/lib/pq")
end
```

Finally, we need to specify what package level methods, types or variables we will use with `#link_function` method (I might change this to link later).

```ruby
require "plugin"

p = Plugin.generate("db") do |p|
  p.import_pkg("", "database/sql")
  p.import_pkg("_", "github.com/lib/pq")
  p.link_function("sql", "Open")
end
```

And you can get a `Plugin` object presents the plugin you generated. You can also use `#go_func` to calling methods on it:

```ruby
require "plugin"

p = Plugin.generate("db") do |p|
  p.import_pkg("", "database/sql")
  p.import_pkg("_", "github.com/lib/pq")
  p.link_function("sql", "Open")
end

conn, err = p.go_func("Open", "postgres", "user=postgres dbname=goby_test sslmode=disable")
err = conn.go_func("Ping") # Go's sql.Ping method returns error if ping failed
if err
  puts err
end
```

Similar to `Plugin#use` method, the following diagram illustrates how `Plugin#generate` method works. It actually generates a package called `db.go` according to value passed into the `#generate` method. Next, it will include the Go packages, linked the package level methods.

The rest of the details are the same as the `Plugin#use` method, it compiles the auto-generated Go package, generates the `.so` file which Goby will open it and then create a `Plugin` object and assign to the `p` variable according to the diagram.

![](/img/plugin-generate.png)

## Notes
- This feature can only run on `linux` and `macOS` for now
- You need to [setup Go's environment](https://golang.org/doc/install) if you want to import Go packages in your plugin. Also, those packages need to be downloaded via `go get` command. For these reasons, I still recommend using Docker when playing with this feature so you can setup environment via Dockerfile.

- The plugin binary generation could take a few seconds, so store the `Plugin` object in a constant might be a good practice.

- I'll develop other tool to take care the Go's environment setup and package installation, so users can just focus on writing Goby programs.

- Both `Plugin#use` and `Plugin#generate` are not thread safe, so please don't use them on different thread at the same time.
