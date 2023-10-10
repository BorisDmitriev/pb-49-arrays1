# Map, Filter, Reduce

* Arbeite in der Datei "index.js", die in diesem Repository bereitgestellt wird.

#### 1. Gesamtbetrag der Bestellungen ermitteln
* Verwende eine Array-Methode, um den Gesamtbetrag des Arrays `orders` zu berechnen und speichere den resultierenden Wert (Summe) in einer Variablen namens `totalAmount`. 

```javascript
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
```

#### 2. Inkrementieren um 1
* Verwende eine Array-Methode, um jedes Element in dem unten stehenden Array um 1 zu erhöhen. Speichere das geänderte Array in einer Variablen namens `mappedArray`.

```javascript
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
```

#### 3. Gerade Zahlen filtern
* Erstelle eine Funktion namens `filterEvens`, die ein Array mit Zahlen filtert und nur gerade Zahlen zurückgibt. Die Funktion sollte ein Zahlen-Array als Argument annehmen und keine Schleife verwenden.

* Beispiele:
```javascript
filterEvens([1,2,3,11,12,13]); //liefert [2,12]
filterEvens([22,2,31,110,6,13]); //liefert [22,2,110,6]
```

#### 4. Freunde filtern
* Erstelle eine Funktion namens `filterFriends`, die zwei Argumente akzeptiert: ein Array und einen String. Sie filtert das Array anhand eines Suchstrings und gibt die Elemente zurück, die den Suchstring enthalten.

* Beispiele

```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
```

#### 5. Addieren
* Schreibe eine Funktion namens `sumUp`, die die Methode reduce benutzt, um ein Zahlenfeld zu addieren. 

* Beispiele:
```javascript
sumUp([1,2,3,4,5]); //liefert 15
sumUp([6,7,7]); //gibt 20 zurück
```

#### 6. Quadratwurzel
* Schreibe eine Funktion namens `getSquareRoot`, die ein Array mit Zahlen abbildet und ein Array mit der Quadratwurzel jedes Elements aus dem übergebenen Array zurückgibt.
