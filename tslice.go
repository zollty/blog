package main

import "fmt"

func main() {
    s0 := make([]int, 10)

    for i := 0; i < 10; i++ {
        s0[i] = i
    }
    fmt.Println(s0)

    s1 := append(s0, 2)
    fmt.Println(s1)

    s2 := append(s1, 3, 5, 7)
    fmt.Println(s2)

    s3 := append(s2, s0...)
    fmt.Println(s3)
}
