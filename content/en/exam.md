---
title: Klausur
position: 13
---

## Aufgabe 1

a) ersteDatei kann von allen Nutzern gelesen werden. zweiteDatei kann nur von dem Besitzer gelesen werden. 

b) ersteDatei kann vom Besitzer und anderen verändert werden. Die Gruppe kann die Datei nicht ändern. zweiteDatei kann von niemandem verändert werden.

c) Jeder außer anderen kann die Dateien löschen. 

d) Jeder außer anderen kann Dateien bzw Verzeichnisse anlegen. 

## Aufgabe 2

Tastatur, Bildschirm

![Skizze](einausgabe.jpg)


## Aufgabe 3

`*` steht für jedes x beliebige Zeichen
```bash
ls *.java
``` 
Zeigt alle Dateien die mit .java enden. Der Dateiname spielt keine Rolle

```bash
rm *.bak
```
Löscht alle Dateien welche auf .bak enden. 

`?` steht **ein** x beliebiges Zeichen

```bash
ls ?rtikel.java
```
Gibt alle Datein aus die mit rtikel.java enden und ein x beliebiges Zeichen davor haben. Zum Beispiel Trtikel.java oder Artikel.java

```bash
rm ?.bak
```
Löscht alle Dateien welche auf .bak enden und aus einem beliegen Zeichen bestehen. Zum Beispiel a.bak oder e.bak

`[string]` steht für alle Zeichen die innerhalb der Klammer angegeben werden

```bash
ls [abc].java
```
Gibt alle Dateien aus die a.java b.java oder c.java heißen.
Alternativ auch [a-c] möglich. 

```bash
rm test[1234].bak
```
Löscht alle Dateien test1.bak test2.bak test3.bak test4.bak

`[zeichen1-zeichenX]` steht für die Zeichenfolge von zeichen1 bis zeichenX

```
ls [a-e].java
```

Gibt alle Dateien an die a.java - e.java heißen


`[!zeichen1-zeichenX]` steht für alles was nicht der Zeichenfolge von zeichen1 bis zeichenX entspricht

```
ls [a-e].java
```

Gibt alle Dateien an die f.java - z.java heißen

## Aufgabe 4

a) 
```bash
ls [!.]?.ksh| wc -l
```

b) 
```bash
{ ls [a-z]*.ksh ; ls [A-Z]*.java ; ls [0-9]*.sql 2> /dev/null; } | wc -l
```

## Aufgabe 5

```
Hallöli

```

Der Befehl in den Klammern wird in einer Subshell ausgeführt. Die lokal geändert Variable ist daher nur in der Subshell verfügbar und daher bei der zweiten Ausgabe leer. 

```
Anzahl der Dateien
/etc
```

Führt die Befehle in der aktuellen Shell aus. Durch das Pipe Symbol wird die Ausgabe an das Kommando wc weitergeleitet, welches die Anzahl der Zeilen ausgibt. pwd gibt danach das aktuelle Verzeichnis aus

## Aufgabe 6

*nicht getestet*

```bash
javac Artikel.java && TesteArtikel > java TesteArtikel > TestAusgabe 2> TestFehler
```

## Aufgabe 7

```bash
#!/bin/bash 
for i in $*; do 
   echo $i 
done
```

