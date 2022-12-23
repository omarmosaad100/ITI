/**
 * Copyrights (c) reserved
 * @date 24-November-2022
 * @author Youssef Ehab
*/

#include <iostream>
#include <cstdlib>

#define nullptr NULL

using namespace std;

typedef struct Node {
    int data;
    Node *right;
    Node *left;
} Node;

Node *tRoot;/// Global variable for the tree root

/**
 *
 * @param data value
 * @return node with left and right null ptr and int data
 */
Node *new_node(int data);

/**
 *
 * @param root global tree root
 * @param data value
 * @brief creates a new node @fn new_node and insert it into the right place
 */
void insert_new_node(Node *&root, int data);

int index = 0; /// global variable used in @fn tree_to_array
/**
 *
 * @param root global tree root
 * @param arr pointer to int array with the size of number of nodes retrieved by @fn count_node
 * @param start is the current index of the array to enter the data into
 * @return sorted array with all the values of tree nodes
 * @brief index is global so we access it without initializing inside the function, because the function is being called recursively
 *        so it won't be initialized every time
 */
int *tree_to_array(Node *root, int *arr, int start = 0);

/**
 * @param root global tree root
 * @return number of node in the tree
 */
int count_node(Node *&root);

/**
 * @param root global tree root
 * @brief display all the content of the tree in an ascending order
 */
void display_tree_content(Node *root);

/**
 *
 * @param root global tree root
 * @return true if the tree is balanced else will return false
 */
bool is_balanced(Node *root);

/**
 *
 * @param root global tree root
 * @return the tree height (number of levels)
 */
int tree_height(Node *root);

/**
 *
 * @param arr sorted array of nodes of the tree
 * @param start is the start index of array
 * @param end is the end index of array
 * @return new tree root of the balanced tree
 */
Node *balance_tree(int *arr, int start, int end);

/**
 *
 * @param root global tree root
 * @param data is what you are searching for
 */
Node *search_tree(Node *&root, int data);

/**
 *
 * @param root global tree root
 * @param data is what you want to delete
 * @brief search for the node that carries the data that you want to delete
 */
void delete_node(Node *&root, int data);

/**
 *
 * @param root is the node you want to delete
 * @brief it handles the deletion the right way and also checks if the tree is balanced or not after the deletion and handle it
 */
void delete_helper(Node *&root);

/**
 *
 * @param root node that is being deleted
 * @return the value of the number that comes right before the number you want to delete to take it's place
 */
int get_biggest_small_value(Node *root);

/**
 *
 * @param node root of the tree
 * @brief delete the old tree before balancing from heap memory to prevent memory leakage
 */
void delete_tree(Node *node);

int main() {

    insert_new_node(tRoot, 8);
    insert_new_node(tRoot, 5);
    insert_new_node(tRoot, 33);
    insert_new_node(tRoot, 71);
    insert_new_node(tRoot, 43);
    insert_new_node(tRoot, 11);
    insert_new_node(tRoot, 543);
    insert_new_node(tRoot, 71);
    insert_new_node(tRoot, 391);

    cout << "\n******************* DATA DISPLAYED ********************" << endl;
    display_tree_content(tRoot);

    cout << "\n******************* NUMBER OF NODES ********************" << endl;
    cout << "Number of Nodes is : " << count_node(tRoot) << endl;

    cout << "\n******************* SEARCH FOR NUMBER ********************" << endl;
    cout << ((search_tree(tRoot, 3213)) == nullptr ? "Couldn't Find Number" : "Found !") << endl;//not found
    cout << ((search_tree(tRoot, 71)) == nullptr ? "Couldn't Find Number" : "Found !") << endl;//found
    cout << ((search_tree(tRoot, 543)) == nullptr ? "Couldn't Find Number" : "Found !") << endl;//found

    ///comment balancing in insert_new_node to see the tree without being balanced
    cout << "Tress is " << (is_balanced(tRoot) ? "balanced!" : "not balanced!") << endl;
    cout << "Tree Height is : " << tree_height(tRoot) << endl;

    /**  the tree if it isn't balanced
     *                   Levels
     *      8              1
     *    /  \
     *   5    33           2
     *       /  \
     *      11   71        3
     *          /  \
     *         43   543    4
     *             /
     *            391      5
     */
    cout << "\n******************* DELETE 43 FROM TREE ********************" << endl;
    delete_node(tRoot, 43);
    display_tree_content(tRoot);

    /**  the tree if it isn't balanced
    *                   Levels
    *      8              1
    *    /  \
    *   5    33           2
    *       /  \
    *      11   71        3
    *            \
    *             543     4
    *             /
    *            391      5
    */
    cout << "Tress is " << (is_balanced(tRoot) ? "balanced!" : "not balanced!") << endl;
    cout << "Tree Height is : " << tree_height(tRoot) << endl;

    cout << "\n******************* DELETE 71 FROM TREE ********************" << endl;
    delete_node(tRoot, 71);
    display_tree_content(tRoot);

    /**  the tree if it isn't balanced
      *                   Levels
      *      8              1
      *    /  \
      *   5    33           2
      *       /  \
      *      11  543        3
      *          /
      *         391         4
      *
      */
    cout << "Tress is " << (is_balanced(tRoot) ? "balanced!" : "not balanced!") << endl;
    cout << "Tree Height is : " << tree_height(tRoot) << endl;

    cout << "\n******************* DELETE 222 FROM TREE ********************" << endl;
    delete_node(tRoot, 222);
    display_tree_content(tRoot);

    cout << "\n******************* DELETE 391 FROM TREE ********************" << endl;
    delete_node(tRoot, 391);
    display_tree_content(tRoot);

    /** the tree if it isn't balanced
      *                  Levels
      *      8              1
      *    /  \
      *   5    33           2
      *       /  \
      *      11  543        3
      *
      */

    cout << "Tress is " << (is_balanced(tRoot) ? "balanced!" : "not balanced!") << endl;
    cout << "Tree Height is : " << tree_height(tRoot) << endl;

    return 0;
}

Node *new_node(int data) {
    Node *n = new Node;
    n->data = data;
    n->left = nullptr;
    n->right = nullptr;
    return n;
}

void insert_new_node(Node *&root, int data) {
    if (root == nullptr) {
        root = new_node(data);
        cout << "New Node With Value " << data << " Created!" << endl;
    } else if (root->data == data) {
        cout << "Value " << data << " Already Exists!" << endl;
    } else if (root->data < data) {
        insert_new_node(root->right, data);
    } else
        insert_new_node(root->left, data);

    if (!is_balanced(root)) {
        Node *temp = root;
        root = balance_tree(tree_to_array(root, new int[count_node(root)]), 0, count_node(root) - 1);
        delete_tree(temp);
    }
}

void display_tree_content(Node *root) {
    if (root != nullptr) {
        display_tree_content(root->left);
        cout << root->data << endl;
        display_tree_content(root->right);
    }
}

int *tree_to_array(Node *root, int *arr, int start) {

    index = start;
    if (root == nullptr)
        return arr;

    tree_to_array(root->left, arr, index);
    arr[index++] = root->data;
    tree_to_array(root->right, arr, index);

}

int count_node(Node *&root) {
    if (root != nullptr) {
        return (count_node(root->left) + 1 + count_node(root->right));
    }

    return 0;
}

Node *search_tree(Node *&root, int data) {
    if (root != nullptr) {
        if (root->data == data) {
            return root;
        } else if (root->data < data) {
            return search_tree(root->right, data);
        } else if (root->data > data)
            return search_tree(root->left, data);
    }
    return nullptr;
}

void delete_node(Node *&root, int data) {
    if (root != nullptr) {
        if (data < root->data)
            delete_node(root->left, data);
        else if (data > root->data)
            delete_node(root->right, data);
        else if (data == root->data)
            delete_helper(root);
    }
}

int get_biggest_small_value(Node *root) {
    while (root->right != nullptr) {
        root = root->right;
    }
    return root->data;
}

void delete_helper(Node *&root) {
    Node *dNode = root;

    if (root->left == nullptr) {///only right children
        root = root->right;
        delete dNode;
    } else if (root->right == nullptr) {///only left children
        root = root->left;
        delete dNode;
    } else ///left and right
    {
        int tempNum = get_biggest_small_value(dNode->left);
        root->data = tempNum;
        delete_node(root->left, tempNum);
    }
    if (!is_balanced(root)) {
        Node *temp = root;
        root = balance_tree(tree_to_array(root, new int[count_node(root)]), 0, count_node(root) - 1);
        delete_tree(temp);
    }
}

void delete_tree(Node *node) {
    if (node == nullptr) return;

    delete_tree(node->left);
    delete_tree(node->right);
    delete node;
}

bool is_balanced(Node *root) {

    if (root == nullptr)
        return true;
    else if (!is_balanced(root->left) || !is_balanced(root->right))
        return false;

    int leftHeight = tree_height(root->left);
    int rightHeight = tree_height(root->right);

    if (abs(leftHeight - rightHeight) <= 1)
        return true;
    else
        return false;

}

    /** the tree if it isn't balanced
      *                  Levels
      *      8              1
      *    /  \
      *   5    33           2
      *       /  \
      *      11  543        3
      *
      */

int tree_height(Node *root)
{
    if (root == nullptr)
        return 0;

    int leftHeight = tree_height(root->left);
    int rightHeight = tree_height(root->right);
    return max(leftHeight, rightHeight) + 1;
}

Node *balance_tree(int *arr, int start, int end) {
    if (start > end)
        return nullptr;

    int middle = (start + end) / 2;
    Node *root = new_node(arr[middle]);

    root->left = balance_tree(arr, start, middle - 1);
    root->right = balance_tree(arr, middle + 1, end);

    return root;
}


