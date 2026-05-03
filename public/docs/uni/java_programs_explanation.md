# Java Software Solutions - Hinglish Explanation 
**Book:** Java Software Solutions | **Authors:** Lewis / Loftus

---

## Chapter 3 - Program Statements

---

### Listing 3.13 - `ReverseNumber.java`
> **Do Loop ka use karke number ko reverse karna**

**Kya karta hai yeh program?**
Yeh program user se ek positive integer leta hai aur uske digits ko ulta kar ke print karta hai. Jaise `2846` diya toh `6482` output aayega.

**Key Concept - `do...while` loop:**
- Yeh loop **pehle kaam karta hai**, phir condition check karta hai.
- Matlab loop body **kam se kam ek baar zaroor chalti hai**.

**Logic samjho:**
```
number = 2846
lastDigit = 2846 % 10  ->  6   (remainder nikalo)
reverse   = 0 * 10 + 6 = 6
number    = 2846 / 10  = 284  (ek digit hata di)

Phir se:
lastDigit = 284 % 10 = 4
reverse   = 6 * 10 + 4 = 64
number    = 28

...aur aaise chalta rahe jab tak number > 0 ho
```

---

## Chapter 4 - Writing Classes

---

### Listing 4.1 & 4.2 - `CountFlips.java` + `Coin.java`
> **Programmer-defined class ka use - Coin flip simulator**

**Kya karta hai?**
`CountFlips` ek `Coin` object banata hai aur use 1000 baar flip karta hai. Heads aur Tails count karta rahe.

**Key Concepts:**

| Term | Matlab |
|------|--------|
| `new Coin()` | Object banao Coin class ka |
| `myCoin.flip()` | Method call karo - coin flip karo |
| `myCoin.isHeads()` | Puchho - heads aaya kya? |

**`Coin.java` - Class ki anatomy:**
- `private int face` -> andar ka data, bahar se directly nahi dekhta
- `flip()` -> `Math.random() * 2` se randomly 0 ya 1 choose karta hai
- `isHeads()` -> agar `face == 0` toh `true` return karta hai
- `toString()` -> "Heads" ya "Tails" string return karta hai

**OOP ka point:** `CountFlips` ko nahi pata coin ke andar kya ho raha hai - sirf methods call karta hai. Yahi **encapsulation** hai!

---

### Listing 4.4 & 4.5 - `Banking.java` + `Account.java`
> **Bank Account class - deposit, withdraw, interest**

**Kya karta hai?**
Teen bank accounts banata hai, deposits/withdrawals karta hai aur interest add karta hai.

**`Account.java` ke methods:**

| Method | Kaam |
|--------|------|
| `deposit(amount)` | Balance mein amount add karo |
| `withdraw(amount, fee)` | Fee ke saath paise nikalo, agar balance na ho toh error |
| `addInterest()` | 3.5% interest add karo |
| `toString()` | Account ki info ek line mein do |

**Important check in `withdraw()`:**
```
agar amount > balance ->  "Error: Insufficient funds" print karo
balance change mat karo
```

**`NumberFormat.getCurrencyInstance()`** - yeh Java ki built-in class hai jo numbers ko currency format mein dikhati hai jaise `$102.56`.

---

### Listing 4.6 & 4.7 - `SnakeEyes.java` + `Die.java`
> **Overloaded Constructors - Dice simulator**

**Kya karta hai?**
Do dice banata hai - ek 6-sided, ek 20-sided - aur 500 baar roll karta hai. Jab dono pe `1` aaye toh "Snake Eyes"!

**Key Concept - Overloaded Constructors:**
```java
Die die1 = new Die();      // Default -> 6 sides
Die die2 = new Die(20);    // Custom  -> 20 sides
```
Same class ka naam, alag arguments - Java samajh jaata hai kaun sa constructor call karna hai. Yahi **method overloading** hai.

**`Die.java` mein safety check:**
```java
if (faces < MIN_FACES)   // 4 se kam faces allowed nahi
    numFaces = 6;        // default 6 kar do
```

---

## Chapter 5 - Enhancing Classes

---

### Listing 5.9, 5.10, 5.11 - `Complexity.java` + `Question.java` + `MiniQuiz.java`
> **Interface ka concept - Complexity level wala Quiz**

**Kya karta hai?**
Ek mini quiz program - do questions poochhe, user ka jawab le, check kare sahi hai ya nahi.

**Key Concept - Interface:**
```java
public interface Complexity {
    public void setComplexity(int complexity);
    public int  getComplexity();
}
```
Interface ek **contract** hai - jo bhi class ise `implements` kare, usse yeh methods **zaroor** banana pade.

**`Question.java` implements Complexity:**
- `setComplexity()` aur `getComplexity()` dono methods implement kiye
- Extra methods bhi hain: `getQuestion()`, `getAnswer()`, `answerCorrect()`

**`answerCorrect()` ka kaam:**
```java
return answer.equals(candidateAnswer);
// User ka jawab stored answer se match karo -> true/false
```

**MiniQuiz Output:**
```
What is the capital of Jamaica? (Level: 4)
Kingston
Correct OK
```

---

### Listing 5.12 - `EvenOdd.java`
> **JOptionPane - GUI Dialog Boxes**

**Kya karta hai?**
User se ek number lo (dialog box mein), bolo even hai ya odd, aur puchho "Do Another?"

**Key Concept - `JOptionPane`:**

| Method | Kaam |
|--------|------|
| `showInputDialog()` | User se input lo (popup box) |
| `showMessageDialog()` | Message dikhao (popup) |
| `showConfirmDialog()` | Yes/No/Cancel puchho |

**Ternary operator ka use:**
```java
result = "That number is " + ((num % 2 == 0) ? "even" : "odd");
//  agar num % 2 == 0 -> "even", warna -> "odd"
```

**Note:** Yeh program console pe kuch nahi dikhata - sab kuch popup windows mein hota hai!

---

## Chapter 6 - Arrays

---

### Listing 6.2 - `ReverseOrder.java`
> **Array index processing - Numbers ko ulta print karo**

**Kya karta hai?**
10 numbers user se lega, array mein store karega, phir ulte order mein print karega.

**Key Concepts:**
```java
double[] numbers = new double[10];  // 10 elements ka array banao
numbers.length                      // array ki size (10)
```

**Do loops:**
1. Pehla loop: `index = 0 to 9` -> numbers fill karo
2. Doosra loop: `index = 9 to 0` -> ulte print karo

---

### Listing 6.10 & 6.11 - `SortGrades.java` + `Sorts.java`
> **Sorting Algorithms - Selection Sort & Insertion Sort**

**Kya karta hai?**
Grades ka array sort karta hai aur print karta hai.

---

#### Selection Sort (int array ke liye):

**Logic:**
- Har pass mein sabse **chhota element dhundo**
- Use apni jagah pe swap karo
- `{89, 94, 69, 80}` -> `{69, 73, 77, 80, ...}`

```
Pass 1: Minimum dhundo (69), index 0 se swap karo
Pass 2: Baki mein minimum dhundo (73), index 1 se swap karo
...aur aaise chalta rahe
```

#### Insertion Sort (int array):

**Logic:**
- Ek ek karke elements uthao
- Apni sahi jagah pe **insert** karo (sorted portion mein)
- Playing cards sort karne jaisa!

#### Insertion Sort (Comparable objects):

Yahi logic, lekin yahan `compareTo()` method use hoti hai - strings, custom objects sab sort ho sakte hain!

---

### Listing 6.14 - `TwoDArray.java`
> **2D Array - 5x10 table**

**Kya karta hai?**
5 rows aur 10 columns ka 2D array banata hai, values fill karta hai aur table print karta hai.

**2D Array syntax:**
```java
int[][] table = new int[5][10];  // 5 rows, 10 columns
table[row][col]                   // kisi bhi cell ko access karo
```

**Values fill karne ka formula:**
```java
table[row][col] = row * 10 + col;
// Row 0: 0,1,2,3...9
// Row 1: 10,11,12...19
// Row 2: 20,21,22...29
```

**Output:**
```
0   1   2   3   4   5   6   7   8   9
10  11  12  13  14  15  16  17  18  19
20  21  22  23  24  25  26  27  28  29
...
```

---

## Quick Summary Table 

| Chapter | Listing | Main Concept |
|---------|---------|--------------|
| Ch. 3 | ReverseNumber | `do...while` loop |
| Ch. 4 | CountFlips + Coin | Programmer-defined class, Objects |
| Ch. 4 | Banking + Account | Methods, Encapsulation |
| Ch. 4 | SnakeEyes + Die | Overloaded Constructors |
| Ch. 5 | Complexity + Question | Interface implementation |
| Ch. 5 | MiniQuiz | Interface use karna |
| Ch. 5 | EvenOdd | JOptionPane (GUI dialogs) |
| Ch. 6 | ReverseOrder | 1D Array |
| Ch. 6 | SortGrades + Sorts | Selection & Insertion Sort |
| Ch. 6 | TwoDArray | 2D Array |

---

*Yeh notes Java Software Solutions (Lewis/Loftus) ke liye hain - Hinglish mein samjhane ki koshish ki gayi hai *