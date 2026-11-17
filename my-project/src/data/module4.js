// Module 4: Object-Oriented Programming (Lessons 21-24)

export const MODULE_4_LESSONS = [
  {
    id: 21,
    moduleId: 4,
    title: "გაკვეთილი 21: კლასები, ობიექტები, __init__ და Class Variables",
    shortTitle: "21. OOP: კლასები & ობიექტები",
    subtitle: "class, __init__() კონსტრუქტორი, self, მეთოდები, Instance vs Class ცვლადები",
    icon: "Box",
    duration: "35 წუთი",
    theory: [
      {
        heading: "რა არის ობიექტზე ორიენტირებული პროგრამირება (OOP)?",
        text: "OOP გვაძლევს საშუალებას რეალური სამყაროს ობიექტები (მანქანა, სტუდენტი, ბანკის ანგარიში) აღვწეროთ კოდში. კლასი (Class) არის ნახაზი/შაბლონი, ხოლო ობიექტი (Object) არის ამ ნახაზით შექმნილი კონკრეტული ეგზემპლარი.",
      },
      {
        heading: "__init__() კონსტრუქტორი და self",
        bullets: [
          "__init__(self, ...) — სპეციალური მეთოდი (კონსტრუქტორი), რომელიც ავტომატურად ეშვება ყოველი ახალი ობიექტის შექმნისას.",
          "self — აღნიშნავს მიმდინარე, კონკრეტულ ობიექტს, რომელზეც მეთოდი გამოიძახეს.",
          "ატრიბუტები (Attributes) — ობიექტის თვისებები (მაგ. self.model, self.year).",
          "მეთოდები (Methods) — კლასის შიგნით დაწერილი ფუნქციები, რომლებიც აღწერენ ობიექტის ქცევას (მაგ. car.drive()).",
        ],
      },
      {
        heading: "Instance vs Class Variables",
        text: "Instance ცვლადები იქმნება `__init__`-ში (`self.name`) და თითოეულ ობიექტს საკუთარი აქვს. Class ცვლადები იქმნება კლასის გარეთ მეთოდებიდან (`Student.num_students = 0`) და საერთოა ამ კლასის ყველა ობიექტისთვის!",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: Car კლასი, __init__ და მეთოდები",
        code: `class Car:
    def __init__(self, model, year, for_sale=True):
        self.model = model
        self.year = year
        self.for_sale = for_sale

    def drive(self):
        print(f"თქვენ მართავთ {self.year} წლის {self.model}-ს")

car1 = Car("Toyota Corolla", 2022)
car2 = Car("BMW M3", 2024, False)

car1.drive()
car2.drive()`,
        explanation: "თითოეული ობიექტი (car1, car2) ინახავს საკუთარ model და year მონაცემებს.",
      },
      {
        title: "მაგალითი 2: Class Variable — სტუდენტების მთვლელი",
        code: `class Student:
    class_year = 2026
    num_students = 0

    def __init__(self, name):
        self.name = name
        Student.num_students += 1

s1 = Student("გიორგი")
s2 = Student("მარიამი")
s3 = Student("ლუკა")

print(f"წელი: {Student.class_year}")
print(f"სულ სტუდენტები: {Student.num_students}")`,
        explanation: "Student.num_students საერთოა ყველა ობიექტისთვის და ყოველი ახალი სტუდენტის შექმნისას იზრდება 1-ით.",
      },
    ],
    exercises: [
      {
        id: "ex_21_1",
        title: "სავარჯიშო 1: Book კლასი და მეთოდი",
        instruction: "შექმენით კლასი `Book`, რომლის `__init__(self, title, pages)` ინახავს `self.title` და `self.pages`. დაამატეთ მეთოდი `info(self)`, რომელიც დაბეჭდავს: `წიგნი: [title], გვერდები: [pages]`. შექმენით ობიექტი `b = Book(\"ვეფხისტყაოსანი\", 320)` და გამოიძახეთ `b.info()`.",
        initialCode: `class Book:
    def __init__(self, title, pages):
        # შეინახეთ ატრიბუტები
        pass

    def info(self):
        # დაბეჭდეთ ინფორმაცია
        pass

b = Book("ვეფხისტყაოსანი", 320)
b.info()`,
        hint: "self.title = title\nself.pages = pages\nprint(f\"წიგნი: {self.title}, გვერდები: {self.pages}\")",
        solution: `class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def info(self):
        print(f"წიგნი: {self.title}, გვერდები: {self.pages}")

b = Book("ვეფხისტყაოსანი", 320)
b.info()`,
        validate: (output) => {
          if (output.includes("ვეფხისტყაოსანი") && output.includes("320")) {
            return { valid: true, message: "ყოჩაღ! პირველი კლასი და ობიექტი წარმატებით შექმენით." };
          }
          return { valid: false, message: "მოსალოდნელია: 'წიგნი: ვეფხისტყაოსანი, გვერდები: 320'" };
        },
      },
      {
        id: "ex_21_2",
        title: "სავარჯიშო 2: Class Variable-ით პროდუქტების დათვლა",
        instruction: "შექმენით კლასი `Product` კლასის ცვლადით `total_count = 0`. `__init__(self, name)`-ში შეინახეთ `self.name` და გაზარდეთ `Product.total_count += 1`. შექმენით 2 ობიექტი (`p1`, `p2`) და დაბეჭდეთ: `სულ პროდუქტი: 2`.",
        initialCode: `class Product:
    total_count = 0

    def __init__(self, name):
        # შეინახეთ self.name და გაზარდეთ Product.total_count
        pass

p1 = Product("ლეპტოპი")
p2 = Product("მაუსი")
print(f"სულ პროდუქტი: {Product.total_count}")`,
        hint: "self.name = name\nProduct.total_count += 1",
        solution: `class Product:
    total_count = 0

    def __init__(self, name):
        self.name = name
        Product.total_count += 1

p1 = Product("ლეპტოპი")
p2 = Product("მაუსი")
print(f"სულ პროდუქტი: {Product.total_count}")`,
        validate: (output) => {
          if (output.includes("2") && output.includes("სულ პროდუქტი")) {
            return { valid: true, message: "შესანიშნავია! Class Variable სწორად ითვლის ობიექტებს." };
          }
          return { valid: false, message: "დაბეჭდეთ: 'სულ პროდუქტი: 2'" };
        },
      },
    ],
  },
  {
    id: 22,
    moduleId: 4,
    title: "გაკვეთილი 22: მემკვიდრეობა (Inheritance), Multiple Inheritance და super()",
    shortTitle: "22. მემკვიდრეობა & super()",
    subtitle: "მშობელი და შვილი კლასები, კოდის გაზიარება, მრავლობითი მემკვიდრეობა და super().__init__()",
    icon: "GitFork",
    duration: "35 წუთი",
    theory: [
      {
        heading: "რა არის მემკვიდრეობა (Inheritance)?",
        text: "მემკვიდრეობა საშუალებას აძლევს ერთ კლასს (შვილ კლასს — Child) მიიღოს სხვა კლასის (მშობელი კლასის — Parent) ყველა ატრიბუტი და მეთოდი. სინტაქსი: `class Dog(Animal):`. ეს გვეხმარება საერთო კოდი დავწეროთ მხოლოდ ერთხელ.",
      },
      {
        heading: "მრავლობითი და მრავალდონიანი მემკვიდრეობა",
        bullets: [
          "Multiple Inheritance: კლასს შეუძლია მემკვიდრეობა მიიღოს ერთზე მეტი მშობელი კლასისგან: `class Rabbit(Prey):`, `class Fish(Prey, Predator):`.",
          "Multilevel Inheritance: A -> B -> C (როცა C მემკვიდრეობით იღებს B-სგან, ხოლო B — A-სგან).",
        ],
      },
      {
        heading: "super() ფუნქცია",
        text: "`super()` აძლევს შვილ კლასს საშუალებას გამოიძახოს მშობელი კლასის მეთოდები — განსაკუთრებით `super().__init__(...)`, რათა შვილი კლასის კონსტრუქტორმა შეინარჩუნოს მშობლის ატრიბუტები და დაამატოს საკუთარი.",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: მემკვიდრეობა და მეთოდის გადაფარვა",
        code: `class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} ჭამს.")

class Dog(Animal):
    def speak(self):
        print(f"{self.name} ამბობს: ჰავ!")

class Cat(Animal):
    def speak(self):
        print(f"{self.name} ამბობს: მიაუ!")

dog = Dog("ბობი")
dog.eat()
dog.speak()`,
        explanation: "Dog-მა მემკვიდრეობით მიიღო __init__ და eat() მშობელი Animal კლასისგან.",
      },
      {
        title: "მაგალითი 2: super().__init__() გამოყენება",
        code: `class Shape:
    def __init__(self, color, filled):
        self.color = color
        self.filled = filled

class Circle(Shape):
    def __init__(self, color, filled, radius):
        super().__init__(color, filled)
        self.radius = radius

    def describe(self):
        print(f"წრე: ფერი={self.color}, რადიუსი={self.radius}")

c = Circle("წითელი", True, 5)
c.describe()`,
        explanation: "super().__init__ თავიდან გვაცილებს self.color და self.filled-ის ხელახლა დაწერას.",
      },
    ],
    exercises: [
      {
        id: "ex_22_1",
        title: "სავარჯიშო 1: User და Admin მემკვიდრეობა",
        instruction: "მოცემულია მშობელი კლასი `User` მეთოდით `login(self)`. შექმენით შვილი კლასი `Admin(User)` და დაამატეთ მას მეთოდი `delete_post(self)`, რომელიც დაბეჭდავს: `[self.name]: პოსტი წაიშალა`. გამოიძახეთ `admin.login()` და `admin.delete_post()`.",
        initialCode: `class User:
    def __init__(self, name):
        self.name = name

    def login(self):
        print(f"{self.name} შევიდა სისტემაში")

# შექმენით class Admin(User):


admin = Admin("გიორგი")
admin.login()
admin.delete_post()`,
        hint: "class Admin(User):\n    def delete_post(self):\n        print(f\"{self.name}: პოსტი წაიშალა\")",
        solution: `class User:
    def __init__(self, name):
        self.name = name

    def login(self):
        print(f"{self.name} შევიდა სისტემაში")

class Admin(User):
    def delete_post(self):
        print(f"{self.name}: პოსტი წაიშალა")

admin = Admin("გიორგი")
admin.login()
admin.delete_post()`,
        validate: (output) => {
          if (output.includes("შევიდა სისტემაში") && output.includes("პოსტი წაიშალა")) {
            return { valid: true, message: "ყოჩაღ! მემკვიდრეობა სრულყოფილად მუშაობს." };
          }
          return { valid: false, message: "უნდა დაიბეჭდოს login-ისა და delete_post-ის ტექსტები." };
        },
      },
      {
        id: "ex_22_2",
        title: "სავარჯიშო 2: super().__init__() გამოყენება",
        instruction: "მოცემულია `Person(name)`. შექმენით `Employee(Person)`, რომლის `__init__(self, name, salary)` იძახებს `super().__init__(name)`-ს და ინახავს `self.salary = salary`. დაბეჭდეთ `e.name` და `e.salary`.",
        initialCode: `class Person:
    def __init__(self, name):
        self.name = name

class Employee(Person):
    def __init__(self, name, salary):
        # გამოიძახეთ super().__init__(name) და შეინახეთ self.salary
        pass

e = Employee("ანა", 3000)
print(f"{e.name}: {e.salary} ლარი")`,
        hint: "super().__init__(name)\nself.salary = salary",
        solution: `class Person:
    def __init__(self, name):
        self.name = name

class Employee(Person):
    def __init__(self, name, salary):
        super().__init__(name)
        self.salary = salary

e = Employee("ანა", 3000)
print(f"{e.name}: {e.salary} ლარი")`,
        validate: (output) => {
          if (output.includes("ანა") && output.includes("3000")) {
            return { valid: true, message: "ბრწყინვალეა! super().__init__ უშეცდომოდ გამოიყენეთ." };
          }
          return { valid: false, message: "მოსალოდნელია: 'ანა: 3000 ლარი'" };
        },
      },
    ],
  },
  {
    id: 23,
    moduleId: 4,
    title: "გაკვეთილი 23: პოლიმორფიზმი, Duck Typing, @staticmethod და @classmethod",
    shortTitle: "23. პოლიმორფიზმი & Methods",
    subtitle: "მრავალფორმიანობა (Polymorphism), Duck Typing და სტატიკური/კლასის მეთოდები",
    icon: "Blocks",
    duration: "30 წუთი",
    theory: [
      {
        heading: "პოლიმორფიზმი (Polymorphism) და Duck Typing",
        text: "პოლიმორფიზმი ნიშნავს 'მრავალ ფორმას': სხვადასხვა კლასის ობიექტებს აქვთ ერთი და იმავე სახელის მეთოდი (მაგ. `area()`), მაგრამ თითოეული თავისებურად ასრულებს მას.",
        bullets: [
          "მემკვიდრეობითი პოლიმორფიზმი: Circle და Square მემკვიდრეები არიან Shape-ის და ორივე გადაფარავს `area()` მეთოდს.",
          "Duck Typing: 'თუ ის იხვივით დადის და იხვივით ყივის, ის იხვია' — პითონში მთავარია ობიექტს ჰქონდეს საჭირო მეთოდი (`speak()`), თუნდაც არ ჰყავდეს საერთო მშობელი კლასი!",
        ],
      },
      {
        heading: "@staticmethod და @classmethod",
        bullets: [
          "@staticmethod — მეთოდი, რომელიც ეკუთვნის კლასს, მაგრამ არ იღებს არც `self`-ს და არც `cls`-ს. გამოიყენება დამხმარე (utility) ლოგიკისთვის, მაგ. `Employee.is_valid_position('Manager')`.",
          "@classmethod — მეთოდი, რომლის პირველი პარამეტრია `cls` (თავად კლასი) და არა `self`. იდეალურია კლასის ცვლადებთან სამუშაოდ ან ალტერნატიული კონსტრუქტორების შესაქმნელად.",
        ],
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: პოლიმორფიზმი ფორმებზე",
        code: `class Shape:
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, r):
        self.r = r
    def area(self):
        return 3.14 * self.r ** 2

class Square(Shape):
    def __init__(self, side):
        self.side = side
    def area(self):
        return self.side ** 2

shapes = [Circle(4), Square(5)]
for s in shapes:
    print(f"ფართობი: {s.area()}")`,
        explanation: "ერთი და იგივე ციკლი სხვადასხვა კლასზე იძახებს s.area()-ს და იღებს სწორ შედეგს.",
      },
      {
        title: "მაგალითი 2: @staticmethod და @classmethod",
        code: `class Student:
    count = 0

    def __init__(self, name, gpa):
        self.name = name
        self.gpa = gpa
        Student.count += 1

    @staticmethod
    def is_passing(gpa):
        return gpa >= 2.0

    @classmethod
    def get_count(cls):
        return f"სულ სტუდენტები: {cls.count}"

s1 = Student("ლუკა", 3.5)
print("ჩააბარა 3.5-ით?", Student.is_passing(3.5))
print(Student.get_count())`,
        explanation: "ორივე მეთოდის გამოძახება შეგვიძლია პირდაპირ კლასის სახელით (Student.).",
      },
    ],
    exercises: [
      {
        id: "ex_23_1",
        title: "სავარჯიშო 1: Duck Typing — სხვადასხვა კლასი, ერთი მეთოდი",
        instruction: "შექმენით ორი დამოუკიდებელი კლასი `Duck` და `Car`. ორივეს დაუმატეთ `sound(self)` მეთოდი (`Duck` ბეჭდავს `ყიყინი`, `Car` ბეჭდავს `სიგნალი`). გადაუარეთ სიას `items = [Duck(), Car()]` ციკლით და გამოიძახეთ `item.sound()`.",
        initialCode: `class Duck:
    def sound(self):
        print("ყიყინი")

# შექმენით class Car sound(self) მეთოდით


items = [Duck(), Car()]
for item in items:
    item.sound()`,
        hint: "class Car:\n    def sound(self):\n        print(\"სიგნალი\")",
        solution: `class Duck:
    def sound(self):
        print("ყიყინი")

class Car:
    def sound(self):
        print("სიგნალი")

items = [Duck(), Car()]
for item in items:
    item.sound()`,
        validate: (output) => {
          if (output.includes("ყიყინი") && output.includes("სიგნალი")) {
            return { valid: true, message: "ყოჩაღ! Duck Typing და პოლიმორფიზმი სრულად გააზრებულია." };
          }
          return { valid: false, message: "უნდა დაიბეჭდოს 'ყიყინი' და 'სიგნალი'." };
        },
      },
      {
        id: "ex_23_2",
        title: "სავარჯიშო 2: @staticmethod ვალიდატორი",
        instruction: "შექმენით კლასი `Validator` სტატიკური მეთოდით `@staticmethod def is_adult(age):`, რომელიც აბრუნებს `age >= 18`-ს. დაბეჭდეთ `Validator.is_adult(21)` და `Validator.is_adult(15)`.",
        initialCode: `class Validator:
    # დაამატეთ @staticmethod is_adult(age)
    pass

print(Validator.is_adult(21))
print(Validator.is_adult(15))`,
        hint: "@staticmethod\ndef is_adult(age):\n    return age >= 18",
        solution: `class Validator:
    @staticmethod
    def is_adult(age):
        return age >= 18

print(Validator.is_adult(21))
print(Validator.is_adult(15))`,
        validate: (output) => {
          if (output.includes("True") && output.includes("False")) {
            return { valid: true, message: "შესანიშნავია! @staticmethod მუშაობს ობიექტის შექმნის გარეშეც." };
          }
          return { valid: false, message: "მოსალოდნელია: True და False" };
        },
      },
    ],
  },
  {
    id: 24,
    moduleId: 4,
    title: "გაკვეთილი 24: Magic Methods, @property და დეკორატორები",
    shortTitle: "24. Magic Methods & @property",
    subtitle: "Dunder მეთოდები (__str__, __eq__, __add__), @property getter/setter და ფუნქციის დეკორატორები",
    icon: "Wand2",
    duration: "35 წუთი",
    theory: [
      {
        heading: "Magic (Dunder) Methods: __str__, __eq__, __add__",
        text: "ორმაგი ქვედატირით (Double Underscore) დაწყებული მეთოდები პითონში ავტომატურად იძახება ჩაშენებული ოპერაციების დროს:",
        bullets: [
          "__str__(self) — განსაზღვრავს რას დაბეჭდავს `print(obj)` მეხსიერების მისამართის ნაცვლად.",
          "__eq__(self, other) — განსაზღვრავს როგორ შედარდეს ორი ობიექტი `==` ოპერატორით.",
          "__add__(self, other) — განსაზღვრავს `+` ოპერატორის ქცევას ორ ობიექტზე.",
        ],
      },
      {
        heading: "@property დეკორატორი (Getter და Setter)",
        text: "`@property` საშუალებას გვაძლევს მეთოდს მივმართოთ როგორც ჩვეულებრივ ატრიბუტს (ფრჩხილების გარეშე), ხოლო `@attr.setter`-ით გავაკონტროლოთ და შევამოწმოთ მნიშვნელობის შეცვლა (მაგ. უარყოფითი ფასის აკრძალვა).",
      },
      {
        heading: "დეკორატორები (Decorators)",
        text: "დეკორატორი არის ფუნქცია (`@my_decorator`), რომელიც ეხვევა სხვა ფუნქციას და ამატებს მას დამატებით ქცევას (მაგ. ლოგირება, წვდომის შემოწმება) ძირითადი კოდის შეუცვლელად.",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: __str__ და __eq__ Magic Methods",
        code: `class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):
        return f"'{self.title}' ({self.pages} გვ.)"

    def __eq__(self, other):
        return self.title == other.title and self.pages == other.pages

b1 = Book("ჰობიტი", 310)
b2 = Book("ჰობიტი", 310)

print(b1)          # იძახებს __str__-ს
print(b1 == b2)    # იძახებს __eq__-ს -> True`,
        explanation: "__str__ აუმჯობესებს print()-ს, ხოლო __eq__ აძლევს == შედარებას აზრს.",
      },
      {
        title: "მაგალითი 2: @property და მარტივი დეკორატორი",
        code: `class Rectangle:
    def __init__(self, width, height):
        self._width = width
        self._height = height

    @property
    def width(self):
        return f"{self._width} სმ"

    @width.setter
    def width(self, value):
        if value > 0:
            self._width = value
        else:
            print("სიგანე უნდა იყოს 0-ზე მეტი!")

rect = Rectangle(10, 5)
print("საწყისი სიგანე:", rect.width)
rect.width = 15
print("ახალი სიგანე:", rect.width)`,
        explanation: "@property აერთიანებს ატრიბუტის მარტივ სინტაქსს და მონაცემთა დაცვას.",
      },
    ],
    exercises: [
      {
        id: "ex_24_1",
        title: "სავარჯიშო 1: __str__ და __add__ საფულის კლასში",
        instruction: "შექმენით კლასი `Wallet(amount)`. დაამატეთ `__str__(self)`, რომელიც აბრუნებს `f\"{self.amount} ₾\"`, და `__add__(self, other)`, რომელიც აბრუნებს `Wallet(self.amount + other.amount)`. დაბეჭდეთ `w1 + w2`, სადაც `w1 = Wallet(40)` და `w2 = Wallet(60)`.",
        initialCode: `class Wallet:
    def __init__(self, amount):
        self.amount = amount

    def __str__(self):
        return f"{self.amount} ₾"

    # დაამატეთ __add__(self, other)


w1 = Wallet(40)
w2 = Wallet(60)
print(w1 + w2)`,
        hint: "def __add__(self, other):\n    return Wallet(self.amount + other.amount)",
        solution: `class Wallet:
    def __init__(self, amount):
        self.amount = amount

    def __str__(self):
        return f"{self.amount} ₾"

    def __add__(self, other):
        return Wallet(self.amount + other.amount)

w1 = Wallet(40)
w2 = Wallet(60)
print(w1 + w2)`,
        validate: (output) => {
          if (output.includes("100")) {
            return { valid: true, message: "ყოჩაღ! __add__ და __str__ ერთად სრულყოფილად იმუშავა." };
          }
          return { valid: false, message: "მოსალოდნელია: '100 ₾'" };
        },
      },
      {
        id: "ex_24_2",
        title: "სავარჯიშო 2: ფუნქციის დეკორატორი",
        instruction: "დაწერეთ დეკორატორი `add_stars(func)`, რომელიც `wrapper()`-ში ჯერ ბეჭდავს `***`, შემდეგ იძახებს `func()`-ს და ბოლოს ისევ ბეჭდავს `***`. გამოიყენეთ `@add_stars` ფუნქციაზე `greet()`.",
        initialCode: `def add_stars(func):
    def wrapper():
        print("***")
        func()
        print("***")
    return wrapper

# გამოიყენეთ @add_stars დეკორატორი greet-ზე
def greet():
    print("გამარჯობა!")

greet()`,
        hint: "ფუნქციის თავზე დაწერეთ @add_stars",
        solution: `def add_stars(func):
    def wrapper():
        print("***")
        func()
        print("***")
    return wrapper

@add_stars
def greet():
    print("გამარჯობა!")

greet()`,
        validate: (output) => {
          if (output.includes("***") && output.includes("გამარჯობა")) {
            return { valid: true, message: "ბრწყინვალეა! დეკორატორმა შეფუთა greet() ფუნქცია." };
          }
          return { valid: false, message: "უნდა დაიბეჭდოს *** გამარჯობა!-ს ზემოთ და ქვემოთ." };
        },
      },
    ],
  },
];
