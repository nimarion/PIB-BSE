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
Verzeichnis in welchem der Befehl ausgeführt wurde
```

Führt die Befehle in der aktuellen Shell aus. Durch das Pipe Symbol wird die Ausgabe an das Kommando wc weitergeleitet, welches die Anzahl der Zeilen ausgibt. pwd gibt danach das aktuelle Verzeichnis aus

## Aufgabe 6

*nicht getestet*

```bash
javac Artikel.java && TestEingabe > java TesteArtikel > TestAusgabe 2> TestFehler
```

## Aufgabe 7

```bash
#!/bin/bash 
for i in $*; do 
   echo $i 
done
```

## Aufgabe 8

a) ```/export/home_16/max/emails```

b) ```/export/home_16/max/```

c) ```/export/home_16/max/```

d) ```/export/home_16/tom/```

e) ```/export/home_16/ute/```

f) Befehlt funktioniert nicht mit ~tom im Pfad

g) ```/export```

h)```/export/home_pm/demo/...```

## Aufgabe 9

a) Führt den Ping Befehl 14x mit einer unterschiedlichen TTL aus auf den Hostname www.google.de. 

b)

1. Definiert eine For Schleife für Zahlen von 1 bis 14. Variable TTL stellt die aktuelle Zahl da im Schleifendurchlauf.

3. Gibt den Wert der Variable TTL aus
4. Führt den Ping Befehl mit der geänderten TTL aus auf den Host www.sonstwo.de

c) Führt Ping Anfragen an den Server hinter der Domain www.sonstwo.de aus mit einer TTL von 1-14 im jeweiligen Schleifendurchlauf. TTL stellt die Anzahl von Hops dar die das Paket durchlaufen darf bis es verworfen wird.

## Aufgabe 10

a) Führt den Befehl ```ls -l``` aus welcher alle Dateien und Ordner im aktuellen Verzeichnis listet und leitet diese an den Befehl ```tr -s " "``` weiter. Dieser entfernt alle überflüssigen Leerzeichen. Die Ausgabe wird wiederum an den Befehl ```cut -d " " -f9``` weitergeleitet, welcher als Trennelement ein Leerzeichen verwendet und mit -f9 die letzte Spalte ausschneidet und ausgibt. 

b) 
```bash
ls
```

## Aufgabe 11

a) Das Skript stellt ein interaktives Shell Programm dar, mit welcher der Anwender über Tastatureingaben verschieden Aktionen ausführen kann.
- Dateien im aktuellen Verzeichnis anzeigen
- Das Verzeichnis wechseln
- Dateien ausdrucken
- Skript beenden



