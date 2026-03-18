from models import (
    Animal, Dog, Bird,
    Vehicle, Motorcycle, Truck,
    Product, Book, Clothing
)

animal = Animal("Leo", 5, "brown")
dog = Dog("Rex", 3, "black", "German Shepherd")
bird = Bird("Tweety", 1, "yellow", True)

vehicle = Vehicle("Toyota", "red", "petrol")
motorcycle = Motorcycle("Yamaha", "blue", "petrol", 600)
truck = Truck("Volvo", "white", "diesel", 5000)

product = Product("Phone", 500, 10)
book = Book("Python Programming", 50, 100, "John Doe", 500)
clothing = Clothing("T-Shirt", 20, 200, "L", "Cotton")

all_objects = [
    animal, dog, bird,
    vehicle, motorcycle, truck,
    product, book, clothing
]

for obj in all_objects:
    print(f"\n{obj}")

    if isinstance(obj, Animal):
        print(f"  {obj.eat()}")
        print(f"  {obj.get_color()}")
        if hasattr(obj, 'make_sound'):
            print(f"  {obj.make_sound()}")

    if isinstance(obj, Vehicle):
        print(f"  {obj.get_model()}")
        print(f"  {obj.get_color()}")
        print(f"  {obj.get_fuel_type()}")

    if isinstance(obj, Product):
        print(f"  Total: {obj.calculate_total_value()}")
        print(f"  {obj.sell(1)}")