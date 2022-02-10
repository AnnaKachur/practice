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
