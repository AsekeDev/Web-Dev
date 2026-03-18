class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def eat(self):
        return f"{self.name} eats something"

    def get_color(self):
        return f"{self.name} has color {self.color}"

    def __str__(self):
        return f"{self.name} is {self.age} years old and has color {self.color}"


class Vehicle:
    def __init__(self, model, color, fuel_type):
        self.model = model
        self.color = color
        self.fuel_type = fuel_type


    def get_model(self):
        return f"Model of this vehicle is {self.model}"

    def get_color(self):
        return f"Color of this vehicle is {self.color}"

    def get_fuel_type(self):
        return f"Fuel of this vehicle is {self.fuel_type}"

    def __str__(self):
        return f"Model: {self.model}, Color: {self.color}"


class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def calculate_total_value(self):
        return f"{self.price * self.quantity}"

    def sell(self, amount):
        if amount <= self.quantity:
            self.quantity -= amount
            return f"Sold {amount} pcs of {self.name}. Left in stock: {self.quantity}"
        else:
            return f"Not enough stock! Only {self.quantity} pcs available"

    def __str__(self):
        return f"Product: {self.name}, Price: {self.price}, Quantity: {self.quantity}"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def make_sound(self):
        return f"{self.name} says Woof!"

    def eat(self):
        return f"{self.name} eats bones"

    def __str__(self):
        return f"Dog: {self.name}, {self.age} years, {self.color}, {self.breed}"


class Bird(Animal):
    def __init__(self, name, age, color, can_fly):
        super().__init__(name, age, color)
        self.can_fly = can_fly

    def make_sound(self):
        return f"{self.name} says Tweet tweet!"

    def eat(self):
        return f"{self.name} eats seeds"

    def fly(self):
        if self.can_fly:
            return f"{self.name} is flying"
        return f"{self.name} cannot fly"

    def __str__(self):
        fly_status = "can fly" if self.can_fly else "cannot fly"
        return f"Bird: {self.name}, {self.age} years, {self.color}, {fly_status}"


class Motorcycle(Vehicle):
    def __init__(self, model, color, fuel_type, engine_size):
        super().__init__(model, color, fuel_type)
        self.engine_size = engine_size

    def get_fuel_type(self):
        return f"This motorcycle uses {self.fuel_type}"

    def wheelie(self):
        return f"{self.model} is doing a wheelie!"

    def __str__(self):
        return f"Motorcycle: {self.model}, {self.color}, Engine: {self.engine_size}cc"


class Truck(Vehicle):
    def __init__(self, model, color, fuel_type, capacity):
        super().__init__(model, color, fuel_type)
        self.capacity = capacity

    def get_fuel_type(self):
        return f"This truck runs on {self.fuel_type}"

    def load_cargo(self, weight):
        if weight <= self.capacity:
            return f"Loaded {weight}kg of cargo"
        return f"Cannot load {weight}kg, max capacity is {self.capacity}kg"

    def __str__(self):
        return f"Truck: {self.model}, {self.color}, Capacity: {self.capacity}kg"


class Book(Product):
    def __init__(self, name, price, quantity, author, pages):
        super().__init__(name, price, quantity)
        self.author = author
        self.pages = pages

    def calculate_total_value(self):
        return f"Total book value: ${self.price * self.quantity}"

    def read(self):
        return f"Reading {self.name} by {self.author}"

    def __str__(self):
        return f"Book: {self.name} by {self.author}, {self.pages} pages, ${self.price}"


class Clothing(Product):
    def __init__(self, name, price, quantity, size, material):
        super().__init__(name, price, quantity)
        self.size = size
        self.material = material

    def calculate_total_value(self):
        return f"Total clothing value: ${self.price * self.quantity}"

    def try_on(self):
        return f"Trying on {self.name} size {self.size}"

    def __str__(self):
        return f"Clothing: {self.name}, Size: {self.size}, {self.material}, ${self.price}"