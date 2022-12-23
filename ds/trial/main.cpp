#include <iostream>

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


