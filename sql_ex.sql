-- Solution for exercise 1
SELECT model, speed, hd FROM PC
WHERE price < 500

-- Solution for exercise 2
SELECT DISTINCT maker FROM Product
WHERE type = 'Printer'

-- Solution for exercise 3
SELECT model, ram, screen FROM Laptop
WHERE price > 1000

-- Solution for exercise 4
SELECT * FROM Printer
WHERE color = 'y'

-- Solution for exercise 5
SELECT model, speed, hd 
FROM PC
WHERE price < 600 AND (cd = '12x' OR cd = '24x')

-- Solution for exercise 6
SELECT DISTINCT maker, speed FROM Laptop 
INNER JOIN Product ON Laptop.model = Product.model
WHERE hd >= 10

-- Solution for exercise 7
SELECT DISTINCT PC.model, price FROM Product
INNER JOIN PC ON Product.model = PC.model
WHERE maker = 'B'
UNION
SELECT DISTINCT Laptop.model, price FROM Product
INNER JOIN Laptop ON Laptop.model = Product.model
WHERE maker = 'B'
UNION
SELECT DISTINCT Printer.model, price FROM Product
INNER JOIN Printer ON Printer.model = Product.model
WHERE maker = 'B'
