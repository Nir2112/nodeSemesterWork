# nodeSemesterWork

# תיאור הפרוייקט #

האפליקציה עוסקת בכתובות IP.
באמצעותה ניתן:
- לאתר את כתובת ה- אייפי של המשתמש
- לאתר מידע על על כתובת אייפי (מיקום פיזי)
- לקבל כתובת אייפי רדומלית ממאגר מוגדר מראש

האפליקציה עושה שימוש ב-API חיצוני לאיתור מיקום לפי כתובת IP.

--------------------------------------------------------------------------------------------------------------------

# הוראות הרצה #

1. הוספת קובץ .env

2. התקנת התלויות
npm install

3. הפעלת השרת
npm run dev 

:כתובת ברירת מחדל
http://localhost:5000 

                   ב POSTMAN/THUNDER CLIENT

    `GET /api/random/ip`      --          כתובת אייפי רנדומלית
    `GET / api/ip/myip`       --         כתובת האייפי של המשתמש
    `GET / api/ip/:ip`        --      מידע על כתובת אייפי מסויימת

---------------------------------------------------------------------------------------------------------------------

# הערות נוספות #
אופציות לחיפוש מיקום פיזי של אייפי:

1. שליפת כתובת רנדומלית מהמאגר נתונים.
2. להשתמש בראוט למציאת הכתובת אייפי שלך.

ולחפש עליהם מידע 