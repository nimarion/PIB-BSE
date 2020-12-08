**Kenne den Unterschied zwischen dem realen und dem effektiven Benutzer**

Realer User = Der eigene Nutzer (real & effective user id = your_user_id from /etc/passwd)

Effectiver User = Ändert sich wenn man den Nutzer mit su ändern (real user id = your_user_id | effective user id = other_user_id)

**Weiß, wie ich mir den realen und den effektiven Benutzernamen anzeigen lassen kann**

```bash
whoami
```

**Kenne den Unterschied zwischen HOME-Directory und WORKING-Directory**

HOME-Directory = Verzeichnis wo alle Nutzerdateien abgespeichert werden

WORKING-Directory = Aktuelles Verzeichnis
```bash
pwd
```

**Kenne den Unterschied zwischen absolutem Pfad und relativem Pfad**

Der realtive Pfad geht vom aktuellen Verzeichnis des Nutzers aus. (pwd)

Der absolute Pfad geht immer vom Wurzelverzeichnis / aus.

**Weiß, welcher Pfad (absolut, relativ) i.A. länger ist**

```
/export/home_20/nmarion/Downloads/
Downloads
```

**Kenne drei verschiedene Arten, wie ich vom aktuellen Verzeichnis PRG-SPR/ueb01 ins Verzeichnis Beispiele/java komme:**

```bash
cd /export/home_20/nmarion/Beispiele/java/
cd ../../Beispiele/java/
cd ~/Beispiele/java/
```

**Weiß, wie ich mir alle Java-Quelldateien in den Ordnern ueb00 bis ueb19 anzeigen lassen kann, wenn ich in meinem HOME-Directory bin**

```bash
ls -l PRG-SPR/*/*.java
```

**Weiß, warum eine Datei namens "mit Leerzeichen " mit folgendem Kommando keine Eigenschaften anzeigt:  ls –l mit Leerzeichen**

mit und Leerzeichen werden als zwei Argumente aufgefasst anstatt einem Argument

Richtig wäre
```bash
ls –l "mit Leerzeichen"
```

