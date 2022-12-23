#include <iostream>

using namespace std;
int Size = 5;
int arr[] = {4, 2, 5, 1, 3};

void Swap (int &a, int &b);
void BubbleSort (int* arr, int Size);

int main()
{
    cout << arr[0] << arr[1] << arr[2] << arr[3] << arr[4] << endl;

    BubbleSort(arr, Size);

    cout << arr[0] << arr[1] << arr[2] << arr[3] << arr[4];
}

void BubbleSort (int* arr, int Size)
{
    bool sorted = false;

    for (int i = 0; (i < Size - 1) && (!sorted); i++)
    {
        sorted = true;
        for (int j = 0; j < Size - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
                Swap(arr[j], arr[j+1]);
                sorted = false;
        }
    }
}

void Swap (int &a, int &b)
{
    int tmp = a;
    a = b;
    b = tmp;
}
