---
title: Tag 8
category: Vorlesung
position: 9
---
## Kann die Begriffe "Prozess" , "Programm" , "Kommando" und "Skript" gegeneinander abgrenzen

Prozess = Besteht aus aneinandergereihten Aktionen

Programm = Zusammensetzung von Prozessen

Kommando = Befehl / Anweisung an den Computer aus definierten Begriffen. Werden von der Shell ausgeführt

Skript = Liste von Befehlen die von der Shell ausgeführt werden

## Kenne die E/A-Kanäle sowie ihre Funktion und weiß, welchem Gerät sie standardmäßig zugeordnet sind

Eingabe Kanal stdin
Ausgabe Kanal stdout

## Kann erklären, warum man ein U/L- auch als "Filter"bezeichnet.

Programm kann die Eingabe mit Befehlen filter und über die Ausgabe zurückgeben

## Weiß, aufgrund welcher Eigenschaft sich viele U/L-Kommandos für die Verkettung mittels Pipe-Symbol "|" eignen

Lesen Eingaben auch von der Standard Eingabe ein und nicht nur aus Dateien bzw Argumenten

## Weiß, welche Wirkung das Pipe-Symbol "|" in folgender Kommandozeile hat: ls | wc –l

Verbindet die den Ausgabekanal von ls mit dem Eingabekanal von wc.

Ergebniss ist:

Gibt die Anzahl der Dateien und Ordner in dem aktuellen Verzeichnis aus

## Kann in meiner Java-Datei LinkFilter.java zählen, wieviele Zeilen die Modifikatoren "public" oder "protected" enthalten

```bash
grep -E "public|protected" LinkFilter.java | wc -l
```

## Weiß, wie ich die Java-Klasse ArtikelDialog so testen kann, dass die notwendigen Eingaben aus der Datei MyTest kommen

```bash
java ArtikelDialog < cat MyTest
```

## Kann an Beispielen die unterschiedliche Wirkungsweise der Umlenkungssymbole ">" und ">>" zeigen

*>* überschreibt eine Datei wenn sie existiert oder erstellt eine neue Datei wenn diese nicht existiert

*>>* hängt Text an eine existierende Datei an oder erstellt eine neue Datei wenn diese nicht existiert

## Weiß, wozu das Kommando tee dient

Ließt von der Standard Eingabe und gibt auf der Standard Ausgabe aus

## Weiß, ob ein bzw. welcher Unterschied zwischen den drei folgenden Kommandos besteht, wenn das zugehörige Shellfenster unter /dev/pts/1 ansprechbar ist:

- ls

Gibt die Ausgabe von ls direkt in der aktuellen Shell Session aus

- ls > /dev/pts/1

Gibt die Ausgabe von ls in der Shell Session 1 aus

- ls | tee /dev/pts/1

Gibt die Ausgabe von ls in der Shell Session 1 aus und in der aktuellen Shell Session

## Weiß, warum bei folgendem Programmaufruf noch eine Meldung im Shellfenster erscheint:

```bash
java MyMathTest < Eingabe-Q4 > Ausgabe
```

Übergibt die Nutzereingaben in der Datei Eingabe-Q4 an das Java Programm welches seine Ausgabe in die Datei Ausgabe schreibt und Fehler normal in der aktuellen Shell ausgegeben werden

## Weiß, wozu die Datei /dev/null dient

Verwerfen von Daten

## Kann genau eine Kommandozeile so schreiben, dass bei fehlerhafter Übersetzung der Java-Klasse MyClass folgendes abläuft:

- der Inhalt des Shellfensters wird gelöscht

```bash
javac MyClass.java || clear
````

- die Fehler werden im Shellfensters angezeigt

```bash
javac MyClass.java
```

- die Shell pausiert für 30 Sekunden

```bash
javac MyClass.java || sleep 30
```

- MyClass.java wird in einem Editor geöffnet

```bash
javac MyClass.java || vi MyClass.java
```