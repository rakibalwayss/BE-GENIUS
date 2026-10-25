@echo off
title BE GENIUS - GitHub Uploader
cd /d "C:\Users\R A K I B\.gemini\antigravity\scratch\be-genius"
set GIT_PATH=C:\Users\R A K I B\.gemini\antigravity\scratch\mingit\cmd\git.exe
set GH_PATH=C:\Users\R A K I B\.gemini\antigravity\scratch\gh\bin\gh.exe

echo ========================================================
echo         BE GENIUS - GitHub Auto Uploader
echo ========================================================
echo.
echo Target Repo: https://github.com/rakibalwayss/BE-GENIUS
echo.
echo GitHub e file upload er jonno login dorkar.
echo Nicher je kono 1 ti option beche nin:
echo.
echo  [1] Easy Browser Login (Browser khulbe, Code enter kore Login)
echo  [2] GitHub Token (ghp_... token paste kore upload)
echo.
set /p CHOICE="Apnar pochondo (1 ba 2 likhe Enter chapun): "

if "%CHOICE%"=="1" (
    echo.
    echo Browser e GitHub page open hocche...
    echo Ekhaner One-Time Code ti dekhe browser e enter korun:
    echo.
    "%GH_PATH%" auth login --web -h github.com -p https --scopes "repo"
    "%GH_PATH%" auth setup-git
    "%GIT_PATH%" remote remove origin >nul 2>&1
    "%GIT_PATH%" remote add origin https://github.com/rakibalwayss/BE-GENIUS.git
) else (
    echo.
    echo 1. Browser e ei link e jan: https://github.com/settings/tokens/new
    echo 2. Note: be-genius
    echo 3. 'repo' box e Tick din
    echo 4. Niche 'Generate token' e click kore token copy korun
    echo.
    set /p TOKEN="Token paste korun: "
    "%GIT_PATH%" remote remove origin >nul 2>&1
    "%GIT_PATH%" remote add origin https://%TOKEN%@github.com/rakibalwayss/BE-GENIUS.git
)

echo.
echo ========================================================
echo Uploading all 258 files (with full assets) to GitHub...
echo ========================================================
"%GIT_PATH%" branch -M main
"%GIT_PATH%" add .
"%GIT_PATH%" commit -m "Complete BE GENIUS build with full assets" >nul 2>&1
"%GIT_PATH%" push -u origin main --force

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo   SUCCESS! Shob file GitHub e upload hoye geche!
    echo   Vercel ekhn 15-20 second e auto-update hoye jabe!
    echo   Check korun: https://be-genius-topaz.vercel.app/
    echo ========================================================
) else (
    echo.
    echo Upload failed. Kono somoshya hole janan.
)
echo.
pause
