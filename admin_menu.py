# -*- coding: utf-8 -*-
import os
import sys
import subprocess

def clear_screen():
    os.system('clear')

def main_menu():
    while True:
        clear_screen()
        print("==================================================")
        print("   🏫 SchoolGus Workspace — Панель Адміністратора")
        print("   Домен: @schoolgus.ukr.education")
        print("==================================================")
        print("1. 🔄 Оновити courses.json (update_portal_data.py)")
        print("2. 🔍 Аудит Google Classroom (audit_classroom.py)")
        print("3. 🛡 Безпека груп Workspace (secure_groups_v2.py)")
        print("4. 👥 Наповнення груп (populate_groups_v4.py)")
        print("5. 🚀 Відправити всі зміни в GitHub (git push)")
        print("0. ❌ Вихід")
        print("==================================================")
        
        choice = input("Виберіть дію [0-5]: ").strip()
        
        if choice == "1":
            print("\n▶️ Запуск update_portal_data.py...")
            subprocess.run(["python3", "update_portal_data.py"])
            input("\nНатисніть Enter для продовження...")
        elif choice == "2":
            if os.path.exists("audit_classroom.py"):
                subprocess.run(["python3", "audit_classroom.py"])
            else:
                print("\n⚠️ Файл audit_classroom.py не знайдено.")
            input("\nНатисніть Enter для продовження...")
        elif choice == "3":
            if os.path.exists("secure_groups_v2.py"):
                subprocess.run(["python3", "secure_groups_v2.py"])
            else:
                print("\n⚠️ Файл secure_groups_v2.py не знайдено.")
            input("\nНатисніть Enter для продовження...")
        elif choice == "4":
            if not os.path.exists("users_export.csv"):
                print("\n⚠️ Файл 'users_export.csv' не знайдено у корені проєкту.")
                print("💡 Порада: Спочатку експортуйте список акаунтів з Google Admin Console у файл 'users_export.csv'.")
            elif os.path.exists("populate_groups_v4.py"):
                subprocess.run(["python3", "populate_groups_v4.py"])
            else:
                print("\n⚠️ Файл populate_groups_v4.py не знайдено.")
            input("\nНатисніть Enter для продовження...")
        elif choice == "5":
            print("\n▶️ Синхронізація з GitHub...")
            subprocess.run(["git", "add", "."])
            subprocess.run(["git", "commit", "-m", "admin: manual data update via admin menu"])
            subprocess.run(["git", "push", "origin", "main"])
            input("\nНатисніть Enter для продовження...")
        elif choice == "0":
            print("\nРоботу завершено.")
            break
        else:
            input("\n❌ Невірний вибір. Натисніть Enter...")

if __name__ == "__main__":
    main_menu()