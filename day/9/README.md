**Weiß, worin sich Interpreter und Compiler unterscheiden und wo eine Shell zugeordnet werden Kann**

Interpreter wandeln den Code zur Laufzeit in Maschinencode um
Compiler wandeln den Code davor in den Maschinencode um (z.B exe Datei)

**Weiß, warum Kommandos mittels { und } zu einer Kommandoliste zusammengefasst werden**

Führt die angegeben Befehle im der aktuellen Shell aus

**Weiß, warum Kommandos mittels ( und ) zu einer Kommandoliste zusammengefasst werden**

Führt die angegebenen Befehle in einer Subshell aus

**Weiß, wie folgende Kommandoliste funktioniert date ; ( sleep 10 ; date ) & ls**

- Führt den Befehl in der aktuellen Shell aus
- Startet die Befehlskette sleep 10, date in einer Subshell im Hintergrund
- Listet gleichzeitig die Dateien/Ordner im aktuellen Verzeichnis

**Weiß, wie folgende Kommandoliste funktioniert { ls /bin ; ls /etc ; } | wc -l**

{} führt die angegeben Kommandos in der aktuellen Shell aus und durch das Pipe Symbol wird die Ausgabe an wc weitergeleitet

**Weiß, wozu ich die Shell-Variable RANDOM einsetzen kann**

Gibt eine zufällige Zahl zwischen 0 und 32767 aus

**Kenne die Funktion der Shell-Variablen PWD und OLDPWD in Zusammenhang mit dem Kommando cd - .**

PWD gibt das aktulle Verzeichnis aus
OLDPWD gibt das vorherige Verzeichnis aus. Wenn es kein vorheriges Verzeichnis gibt wird das aktuelle Verzeichnis ausgegeben

**Kann alle momentan in der bash vorhandenen Variablen nach Namen sortiert ausgeben**

```bash
declare -p
```

**Kann eine neue Variable ohne Typvorgabe deklarieren bzw. definieren bzw. an Sub-Shells weitergeben**

```bash
MY_VARIABLE=1234
```

**Kann eine vorhandene Variable entfernen**

```bash
unset xyz
```

**Kann herausfinden, ob eine Variable keinen Wert enthält bzw. ob sie gar nicht existiert.**

```bash
if [ -z ${MY_VARIABLE} ]; then echo "Variable existiert nicht"; else echo "Variable existiert"; fi
```

**Kann die Shell-Konstante LESBAR mit Wert 4711 anlegen**

```bash
LESBAR=4711
```

**Kann jeweils eine Integer-Variable zur Basis 2, 8, 10 und 16 deklarieren**

```bash
typeset -i ACHTZEHN=18
typeset -i2 BI_ACHTZEHN=18
typeset –i8 OK_ACHTZEHN=18
typeset -i16 HEX_ACHTZEHN=18
```

**Weiß, in welchem Fall anstelle von $VARIABLE die Angabe ${VARIABLE} gemacht werden muss, um den Inhalt von VARIABLE zu sehen**

https://stackoverflow.com/questions/18135451/what-is-the-difference-between-var-var-and-var-in-the-bash-shell

**Kenne den Unterschied zwischen exportierten und nichtexportierten Variablen**

Exportierte Variablen sind alle Shells zugänglich
Nicht exportierte nur der aktuellen Shell

