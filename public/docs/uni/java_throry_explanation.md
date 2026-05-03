# ☕ Java Software Solutions — Beginner's Complete Guide
### Saare 16 Topics — Bilkul Simple Tarike Se!
> 📚 Based on: Java Software Solutions by Lewis / Loftus

---

> 💡 **Yeh guide kiske liye hai?**
> Agar tumne kabhi programming nahi ki, koi baat nahi! Har topic ko ekdum simple bhasha mein, real life examples ke saath samjhaya gaya hai. Bas dhyan se padho! 😊

---

## 📋 Topics List

1. [String Class](#1-string-class)
2. [Math Class](#2-math-class)
3. [Keyboard / Scanner Class](#3-keyboard--scanner-class)
4. [Conditional Operator](#4-conditional-operator-)
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

### String kya hota hai?

Soch lo tum kisi ko message likhte ho — **"Hello Ahmed!"** — yeh ek String hai!

Java mein String ek **word ya sentence** hota hai jo double quotes mein likha jata hai.

```java
String name = "Ahmed";
String sentence = "Java bahut easy hai!";
```

### ⚠️ Sabse Zaroori Baat — String IMMUTABLE hai!

**Immutable** ka matlab — ek baar banaya, toh **badla nahi ja sakta!**

Real life example: Socho tumne ek pathar par naam likha. Ab woh naam change nahi hoga. Agar naya naam chahiye, toh **naya pathar** lena hoga!

Java mein bhi aisa hi hota hai — jab String "change" karte hain, actually **naya String banta hai**, purana wahi rehta hai!

### Index kya hota hai?

Index matlab **position number** — aur yeh **0 se shuru hota hai!**

```
H  e  l  l  o
0  1  2  3  4
```

`"Hello"` mein `H` ka index 0 hai, `e` ka index 1 hai, wagera wagera.

### String ke Important Methods

| Method | Kya karta hai | Example |
|---|---|---|
| `length()` | Kitne characters hain | `"Hello".length()` → 5 |
| `charAt(i)` | Index par kaunsa character | `"Hello".charAt(0)` → 'H' |
| `concat(s)` | Do strings jodta hai | `"Hi".concat("!")` → "Hi!" |
| `toUpperCase()` | Sab CAPITAL kar deta hai | `"hello".toUpperCase()` → "HELLO" |
| `toLowerCase()` | Sab small kar deta hai | `"HELLO".toLowerCase()` → "hello" |
| `replace(a,b)` | Character badal deta hai | `"cat".replace('c','b')` → "bat" |
| `substring(s,e)` | String ka hissa nikalta hai | `"Hello".substring(1,3)` → "el" |
| `equals(s)` | Dono same hain? | `"hi".equals("hi")` → true |
| `equalsIgnoreCase(s)` | Case ignore karke compare | `"HI".equalsIgnoreCase("hi")` → true |
| `compareTo(s)` | Dictionary order check | `"apple".compareTo("banana")` → negative |

### `compareTo()` — Thoda Detail Mein

Socho **dictionary** — words A se Z order mein hote hain.

- Pehle aane wala word → **Negative number** return karta hai
- Dono same → **0** return karta hai
- Baad mein aane wala → **Positive number** return karta hai

```java
"apple".compareTo("banana")  // Negative — apple dictionary mein pehle hai
"apple".compareTo("apple")   // 0 — bilkul same hain
"mango".compareTo("apple")   // Positive — mango baad mein aata hai
```

Agar pehla letter same ho, toh doosra letter dekha jata hai, phir teesra — jab tak koi farq na mile!

### `substring()` — Yaad Rakhne Ki Trick

`substring(start, end)` — **start se leke (end-1) tak** characters leta hai!

```
H  e  l  l  o
0  1  2  3  4

"Hello".substring(1, 3) → "el"   (index 1 aur 2, index 3 nahi!)
```

### Example Program

```java
String phrase = "Change is inevitable";

String mutation1 = phrase.concat(", except from vending machines.");
// "Change is inevitable, except from vending machines."

String mutation2 = mutation1.toUpperCase();
// "CHANGE IS INEVITABLE, EXCEPT FROM VENDING MACHINES."

String mutation3 = mutation2.replace('E', 'X');
// "CHANGX IS INXVITABLX, XXCXPT FROM VXNDING MACHINXS."

String mutation4 = mutation3.substring(3, 30);
// "NGX IS INXVITABLX, XXCXPT F"
```

> 💡 `phrase` end tak bhi `"Change is inevitable"` hi rehta hai — immutable yaad hai?

### ✅ Ek Line Mein Yaad Karo

> **String ek baar banta hai, badlta nahi — methods hamesha NAYA string return karte hain!**

---

## 2. Math Class

### Math Class kya hai?

Calculator ki tarah — sab mathematical kaam yeh class karta hai!

```java
Math.sqrt(25)   // Square root
Math.pow(2, 3)  // Power
Math.abs(-5)    // Absolute value
```

> 💡 **Koi import nahi chahiye!** Math class automatically available hoti hai Java mein.

### Important Methods

| Method | Kya karta hai | Example |
|---|---|---|
| `Math.abs(n)` | Negative ko positive karta hai | `abs(-15)` → 15 |
| `Math.sqrt(n)` | Square root nikalta hai | `sqrt(25)` → 5.0 |
| `Math.pow(n,p)` | n ki p power | `pow(2,3)` → 8.0 |
| `Math.random()` | Random number 0.0 se 0.999 tak | `random()` → 0.73... |
| `Math.floor(n)` | Neeche round karta hai | `floor(3.9)` → 3.0 |
| `Math.ceil(n)` | Upar round karta hai | `ceil(3.1)` → 4.0 |
| `Math.sin(angle)` | Sine nikalta hai | angle radians mein |
| `Math.cos(angle)` | Cosine nikalta hai | angle radians mein |

### Real Life Examples

**`Math.abs()`** — Socho thermometer -5 degree dikhaye. "Kitna thanda hai?" poochho toh 5 bologe, -5 nahi! Yehi karta hai `abs()`.

**`Math.floor()`** — Socho lift: 3.9th floor nahi hota, **3rd floor** par rukti hai. Neeche!

**`Math.ceil()`** — Dukandaar: "2.1 kg aata chahiye" — woh **3 kg** dega. Upar!

**`Math.random()`** — Dice roll jaisa — kuch bhi aa sakta hai 0 se 1 ke beech!

### ⚠️ Zaroori Baat

```java
// Object banane ki zarurat NAHI!
Math.sqrt(25);   // ✅ Sahi — seedha class name se call karo
```

### ✅ Ek Line Mein Yaad Karo

> **Math class = Calculator — seedha `Math.method()` likho, koi setup nahi chahiye!**

---

## 3. Keyboard / Scanner Class

### Yeh Kya Hai?

Jab program user se kuch **poochhe** — name, age, number — tab yeh class use hoti hai!

Real life: ATM machine tumse PIN maangti hai — woh bhi kuch aisa hi karta hai!

### Import Karna Zaroori Hai!

```java
import cs1.Keyboard;  // Yeh line sabse upar likhni hai!
```

### Keyboard Class Methods

| Method | Kya leta hai user se |
|---|---|
| `Keyboard.readInt()` | Poora number (1, 2, 100) |
| `Keyboard.readDouble()` | Decimal number (1.5, 3.14) |
| `Keyboard.readString()` | Text ("Ahmed", "Hello") |
| `Keyboard.readChar()` | Ek akela character ('A', 'z') |
| `Keyboard.readBoolean()` | true ya false |

### Example

```java
import cs1.Keyboard;

System.out.print("Apna naam likho: ");
String name = Keyboard.readString();   // User naam likhega

System.out.print("Apni umar likho: ");
int age = Keyboard.readInt();          // User number likhega

System.out.print("Apna GPA likho: ");
double gpa = Keyboard.readDouble();    // User decimal likhega
```

### ⚠️ Zaroori Baat

Keyboard class **static** hai — matlab seedha `Keyboard.readInt()` likho, pehle koi object banana nahi padta!

### ✅ Ek Line Mein Yaad Karo

> **User se input lena ho → `Keyboard.readTYPE()` — TYPE woh likho jo chahiye (Int, Double, String)!**

---

## 4. Conditional Operator `?:`

### Yeh Kya Hai?

If-Else ko **ek hi line** mein likhne ka shortcut!

Real life: "Agar baarish hai toh chhaata lo, warna mat lo" — yahi kaam yeh operator karta hai!

### Formula

```
condition ? value_if_true : value_if_false
```

Teen parts hain — isliye **Ternary Operator** bhi kehte hain!

### If-Else vs Ternary

```java
// Purana tarika — If-Else (4 lines)
if (num % 2 == 0)
    result = "even";
else
    result = "odd";

// Naya shortcut — Ternary (1 line!)
String result = (num % 2 == 0) ? "even" : "odd";
```

Dono **bilkul same kaam** karte hain!

### Examples

```java
// Bada number nikalo
int larger = (num1 > num2) ? num1 : num2;
// Agar num1 > num2 hai toh num1 lega, warna num2

// Even ya Odd check
String result = "That number is " + ((num % 2 == 0) ? "even" : "odd");
// num=4 → "That number is even"
// num=7 → "That number is odd"
```

### ⚠️ Rule Yaad Rakho

Dono sides ki **type same** honi chahiye:
```java
int x = (a > b) ? 10 : 20;       // ✅ Dono int
String s = (a > b) ? "Yes" : "No"; // ✅ Dono String
int x = (a > b) ? 10 : "No";     // ❌ Galat! Ek int, ek String
```

### ✅ Ek Line Mein Yaad Karo

> **`condition ? true_value : false_value` — If-Else ka ek line wala shortcut!**

---

## 5. StringTokenizer Class

### Yeh Kya Karta Hai?

Ek badi string ko **chote chote pieces** mein tod deta hai!

Real life example: "The quick brown fox" — yeh ek sentence hai. StringTokenizer ise tod deta hai:
- "The"
- "quick"
- "brown"
- "fox"

Jaise sentence ko **alag alag words** mein tod do!

### Import Karna Zaroori Hai!

```java
import java.util.StringTokenizer;
```

### Methods

| Method | Kya karta hai |
|---|---|
| `hasMoreTokens()` | Aur pieces baaki hain? (true/false) |
| `nextToken()` | Agla piece do |
| `countTokens()` | Kitne pieces baaki hain |

### Basic Example — Spaces se todna

```java
String sentence = "The quick brown fox";
StringTokenizer st = new StringTokenizer(sentence);

while (st.hasMoreTokens())
{
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

Default mein **space** par todta hai!

### Custom Delimiter — Kisi bhi cheez par todo

```java
// URL ko "/" aur "." par todo
String url = "www.csc.villanova.edu/academics/courses";
StringTokenizer st = new StringTokenizer(url, "./");
// Yahan "./" matlab dot aur slash dono delimiter hain

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

### Real Life Analogy

Socho ek mala (necklace) hai — uski dori kaato toh sab moti alag ho jaate hain. StringTokenizer wahi karta hai — string ki "dori" kaato, sab words alag!

### ✅ Ek Line Mein Yaad Karo

> **StringTokenizer = Kainchi — string ko pieces mein kaato, phir ek ek karke use karo!**

---

## 6. Constructor

### Constructor Kya Hota Hai?

Jab koi naya object banta hai, **constructor automatically call** hota hai — ek "welcome ceremony" ki tarah!

Real life: Naya phone kharida → factory ne usse setup kiya (default ringtone, default wallpaper) — yahi kaam constructor karta hai!

### Rules

- Class ke naam jaisa hi naam hota hai
- Koi return type nahi hota (void bhi nahi!)
- `new` keyword se automatically call hota hai

### Basic Constructor

```java
public class Account
{
    private String name;
    private double balance;

    // Constructor
    public Account(String owner, double initial)
    {
        name    = owner;     // jo diya woh set karo
        balance = initial;
    }
}

// Use karna:
Account acct = new Account("Ahmed", 5000);
//                          ↑        ↑
//                        name    balance
```

### Overloaded Constructors — Ek se zyada constructors!

Ek class mein **multiple constructors** ho sakte hain — alag alag parameters ke saath!

```java
public class Die  // Pasay (dice) ki class
{
    private int numFaces;

    // Constructor 1 — koi parameter nahi → 6 sides wala pasay
    public Die()
    {
        numFaces = 6;
    }

    // Constructor 2 — parameter diya → custom sides wala pasay
    public Die(int faces)
    {
        numFaces = faces;
    }
}

// Use karna:
Die die1 = new Die();     // 6 sides wala
Die die2 = new Die(20);   // 20 sides wala
```

### Default Constructor

Agar tum **koi constructor nahi likhte**, Java khud ek banana deta hai — empty, kuch nahi karta!

### ✅ Ek Line Mein Yaad Karo

> **Constructor = Object ka pehla setup — `new` se automatically call hota hai, class ke naam jaisa naam hota hai!**

---

## 7. GUI Elements

### GUI Kya Hai?

**GUI = Graphical User Interface** — matlab buttons, text boxes, windows — jo cheezein hum mouse se click karte hain!

Real life: Calculator app mein buttons hain, text field hai — yeh sab GUI hai!

### Teen Zaroori Cheezein

#### 1. Components — Jo Screen Par Dikhta Hai

| Component | Kya hai |
|---|---|
| `JButton` | Click karne wala button |
| `JTextField` | Text likhne ki jagah |
| `JLabel` | Sirf text dikhane ke liye |
| `JApplet` | Pura window/container |

#### 2. Events — Kuch Hua!

Jab user kuch kare — button click kiya, keyboard dabaya — yeh **event** hai!

Real life: Ghar ki ghanti baji — yeh ek event hai!

#### 3. Listeners — Jo Sunta Hai

Listener **wait karta hai** kisi event ka, aur jab event aaye toh **react karta hai!**

Real life: Chowkidar darwaze par khada rehta hai (wait) — jab ghanti baje (event) toh darwaza kholta hai (react)!

### GUI Banane Ke Teen Steps

```
Step 1: Components banao (button, label, etc.)
Step 2: Listener banao aur component se jodo
Step 3: Likho kya hoga jab event aaye
```

### Example — Button Click Counter

```java
// Button banao
JButton push = new JButton("Push Me!");

// Listener jodo
push.addActionListener(new ButtonListener());

// Listener class — kya hoga click par?
private class ButtonListener implements ActionListener
{
    public void actionPerformed(ActionEvent event)
    {
        pushes++;   // har click par count badha do
        label.setText("Pushes: " + pushes);
    }
}
```

### ✅ Ek Line Mein Yaad Karo

> **GUI = Component (dikhta hai) + Event (hota hai) + Listener (sunta hai aur react karta hai)!**

---

## 8. Arrays

### Array Kya Hota Hai?

Ek hi type ki **bahut saari values** ek saath store karne ka tarika!

Real life: Ek darz (dozen) anday ek dibby mein — woh dibba ek **array** hai! Har anday ki apni jagah (position) hai.

```
Dibba:  [ 🥚 | 🥚 | 🥚 | 🥚 | 🥚 | 🥚 ]
Index:    0    1    2    3    4    5
```

### Array Banana

```java
// 11 integers ka array banao
int[] height = new int[11];
//    ↑               ↑
//  int type      11 jagahein

// Access karna:
height[0] = 150;   // pehli jagah
height[5] = 175;   // chathi jagah
height[10] = 160;  // akhri jagah (11 mein se)
```

### Shortcut — Seedha Values Daal Do

```java
int[] grades = {89, 94, 69, 80, 97, 85, 73, 91, 77, 85, 93};
//               ↑                                           ↑
//          index 0                                    index 10
```

### Zaroori Rules

- Index hamesha **0 se shuru** hota hai
- 11 elements wale array mein last index **10** hoga
- `arrayName.length` se size pata chalti hai
- Ek baar size fix kar diya toh **badal nahi sakta!**

### Loop se Array Use Karna

```java
int[] list = new int[5];

// Bharo
for (int i = 0; i < list.length; i++)
    list[i] = i * 10;
// list = [0, 10, 20, 30, 40]

// Print karo
for (int i = 0; i < list.length; i++)
    System.out.print(list[i] + " ");
// Output: 0 10 20 30 40
```

### 2D Array — Table ki Tarah

```java
int[][] table = new int[5][10];
//                      ↑  ↑
//                   5 rows  10 columns
```

Real life: Excel sheet — rows aur columns hoti hain, wahi 2D array hai!

### ✅ Ek Line Mein Yaad Karo

> **Array = Ek hi type ki values ki line — index 0 se shuru, size fix hoti hai!**

---

## 9. Try-Catch-Finally

### Yeh Kya Hai?

Program mein **galti** aa jaye toh **crash na ho** — yahi kaam try-catch karta hai!

Real life: Driving karte waqt accident ho jaaye — safety belt hai toh bachoge! Try-catch wahi safety belt hai program ki!

### Format

```java
try
{
    // Woh code jo galat ho sakta hai
}
catch (ExceptionType e)
{
    // Galti hui toh yahan aao
}
finally
{
    // Hamesha chalega — galti ho ya na ho!
}
```

### Kaise Kaam Karta Hai?

```
try block chala
    ↓
Koi error aayi?
    ↓           ↓
   Haan         Nahi
    ↓             ↓
catch block    aage badho
chala
    ↓
finally block chala (hamesha!)
```

### Real Example

```java
try
{
    int number = Integer.parseInt("abc");  // "abc" ko number nahi bana sakte!
}
catch (NumberFormatException e)
{
    System.out.println("Yeh number nahi hai!");  // Yeh chalega
}
finally
{
    System.out.println("Done!");  // Yeh hamesha chalega
}
```

**Output:**
```
Yeh number nahi hai!
Done!
```

### Multiple Catch — Alag Alag Galtiyon Ke Liye

```java
try
{
    // code
}
catch (StringIndexOutOfBoundsException e)
{
    System.out.println("String bahut choti hai!");
}
catch (NumberFormatException e)
{
    System.out.println("Number galat hai!");
}
finally
{
    System.out.println("Hamesha chalega!");
}
```

### Common Exceptions Yaad Karo

| Exception | Kab aati hai |
|---|---|
| `NumberFormatException` | "abc" ko number banana chaho |
| `StringIndexOutOfBoundsException` | String se bahar ka index maango |
| `ArrayIndexOutOfBoundsException` | Array se bahar ka index maango |

### ✅ Ek Line Mein Yaad Karo

> **Try = Koshish karo, Catch = Galti pakdo, Finally = Hamesha chalega!**

---

## 10. Static Variables & Methods

### Static Variable Kya Hai?

Normal variable — **har object ka apna** hota hai.
Static variable — **sab objects mein ایکHI** hota hai — share hota hai!

Real life analogy:
- Normal variable = Har student ka apna pen (alag alag)
- Static variable = Class ka whiteboard (sab students share karte hain — ek hi hai!)

### Static Variable Example

```java
public class Slogan
{
    private String phrase;          // Har object ka apna
    private static int count = 0;  // Sab objects share karte hain — ایکHI!

    public Slogan(String str)
    {
        phrase = str;
        count++;   // Jab bhi naya Slogan bane, count badh jaye
    }
}

// 5 objects banaye:
Slogan s1 = new Slogan("Remember the Alamo.");
Slogan s2 = new Slogan("Don't Worry. Be Happy.");
// ...5 tak

System.out.println(Slogan.getCount());  // 5
```

### Static Method Kya Hai?

Normal method — object banana padta hai pehle.
Static method — **seedha class name se** call kar sakte ho!

```java
// Static method — seedha call karo, object ki zarurat nahi!
Math.sqrt(25);        // ✅ Math ka object nahi banaya
Slogan.getCount();    // ✅ Slogan ka object nahi banaya
```

### ⚠️ Important Rules

- Static method **instance variables access nahi kar sakta** (woh kisi ek object ke nahi hote!)
- Static variable ko class naam se access karo: `ClassName.variable`
- Constants (`final`) aksar `static` bhi hote hain

```java
// Constant — static aur final dono
final static int MAX = 100;
```

### ✅ Ek Line Mein Yaad Karo

> **Static = Shared — variable ek hi copy hoti hai sab ke liye, method bina object ke call hota hai!**

---

## 11. Nested & Inner Classes

### Nested Class Kya Hai?

Class ke **andar** ek aur class!

Real life: Ghar (outer class) ke andar kamra (inner class) — kamra ghar ke baghair exist nahi karta!

```java
public class Outer          // Bahari class
{
    private int num = 10;

    private class Inner     // Andar wali class
    {
        public String message;

        public String toString()
        {
            num++;          // Inner class, Outer ki private variable access kar sakti hai!
            return message + " — num = " + num;
        }
    }
}
```

### Inner Class ki Khaasiyat

- Outer class ki **private variables** directly access kar sakti hai
- Outer class ka object bane bina, Inner class ka object **nahi ban sakta**
- Inner class ko `static` declare nahi kar sakte

### Kahan Use Hoti Hai?

**GUI programming mein!** — Listener classes aksar inner classes hoti hain:

```java
public class MyApp extends JApplet
{
    private JButton button;

    public void init()
    {
        button = new JButton("Click!");
        button.addActionListener(new ButtonListener());
    }

    // Inner class — listener!
    private class ButtonListener implements ActionListener
    {
        public void actionPerformed(ActionEvent e)
        {
            // Outer class ki variables directly use kar sakte hain!
        }
    }
}
```

### Static Nested Class

Agar nested class `static` ho, toh woh **outer class ki instance variables access nahi kar sakti!**

### ✅ Ek Line Mein Yaad Karo

> **Inner Class = Class ke andar class — outer ki private cheezein directly access kar sakti hai, GUI mein listeners ke liye use hoti hai!**

---

## 12. Interfaces & Abstract Methods

### Interface Kya Hai?

Interface ek **list of rules** hai — "Jo bhi mujhe implement karega, usse YEH YEH methods banana zaroori hain!"

Real life: Job description — "Is job ke liye aapko English, Urdu, aur Excel aana chahiye." Rules fix hain, koi bhi apply kar sakta hai!

### Abstract Method Kya Hai?

Abstract method ka koi **body nahi hota** — sirf naam aur parameters:

```java
// Abstract method — body nahi!
public void setComplexity(int complexity);  // bas semicolon!
```

### Interface Banana

```java
public interface Complexity
{
    public void setComplexity(int complexity);  // Abstract method
    public int getComplexity();                 // Abstract method
}
```

### Interface Implement Karna

```java
public class Question implements Complexity   // "implements" keyword!
{
    private int complexityLevel;

    // ZAROORI hai yeh method define karna!
    public void setComplexity(int level)
    {
        complexityLevel = level;
    }

    // ZAROORI hai yeh bhi!
    public int getComplexity()
    {
        return complexityLevel;
    }
}
```

### Rules Yaad Karo

- Interface implement karo toh **sab methods define karne zaroori** hain
- Ek class **multiple interfaces** implement kar sakti hai
- Interface mein methods by default `public` hote hain
- Interface ka object **nahi ban sakta**

```java
// Multiple interfaces!
class ManyThings implements Interface1, Interface2, Interface3
{
    // Teen interfaces ke sab methods define karne honge!
}
```

### ✅ Ek Line Mein Yaad Karo

> **Interface = Contract (agreement) — jo class implement kare, usse sab methods banana ZAROORI hai!**

---

## 13. Dialog Box Methods

### Dialog Box Kya Hota Hai?

Woh **popup windows** jo screen par aate hain — "Are you sure?" ya "Enter your name" wali!

Real life: WhatsApp mein "Delete for everyone?" ka popup — wahi dialog box hai!

### Import Karna Zaroori Hai!

```java
import javax.swing.JOptionPane;
```

### Teen Types ke Dialog Boxes

#### 1. Message Dialog — Sirf Message Dikhao

```java
JOptionPane.showMessageDialog(null, "Hello! Yeh ek message hai.");
// Sirf "OK" button hota hai
```

#### 2. Input Dialog — User Se Input Lo

```java
String name = JOptionPane.showInputDialog("Apna naam likho:");
// Text field hoti hai — user kuch likhe aur OK kare
```

#### 3. Confirm Dialog — Yes/No Poochho

```java
int choice = JOptionPane.showConfirmDialog(null, "Aur ek baar karein?");

if (choice == JOptionPane.YES_OPTION)
    System.out.println("User ne Yes kaha!");
else
    System.out.println("User ne No kaha!");
```

### Return Values Yaad Karo

| Constant | Matlab |
|---|---|
| `JOptionPane.YES_OPTION` | User ne Yes dabaya |
| `JOptionPane.NO_OPTION` | User ne No dabaya |
| `JOptionPane.CANCEL_OPTION` | User ne Cancel dabaya |

### Complete Example

```java
import javax.swing.JOptionPane;

String numStr = JOptionPane.showInputDialog("Ek number likho:");
int num = Integer.parseInt(numStr);

String result = "Woh number " + ((num % 2 == 0) ? "even" : "odd") + " hai!";
JOptionPane.showMessageDialog(null, result);

int again = JOptionPane.showConfirmDialog(null, "Aur karna hai?");
// YES_OPTION, NO_OPTION, ya CANCEL_OPTION
```

### ✅ Ek Line Mein Yaad Karo

> **JOptionPane = Popup windows — showMessage (batao), showInput (lo), showConfirm (poochho)!**

---

## 14. Method Overloading

### Overloading Kya Hai?

**Same naam, alag parameters** — ek se zyada methods same naam ke saath!

Real life: "Print karo" bol sakte ho — photo print karo, document print karo, ya T-shirt print karo! Kaam same (print) hai, cheez alag alag!

### Example — `println` sabse bada example hai!

```java
System.out.println("Hello");     // String print karta hai
System.out.println(42);          // Integer print karta hai
System.out.println(3.14);        // Double print karta hai
System.out.println(true);        // Boolean print karta hai
```

Yeh sab **alag alag methods** hain — same naam `println`, alag parameters!

### Apna Overloaded Method Banana

```java
public class Die
{
    // Method 1 — koi parameter nahi
    public Die()
    {
        numFaces = 6;   // default 6 sides
    }

    // Method 2 — ek parameter
    public Die(int faces)
    {
        numFaces = faces;   // custom sides
    }
}

Die die1 = new Die();     // Method 1 chala — 6 sides
Die die2 = new Die(20);   // Method 2 chala — 20 sides
```

### Method Signature — Java Kaise Decide Karta Hai Kaunsa Method Chalaye?

**Signature** = Method ka naam + Parameters ka type aur number

```java
// Yeh alag alag signatures hain:
void print(int x)        // naam: print, parameter: int
void print(double x)     // naam: print, parameter: double
void print(int x, int y) // naam: print, parameters: int, int
```

### ⚠️ Yaad Rakhna

Return type **signature ka hissa nahi** hota!

```java
int getValue()     // ✅
double getValue()  // ❌ Compiler error! Sirf return type alag nahi kar sakta
```

### ✅ Ek Line Mein Yaad Karo

> **Overloading = Same naam, alag parameters — Java khud samajhta hai kaunsa method call karna hai!**

---

## 15. Method Decomposition

### Kya Matlab Hai?

Ek bada mushkil kaam — **chote chote parts mein todo!**

Real life: Biryani banana — seedha nahi bante! Pehle chawal pakao, phir masala bano, phir gosht pako, phir sab milao! Har step alag method!

### Kyun Zaroori Hai?

- Ek method bahut lamba na ho
- Code samajhna aasaan ho
- Har chota method ek kaam kare
- Helper methods `private` hoti hain

### Example — Pig Latin Translator

Pig Latin: "apple" → "appleyay", "banana" → "ananabay"

Seedha likhne ke bajaye, tod diya:

```java
// Main method — sab coordinate karta hai
public String translate(String sentence)
{
    // Har word ke liye translateWord() call karo
}

// Helper 1 — ek word translate karta hai
private String translateWord(String word)
{
    if (beginsWithVowel(word))
        return word + "yay";
    else
        return word.substring(1) + word.charAt(0) + "ay";
}

// Helper 2 — vowel se shuru hota hai?
private boolean beginsWithVowel(String word)
{
    String vowels = "aeiou";
    return (vowels.indexOf(word.charAt(0)) != -1);
}

// Helper 3 — consonant blend se shuru hota hai?
private boolean beginsWithBlend(String word)
{
    return (word.startsWith("bl") || word.startsWith("br") || ...);
}
```

### Private vs Public Methods

| | Public | Private |
|---|---|---|
| Kahan se call ho sakta | Kahin bhi | Sirf usi class se |
| Kab use karein | Main methods | Helper methods |

### ✅ Ek Line Mein Yaad Karo

> **Method Decomposition = Bada kaam todo chote kaamon mein — helper methods `private` hoti hain!**

---

## 16. ArrayList Methods

### ArrayList Kya Hai?

Normal array ki tarah — lekin **size automatically badh-ghata rehta hai!**

Real life: Normal array = Fixed size dabbа (10 jagah hain toh 10 hi hain). ArrayList = Rubber ka dabba — jitna chahiye utna bada ho jaata hai!

### Import Karna Zaroori Hai!

```java
import java.util.ArrayList;
```

### ArrayList Banana

```java
ArrayList band = new ArrayList();   // Khali list
```

### Important Methods

| Method | Kya karta hai |
|---|---|
| `add(obj)` | End mein add karo |
| `add(index, obj)` | Kisi jagah par add karo |
| `remove(index)` | Kisi jagah se hatao |
| `get(index)` | Kisi jagah ka element lo |
| `size()` | Kitne elements hain |
| `indexOf(obj)` | Kahan hai woh element |
| `contains(obj)` | Hai ya nahi? (true/false) |
| `isEmpty()` | Khali hai? (true/false) |
| `clear()` | Sab hatao |

### Complete Example

```java
import java.util.ArrayList;

ArrayList band = new ArrayList();

band.add("Paul");     // ["Paul"]
band.add("Pete");     // ["Paul", "Pete"]
band.add("John");     // ["Paul", "Pete", "John"]
band.add("George");   // ["Paul", "Pete", "John", "George"]

System.out.println(band);   // [Paul, Pete, John, George]

// Pete hatao
int location = band.indexOf("Pete");   // location = 1
band.remove(location);
System.out.println(band);   // [Paul, John, George]

// Index 1 par kya hai?
System.out.println("At index 1: " + band.get(1));   // John

// Ringo ko index 2 par daalo
band.add(2, "Ringo");
System.out.println(band);   // [Paul, John, Ringo, George]

System.out.println("Size: " + band.size());   // 4
```

### Array vs ArrayList — Farq

| | Array | ArrayList |
|---|---|---|
| Size | Fixed | Automatic |
| Declaration | `int[] arr = new int[10]` | `ArrayList list = new ArrayList()` |
| Add karna | Direct assign | `list.add()` |
| Remove karna | Mushkil | `list.remove()` |
| Size pata karna | `arr.length` | `list.size()` |

### ⚠️ Zaroori Baat

Jab element remove karo — **baaki sab automatically shift** ho jaate hain!

```
Pehle:  [Paul, Pete, John, George]  (indexes: 0, 1, 2, 3)
Pete hataya (index 1)
Baad:   [Paul, John, George]        (indexes: 0, 1, 2)
John ab index 1 par hai, 2 par nahi!
```

### ✅ Ek Line Mein Yaad Karo

> **ArrayList = Flexible array — size khud badh-ghata hai, add/remove aasaan hai!**

---

## 🎯 Final Quick Revision — Exam Se Pehle!

| Topic | Yaad Rakho |
|---|---|
| **String** | Immutable! Methods naya string return karte hain |
| **Math** | Static methods — `Math.sqrt()`, `Math.pow()`, `Math.abs()` |
| **Keyboard** | `Keyboard.readInt()`, `readString()`, `readDouble()` |
| **Ternary** | `condition ? true : false` — if-else ka shortcut |
| **StringTokenizer** | String ko pieces mein toda, `hasMoreTokens()` + `nextToken()` |
| **Constructor** | Class ke naam jaisa, koi return type nahi, `new` se call |
| **GUI** | Component + Event + Listener |
| **Array** | Index 0 se, fixed size, `array.length` |
| **Try-Catch** | Try karo, galti pakdo, finally hamesha chalta hai |
| **Static** | Shared — bina object ke call, ek hi copy |
| **Inner Class** | Class ke andar class, outer ki private access |
| **Interface** | Contract — sab methods implement karne zaroori |
| **JOptionPane** | showMessage, showInput, showConfirm |
| **Overloading** | Same naam, alag parameters |
| **Decomposition** | Bada method todo, helper = private |
| **ArrayList** | Flexible array — add/remove aasaan, size automatic |

---

> 📝 **Best of luck exam mein!** 🍀
> Yeh guide baar baar padho — sab samajh aa jaayega!

---
*Java Software Solutions — Lewis / Loftus | Beginner's Guide*