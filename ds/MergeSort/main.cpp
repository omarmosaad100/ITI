#include <iostream>

using namespace std;

void mergeSort(int* arr, int First, int Last);
void Merge(int* arr, int LFirst, int LLast, int RFirst, int RLast);
int arr[] = {4, 2, 5, 1, 3};

int main()
{
    cout << arr[0] << arr[1] << arr[2] << arr[3] << arr[4] << endl;

    mergeSort(arr, 0, 4);

    cout << arr[0] << arr[1] << arr[2] << arr[3] << arr[4];
}


void mergeSort(int* arr, int First, int Last)
{
    if (First < Last)
    {
        int Middle = (First + Last) / 2;
        mergeSort(arr, First, Middle);
        mergeSort(arr, Middle+1, Last);
        Merge(arr, First, Middle, Middle+1, Last);
    }
}

void Merge(int* arr, int LFirst, int LLast, int RFirst, int RLast)
{
    int* tmparr = new int[sizeof(arr)];
    int Index = LFirst;
    int SaveFirst = LFirst;

    while ((LFirst <= LLast) && (RFirst <= RLast))
    {
        if (arr[LFirst] < arr[RFirst])
            tmparr[Index++] = arr[LFirst++];
        else
            tmparr[Index++] = arr[RFirst++];
    }

    while(LFirst <= LLast)
        tmparr[Index++] = arr[LFirst++];

    while(RFirst <= RLast)
        tmparr[Index++] = arr[RFirst++];

    for (int i = SaveFirst; i <= RLast; i++)
        arr[i] = tmparr[i];
}

