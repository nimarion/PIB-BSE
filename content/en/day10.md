---
title: Tag 10
category: Vorlesung
position: 11
---
## Weiß, wie eine If-Anweisung in der Shell aufgebaut ist und wann in den then-Zweig verzweigt wird

```bash
if [ condition ]; then

fi
```

Then Zweig wird ausgeführt wenn condition true ist

## Weiß, wie eine If-Anweisung in der Shell aufgebaut ist und wann in den else-Zweig verzweigt wird

```bash
if [condition]
then
  echo "Condition is true"
else
  echo "Condition is false"
fi
```

Else Zweig wird ausgeführt wenn condition false ist.

## Kann mittels der Kontrollstruktur if ein Shell Skript schreiben, welches auf die Existenz einer Datei überprüft und diese dann auf dem Bildshirm ausgibt

```bash
#!/bin/bash
if test -f "$1"; then
    echo "$1 existiert."
fi
```

## Kann mittels for Schleife in meinem Homeverzeichnis die Größe aller Textdateien ausgeben.

```bash
#!/bin/bash
for FILE in $(ls ~/*.txt)
    do
        echo $FILE ":" $(wc -c < $FILE)
    done
```

## Weiß, wie man ein Shell Skript debuggt

```bash
set -x
```

## Weiß, wie ich einen Teil, z.B. eine Variable eines Shell Skripts debugge.

## Kann ein Shell Skript schreiben, welches ein Array mit Servern definiert. Jedes Array Element soll x-mal angepingt werden (x wird als Kommandozeilenparameter mitgegeben). Nachdem alle Server x-mal angepingt worden sind, soll eine Zusammenfassung von der Anzahl erreichbarer und nicht erreichbarer Server angegeben werden.

```bash
#!/bin/bash
for SERVER in google.de heise.de
    do
        ping $SERVER -c $1
    done
```

## Kenne den Unterschied zwischen Simple Commands und Compound  Commands.

Simple Commands sind einzelne Kommandos
Compound Commands ist eine abfolge von Kommandos die nacheinander ausgeführt werden

## Weiß, welche logischen Konsequenzen das Kommando continue in einer for-Schleife hat. Ich kann es anhand folgendem Shell Skripts erklären:

```bash
#!/bin/bash
for x in `seq 1 10`; do
 if [ $(($x % 2)) -eq “0“ ]; then
 continue
 else
 echo $x
 fi
done
```
