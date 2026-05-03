# Java Software Solutions – Extracted Program Listings
**Author:** Lewis / Loftus  
**Listings:** 3.13 | 4.1 & 4.2 | 4.4 & 4.5 | 4.6 & 4.7 | 5.9 · 5.10 · 5.11 · 5.12 | 6.2 | 6.10 & 6.11 | 6.14

---

## Chapter 3 – Program Statements

---

### Listing 3.13 – `ReverseNumber.java`
> Demonstrates the use of a **do loop**. Reverses the digits of an integer mathematically.

```java
import cs1.Keyboard;

public class ReverseNumber
{
    //----------------------------------------------------------------
    // Reverses the digits of an integer mathematically.
    //----------------------------------------------------------------
    public static void main (String[] args)
    {
        int number, lastDigit, reverse = 0;

        System.out.print ("Enter a positive integer: ");
        number = Keyboard.readInt();

        do
        {
            lastDigit = number % 10;
            reverse = (reverse * 10) + lastDigit;
            number = number / 10;
        }
        while (number > 0);

        System.out.println ("That number reversed is " + reverse);
    }
}
```

**Output:**
```
Enter a positive integer: 2846
That number reversed is 6482
```

---

## Chapter 4 – Writing Classes

---

### Listing 4.1 – `CountFlips.java`
> Demonstrates the use of a **programmer-defined class**. Flips a coin 1000 times and counts heads and tails.

```java
public class CountFlips
{
    //----------------------------------------------------------------
    // Flips a coin multiple times and counts the number of heads
    // and tails that result.
    //----------------------------------------------------------------
    public static void main (String[] args)
    {
        final int NUM_FLIPS = 1000;
        int heads = 0, tails = 0;

        Coin myCoin = new Coin();   // instantiate the Coin object

        for (int count = 1; count <= NUM_FLIPS; count++)
        {
            myCoin.flip();
            if (myCoin.isHeads())
                heads++;
            else
                tails++;
        }

        System.out.println ("The number flips: " + NUM_FLIPS);
        System.out.println ("The number of heads: " + heads);
        System.out.println ("The number of tails: " + tails);
    }
}
```

**Output:**
```
The number flips: 1000
The number of heads: 486
The number of tails: 514
```

---

### Listing 4.2 – `Coin.java`
> Represents a **coin** with two sides that can be flipped. Used by `CountFlips`.

```java
import java.util.Random;

public class Coin
{
    private final int HEADS = 0;
    private final int TAILS = 1;
    private int face;

    //----------------------------------------------------------------
    // Sets up the coin by flipping it initially.
    //----------------------------------------------------------------
    public Coin ()
    {
        flip();
    }

    //----------------------------------------------------------------
    // Flips the coin by randomly choosing a face value.
    //----------------------------------------------------------------
    public void flip ()
    {
        face = (int) (Math.random() * 2);
    }

    //----------------------------------------------------------------
    // Returns true if the current face of the coin is heads.
    //----------------------------------------------------------------
    public boolean isHeads ()
    {
        return (face == HEADS);
    }

    //----------------------------------------------------------------
    // Returns the current face of the coin as a string.
    //----------------------------------------------------------------
    public String toString ()
    {
        String faceName;

        if (face == HEADS)
            faceName = "Heads";
        else
            faceName = "Tails";

        return faceName;
    }
}
```

---

### Listing 4.4 – `Banking.java`
> **Driver program** that creates several `Account` objects and invokes their services.

```java
public class Banking
{
    //----------------------------------------------------------------
    // Creates some bank accounts and requests various services.
    //----------------------------------------------------------------
    public static void main (String[] args)
    {
        Account acct1 = new Account ("Ted Murphy",    72354, 102.56);
        Account acct2 = new Account ("Jane Smith",    69713,  40.00);
        Account acct3 = new Account ("Edward Demsey", 93757, 759.32);

        acct1.deposit (25.85);
        double smithBalance = acct2.deposit (500.00);

        System.out.println ("Smith balance after deposit: " + smithBalance);
        System.out.println ("Smith balance after withdrawal: " +
                             acct2.withdraw (430.75, 1.50));

        acct3.withdraw (800.00, 0.0);   // exceeds balance

        acct1.addInterest();
        acct2.addInterest();
        acct3.addInterest();

        System.out.println ();
        System.out.println (acct1);
        System.out.println (acct2);
        System.out.println (acct3);
    }
}
```

**Output:**
```
Smith balance after deposit: 540.0
Smith balance after withdrawal: 107.75
Error: Insufficient funds.
Account: 93757
Requested: $800.00
Available: $759.32

72354   Ted Murphy      $132.90
69713   Jane Smith      $111.52
93757   Edward Demsey   $785.90
```

---

### Listing 4.5 – `Account.java`
> Represents a **bank account** with deposit, withdraw, and interest services.

```java
import java.text.NumberFormat;

public class Account
{
    private NumberFormat fmt = NumberFormat.getCurrencyInstance();
    private final double RATE = 0.035;   // interest rate of 3.5%

    private long   acctNumber;
    private double balance;
    private String name;

    //----------------------------------------------------------------
    // Sets up the account by defining its owner, account number,
    // and initial balance.
    //----------------------------------------------------------------
    public Account (String owner, long account, double initial)
    {
        name       = owner;
        acctNumber = account;
        balance    = initial;
    }

    //----------------------------------------------------------------
    // Validates the transaction, then deposits the specified amount
    // into the account. Returns the new balance.
    //----------------------------------------------------------------
    public double deposit (double amount)
    {
        if (amount < 0)
        {
            System.out.println ();
            System.out.println ("Error: Deposit amount is invalid.");
            System.out.println (acctNumber + " " + fmt.format(amount));
        }
        else
            balance = balance + amount;

        return balance;
    }

    //----------------------------------------------------------------
    // Validates the transaction, then withdraws the specified amount
    // from the account. Returns the new balance.
    //----------------------------------------------------------------
    public double withdraw (double amount, double fee)
    {
        amount += fee;

        if (amount < 0)
        {
            System.out.println ();
            System.out.println ("Error: Withdraw amount is invalid.");
            System.out.println ("Account: "   + acctNumber);
            System.out.println ("Requested: " + fmt.format(amount));
        }
        else if (amount > balance)
        {
            System.out.println ();
            System.out.println ("Error: Insufficient funds.");
            System.out.println ("Account: "   + acctNumber);
            System.out.println ("Requested: " + fmt.format(amount));
            System.out.println ("Available: " + fmt.format(balance));
        }
        else
            balance = balance - amount;

        return balance;
    }

    //----------------------------------------------------------------
    // Adds interest to the account and returns the new balance.
    //----------------------------------------------------------------
    public double addInterest ()
    {
        balance += (balance * RATE);
        return balance;
    }

    //----------------------------------------------------------------
    // Returns the current balance of the account.
    //----------------------------------------------------------------
    public double getBalance ()
    {
        return balance;
    }

    //----------------------------------------------------------------
    // Returns the account number.
    //----------------------------------------------------------------
    public long getAccountNumber ()
    {
        return acctNumber;
    }

    //----------------------------------------------------------------
    // Returns a one-line description of the account as a string.
    //----------------------------------------------------------------
    public String toString ()
    {
        return (acctNumber + "\t" + name + "\t" + fmt.format(balance));
    }
}
```

---

### Listing 4.6 – `SnakeEyes.java`
> Demonstrates **overloaded constructors**. Rolls two dice and counts snake eyes.

```java
public class SnakeEyes
{
    //----------------------------------------------------------------
    // Creates two die objects, then rolls both dice a set number of
    // times, counting the number of snake eyes that occur.
    //----------------------------------------------------------------
    public static void main (String[] args)
    {
        final int ROLLS = 500;
        int snakeEyes = 0, num1, num2;

        Die die1 = new Die();     // creates a six-sided die
        Die die2 = new Die(20);   // creates a twenty-sided die

        for (int roll = 1; roll <= ROLLS; roll++)
        {
            num1 = die1.roll();
            num2 = die2.roll();

            if (num1 == 1 && num2 == 1)   // check for snake eyes
                snakeEyes++;
        }

        System.out.println ("Number of rolls: "      + ROLLS);
        System.out.println ("Number of snake eyes: " + snakeEyes);
        System.out.println ("Ratio: " + (float) snakeEyes / ROLLS);
    }
}
```

**Output:**
```
Number of rolls: 500
Number of snake eyes: 6
Ratio: 0.012
```

---

### Listing 4.7 – `Die.java`
> Represents **one die** with a configurable number of faces. Uses overloaded constructors.

```java
public class Die
{
    private final int MIN_FACES = 4;
    private int numFaces;    // number of sides on the die
    private int faceValue;   // current value showing on the die

    //----------------------------------------------------------------
    // Defaults to a six-sided die. Initial face value is 1.
    //----------------------------------------------------------------
    public Die ()
    {
        numFaces  = 6;
        faceValue = 1;
    }

    //----------------------------------------------------------------
    // Explicitly sets the size of the die. Defaults to a size of
    // six if the parameter is invalid. Initial face value is 1.
    //----------------------------------------------------------------
    public Die (int faces)
    {
        if (faces < MIN_FACES)
            numFaces = 6;
        else
            numFaces = faces;

        faceValue = 1;
    }

    //----------------------------------------------------------------
    // Rolls the die and returns the result.
    //----------------------------------------------------------------
    public int roll ()
    {
        faceValue = (int) (Math.random() * numFaces) + 1;
        return faceValue;
    }

    //----------------------------------------------------------------
    // Returns the current die value.
    //----------------------------------------------------------------
    public int getFaceValue ()
    {
        return faceValue;
    }
}
```

---

## Chapter 5 – Enhancing Classes

---

### Listing 5.9 – `Complexity.java`
> Defines an **interface** with two abstract methods for setting and getting complexity.

```java
public interface Complexity
{
    public void setComplexity (int complexity);
    public int  getComplexity ();
}
```

---

### Listing 5.10 – `Question.java`
> **Implements the `Complexity` interface**. Represents a question and its answer.

```java
public class Question implements Complexity
{
    private String question, answer;
    private int complexityLevel;

    //----------------------------------------------------------------
    // Sets up the question with a default complexity.
    //----------------------------------------------------------------
    public Question (String query, String result)
    {
        question       = query;
        answer         = result;
        complexityLevel = 1;
    }

    //----------------------------------------------------------------
    // Sets the complexity level for this question.
    //----------------------------------------------------------------
    public void setComplexity (int level)
    {
        complexityLevel = level;
    }

    //----------------------------------------------------------------
    // Returns the complexity level for this question.
    //----------------------------------------------------------------
    public int getComplexity ()
    {
        return complexityLevel;
    }

    //----------------------------------------------------------------
    // Returns the question.
    //----------------------------------------------------------------
    public String getQuestion ()
    {
        return question;
    }

    //----------------------------------------------------------------
    // Returns the answer to this question.
    //----------------------------------------------------------------
    public String getAnswer ()
    {
        return answer;
    }

    //----------------------------------------------------------------
    // Returns true if the candidate answer matches the answer.
    //----------------------------------------------------------------
    public boolean answerCorrect (String candidateAnswer)
    {
        return answer.equals(candidateAnswer);
    }

    //----------------------------------------------------------------
    // Returns this question (and its answer) as a string.
    //----------------------------------------------------------------
    public String toString ()
    {
        return question + "\n" + answer;
    }
}
```

---

### Listing 5.11 – `MiniQuiz.java`
> Demonstrates use of a class that **implements an interface**. Presents a short quiz.

```java
import cs1.Keyboard;

public class MiniQuiz
{
    //----------------------------------------------------------------
    // Presents a short quiz.
    //----------------------------------------------------------------
    public static void main (String[] args)
    {
        Question q1, q2;
        String possible;

        q1 = new Question ("What is the capital of Jamaica?", "Kingston");
        q1.setComplexity (4);

        q2 = new Question ("Which is worse, ignorance or apathy?",
                           "I don't know and I don't care");
        q2.setComplexity (10);

        System.out.print (q1.getQuestion());
        System.out.println (" (Level: " + q1.getComplexity() + ")");
        possible = Keyboard.readString();
        if (q1.answerCorrect(possible))
            System.out.println ("Correct");
        else
            System.out.println ("No, the answer is " + q1.getAnswer());

        System.out.println();

        System.out.print (q2.getQuestion());
        System.out.println (" (Level: " + q2.getComplexity() + ")");
        possible = Keyboard.readString();
        if (q2.answerCorrect(possible))
            System.out.println ("Correct");
        else
            System.out.println ("No, the answer is " + q2.getAnswer());
    }
}
```

**Output:**
```
What is the capital of Jamaica? (Level: 4)
Kingston
Correct
Which is worse, ignorance or apathy? (Level: 10)
apathy
No, the answer is I don't know and I don't care
```

---

### Listing 5.12 – `EvenOdd.java`
> Demonstrates the use of the **`JOptionPane`** class for dialog box interaction.

```java
import javax.swing.JOptionPane;

public class EvenOdd
{
    //----------------------------------------------------------------
    // Determines if the value input by the user is even or odd.
    // Uses multiple dialog boxes for user interaction.
    //----------------------------------------------------------------
    public static void main (String[] args)
    {
        String numStr, result;
        int num, again;

        do
        {
            numStr = JOptionPane.showInputDialog ("Enter an integer: ");
            num    = Integer.parseInt(numStr);
            result = "That number is " + ((num % 2 == 0) ? "even" : "odd");

            JOptionPane.showMessageDialog (null, result);
            again = JOptionPane.showConfirmDialog (null, "Do Another?");
        }
        while (again == JOptionPane.YES_OPTION);
    }
}
```

> **Note:** This program uses GUI dialog boxes — input/output appears in pop-up windows, not the console.

---

## Chapter 6 – Arrays

---

### Listing 6.2 – `ReverseOrder.java`
> Demonstrates **array index processing**. Reads 10 numbers and prints them in reverse.

```java
import cs1.Keyboard;

public class ReverseOrder
{
    //----------------------------------------------------------------
    // Reads a list of numbers from the user, storing them in an
    // array, then prints them in the opposite order.
    //----------------------------------------------------------------
    public static void main (String[] args)
    {
        double[] numbers = new double[10];

        System.out.println ("The size of the array: " + numbers.length);

        for (int index = 0; index < numbers.length; index++)
        {
            System.out.print ("Enter number " + (index + 1) + ": ");
            numbers[index] = Keyboard.readDouble();
        }

        System.out.println ("The numbers in reverse order:");

        for (int index = numbers.length - 1; index >= 0; index--)
            System.out.print (numbers[index] + " ");

        System.out.println();
    }
}
```

**Output:**
```
The size of the array: 10
Enter number 1: 18.36
Enter number 2: 48.9
...
The numbers in reverse order:
99.18  69.0  45.55  63.41  34.8  72.404  29.06  53.5  48.9  18.36
```

---

### Listing 6.10 – `SortGrades.java`
> **Driver** for testing a numeric selection sort using the `Sorts` class.

```java
public class SortGrades
{
    //----------------------------------------------------------------
    // Creates an array of grades, sorts them, then prints them.
    //----------------------------------------------------------------
    public static void main (String[] args)
    {
        int[] grades = {89, 94, 69, 80, 97, 85, 73, 91, 77, 85, 93};

        Sorts.selectionSort (grades);

        for (int index = 0; index < grades.length; index++)
            System.out.print (grades[index] + " ");
    }
}
```

**Output:**
```
69  73  77  80  85  85  89  91  93  94  97
```

---

### Listing 6.11 – `Sorts.java`
> Contains **selection sort**, **insertion sort (int)**, and **insertion sort (Comparable objects)**.

```java
public class Sorts
{
    //----------------------------------------------------------------
    // Sorts the specified array of integers using the
    // selection sort algorithm.
    //----------------------------------------------------------------
    public static void selectionSort (int[] numbers)
    {
        int min, temp;

        for (int index = 0; index < numbers.length - 1; index++)
        {
            min = index;

            for (int scan = index + 1; scan < numbers.length; scan++)
                if (numbers[scan] < numbers[min])
                    min = scan;

            // Swap the values
            temp           = numbers[min];
            numbers[min]   = numbers[index];
            numbers[index] = temp;
        }
    }

    //----------------------------------------------------------------
    // Sorts the specified array of integers using the
    // insertion sort algorithm.
    //----------------------------------------------------------------
    public static void insertionSort (int[] numbers)
    {
        for (int index = 1; index < numbers.length; index++)
        {
            int key      = numbers[index];
            int position = index;

            // shift larger values to the right
            while (position > 0 && numbers[position - 1] > key)
            {
                numbers[position] = numbers[position - 1];
                position--;
            }

            numbers[position] = key;
        }
    }

    //----------------------------------------------------------------
    // Sorts the specified array of objects using the
    // insertion sort algorithm.
    //----------------------------------------------------------------
    public static void insertionSort (Comparable[] objects)
    {
        for (int index = 1; index < objects.length; index++)
        {
            Comparable key      = objects[index];
            int        position = index;

            // shift larger values to the right
            while (position > 0 && objects[position - 1].compareTo(key) > 0)
            {
                objects[position] = objects[position - 1];
                position--;
            }

            objects[position] = key;
        }
    }
}
```

---

### Listing 6.14 – `TwoDArray.java`
> Demonstrates the use of a **two-dimensional array**. Fills and prints a 5×10 table.

```java
public class TwoDArray
{
    //----------------------------------------------------------------
    // Creates a 2D array of integers, fills it with increasing
    // integer values, then prints them out.
    //----------------------------------------------------------------
    public static void main (String[] args)
    {
        int[][] table = new int[5][10];

        // Load the table with values
        for (int row = 0; row < table.length; row++)
            for (int col = 0; col < table[row].length; col++)
                table[row][col] = row * 10 + col;

        // Print the table
        for (int row = 0; row < table.length; row++)
        {
            for (int col = 0; col < table[row].length; col++)
                System.out.print (table[row][col] + "\t");

            System.out.println();
        }
    }
}
```

**Output:**
```
0   1   2   3   4   5   6   7   8   9
10  11  12  13  14  15  16  17  18  19
20  21  22  23  24  25  26  27  28  29
30  31  32  33  34  35  36  37  38  39
40  41  42  43  44  45  46  47  48  49
```

---

*End of extracted listings — Java Software Solutions (Lewis / Loftus)*