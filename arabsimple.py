import requests
import time

url = input("أدخل الرابط: ")
مدتها = int(input("المدة (ثانية): "))
req_per_sec = int(input("طلبات في الثانية: "))

end_time = time.time() + مدتها
while time.time() < end_time:
    try:
        requests.get(url)
        print("تم إرسال الطلب!")
    except Exception as e:
        print(f"خطأ: {e}")
    time.sleep(1 / req_per_sec)