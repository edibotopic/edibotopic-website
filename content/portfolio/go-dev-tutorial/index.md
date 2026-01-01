+++
title = "Developer documentation"
description = "I wrote dev docs for using Go on Ubuntu."
date = 2024-03-20

[extra]
image = "/heygo.png"
publication_name = "Pictured: code snippet from Go guide in Ubuntu for Developers"
publication_url = "documentation.ubuntu.com/ubuntu-for-developers/tutorials/go-use/"
tags = ["Go", "Make", "Dev", "Delve"]
+++

{% tip(title="My role in developing this document") %} 
I wrote this guide from scratch as a contributor to the Ubuntu for Developers documentation.
{% end %}

# Develop with Go on Ubuntu

This tutorial shows how to build, run, and debug Go programs on Ubuntu. For instructions on how to install Go and related tooling, including the Delve debugger, see the dedicated guide on {ref}`install-golang`. This article assumes that tooling suggested in that article has been installed.

## Creating a Go project

1. Create a project directory and change into it:

    ```bash
    $ mkdir heygo && cd heygo
    ```

2. Initialize the project as a Go module. When initializing a module, provide the URL of a repository for hosting the source. For testing purposes, use a generic URL:

    ```bash
    $ go mod init youruser.github.com/heygo
    ```

   The `go mod init` command creates a `go.mod` file in the project root that tracks the version of Go used for the program and any external dependencies.

   {% note(title="Note") %} 
   When you use `go get <package>` to fetch a specific package or `go mod tidy` to scan your code for references to external packages, the `go.mod` file is updated automatically.
   {% end %}

3. Create a `heygo.go` file with the following content:

    ```go,linenos
    package main

    import "fmt"

    func main() {
        fmt.Println("Hey Go!")
    }
    ```

   Here, the name of the package, `main`, is identified, and the `fmt` package is imported from the Go standard library. A `main()` function is defined and a method is called from `fmt` to print a line of text that is passed as an argument.

4. To compile and run your program, use the `go run` command. If you pass the current directory as an argument (`.`), the Go compiler automatically finds the main package and main function during the build:

    ```bash
    $ go run .
    ```

   This outputs:

    ```
    Hey Go!
    ```

5. To build a binary of your program that can run on its own, use the `go build` command:

    ```bash
    $ go build .
    ```

    This creates a new executable file called `heygo` in the current directory.

    Confirm that by listing files in the firectory:

    ```bash
    $ ls
    ```

    This should output:

    ```none
    go.mod  heygo  heygo.go
    ```

    Running the `heygo` binary should print "Hey Go!":


    ```bash
    $ ./heygo
    ```


## Cross-compilation

Go has excellent cross-platform build capabilities.  

By default, running `go build` as shown above builds a binary that can be run on your Ubuntu system. Different target systems can be set for the compiler.

To set the environment for a Windows AMD64 build, first set the `GOOS` and `GOARCH` environment variables by running:

```bash
export GOOS=windows GOARCH=amd64
```

This causes `go build` to create a `heygo.exe` binary that runs on Windows:

```bash
$ go build . && ls
```

```none
go.mod  heygo  heygo.exe  heygo.go
```

### Building for multiple targets

For a full list of targets, run:

```bash
$ go tool dist list
```

For this example, filter the output to Windows and Linux on `amd`:

```bash
$ go tool dist list | grep 'amd' | grep -E 'windows|linux'
```

Create a `Makefile` that automatically sets the build environment and creates executable binaries for both Windows and Linux platforms:

```make,linenos
EXE=heygo
WINDOWS=$(EXE)_win_amd64.exe
LINUX=$(EXE)_linux_amd64

.PHONY: all clean

all: windows linux

windows: $(WINDOWS)
linux: $(LINUX)

$(WINDOWS):
	env GOOS=windows GOARCH=amd64 go build -v -o $(WINDOWS) -ldflags="-s -w" ./heygo.go

$(LINUX):
	env GOOS=linux GOARCH=amd64 go build -v -o $(LINUX) -ldflags="-s -w" ./heygo.go

clean:
	rm -f $(WINDOWS) $(LINUX)
```

Generate the builds and test the Linux build:

```bash
$ make all
$ ./heygo_linux_amd64
```

{% note(title="Note") %} 
If you encounter a `Command 'make' not found` error, install [make](https://www.gnu.org/software/make/) by running:

```bash
$ sudo apt install make -y
```

Then run `make all` again.

{% end %}

## Improving Go code with the help of tooling

Tooling built in Go, including `go vet` and `gofmt`, can be used to debug and format code. Delve is recommended for advanced debugging.


### Go vet and `gofmt`

1. In the same directory where you initialized the module, delete `heygo.go` and replace it with a new file, `heygoV2.go`:

    ```go,linenos
    package main;

    import "fmt";

    func main() {
    fmt.Println(greeting);
    }
    ```

   This code contains a bug and is poorly formatted.

2. Run `go vet` on the file:

    ```bash
    $ go vet heygoV2.go

    vet: ./heygoV2.go:6:14: undefined: greeting
    ```

3. Fix the error by defining the `greeting` variable:

    ```go,linenos 
    package main

    import "fmt";

    var greeting="Hey Go!" // define a greeting

    func main() {
    fmt.Println(greeting);
    }
    ```

4. Running `gofmt` with the `-w` parameter on the file identifies formatting issues and writes necessary changes to the file:

    ```bash
    $ gofmt -w heygoV2.go
    ```

   In this case, unneeded semicolons are removed from the `import` line, and the call to the print method in the `main` function is indented correctly:

    ```diff,linenos
    package main

    - import "fmt";
    + import "fmt"

    var greeting="Hey Go!" // define a greeting

    func main() {
    -fmt.Println(greeting);
    +	fmt.Println(greeting)
    }
    ```


### Debugging with Delve

[Delve](https://github.com/go-delve/delve) is a popular debugger for Go code. Many editors, including VSCode and GoLand, support Delve. In this guide, Delve is used as a command-line debugging tool.

1. Create a file to debug called `main.go` in a new folder where you have initialized a Go module.

   This program is intended to calculate the average value from an array of integers. However, there is a bug in the `for` loop that needs to be investigated:

    ```go,,linenos,hl_lines=7 8 9
    package main

    import "fmt"

    func calculateAverage(numbers []int) float64 {
      sum := 0
      for i := 0; i <= len(numbers); i++ {
        sum += numbers[i]
      }
      return float64(sum) / float64(len(numbers))
    }

    func main() {
      numbers := []int{10, 45, 30}
      average := calculateAverage(numbers)

      fmt.Printf("Average value of numbers is: %.2f\n", average)
    }
    ```

2. Initiate a debugging session with Delve by running `dlv debug` on the file:

    ```bash
    $ dlv debug main.go
    ```

   This puts you in an interactive debugging session. You can interact with the debugger by entering commands after the `(dlv)` prompt:

    ```bash
    Type 'help' for list of commands.
    (dlv)
    ```

   To exit at any time:

    ```bash
    (dlv) exit
    ```

   Delve is used in this example to debug the `calculateAverage` function. You need to be in a debugging session, indicated by the `(dlv)` prompt.

3. Set a break point at line 7:

    ```bash
    (dlv) break main.go:7
    ```

   If the break point is set successfully, you get a message similar to this:

    ```none
    Breakpoint 1 set at 0x49cee9 for main.calculateAverage() ./main.go:7
    ```

4. Continue to the `for` loop:

    ```bash
    (dlv) continue
    ```

   Delve shows visually where you are in the code with `=>`; in this case, at the start of the `for` loop:

    ```bash
    > [Breakpoint 1] main.calculateAverage() ./main.go:7 (hits goroutine(1):1 total:1) (PC: 0x49cee9)
        2:
        3:  import "fmt"
        4:
        5:  func calculateAverage(numbers []int) float64 {
        6:    sum := 0
    =>  7:    for i := 0; i <= len(numbers); i++ {
        8:      sum += numbers[i]
        9:    }
        10:   return float64(sum) / float64(len(numbers))
        11: }
        12:
    ```

5. Check the value of `sum` with the `print` command:

    ```bash
    (dlv) print sum
    ```

   As expected, `sum` has been initialized to `0`.

6. Step through the `for` loop with:

    ```bash
    (dlv) step
    ```

   Again, your position in the code is shown:

    ```bash
    > main.calculateAverage() ./main.go:8 (PC: 0x49cf09)
        3:  import "fmt"
        4:
        5:  func calculateAverage(numbers []int) float64 {
        6:    sum := 0
        7:    for i := 0; i <= len(numbers); i++ {
    =>  8:      sum += numbers[i]
        9:    }
        10:   return float64(sum) / float64(len(numbers))
        11: }
        12:
        13: func main() {
    ```

   {% note(title="Note") %} 
   This output showing the code position is truncated for the remainder of this guide.
   {% end %}

7. Check the value of the index:

    ```bash
    (dlv) print i
    ```

   This outputs `0`.

8. Step again to confirm that the `sum` value has been incremented with the first element in the `numbers` array:

    ```bash
    (dlv) step
    ...
    ...
    (dlv) print sum
    10
    (dlv) print numbers
    []int len: 3, cap: 3, [10,45,30]
    ```

   So far so good; the sum is equal to the first element of the list.

9. Keep stepping through the code until you find the bug:

    ```bash
    (dlv) step
    ...
    ...
    (dlv) print i
    1
    (dlv) step
    ...
    ...
    (dlv) print sum
    55
    (dlv) step
    ...
    ...
    (dlv) print i
    2
    (dlv) step
    ...
    ...
    (dlv) print sum
    85
    (dlv) step
    ...
    ...
    (dlv) print i
    3
    (dlv) step

    ```

   The last step causes a panic:

    ```none
    > [unrecovered-panic] runtime.fatalpanic() /usr/local/go/src/runtime/panic.go:1217 (hits goroutine(1):1 total:1) (PC: 0x43a604)
    Warning: debugging optimized function
      runtime.curg._panic.arg: interface {}(string) "runtime error: index out of range [3] with length 3"
    ```

   The array has a length of `3`, but the index is initialized at `0`. This means the loop attempts to run four times on three values. There is an off-by-one error.

10. Change the code as follows to fix the error:

    ```diff
    func calculateAverage(numbers []int) float64 {
      sum := 0
    -	for i := 0; i <= len(numbers); i++ {
    +	for i := 0; i < len(numbers); i++ {
        sum += numbers[i]
      }
      return float64(sum) / float64(len(numbers))
    }
    ```

A debugger like Delve is very useful to help you find and fix errors in your code.

## Read the official version of this tutorial

This is a reproduction of a tutorial originally published in the official
[Ubuntu for Developers documentation](https://documentation.ubuntu.com/ubuntu-for-developers/tutorials/go-use/),
with slight modifications. For the latest version, always refer to the official documentation.
