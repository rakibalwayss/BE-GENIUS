@echo off
title BE GENIUS - Push to GitHub
cd /d "%~dp0"
set GIT_PATH=%~dp0..\mingit\cmd\git.exe

echo ========================================================
echo         BE GENIUS - GitHub Auto Uploader
echo ========================================================
echo.

%GIT_PATH% remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    set /p REPO_URL="Apnar GitHub Repo link dao (e.g. https://github.com/username/repo.git): "
    %GIT_PATH% remote add origin %REPO_URL%
)

echo.
echo Uploading all 258 files (including full assets) to GitHub...
%GIT_PATH% add .
%GIT_PATH% commit -m "Complete BE GENIUS build with all assets" >nul 2>&1
%GIT_PATH% branch -M main
%GIT_PATH% push -u origin main --force

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo   SUCCESS! Shob file GitHub e upload hoye geche!
    echo   Vercel ekhn 10-15 second er moddhe auto-update hoye jabe.
    echo ========================================================
) else (
    echo.
    echo Upload e kono somoshya hoyeche. Please check your GitHub permissions.
)
echo.
pause
