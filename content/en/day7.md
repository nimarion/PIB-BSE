---
title: Tag 7
category: Vorlesung
position: 8
---
## Kenne den Unterschied zwischen "Prozess" und "Programm"

Ein Prozess ist die Ablaufumgebung für ein Programm auf einem Rechnersystem, sowie der darin eingebettete Binärcode des Programmes während der Ausführung.
Ein Programm besteht immer aus einem oder mehreren Prozessen.

## Kann mit dem Kommando ps alle Prozesse anzeigen, die unter meiner Benutzerkennung laufen

```bash
ps -u
```

## Kann das Kommando pstree so anwenden, dass alle meine Prozesse angezeigt werden

```bash
pstree -p -s
```

## Weiß, wofür die Kürzel UID , PID und PPID stehen

UUID = user identifier
PID =  process identification number
PPID = parent identification number

## Kann meine UID im aktuellen Shell-Terminalfenster ausgeben

```bash
id
```

## Kann die PID des aktuellen Shell-Terminalfensters ausgeben

```bash
echo $$
```

## Kann die PPID des aktuellen Shell-Terminalfensters ausgeben

```bash
ps -o ppid= -p $$
```

## Kann ein Programm/Skript im Vordergrund starten

```
./script.sh
```

## Kann ein Programm/Skript im Hintergrund starten

```bash
./script.sh &
```

## Kann einen Vordergrundprozess beenden

Strg + C

## Kann ermitteln, ob von mir gestartete Hintergrundprozesse noch laufen und welche PID sie haben

```bash
jobs -l
```

## Kann einen Hintergrundprozess mit dem Signal KILL beenden

```bash
kill -KILL id
```

## Weiß, welche Signale an Prozesse gesendet werden können

```bash
kill -l
```

## Weiß, welche Infos die Datei /proc/PID/exe liefert, und wie ichsie mir anzeigen lassen kann (teste mit der PID von Nr.6)

Symbolische Verknüpfung, welche den Link zu dem ausgeführten Command enhält.

## Kann den Standard-Eingabekanal und die Standard-Ausgabekanäle in einem Java-Programm ansprechen

```java
System.in
System.out
System.err
```

## Weiß, wozu die Option -e beim Kommando echo dient

enable interpretation of backslash escapes
