**Weiß, was Whitespace ist und wozu er dient**

Separiert jede Zeile bei jedem Leerzeichen in einzelne Wörter/Tokens

**Kenne den Begriff "Token"**

Ein Token ist eine Folge von Zeichen, die ein Wort oder Satzzeichen bildet

**Kann den syntaktischen Aufbau eines Unix/Linux-Kommandos erklären**

kommandoname [-Optionen] [Argumente]

**Kann das Kommando ls syntaktisch auf vier verschiedene Arten formulieren, dass alle Einträge (auch die versteckten) im aktuellen Verzeichnis und anstelle von Eigentümer- und Gruppenname die Eigentümer und Gruppen-Id angezeigt werden.**

```bash
ls -lan
ls -l -a -n
ls -l --numeric-uid-gid --all

```

**Weiß wofür die Abkürzung/das Kommando fgrep steht**

```bash
grep -F
```

Ermöglicht schnelles Suchen von einem ganzen String und kann kein Regex erkennen. 

**Kenne ein Kommando, das eine Option hat, die mit "-" beginnt**

```bash
java -jar appplication.jar
```

**Kenne ein Kommando, das eine Option hat, die mit "--" beginnt**

```bash
java --version
```

**Kenne ein Kommando, das eine Option hat, die weder mit "-" noch mit "--" beginnt**

```bash
tar xvf
```

**Weiß, wozu folgende Quotierungszeichen dienen: \ ´ "**

Escaping von Sonderzeichen

**Weiß, worin die Unterschiede folgender Quotierungszeichen bestehen: \ ´ "**

\ entwertet das unmittelbare Folgezeichen
´ entwertet alles was zwischen dem Singlequote ist
" entwertet alle zeichen außer $ \ und "

**Kann die Quotierungszeichen \ , ´ bzw. " so auf folgenden Text anwenden, daß er bei der Ausgabe mit echo nicht verändert wird \* Kommt $USER$ ?? 8-;**

```bash
echo "* Kommt \$USER$ ?? 8-;"
echo '* Kommt $USER$ ?? 8-;'
echo \* Kommt \$USER\$ \?\? 8-\;
```

**Weiß, wie ich mit dem Kommando dc das Produkt 3 \* 5 ausrechnen, das Ergebnis anzeigen und das Kommando beenden kann**

```bash
echo 5 3\*p | dc
```

**Weiß, wie ich mit dem Kommando bc das Produkt 3 \* 5 ausrechnen, das Ergebnis anzeigen und das Kommando beenden kann**

```bash
echo '3*5' | bc
```

**Weiß, wie ich mir alle Shell-Variablen mit Namen und Inhalt ansehen kann**

```bash
printenv
```

**Kenne den grundsätzlichen Unterschied zwischen den Skripten /etc/profile und ~/.profile**

/etc/profile gilt global für alle Nutzer
~/.profile ist für jeden Nutzer unabhängig

**Weiß, wozu die Systemvariable PATH dient**

Zeigt dem Betriebssystem an, wo ausführbare Dateien liegen

**Weiß, was der Bestandteil ":.:" der Systemvariable PATH bewirkt**

Trennt verschieden Verzeichnisse voneinander ab
