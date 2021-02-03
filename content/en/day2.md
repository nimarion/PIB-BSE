---
title: Tag 2
category: Vorlesung
position: 3
---
## Kann die Handbuchseite für mkdir aufrufen

```bash
man mkdir
```

## Kann mit zwei verschiedenen Kommandos nach dem Begriff "Graphical shell" suchen

```bash
apropos Graphical shell
apt-cache search Graphical shell
```

## Kenne den Bedienungsunterschied der Kommandos cat ,more und less.

cat gibt eine komplette Datei in der Standardausgabe aus.

less erlaubt das zeilenweise "hoch und runterscrollen" in einer Datei. 
more erlaubt nur das "runterscrollen" und wir deswegen auch nicht mehr genutzt.

## Kann mir alle Files in meinem HOME-Directory vollständig und sortiert nach dem Änderungsdatum anzeigen

```bash
ls -l
```

## Weiß, welchen Typ die Datei .profile in meinem HOMEDirectory hat

```bash
file .profile
.profile: ASCII text
```
## Weiß, wieviele Zeilen und Worte die Datei xxx enthält

```bash
wc -lw xxx
```

## Kann aus meinem HOME-Directory alle Dateien, die mit dem Namensteil ".tarantella " beginnen, so löschen, dass ich beim Löschen jeder Datei vorher gefragt werde

```bash
rm -i *.tarantella
``` 