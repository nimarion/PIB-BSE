---
title: Tag 4
category: Vorlesung
position: 5
---
## Weiß, wie ich mir in meinem Verzeichnis PRG-SPR und allen dort vorhandenen Unterverzeichnissen (d.h. im kompletten Teilbaum) die Rechte aller enthaltenen Dateien/Verzeichnisse anzeigen lassen kann

```bash
ls PRG-SPR/ -lR
```

## Weiß, welche Teilinformationen ich von ls -l über Einträge im aktuellen Verzeichnis bekomme

- Rechte
- Links
- Name des Besitzer
- Gruppe des Besitzers
- Dateigröße in Bytes
- Datum der letzten Änderung
- Datei / Ordner Name

## Weiß, was bei ls -l die Ausgabe "−rwxr−−−w−" bedeutet

- Besitzer: Lesen, Schreiben, Ausführen
- Gruppe: Lesen
- Andere: Schreiben

## Weiß, welche Rechte wo mindestens gesetzt sein müssen, damit nur ich die Datei , die in meinem Verzeichnis Beispiele/java/euro steht, löschen kann

- Leserechte
- Schreibrechte

```bash
chmod 644 Beispiele/java/euro # -rw-r--r--
```

## Kenne zwei Arten, wie nur ich das Shell-Skript myScript ausführen kann, und welche Rechte myScript jeweils braucht

```bash
chmod 744 myScript #drwxr--r--
chmod 544 myScript #-r-xr--r--
```

## Weiß, warum ich das Skript dsbm im Ordner bin des Benutzers pick ausführen kann

Gruppe pi20 hat --x Rechte auf die Datei
Andere haben --x Rechte auf die Datei

```bash
ls -l dsbm
-rwxr-x--x. 1 pick stl 262 Dec  7 09:43 dsbm
```

## Weiß, mit welchem Kommando ich in einer Textdatei die Kleinbuchstaben opq durch die Großbuchstaben OPQ ersetzen kann

```bash
sed -i 's/opq/OPQ/g' file
```

## Weiß, mit welchem Kommando ich in einer Javaquelldatei überall den Text "Artikel" durch "Medium" ersetzen kann

```bash
sed -i 's/Artikel/Medium/g' file.java
```

## Weiß, wie ich die Ausgabe des Kommandos ls –l anschließend auf die Ausgabe des Dateityps, meiner Rechte und des Eigentümers reduzieren kann

```bash
ls -l | awk '{print $1 " " $3 " " $9}'
```

## Weiß, wie ich eine heruntergeladene Datei so in Teildateien aufspalten kann, dass jede Teildatei maximal 1 GiB groß ist

```bash
split -b 1G -d file file-part
```