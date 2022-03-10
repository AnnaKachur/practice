#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)
{
    // generate a random number from 0 to 36
    // print the number

    srand(time(NULL));

    int roulette_number = rand() % 37;

    printf("Roulette number is %d\n" , roulette_number);
}