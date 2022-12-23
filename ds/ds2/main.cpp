#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include <string.h>
#include <conio.h>
#include <iostream>

#define NormalPen 0x0F
#define HighLightPen 0X1A
#define Enter 0x0D
#define ESC 27
#define Size 10
#define options 7

using namespace std;



class Employee
{
    public:
        int ID;
        int Age;
        char Name[10];
};

class Node
{
        Node *pnext;
        Node *pprev;
        Employee data;
        Node *plast;
        Node *pstart;
public:

        Node ()
        {
            plast = pstart = NULL;
        }
    void add_node();
    void display_all();
    Node* searchList(int id);
    void display();
    void delete_all();
    void delete_by_id();
    Node* new_node(Employee e);
};

Node* Node::new_node(Employee e)
{
    Node *newNode = new Node();
    newNode->data = e;
    newNode->pnext = NULL;
    newNode->pprev = NULL;
    return newNode;

}

/// Global Vars



void gotoxy( int column, int line )
{
    COORD coord;
    coord.X = column;
    coord.Y = line;
    SetConsoleCursorPosition(
        GetStdHandle( STD_OUTPUT_HANDLE ),
        coord
    );
}

void textattr(int i)
{
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);
}


int main()
{
    Node n;
    char menu[options][20] = {"Add Node","Display", "Display All", "Delete All","Delete Node","Exit"};
    int i, current = 0, ExitFlag = 0;
    char ch;

    do
    {
        textattr(NormalPen);
        system("cls");

        for(i = 0 ; i<options; i++)
        {
            if(current == i)
                textattr(HighLightPen);
            else textattr(NormalPen);

            gotoxy(50,5+(3*i));
            printf("%s",menu[i]);
        }

        ch = _getch();

        switch (ch)
        {
        case Enter:
            switch (current)
            {
            case 0:///add new node
                n.add_node();
                break;
            case 1:///display all
                n.display();
                break;
            case 2:///display all
                n.display_all();
                break;
            case 3:///delete all
                n.delete_all();
                break;
            case 4:///delete node by id
                n.delete_by_id();
                break;
            case 5:///exit
                ExitFlag = 1;
                break;
            }
            break;
        case ESC:
            ExitFlag = 1;
            break;
        case -32:
            ch = _getch();
            switch (ch)
            {
            case 72:///up
                current--;
                if(current<0) current = options-1;
                break;
            case 80:///down
                current++;
                if(current>options-1) current = 0;
                break;
            case 71:///home
                current = 0;
                break;
            case 79:
                current = 6;
                break;
            }
        }
    }
    while(!ExitFlag==1);
    return 0;
}

void Node::add_node()
{
    system("cls");
    Employee e;
    gotoxy(50,0);
    printf("Employee Data");

    ///OutPuts
    gotoxy(5,5);
    printf("ID:");

    gotoxy(5,10);
    printf("Name:");

    gotoxy(5,15);
    printf("Age:");

    ///Inputs
    gotoxy(15,5);
    cin>>e.ID;

    gotoxy(15,10);
    cin>>e.Name;

    gotoxy(15,15);
    cin>>e.Age;

    Node *newNode = new_node(e);

    if(pstart == NULL)
    {
        pstart = plast = newNode;
    }
    else
    {
        plast -> pnext = newNode;
        newNode -> pprev = plast;
        plast = newNode;
    }

}
void Node::display_all()
{
    system("cls");
    Node* pDisplay = pstart;

    while (pDisplay != NULL)
    {
        cout << "ID: " << pDisplay -> data.ID << " Age: "  << pDisplay -> data.Age << " Name: " << pDisplay -> data.Name << endl;

        pDisplay = pDisplay -> pnext;
    }
    getch();
}



Node* Node::searchList(int id)
{

    Node* psearch = pstart;

    while (psearch != NULL)
    {
        if (psearch -> data.ID == id)
        {
            break;
        }
        psearch = psearch -> pnext;
    }

    return psearch;
}

void Node::display ()
{
    int id = 0;
    system("cls");
    cout << "ID: ";
    cin >> id;
    system("cls");
    Node* pDisplay = searchList(id);
    if (pDisplay == NULL)
    {
        cout << "Not Found" <<endl;
        getch();
    }
    else
    {
        cout << "ID: " << pDisplay -> data.ID << " Name: " << pDisplay -> data.Name << " Age: " << pDisplay -> data.Age <<endl;
    }
    getch();

}


void Node::delete_all()
{
    Node *ptmp;

    while (pstart != NULL)
    {
        ptmp = pstart;
        pstart = pstart -> pnext;
        delete ptmp;
    }
    plast = NULL;
}


void Node::delete_by_id()
{
    int id = 0;
    system("cls");
    cout << "ID: ";
    cin >> id;

    Node* pDelete = searchList(id);

    if (pDelete == NULL)
    {
        cout << "Not Found" << endl;
        getch();
    }
    else
        if (pstart == plast)
            pstart = plast = NULL;

        else if (pstart == pDelete)
        {
            pstart = pstart -> pnext;
            pstart -> pprev = NULL;
        }
        else if (plast == pDelete)
        {
            plast = plast -> pprev;
            plast -> pnext = NULL;
        }
        else
        {
            pDelete -> pprev -> pnext = pDelete -> pnext;
            pDelete -> pnext -> pprev = pDelete -> pprev;
        }

        delete pDelete;



}
