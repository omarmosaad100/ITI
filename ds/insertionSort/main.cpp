#include <iostream>
using namespace std;

void insertionSort(int arr[], int n);
void printArray(int arr[], int n);

int arr[] = {5, 4, 2, 1, 3};
int N = 5;
int main()
{
    cout << arr[0] << arr[1] << arr[2] << arr[3] << arr[4] << endl;

	insertionSort(arr, N);

    cout << arr[0] << arr[1] << arr[2] << arr[3] << arr[4];
}


void insertionSort(int arr[], int n)
{
	int i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}
