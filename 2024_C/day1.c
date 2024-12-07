#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "assertions.c"
#include "day1_input.c"

int get_distance(int a, int b)
{
    return abs(a - b);
}

int comp(const void *a, const void *b)
{
    return (*(int *)a - *(int *)b);
}

int get_total_distance(int isExample)
{
    int n;
    if (isExample == 0)
    {
        n = sizeof(example_left) / sizeof(example_left[0]);
    }
    else
    {
        n = sizeof(real_left) / sizeof(real_left[0]);
    }
    int left_copy[n];
    int right_copy[n];

    if (isExample == 0)
    {
        memcpy(left_copy, example_left, n * sizeof(example_left[0]));
        memcpy(right_copy, example_right, n * sizeof(example_right[0]));
    }
    else
    {
        memcpy(left_copy, real_left, n * sizeof(real_left[0]));
        memcpy(right_copy, real_right, n * sizeof(real_right[0]));
    }

    qsort(left_copy, n, sizeof(left_copy[0]), comp);
    qsort(right_copy, n, sizeof(right_copy[0]), comp);

    int total = 0;
    for (int i = 0; i < n; i++)
    {
        total += get_distance(left_copy[i], right_copy[i]);
    }
    return total;
}

void test_get_total_distance()
{
    assert_equal(11, get_total_distance(0));
}

void test_get_distance(void)
{
    assert_equal(1, get_distance(5, 4));
    assert_equal(1, get_distance(4, 5));
    assert_equal(0, get_distance(5, 5));
}

int main()
{
    printf("Part 1 setup ----------\n");
    printf("Test Distance:\n");
    test_get_distance();
    test_get_total_distance();
    printf("Part 1 real data set ----------\n");
    int total = get_total_distance(1);
    printf("Part 1 = %d", total);
    return 0;
}