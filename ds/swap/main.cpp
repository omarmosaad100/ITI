#include <iostream>

using namespace std;

void Swap (int &a, int &b);

int main()
{
    int x = 10;
    int c = 3;
    Swap(x, c);

    cout << x <<endl;
}

void Swap (int &a, int &b)
{
    int tmp = a;
    a = b;
    b = tmp;
}
