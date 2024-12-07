const int true = 1;
const int false = 0;

void assert_equal(int expected, int actual)
{
    int equal = expected == actual;
    if (equal == true)
    {
        printf("Pass\n");
    }
    else
    {
        printf("Failed: %d != %d\n", expected, actual);
    }
}
