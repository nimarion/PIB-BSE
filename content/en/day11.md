---
title: Tag 11
category: Vorlesung
position: 12
---
## Kenne die set -o option-name Bedeutung in der bash von: - allexport - noclobber - noglob - monitor - noexec

- exportiert automatisch alle Variablen
- Verhindert das überschreiben von existierenden Datein
- Deaktiviert das umwandeln von Dateinamen
- Hintergrund Jobs werden in einem eigenen Prozess ausgeführt und es wird eine Zeile ausgegeben wenn dieser beendet wurde
- Prüft Kommandos auf Syntaxfehler aber führt diese nicht aus

## Kann ein Shell Skript mit der select-Anweisung ohne case realisieren, welches folgende Funktionalität bereitstellt:
- Menüpunkt 1 kann eine leere Datei myfile anlegen.
- Menüpunkt 2 kann die Unix Mode-Bits von myfile auf 700 setzen (chmod…).
- Menüpunkt 3 löscht die Datei myfile
- Menüpunkt 4 beendet das Shell Skript.

```bash
#!/bin/bash
ENDE=0
PS3="Bitte auswaehlen: "
while [[ $ENDE != 1 ]]; do
    select VAR in anlegen ändern löschen ende; do
        [[ $VAR == "anlegen" ]] && touch myfile
        [[ $VAR == "ändern" ]] && chmod 700 myfile
        [[ $VAR == "löschen" ]] && rm myfile
        [[ $VAR == "ende" ]] && ENDE=1 && break
    done
done
```

## Weiß was passiert, wenn bei dem Skript aus Ausgabe Nr.2 der eingegebene Menüpunkt nicht existiert.

Eingabe wird ignoriert. Falscher Eingabewert wird in der Variable REPLY gespeichert.

## Kann das Skript aus Aufgabe Nr.2 mittels case-Anweisung realisieren.

```bash
#!/bin/bash
STOP="false"
PS3="Bitte auswaehlen: "
while [[ $STOP != "true" ]]; do
    select I in "Datei erstellen" \
        "Datei löschen" \
        "Rechte einstellen" "Stop"; do
        case $I in
        "Datei erstellen")
            touch myfile
            break
            ;;
        "Rechte einstellen")
            chmod 700 myfile
            break
            ;;
        "Datei löschen")
            rm myfile
            break
            ;;
        "Stop")
            STOP="true"
            break
            ;;
        esac
    done
done
```

## Kann ein Shell Skript schreiben, welches die ersten 20 Zahlen folgender Zahlenreihe auf dem Bildschirm ausgibt: 0, 3, 1, 4,2…

```bash
#!/bin/bash
FIRST=0
SECOND=3
COUNTER=0
while ((COUNTER < 17)); do
    echo -n $FIRST
    echo -n $SECOND
    FIRST=$[$FIRST +1]
    SECOND=$[$SECOND +1]
    COUNTER=$[$COUNTER +2]
done
echo ""
```

## Kann ein Shell Skript realisieren, welches für ein gerades n als Startparameter immer n/2 bis 0 ausgibt.
```bash
#!/bin/bash
NUMBER=$1
while ((NUMBER > 0)); do
    echo $NUMBER
    NUMBER=$(( $NUMBER / 2 ))
done
```

## Kenne folgende bash built-in commands aus der man page meiner bash: - cd - printf - pwd - exec - source 

- Ändert das Verzeichnis
- Formatiert einen String und gibt ihn aus
- Gibt das aktuelle Arbeitsverzeichnis aus
- https://man7.org/linux/man-pages/man3/exec.3.html
- Führt den Inhalt einer Datei in der aktuellen Shell aus

## Kenne das builtin Shell Kommando read und kann ein Shell Skript schreiben, welches meinen Namen und meine Matrikelnummer ein liest.

```bash
#!/bin/bash
echo -n "Name:"
read name
echo -n "Matrikelnr."
read number
echo $name ":" $number
```
