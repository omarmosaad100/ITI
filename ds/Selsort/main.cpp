#include <iostream>

using namespace std;

int IndexOfMinValue (int* arr, int start, int End);
void SelectionSort (int* arr, int Size);
void Swap (int &a, int &b);
int Size = 5;
int arr[] = {5, 4, 3, 2, 1};

int main()
{

    cout << arr[0] << arr[1] << arr[2] << arr[3] << arr[4] << endl;

    SelectionSort(arr, Size);


    cout << arr[0] << arr[1] << arr[2] << arr[3] << arr[4];
}

int IndexOfMinValue (int* arr, int start, int End)
{
    int MinIndex = start;

    for (int i = start + 1; i < End; i++)
        if (arr[i] < arr[MinIndex])
            MinIndex = i;
    return MinIndex;
}

void SelectionSort (int* arr, int Size)
{
    int MinIndex;

    for (int i = 0; i < Size; i++)
    {
        MinIndex = IndexOfMinValue(arr, i, Size);
        Swap(arr[i], arr[MinIndex]);
    }
}

void Swap (int &a, int &b)
{
    int tmp = a;
    a = b;
    b = tmp;
}
