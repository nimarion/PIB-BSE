---
title: Tag 3
category: Vorlesung
position: 4
---
## Kann alle Einträge ermitteln, die in meinem Teilbaum sind,beginnend beim HOME-Directory , liegen und größer als 500 Kilobytes sind

```bash
find . -size +500k
```

## Kann in meinem Verzeichnis ueb02 in der Datei Artikel.java jede Zeile ausgeben, die mindestens einen der Modifikatoren public , private oder protected enthält

```bash
grep -E "public|protected|private" Artikel.java
```

## Weiß, unter welchen Pfadangaben ich das Programm und die Handbuchseiten des Kommandos echo finden kann

```bash
whereis echo
man echo
```

## Weiß, wie ich mit echo das Sonderzeichen "newline " ausgeben kann

```bash
echo "\n"
```

## Kann mir mit diff oder sdiff die Unterschiede der Dateien Artikel.java aus Übung 1 und Übung 2 anzeigen lassen

```
sdiff ueb01/Artikel.java ueb02/Artikel.java
diff ueb01/Artikel.java ueb02/Artikel.java
```

## Kann die lange Liste aller Einträge in meinem HOME-Directory numerisch sortiert nach Tag, und bei gleichen Tagen numerisch sortiert nach Größe ausgeben

```bash
ls -la | sort -nk7 -nk5
```

## Weiß, wie ich meinen kompletten Teilbaum PRG-SPR aus dem HOME-Directory in ein zip-Archiv namens PSr übertragen kann

```bash
zip -r PSr PRG-SPR
```

## Weiß, wie ich mir den Inhalt des zip-Archiv PSr ansehen kann, ohne es auszupacken

```bash
unzip -l PSr.zip
```

## Kann erklären, was bei der langen Liste aller Einträge eines Verzeichnisses folgende Ausgabe bedeutet "d r – x r w – – w x"

![Unix Onion](rechte-notation.jpg)

## Kann mit einem Kommando bei allen Einträgen im aktuellen Verzeichnis der Gruppe OTHER alle Rechte wegnehmen

```bash
chmod 770 .
```

```bash
chmod -R 770 .
```

## Kann mit einem Kommando im aktuellen Verzeichnis und im kompletten Teilbaum darunter bei allen Einträgen die Rechte "r w x r - x --- " setzen

```bash
chmod -R 750 *
```

## Kann alle Einträge ermitteln, die in meinem Teilbaum, beginnend beim HOME-Directory , liegen und für alle lesbar sind

```bash
find . -perm -004 2> /dev/null
```
