@echo off
chcp 65001 >nul
echo =========================================
echo   兒童活動 APP - 自動抓取小幫手啟動
echo =========================================
echo.
echo 正在讀取 urls.txt 並呼叫 AI 幫忙分析...
call .\venv\Scripts\activate.bat
python scraper.py
echo.
echo =========================================
echo   抓取完成！現在您可以打開 frontend\index.html 觀看最新活動了！
echo =========================================
pause
