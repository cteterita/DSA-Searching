# 1. How many searches?
- Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.

```
1: [3, 5, 6, 8, **11**, 12, 14, 15, 17, 18]   ** indicates midpoint index
2: [3, **5**, 6, 8]
3: [**6**, 8]
4: [**8**]
```

- Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.

```
1: [3, 5, 6, 8, **11**, 12, 14, 15, 17, 18]
2: [12, 14, **15**, 17, 18]
3: [**17**, 18]
4: [**18**]
```