# Java Software Solutions - Exam Notes
**Book:** Java Software Solutions | Lewis / Loftus
**All 16 Topics - Clean English Summary**

---

## Table of Contents

1. [String Class](#1-string-class)
2. [Math Class](#2-math-class)
3. [Keyboard / Scanner Class](#3-keyboard--scanner-class)
4. [Conditional Operator](#4-conditional-operator)
5. [StringTokenizer Class](#5-stringtokenizer-class)
6. [Constructor](#6-constructor)
7. [GUI Elements](#7-gui-elements)
8. [Arrays](#8-arrays)
9. [Try-Catch-Finally](#9-try-catch-finally)
10. [Static Variables & Methods](#10-static-variables--methods)
11. [Nested & Inner Classes](#11-nested--inner-classes)
12. [Interfaces & Abstract Methods](#12-interfaces--abstract-methods)
13. [Dialog Box Methods](#13-dialog-box-methods)
14. [Method Overloading](#14-method-overloading)
15. [Method Decomposition](#15-method-decomposition)
16. [ArrayList Methods](#16-arraylist-methods)

---

## 1. String Class

A String is a sequence of characters enclosed in double quotes.

```java
String name = "Ahmed";
String sentence = "Java is easy!";
```

### Key Rule - String is IMMUTABLE

Once a String is created, it CANNOT be changed. Every method returns a NEW String - the original stays the same.

### Index Positions

Index starts from 0:

```
H  e  l  l  o
0  1  2  3  4
```

### Important String Methods

| Method | What it does | Example |
|--------|-------------|---------|
| `length()` | Returns number of characters | `"Hello".length()` -> 5 |
| `charAt(i)` | Returns character at index i | `"Hello".charAt(0)` -> 'H' |
| `concat(s)` | Joins two strings | `"Hi".concat("!")` -> "Hi!" |
| `toUpperCase()` | Converts to uppercase | `"hello".toUpperCase()` -> "HELLO" |
| `toLowerCase()` | Converts to lowercase | `"HELLO".toLowerCase()` -> "hello" |
| `replace(a,b)` | Replaces character a with b | `"cat".replace('c','b')` -> "bat" |
| `substring(s,e)` | Extracts part of string | `"Hello".substring(1,3)` -> "el" |
| `equals(s)` | Checks if two strings match | `"hi".equals("hi")` -> true |
| `equalsIgnoreCase(s)` | Compares ignoring case | `"HI".equalsIgnoreCase("hi")` -> true |
| `compareTo(s)` | Dictionary order comparison | `"apple".compareTo("banana")` -> negative |

### compareTo() - How it works

- Returns **negative** if the string comes BEFORE in dictionary
- Returns **0** if both strings are EQUAL
- Returns **positive** if the string comes AFTER in dictionary

```java
"apple".compareTo("banana")  // negative  - apple comes first
"apple".compareTo("apple")   // 0         - both same
"mango".compareTo("apple")   // positive  - mango comes after
```

### substring() - Important Rule

`substring(start, end)` returns characters from `start` up to `end-1` (end is NOT included).

```java
"Hello".substring(1, 3)  // returns "el"  (index 1 and 2, NOT 3)
```

### Example Program

```java
String phrase = "Change is inevitable";
String s1 = phrase.concat(", except from vending machines.");
String s2 = s1.toUpperCase();
String s3 = s2.replace('E', 'X');
String s4 = s3.substring(3, 30);
// phrase is still "Change is inevitable" - IMMUTABLE!
```

**Remember:** String methods always return a NEW string, never modify the original.

---

## 2. Math Class

Provides mathematical operations. No import needed - available automatically.

```java
Math.sqrt(25)    // square root
Math.pow(2, 3)   // power
Math.abs(-5)     // absolute value
```

### Important Methods

| Method | What it does | Example |
|--------|-------------|---------|
| `Math.abs(n)` | Makes negative positive | `abs(-15)` -> 15 |
| `Math.sqrt(n)` | Square root | `sqrt(25)` -> 5.0 |
| `Math.pow(n,p)` | n to the power p | `pow(2,3)` -> 8.0 |
| `Math.random()` | Random number between 0.0 and 0.999 | `random()` -> 0.73... |
| `Math.floor(n)` | Rounds DOWN to nearest whole | `floor(3.9)` -> 3.0 |
| `Math.ceil(n)` | Rounds UP to nearest whole | `ceil(3.1)` -> 4.0 |
| `Math.sin(angle)` | Sine (angle in radians) | -- |
| `Math.cos(angle)` | Cosine (angle in radians) | -- |

### Key Rule

No object needed - call directly using class name:

```java
Math.sqrt(25);   // CORRECT - no object required
```

**Remember:** Math class = built-in calculator. Use `Math.method()` directly, no setup needed.

---

## 3. Keyboard / Scanner Class

Used to take input from the user at runtime.

### Import Required

```java
import cs1.Keyboard;
```

### Methods

| Method | Input type |
|--------|-----------|
| `Keyboard.readInt()` | Whole number (1, 2, 100) |
| `Keyboard.readDouble()` | Decimal number (1.5, 3.14) |
| `Keyboard.readString()` | Text ("Ahmed", "Hello") |
| `Keyboard.readChar()` | Single character ('A', 'z') |
| `Keyboard.readBoolean()` | true or false |

### Example

```java
import cs1.Keyboard;

System.out.print("Enter your name: ");
String name = Keyboard.readString();

System.out.print("Enter your age: ");
int age = Keyboard.readInt();

System.out.print("Enter your GPA: ");
double gpa = Keyboard.readDouble();
```

### Key Rule

Keyboard class is **static** - call directly, no object creation needed.

**Remember:** `Keyboard.readTYPE()` - replace TYPE with what you need (Int, Double, String).

---

## 4. Conditional Operator

A shortcut to write an if-else statement in ONE line. Also called the **Ternary Operator** (3 parts).

### Syntax

```
condition ? value_if_true : value_if_false
```

### If-Else vs Ternary

```java
// If-Else (4 lines)
if (num % 2 == 0)
    result = "even";
else
    result = "odd";

// Ternary (1 line)
String result = (num % 2 == 0) ? "even" : "odd";
```

Both do the exact same thing.

### Examples

```java
// Find the larger number
int larger = (num1 > num2) ? num1 : num2;

// Even or Odd check
String result = "That number is " + ((num % 2 == 0) ? "even" : "odd");
```

### Important Rule

Both sides must be the **same type**:

```java
int x    = (a > b) ? 10 : 20;         // CORRECT - both int
String s = (a > b) ? "Yes" : "No";    // CORRECT - both String
int x    = (a > b) ? 10 : "No";       // ERROR!   - mixed types
```

**Remember:** `condition ? true_value : false_value` - one-line if-else shortcut.

---

## 5. StringTokenizer Class

Breaks a large string into smaller **tokens** (pieces).

### Import Required

```java
import java.util.StringTokenizer;
```

### Methods

| Method | What it does |
|--------|-------------|
| `hasMoreTokens()` | Are there more pieces? (true/false) |
| `nextToken()` | Get the next piece |
| `countTokens()` | How many pieces are left |

### Basic Example - Split by spaces

```java
String sentence = "The quick brown fox";
StringTokenizer st = new StringTokenizer(sentence);

while (st.hasMoreTokens()) {
    System.out.println(st.nextToken());
}
```

**Output:**
```
The
quick
brown
fox
```

Default delimiter is a **space**.

### Custom Delimiter

```java
String url = "www.csc.villanova.edu/academics/courses";
StringTokenizer st = new StringTokenizer(url, "./");
// Both "." and "/" are delimiters

while (st.hasMoreTokens())
    System.out.println(st.nextToken());
```

**Output:**
```
www
csc
villanova
edu
academics
courses
```

**Remember:** StringTokenizer splits a string into pieces. Use `hasMoreTokens()` + `nextToken()` in a loop.

---

## 6. Constructor

A constructor is automatically called when a new object is created. It sets up the object with initial values.

### Rules

- Same name as the class
- No return type (not even void)
- Called automatically with the `new` keyword

### Basic Constructor

```java
public class Account {
    private String name;
    private double balance;

    public Account(String owner, double initial) {
        name    = owner;
        balance = initial;
    }
}

// Creating an object:
Account acct = new Account("Ahmed", 5000);
```

### Overloaded Constructors - Multiple constructors in one class

```java
public class Die {
    private int numFaces;

    // Constructor 1 - no parameter - default 6 sides
    public Die() {
        numFaces = 6;
    }

    // Constructor 2 - with parameter - custom sides
    public Die(int faces) {
        numFaces = faces;
    }
}

// Usage:
Die die1 = new Die();     // 6 sides
Die die2 = new Die(20);   // 20 sides
```

### Default Constructor

If you write NO constructor, Java automatically provides an empty one.

**Remember:** Constructor = first-time setup of an object. Same name as class, no return type, called with `new`.

---

## 7. GUI Elements

**GUI = Graphical User Interface** - buttons, text boxes, windows that users interact with visually.

### Three Key Parts

**1. Components - What appears on screen**

| Component | What it is |
|-----------|-----------|
| `JButton` | A clickable button |
| `JTextField` | A text input box |
| `JLabel` | Static text display |
| `JApplet` | The main window/container |

**2. Events - Something happened**

When the user does something (clicks a button, presses a key) - that is an **event**.

**3. Listeners - Waits and reacts**

A Listener waits for an event, then executes code when it occurs.

### Three Steps to Build GUI

```
Step 1: Create components (button, label, etc.)
Step 2: Create listener and attach it to component
Step 3: Define what happens when event fires
```

### Example - Button Click Counter

```java
JButton push = new JButton("Push Me!");
push.addActionListener(new ButtonListener());

private class ButtonListener implements ActionListener {
    public void actionPerformed(ActionEvent event) {
        pushes++;
        label.setText("Pushes: " + pushes);
    }
}
```

**Remember:** GUI = Component (visible) + Event (happens) + Listener (reacts).

---

## 8. Arrays

An array stores multiple values of the **same type** in one variable.

### Creating an Array

```java
int[] height = new int[11];   // array of 11 integers
height[0]  = 150;             // first element
height[5]  = 175;             // sixth element
height[10] = 160;             // last element (index = size - 1)
```

### Shortcut - Initialize with values directly

```java
int[] grades = {89, 94, 69, 80, 97, 85, 73, 91, 77, 85, 93};
```

### Important Rules

- Index always starts at **0**
- Last index = size - 1
- Use `arrayName.length` to get size
- Size is **fixed** once declared - cannot be changed

### Using a Loop with Arrays

```java
int[] list = new int[5];

// Fill the array
for (int i = 0; i < list.length; i++)
    list[i] = i * 10;
// list = [0, 10, 20, 30, 40]

// Print the array
for (int i = 0; i < list.length; i++)
    System.out.print(list[i] + " ");
```

### 2D Array - Like a table

```java
int[][] table = new int[5][10];   // 5 rows, 10 columns
table[2][3] = 99;                 // row 2, column 3
```

**Remember:** Array = fixed-size list of same-type values. Index starts at 0.

---

## 9. Try-Catch-Finally

Prevents the program from **crashing** when an error occurs at runtime.

### Syntax

```java
try {
    // Code that might throw an error
}
catch (ExceptionType e) {
    // Runs if an error occurs
}
finally {
    // Always runs - error or not
}
```

### How it Works

```
Run try block
    |
Error occurred?
    |           |
   YES          NO
    |            |
catch block   continue
    |
finally block (always runs!)
```

### Example

```java
try {
    int number = Integer.parseInt("abc");  // cannot convert "abc" to number!
}
catch (NumberFormatException e) {
    System.out.println("That is not a valid number!");
}
finally {
    System.out.println("Done!");  // always runs
}
```

**Output:**
```
That is not a valid number!
Done!
```

### Multiple Catch Blocks

```java
try {
    // code
}
catch (StringIndexOutOfBoundsException e) {
    System.out.println("String index out of range!");
}
catch (NumberFormatException e) {
    System.out.println("Invalid number format!");
}
finally {
    System.out.println("Always executes!");
}
```

### Common Exceptions

| Exception | When it occurs |
|-----------|---------------|
| `NumberFormatException` | Trying to parse non-numeric text as a number |
| `StringIndexOutOfBoundsException` | Accessing index outside a String |
| `ArrayIndexOutOfBoundsException` | Accessing index outside an array |

**Remember:** Try = attempt, Catch = handle error, Finally = always executes.

---

## 10. Static Variables & Methods

### Static Variable

- A **normal variable** - each object has its OWN copy
- A **static variable** - ONE copy shared among ALL objects

```java
public class Slogan {
    private String phrase;           // each object has its own
    private static int count = 0;   // ONE shared copy for all objects

    public Slogan(String str) {
        phrase = str;
        count++;   // increments the SHARED counter
    }
}

// After creating 5 Slogan objects:
System.out.println(Slogan.getCount());  // 5
```

### Static Method

Called directly using the class name - no object required.

```java
Math.sqrt(25);        // no Math object needed
Slogan.getCount();    // no Slogan object needed
```

### Important Rules

- Static methods CANNOT access instance (non-static) variables
- Access static variables using class name: `ClassName.variable`
- Constants are usually both `static` and `final`

```java
final static int MAX = 100;   // constant
```

**Remember:** Static = Shared. One variable copy for all, methods called without an object.

---

## 11. Nested & Inner Classes

A class defined **inside** another class.

```java
public class Outer {
    private int num = 10;

    private class Inner {
        public String toString() {
            num++;   // Inner class can access Outer's private variables!
            return "num = " + num;
        }
    }
}
```

### Key Features of Inner Class

- Can directly access the **private variables** of the outer class
- Cannot exist without an outer class object
- Cannot be declared `static`

### Main Use Case - GUI Listeners

```java
public class MyApp extends JApplet {
    private JButton button;

    public void init() {
        button = new JButton("Click!");
        button.addActionListener(new ButtonListener());
    }

    private class ButtonListener implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            // Can directly access outer class variables here
        }
    }
}
```

### Static Nested Class

If a nested class is `static`, it CANNOT access instance variables of the outer class.

**Remember:** Inner class lives inside outer class. It can access outer's private members. Most commonly used for GUI listeners.

---

## 12. Interfaces & Abstract Methods

### Interface

A set of rules that any implementing class MUST follow.

### Abstract Method

A method with NO body - only the signature:

```java
public void setComplexity(int complexity);   // no body, just semicolon
```

### Defining an Interface

```java
public interface Complexity {
    public void setComplexity(int complexity);   // abstract method
    public int  getComplexity();                 // abstract method
}
```

### Implementing an Interface

```java
public class Question implements Complexity {
    private int complexityLevel;

    // MUST implement this method
    public void setComplexity(int level) {
        complexityLevel = level;
    }

    // MUST implement this method
    public int getComplexity() {
        return complexityLevel;
    }
}
```

### Rules

- All methods of an interface MUST be implemented
- One class can implement MULTIPLE interfaces
- Interface methods are `public` by default
- You CANNOT create an object of an interface

```java
// Multiple interfaces
class ManyThings implements Interface1, Interface2, Interface3 {
    // Must implement ALL methods from all three interfaces
}
```

**Remember:** Interface = Contract. Every class that implements it MUST define all its methods.

---

## 13. Dialog Box Methods

Popup windows for interacting with the user.

### Import Required

```java
import javax.swing.JOptionPane;
```

### Three Types of Dialog Boxes

**1. Message Dialog - Display a message**

```java
JOptionPane.showMessageDialog(null, "Hello! This is a message.");
// Only shows an OK button
```

**2. Input Dialog - Get input from user**

```java
String name = JOptionPane.showInputDialog("Enter your name:");
// Shows a text field - user types and clicks OK
```

**3. Confirm Dialog - Ask Yes/No**

```java
int choice = JOptionPane.showConfirmDialog(null, "Do it again?");

if (choice == JOptionPane.YES_OPTION)
    System.out.println("User clicked Yes!");
else
    System.out.println("User clicked No!");
```

### Return Value Constants

| Constant | Meaning |
|----------|---------|
| `JOptionPane.YES_OPTION` | User clicked Yes |
| `JOptionPane.NO_OPTION` | User clicked No |
| `JOptionPane.CANCEL_OPTION` | User clicked Cancel |

### Complete Example

```java
import javax.swing.JOptionPane;

String numStr = JOptionPane.showInputDialog("Enter a number:");
int num = Integer.parseInt(numStr);

String result = "That number is " + ((num % 2 == 0) ? "even" : "odd") + "!";
JOptionPane.showMessageDialog(null, result);

int again = JOptionPane.showConfirmDialog(null, "Do another?");
```

**Remember:** JOptionPane = popup windows. showMessage (display), showInput (get), showConfirm (ask yes/no).

---

## 14. Method Overloading

Multiple methods with the **same name** but **different parameters**.

### Example - println is the best example

```java
System.out.println("Hello");   // String version
System.out.println(42);        // int version
System.out.println(3.14);      // double version
System.out.println(true);      // boolean version
```

These are all DIFFERENT methods with the same name!

### Creating Your Own Overloaded Methods

```java
public class Die {
    // Version 1 - no parameter
    public Die() {
        numFaces = 6;
    }

    // Version 2 - with parameter
    public Die(int faces) {
        numFaces = faces;
    }
}

Die die1 = new Die();     // calls version 1
Die die2 = new Die(20);   // calls version 2
```

### Method Signature

Java identifies which method to call by the **signature** = method name + parameter types and count.

```java
void print(int x)         // different signatures
void print(double x)      // different signatures
void print(int x, int y)  // different signatures
```

### Important Rule

Return type is NOT part of the signature:

```java
int    getValue()    // these two CONFLICT
double getValue()    // compiler error - only return type differs
```

**Remember:** Overloading = same name, different parameters. Java picks the right one automatically.

---

## 15. Method Decomposition

Breaking a large, complex task into **small, focused methods**.

### Why Use It

- Keeps each method short and readable
- Each method does ONE thing
- Helper methods are `private`
- Easier to test and debug

### Example - Pig Latin Translator

Instead of one giant method, break it down:

```java
// Main method - coordinates everything
public String translate(String sentence) {
    // calls translateWord() for each word
}

// Helper 1 - translates a single word
private String translateWord(String word) {
    if (beginsWithVowel(word))
        return word + "yay";
    else
        return word.substring(1) + word.charAt(0) + "ay";
}

// Helper 2 - checks if word starts with a vowel
private boolean beginsWithVowel(String word) {
    String vowels = "aeiou";
    return (vowels.indexOf(word.charAt(0)) != -1);
}

// Helper 3 - checks if word starts with a consonant blend
private boolean beginsWithBlend(String word) {
    return (word.startsWith("bl") || word.startsWith("br"));
}
```

### Public vs Private Methods

| | Public | Private |
|--|--------|---------|
| Can be called from | Anywhere | Only within the same class |
| Used for | Main methods | Helper methods |

**Remember:** Decomposition = break big into small. Main method is public, helpers are private.

---

## 16. ArrayList Methods

Like an array, but the **size grows and shrinks automatically**.

### Import Required

```java
import java.util.ArrayList;
```

### Creating an ArrayList

```java
ArrayList band = new ArrayList();   // empty list
```

### Important Methods

| Method | What it does |
|--------|-------------|
| `add(obj)` | Add to the end |
| `add(index, obj)` | Add at a specific position |
| `remove(index)` | Remove from a specific position |
| `get(index)` | Retrieve element at index |
| `size()` | Number of elements |
| `indexOf(obj)` | Find position of element |
| `contains(obj)` | Is it in the list? (true/false) |
| `isEmpty()` | Is the list empty? (true/false) |
| `clear()` | Remove all elements |

### Complete Example

```java
import java.util.ArrayList;

ArrayList band = new ArrayList();

band.add("Paul");     // [Paul]
band.add("Pete");     // [Paul, Pete]
band.add("John");     // [Paul, Pete, John]
band.add("George");   // [Paul, Pete, John, George]

System.out.println(band);   // [Paul, Pete, John, George]

int location = band.indexOf("Pete");   // location = 1
band.remove(location);
System.out.println(band);   // [Paul, John, George]

System.out.println("At index 1: " + band.get(1));   // John

band.add(2, "Ringo");
System.out.println(band);   // [Paul, John, Ringo, George]

System.out.println("Size: " + band.size());   // 4
```

### Array vs ArrayList

| | Array | ArrayList |
|--|-------|-----------|
| Size | Fixed | Automatic |
| Declaration | `int[] arr = new int[10]` | `ArrayList list = new ArrayList()` |
| Add element | Direct assignment | `list.add()` |
| Remove element | Difficult | `list.remove()` |
| Get size | `arr.length` | `list.size()` |

### Important Rule

When you remove an element, all remaining elements **automatically shift** down:

```
Before: [Paul, Pete, John, George]  (index: 0, 1, 2, 3)
Remove Pete at index 1
After:  [Paul, John, George]        (index: 0, 1, 2)
John is now at index 1, not 2!
```

**Remember:** ArrayList = flexible array. Size adjusts automatically, add/remove is easy.

---

## Quick Revision Table

| Topic | Key Point |
|-------|-----------|
| **String** | Immutable - methods return NEW string, original unchanged |
| **Math** | Static methods - `Math.sqrt()`, `Math.pow()`, `Math.abs()` |
| **Keyboard** | `Keyboard.readInt()`, `readString()`, `readDouble()` |
| **Ternary** | `condition ? true_val : false_val` - one-line if-else |
| **StringTokenizer** | Splits string into tokens. `hasMoreTokens()` + `nextToken()` |
| **Constructor** | Same name as class, no return type, called with `new` |
| **GUI** | Component + Event + Listener |
| **Array** | Index starts at 0, fixed size, use `array.length` |
| **Try-Catch** | Try the code, catch the error, finally always runs |
| **Static** | Shared - one copy for all objects, call without object |
| **Inner Class** | Class inside class, accesses outer class private members |
| **Interface** | Contract - all methods MUST be implemented |
| **JOptionPane** | showMessage, showInput, showConfirm |
| **Overloading** | Same method name, different parameters |
| **Decomposition** | Split big method into small private helpers |
| **ArrayList** | Flexible array - add/remove easy, size automatic |

---

*Java Software Solutions - Lewis / Loftus | English Exam Notes*