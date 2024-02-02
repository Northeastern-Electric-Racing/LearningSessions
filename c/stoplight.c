#include <stdio.h>

typedef enum {RED, YELLOW, GREEN} light;

int main()
{

    // put your code here!
    light lightState = GREEN;

    for(int i = 0; i < 10; i++)
    {
        switch(lightState)
        {
            case RED:
                printf("Red\n");
                lightState = GREEN;
                sleep(5);
                break;
            case YELLOW:
                printf("Yellow\n");
                sleep(1);
                lightState = RED;
                break;
            case GREEN:
                printf("Green\n");
                sleep(5);
                lightState = YELLOW;
                break;
        }
    }

    printf("Bruh\n");

    return 0;
}