-- 1. Створення бази даних (наприклад, my_grocery_db) та перехід до неї
CREATE DATABASE my_grocery_db;
USE my_grocery_db;

-- Створення таблиці, де поле ID визначено як первинний ключ (PRIMARY KEY)
CREATE TABLE Shopping_List (
    ID INT PRIMARY KEY,
    Product_Name VARCHAR(255),
    Price DECIMAL(10, 2),
    Quantity INT
);

-- 2. Внесення 10 найменувань продуктів у таблицю
INSERT INTO Shopping_List (ID, Product_Name, Price, Quantity) VALUES
(1, 'Хліб', 25.50, 2),
(2, 'Молоко', 32.00, 1),
(3, 'Яйця', 45.00, 10),
(4, 'Сир', 150.00, 1),
(5, 'Ковбаса', 200.00, 2),
(6, 'Картопля', 15.00, 5),
(7, 'Морква', 12.50, 2),
(8, 'Яблука', 28.00, 3),
(9, 'Чай', 55.00, 1),
(10, 'Цукор', 30.00, 2);

-- 3. Запит, який виводить всі поля створеної таблиці
SELECT * FROM Shopping_List;