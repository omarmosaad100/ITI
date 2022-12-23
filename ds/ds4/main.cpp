#include <iostream>

using namespace std;


typedef struct Employee
{
    int ID;
    int Age;
    string Name;
}Employee;

typedef struct Node
{
    Node *pnext;
    Node *pprev;
    Employee data;
}Node;

Node *plast;
Node *pstart;

Node* new_node(Employee e)
{
    Node *newNode = new Node();
    newNode->data = e;
    newNode->pnext = NULL;
    newNode->pprev = NULL;
    return newNode;
}

class Stack
{
   int Size;
public:
    Stack()
    {
        Size = 0;
    }

    bool isEmpty()
    {
        if (pstart == NULL)
            return true;
    }

    Employee deQ()
    {
        if(!isEmpty())
        {
            Node* pDelete = pstart;

            if (pstart == plast)
                pstart = plast = NULL;

            else
            {
                Employee r = pDelete -> data;
                pstart = pstart -> pnext;
                pstart -> pprev = NULL;
                delete pDelete;
                return r;
            }
        }
        cout<<"Stack is already Empty!"<<endl;
    }

    void enQ(Employee e)
    {
        Node* newNode = new_node(e);
        if (plast == NULL)
        {
            pstart = plast = newNode;
            Size++;
        }
        else
        {
            plast -> pnext = newNode;
            newNode -> pprev = plast;
            plast = newNode;
            Size++;
        }

    }

    Employee peek()
    {
        if(!isEmpty())
        return plast->data;
    }

    int numberOfElements()
    {
        return Size;
    }
};

int main()
{
    Employee e1, e2, e3;

    e1.ID = 1;
    e1.Age = 24;
    e1.Name = "Joey";


    e2.ID = 2;
    e2.Age = 26;
    e2.Name = "Amr";

    e3.ID = 3;
    e3.Age = 22;
    e3.Name = "Omar";

    Stack s;
    s.enQ(e1);
    s.enQ(e2);
    s.enQ(e3);
    cout<<s.deQ().Name<<endl;
    cout<<s.peek().Name<<endl;
    cout<<s.peek().Name<<endl;
    cout<<s.deQ().Name<<endl;

    return 0;
}
