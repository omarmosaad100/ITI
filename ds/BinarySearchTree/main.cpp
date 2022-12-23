#include <iostream>
#include <cstdlib>

using namespace std;



typedef struct Node
{
    Node *left;
    Node *right;
    int Key;
}Node;

Node* newNode (int Key);

Node *pTree = NULL;
void insertNode (Node* &pTree, int Key);
Node* insertleaf (Node* &pTree, Node* pleaf, int Key);
int countNodes (Node* pRoot);
void Traverse(Node* pTree);
void Delete (Node* &pRoot, int Key);
void DeleteNode (Node* &pRoot);
int getMax (Node* pRoot);
Node* SearchBTree(Node* pRoot, int Key);
int* tree_to_array(Node *pTree, int *arr, int start);
void delete_tree(Node *node);
bool is_balanced(Node *pTree);
int tree_height(Node *pTree);
Node *balance_tree(int *arr, int start, int last);


int main()
{
    insertNode(pTree, 5);
    insertNode(pTree, 6);
    insertNode(pTree, 4);
    //insertleaf (pTree, pTree, 5);
    //cout << pTree -> Key <<endl;
    Traverse(pTree);
    cout << "Number of Nodes are: " << countNodes(pTree) <<endl;
}


Node* newNode (int Key)
{
    Node* pnew = new Node;

    pnew -> right = pnew -> left = NULL;

    pnew -> Key = Key;

    return pnew;
}

Node* insertleaf (Node* &pTree, Node* pleaf, int Key)
{
    if (pleaf == NULL)
        if (pTree == NULL)
            pTree = newNode(Key);
        else if (Key == pTree -> Key)
            cout << "Key already inserted" <<endl;
        else
            if (Key < pTree -> Key)
                pTree -> left = newNode(Key);
            else
                pTree -> right = newNode(Key);
    else if (Key == pTree -> Key)
        cout << "Key already inserted" <<endl;
    else if (Key < pTree -> Key)
        return insertleaf(pleaf, pleaf -> left, Key);
    else
        return insertleaf(pleaf, pleaf -> right, Key);

    if (!is_balanced(pTree))
    {
        Node *temp = pTree;
        pTree = balance_tree(tree_to_array(pTree, new int[countNodes(pTree)], 0), 0, countNodes(pTree) - 1);
        delete_tree(temp);
    }
}

void insertNode (Node* &pTree, int Key)
{
    if (pTree == NULL)
        pTree = newNode(Key);
    else if (Key == pTree -> Key)
        cout << "Data already inserted" <<endl;
    else if (Key > pTree -> Key)
        insertNode(pTree -> right, Key);
    else
        insertNode(pTree -> left, Key);

    if (!is_balanced(pTree))
    {
        Node *temp = pTree;
        pTree = balance_tree(tree_to_array(pTree, new int[countNodes(pTree)], 0), 0, countNodes(pTree) - 1);
        delete_tree(temp);
    }
}

int countNodes (Node* pRoot)
{
    if (pRoot != NULL)
        return countNodes(pRoot -> left) + 1 + countNodes(pRoot -> right);
    return 0;
}

void Traverse(Node* pTree)
{
    if (pTree != NULL)
    {
        Traverse(pTree -> left);
        cout << pTree -> Key <<endl;
        Traverse(pTree -> right);
    }
}

void Delete (Node* &pRoot, int Key)
{
    if (Key < pRoot -> Key)
        Delete(pRoot -> left, Key);
    else if (Key > pRoot -> Key)
        Delete(pRoot -> right, Key);
    else
        DeleteNode(pRoot);
}

void DeleteNode (Node* &pRoot)
{
    Node* pDelete = pRoot;

    if (pRoot -> left == NULL)
        pRoot = pRoot -> left;
    else if (pRoot -> right == NULL)
        pRoot = pRoot -> right;
    else
    {
        int tmpKey = getMax(pRoot->left);
        pRoot -> Key = tmpKey;
        Delete (pRoot -> left, tmpKey);
    }

    if (!is_balanced(pTree))
    {
        Node *temp = pTree;
        pTree = balance_tree(tree_to_array(pTree, new int[countNodes(pTree)], 0), 0, countNodes(pTree) - 1);
        delete_tree(temp);
    }
}

int getMax (Node* pRoot)
{
    while (pRoot -> right != NULL)
        pRoot = pRoot -> right;

    return pRoot -> Key;
}


Node* SearchBTree(Node* pRoot, int Key)
{
    if (pRoot != NULL)
    {
        if (pRoot -> Key == Key)
        {
            return pRoot;
        }
        else if (pRoot -> Key < Key)
            return SearchBTree(pRoot -> left, Key);
        else
            return SearchBTree(pRoot -> right, Key);
    }
}


int* tree_to_array(Node *pTree, int *arr, int start)
{
    int index = start;
    if (pTree == NULL)
        return arr;

    tree_to_array(pTree->left, arr, index);
    arr[index++] = pTree->Key;
    tree_to_array(pTree->right, arr, index);
}

void delete_tree(Node *node)
{
    if (node == NULL) return;

    delete_tree(node->left);
    delete_tree(node->right);
    delete node;
}

bool is_balanced(Node *pTree)
{
    if (pTree == NULL)
        return true;
    else if (!is_balanced(pTree->left) || !is_balanced(pTree->right))
        return false;

    int leftHeight = tree_height(pTree->left);
    int rightHeight = tree_height(pTree->right);

    if (abs(leftHeight - rightHeight) <= 1)
        return true;
    else
        return false;

}

int tree_height(Node *pTree)
{
    if (pTree == NULL)
        return 0;

    int leftHeight = tree_height(pTree->left);
    int rightHeight = tree_height(pTree->right);
    return max(leftHeight, rightHeight) + 1;
}

Node *balance_tree(int *arr, int start, int last)
{
    if (start > last)
        return NULL;

    int middle = (start + last) / 2;
    Node *pTree = newNode(arr[middle]);

    pTree->left = balance_tree(arr, start, middle - 1);
    pTree->right = balance_tree(arr, middle + 1, last);

    return pTree;
}



