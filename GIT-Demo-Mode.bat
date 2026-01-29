@echo off

set CURRENT_DATE=%date:~-4%-%date:~3,2%-%date:~0,2%

echo ===========================================
echo   Git Auto-Sync wird ausgefuehrt...
echo ===========================================

:: Repository demo-mode
if exist ".git" (
    echo [Demo-Mode] Bearbeitung läuft...
    git pull
    git add .
    git commit -m "Auto-Commit: %CURRENT_DATE%"
    git push
    cd ..
) else (
    echo [FEHLER] demo-mode wurde nicht gefunden!
)

echo.
echo -------------------------------------------

echo ===========================================
echo   Vorgang beendet. 
echo   Druecke eine Taste, um dieses Fenster zu schliessen.
echo ===========================================
pause