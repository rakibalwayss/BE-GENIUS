@echo off
title BE GENIUS Store Server
cd /d "%~dp0"
echo ==============================================
echo   BE GENIUS Local Store Server
echo   Running on http://localhost:5000
echo ==============================================
start http://localhost:5000
python server.py
pause
