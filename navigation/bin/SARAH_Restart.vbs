'=====================================
' RESTART (STOP THEN START) S.A.R.A.H.
'=====================================

Set WshShell = WScript.CreateObject("WScript.Shell")

WshShell.Run "taskkill /f /im WSRMacro.exe", , True
WScript.Sleep 1000

WshShell.Run "taskkill /f /im node.exe", , True
WScript.Sleep 1000

WScript.Sleep 2000
WshShell.Run """Server_NodeJS.cmd"""

WScript.Sleep 1000
WshShell.Run """Client_Microphone.cmd"""

WScript.Quit(iReturnValue)


