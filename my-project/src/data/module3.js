// Module 3: Functions, Scope & Real Projects (Lessons 16-20)

export const MODULE_3_LESSONS = [
  {
    id: 16,
    moduleId: 3,
    title: "გაკვეთილი 16: ფუნქციები (def, return), Default და Keyword არგუმენტები",
    shortTitle: "16. ფუნქციები (def & return)",
    subtitle: "მრავალჯერადი კოდის ბლოკები, პარამეტრები, return მნიშვნელობა, Default და Keyword არგუმენტები",
    icon: "Braces",
    duration: "35 წუთი",
    theory: [
      {
        heading: "რა არის ფუნქცია (Function)?",
        text: "ფუნქცია არის დასახელებული, მრავალჯერ გამოყენებადი კოდის ბლოკი. ის იქმნება `def` საკვანძო სიტყვით და გამოიძახება ფრჩხილებით `my_func()`. ფუნქციები გვეხმარება არ გავიმეოროთ ერთი და იგივე კოდი (DRY — Don't Repeat Yourself).",
      },
      {
        heading: "პარამეტრები და return ოპერატორი",
        bullets: [
          "პარამეტრები — ცვლადები ფუნქციის ფრჩხილებში: `def greet(name):`",
          "return — ასრულებს ფუნქციას და აბრუნებს შედეგს გამომძახებელთან, რათა შევინახოთ ცვლადში (`res = add(2, 3)`). განსხვავებით print()-ისგან, return მონაცემს პროგრამულად გამოსაყენებლად აბრუნებს.",
        ],
      },
      {
        heading: "Default და Keyword არგუმენტები",
        bullets: [
          "Default Arguments — პარამეტრს ენიჭება ნაგულისხმევი მნიშვნელობა: `def net_price(price, discount=0):`. თუ გამოძახებისას discount არ გადავეცით, ჩაითვლება 0-ად.",
          "წესი: Default პარამეტრები ყოველთვის უნდა იდგეს ჩვეულებრივი (positional) პარამეტრების შემდეგ!",
          "Keyword Arguments — არგუმენტების გადაცემა სახელით: `hello(title='ბატონო', first='გიორგი')`. ამ დროს არგუმენტების თანმიმდევრობას მნიშვნელობა აღარ აქვს.",
        ],
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: ფუნქცია return-ით",
        code: `def create_full_name(first, last):
    first = first.capitalize()
    last = last.capitalize()
    return f"{first} {last}"

full_name = create_full_name("giorgi", "beridze")
print("სრული სახელი:", full_name)`,
        explanation: "return აბრუნებს მზა სტრიქონს, რომელსაც ვინახავთ full_name ცვლადში.",
      },
      {
        title: "მაგალითი 2: Default და Keyword არგუმენტები",
        code: `def calculate_total(price, discount=0, tax=0.18):
    discounted = price * (1 - discount)
    return round(discounted * (1 + tax), 2)

print("სტანდარტული:", calculate_total(100))
print("ფასდაკლებით:", calculate_total(100, discount=0.2))
print("სხვა თანმიმდევრობით:", calculate_total(tax=0.1, price=200))`,
        explanation: "Default მნიშვნელობები ამარტივებს გამოძახებას, ხოლო Keyword არგუმენტები ზრდის კითხვადობას.",
      },
    ],
    exercises: [
      {
        id: "ex_16_1",
        title: "სავარჯიშო 1: მართკუთხედის ფართობის ფუნქცია",
        instruction: "შექმენით ფუნქცია `rectangle_area(width, height)`, რომელიც აბრუნებს (`return`) `width * height`-ს. გამოიძახეთ ფუნქცია `5` და `8` არგუმენტებით, შეინახეთ შედეგი ცვლადში `area` და დაბეჭდეთ: `ფართობი: 40`.",
        initialCode: `# შექმენით rectangle_area(width, height) ფუნქცია


area = rectangle_area(5, 8)
print(f"ფართობი: {area}")`,
        hint: "def rectangle_area(width, height):\n    return width * height",
        solution: `def rectangle_area(width, height):
    return width * height

area = rectangle_area(5, 8)
print(f"ფართობი: {area}")`,
        validate: (output) => {
          if (output.includes("40") && output.includes("ფართობი")) {
            return { valid: true, message: "ყოჩაღ! ფუნქციამ return-ით სწორი მნიშვნელობა დააბრუნა." };
          }
          return { valid: false, message: "დაბეჭდეთ: 'ფართობი: 40'" };
        },
      },
      {
        id: "ex_16_2",
        title: "სავარჯიშო 2: Default არგუმენტი — ფასდაკლება",
        instruction: "შექმენით ფუნქცია `apply_discount(price, percent=10)`, რომელიც აბრუნებს ფასს ფასდაკლების შემდეგ: `price - (price * percent / 100)`. დაბეჭდეთ `apply_discount(200)` (ნაგულისხმევი 10%-ით) და `apply_discount(200, percent=25)`.",
        initialCode: `# შექმენით apply_discount(price, percent=10)


print(apply_discount(200))
print(apply_discount(200, percent=25))`,
        hint: "def apply_discount(price, percent=10):\n    return price - (price * percent / 100)",
        solution: `def apply_discount(price, percent=10):
    return price - (price * percent / 100)

print(apply_discount(200))
print(apply_discount(200, percent=25))`,
        validate: (output) => {
          if (output.includes("180") && output.includes("150")) {
            return { valid: true, message: "შესანიშნავია! Default და Keyword არგუმენტები იდეალურად მუშაობს." };
          }
          return { valid: false, message: "მოსალოდნელია: 180.0 და 150.0" };
        },
      },
    ],
  },
  {
    id: 17,
    moduleId: 3,
    title: "გაკვეთილი 17: *args, **kwargs, Membership (in) და List Comprehensions",
    shortTitle: "17. *args, **kwargs & List Comp",
    subtitle: "ცვლადი რაოდენობის არგუმენტები, წევრობის ოპერატორები (in / not in) და ერთხაზიანი სიები",
    icon: "Zap",
    duration: "35 წუთი",
    theory: [
      {
        heading: "*args და **kwargs — უსაზღვრო არგუმენტები",
        text: "ზოგჯერ წინასწარ არ ვიცით, რამდენ არგუმენტს გადასცემს მომხმარებელი ფუნქციას:",
        bullets: [
          "*args — აგროვებს ყველა პოზიციურ არგუმენტს ერთ კორტეჟში (Tuple). მაგ: `def add_all(*nums):`",
          "**kwargs — აგროვებს ყველა დასახელებულ (keyword) არგუმენტს ერთ ლექსიკონში (Dict). მაგ: `def print_address(**kwargs):`",
        ],
      },
      {
        heading: "წევრობის ოპერატორები (Membership: in და not in)",
        text: "გამოიყენება იმის შესამოწმებლად, არის თუ არა მნიშვნელობა სტრინგში, სიაში, კორტეჟში, სიმრავლეში ან ლექსიკონის გასაღებებში (`if 'a' in word:`).",
      },
      {
        heading: "List Comprehensions — მოკლე და „პითონური“ სიები",
        text: "List Comprehension საშუალებას გვაძლევს ერთ ხაზში შევქმნათ ახალი სია ფორმულით: `[expression for item in iterable if condition]`. ეს ბევრად უფრო მოკლე და სწრაფია, ვიდრე ჩვეულებრივი for ციკლი `.append()`-ით.",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: *args და **kwargs პრაქტიკაში",
        code: `def sum_numbers(*args):
    total = 0
    for n in args:
        total += n
    return total

print("ჯამი:", sum_numbers(10, 20, 30, 5))

def user_profile(username, **details):
    print(f"მომხმარებელი: {username}")
    for key, val in details.items():
        print(f"  {key}: {val}")

user_profile("nika99", city="თბილისი", role="Admin")`,
        explanation: "*args იღებს ნებისმიერ რაოდენობის რიცხვს, ხოლო **details აგროვებს key=value წყვილებს.",
      },
      {
        title: "მაგალითი 2: List Comprehensions და Membership",
        code: `numbers = [1, 2, 3, 4, 5, 6]

# კვადრატები მხოლოდ ლუწი რიცხვებისთვის
even_squares = [n ** 2 for n in numbers if n % 2 == 0]
print("ლუწების კვადრატები:", even_squares)

email = "student@python.ge"
if "@" in email and "." in email:
    print("ელფოსტის ფორმატი ვალიდურია")`,
        explanation: "List Comprehension აერთიანებს ტრანსფორმაციას და ფილტრაციას ერთ მკაფიო ხაზში.",
      },
    ],
    exercises: [
      {
        id: "ex_17_1",
        title: "სავარჯიშო 1: *args-ით საშუალოს გამოთვლა",
        instruction: "დაწერეთ ფუნქცია `average(*nums)`, რომელიც იღებს ნებისმიერ რაოდენობის რიცხვებს `*nums`-ით და აბრუნებს მათ საშუალო არითმეტიკულს (`sum(nums) / len(nums)`). დაბეჭდეთ `average(10, 20, 30)`-ის შედეგი.",
        initialCode: `# შექმენით average(*nums) ფუნქცია


print(average(10, 20, 30))`,
        hint: "def average(*nums):\n    return sum(nums) / len(nums)",
        solution: `def average(*nums):
    return sum(nums) / len(nums)

print(average(10, 20, 30))`,
        validate: (output) => {
          if (output.includes("20")) {
            return { valid: true, message: "ყოჩაღ! *args-მა წარმატებით მიიღო არგუმენტები." };
          }
          return { valid: false, message: "მოსალოდნელი შედეგია: 20.0" };
        },
      },
      {
        id: "ex_17_2",
        title: "სავარჯიშო 2: List Comprehension-ით გაფილტვრა",
        instruction: "მოცემულია სია: `nums = [-4, 3, -1, 8, 12, -7]`. List Comprehension-ის გამოყენებით ერთ ხაზში შექმენით ახალი სია `positives`, სადაც შევა მხოლოდ `0`-ზე მეტი რიცხვები. დაბეჭდეთ: `დადებითები: [3, 8, 12]`.",
        initialCode: `nums = [-4, 3, -1, 8, 12, -7]

# შექმენით positives List Comprehension-ით
positives = []

print(f"დადებითები: {positives}")`,
        hint: "positives = [n for n in nums if n > 0]",
        solution: `nums = [-4, 3, -1, 8, 12, -7]
positives = [n for n in nums if n > 0]
print(f"დადებითები: {positives}")`,
        validate: (output) => {
          if (output.includes("3") && output.includes("8") && output.includes("12") && !output.includes("-4")) {
            return { valid: true, message: "ბრწყინვალეა! List Comprehension უნაკლოდ დაწერეთ." };
          }
          return { valid: false, message: "სია უნდა შეიცავდეს [3, 8, 12]-ს." };
        },
      },
    ],
  },
  {
    id: 18,
    moduleId: 3,
    title: "გაკვეთილი 18: Scope (LEGB), მოდულები და if __name__ == '__main__'",
    shortTitle: "18. Scope & მოდულები",
    subtitle: "ცვლადების ხილვადობა (Local, Enclosing, Global, Built-in), import და პროგრამის სტრუქტურა",
    icon: "Compass",
    duration: "25 წუთი",
    theory: [
      {
        heading: "ცვლადების ხილვადობა — LEGB წესი",
        text: "როდესაც ვიყენებთ ცვლადს, პითონი მას ეძებს შემდეგი თანმიმდევრობით (LEGB):",
        bullets: [
          "L (Local) — ფუნქციის შიგნით შექმნილი ცვლადები.",
          "E (Enclosing) — ჩადგმული ფუნქციების შემთხვევაში, გარე ფუნქციის ცვლადები.",
          "G (Global) — ფაილის მთავარ დონეზე შექმნილი ცვლადები.",
          "B (Built-in) — პითონის ჩაშენებული სახელები (მაგ: print, len, math.pi).",
        ],
      },
      {
        heading: "მოდულები (import) და ალიასები",
        text: "მოდული არის ფაილი პითონის კოდით, რომლის შემოტანა შეგვიძლია `import` სიტყვით. შეგვიძლია შევამოკლოთ სახელი (`import math as m`) ან შემოვიტანოთ მხოლოდ კონკრეტული ფუნქცია (`from math import sqrt`).",
      },
      {
        heading: "რას ნიშნავს if __name__ == '__main__': ?",
        text: "ეს არის პითონის ერთ-ერთი ყველაზე ცნობილი კონსტრუქცია. როცა ფაილს ვუშვებთ პირდაპირ, მისი `__name__` არის `'__main__'`. ხოლო როცა მას ვაიმპორტებთ სხვა ფაილში, `__name__` ხდება ფაილის სახელი. ამიტომ `if __name__ == '__main__':` ბლოკში ვწერთ მთავარ კოდს (`main()`), რომ იმპორტისას ავტომატურად არ გაეშვას.",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: Local vs Global Scope",
        code: `x = 100  # Global ცვლადი

def func1():
    x = 5  # Local ცვლადი (არ ცვლის გლობალურ x-ს)
    print("func1-ში x =", x)

def func2():
    print("func2 ხედავს გლობალურ x-ს =", x)

func1()
func2()
print("გარეთ x ისევ =", x)`,
        explanation: "ფუნქციის შიგნით შექმნილი x არსებობს მხოლოდ იმ ფუნქციის ფარგლებში.",
      },
      {
        title: "მაგალითი 2: if __name__ == '__main__': სტრუქტურა",
        code: `import math as m

def circle_circumference(r):
    return round(2 * m.pi * r, 2)

def main():
    print("წრეწირის სიგრძე (r=10):", circle_circumference(10))

if __name__ == "__main__":
    main()`,
        explanation: "პროფესიონალური პითონის სკრიპტები თითქმის ყოველთვის იყენებენ main() ფუნქციას და __name__ შემოწმებას.",
      },
    ],
    exercises: [
      {
        id: "ex_18_1",
        title: "სავარჯიშო 1: from ... import და main() სტრუქტურა",
        instruction: "გამოიყენეთ `from math import sqrt`, შექმენით ფუნქცია `hypotenuse(a, b)`, რომელიც იყენებს `sqrt(a**2 + b**2)`-ს და აბრუნებს შედეგს. `if __name__ == \"__main__\":` ბლოკში დაბეჭდეთ `hypotenuse(3, 4)` (უნდა იყოს 5.0).",
        initialCode: `from math import sqrt

# შექმენით hypotenuse(a, b)


if __name__ == "__main__":
    # გამოიძახეთ და დაბეჭდეთ hypotenuse(3, 4)
    pass`,
        hint: "def hypotenuse(a, b):\n    return sqrt(a**2 + b**2)\n\nif __name__ == \"__main__\":\n    print(hypotenuse(3, 4))",
        solution: `from math import sqrt

def hypotenuse(a, b):
    return sqrt(a**2 + b**2)

if __name__ == "__main__":
    print(hypotenuse(3, 4))`,
        validate: (output) => {
          if (output.includes("5")) {
            return { valid: true, message: "ყოჩაღ! from import და __main__ ბლოკი სწორად გამოიყენეთ." };
          }
          return { valid: false, message: "მოსალოდნელი შედეგია: 5.0" };
        },
      },
      {
        id: "ex_18_2",
        title: "სავარჯიშო 2: Local და Global ცვლადების გამიჯვნა",
        instruction: "მოცემულია გლობალური ცვლადი `tax_rate = 0.20`. დაწერეთ ფუნქცია `calc_tax(amount)`, რომელიც იყენებს გლობალურ `tax_rate`-ს და აბრუნებს `amount * tax_rate`-ს. დაბეჭდეთ `calc_tax(500)`.",
        initialCode: `tax_rate = 0.20

# დაწერეთ calc_tax(amount)


print(calc_tax(500))`,
        hint: "def calc_tax(amount):\n    return amount * tax_rate",
        solution: `tax_rate = 0.20

def calc_tax(amount):
    return amount * tax_rate

print(calc_tax(500))`,
        validate: (output) => {
          if (output.includes("100")) {
            return { valid: true, message: "შესანიშნავია! ფუნქციამ წარმატებით წაიკითხა Global ცვლადი." };
          }
          return { valid: false, message: "მოსალოდნელი შედეგია: 100.0" };
        },
      },
    ],
  },
  {
    id: 19,
    moduleId: 3,
    title: "გაკვეთილი 19: კომპლექსური პრაქტიკა №2 — რეალური მინი-პროგრამები",
    shortTitle: "19. პრაქტიკა: ბანკი & შიფრი",
    subtitle: "ვიდეოს მთავარი პროექტები: ბანკის ბალანსის სისტემა, ტექსტის დაშიფვრა (Encryption) და Slot Machine",
    icon: "Sparkles",
    duration: "45 წუთი",
    isComplexPractice: true,
    complexChallenges: [
      {
        id: "comp_4",
        title: "პროექტი 1: ბანკის სისტემა (Banking Program)",
        description: "შექმენით ფუნქციები ბანკის მართვისთვის:\n1. `deposit(balance, amount)` — თუ `amount > 0`, აბრუნებს `balance + amount`-ს, სხვა შემთხვევაში უცვლელ `balance`-ს.\n2. `withdraw(balance, amount)` — თუ `0 < amount <= balance`, აბრუნებს `balance - amount`-ს, სხვა შემთხვევაში უცვლელ `balance`-ს.\nშეამოწმეთ საწყისი `balance = 100`-ზე: ჯერ შეიტანეთ `250`, შემდეგ გამოიტანეთ `80`, და ბოლოს დაბეჭდეთ: `საბოლოო ბალანსი: 270 ლარი`.",
        initialCode: `def deposit(balance, amount):
    # დააბრუნეთ განახლებული ბალანსი
    pass

def withdraw(balance, amount):
    # შეამოწმეთ საკმარისი თანხა და დააბრუნეთ ბალანსი
    pass

balance = 100
balance = deposit(balance, 250)
balance = withdraw(balance, 80)
print(f"საბოლოო ბალანსი: {balance} ლარი")`,
        hint: "def deposit(balance, amount):\n    if amount > 0:\n        return balance + amount\n    return balance\n\ndef withdraw(balance, amount):\n    if 0 < amount <= balance:\n        return balance - amount\n    return balance",
        solution: `def deposit(balance, amount):
    if amount > 0:
        return balance + amount
    return balance

def withdraw(balance, amount):
    if 0 < amount <= balance:
        return balance - amount
    return balance

balance = 100
balance = deposit(balance, 250)
balance = withdraw(balance, 80)
print(f"საბოლოო ბალანსი: {balance} ლარი")`,
        validate: (output) => {
          return output.includes("270");
        },
      },
      {
        id: "comp_5",
        title: "პროექტი 2: ტექსტის დაშიფვრა (Substitution Cipher)",
        description: "დაწერეთ ფუნქცია `encrypt(text, chars, key)`, რომელიც `text`-ის თითოეულ სიმბოლოს პოულობს `chars` სტრიქონში (`idx = chars.index(ch)`) და ცვლის `key[idx]` სიმბოლოთი.\nმოცემულია: `chars = \"abcde\"`, `key = \"xyzpq\"`, `message = \"bad\"`.\nდაბეჭდეთ დაშიფრული ტექსტი (`yxp`).",
        initialCode: `chars = "abcde"
key   = "xyzpq"

def encrypt(text, chars, key):
    cipher = ""
    # for ციკლით გადაიყვანეთ თითოეული ასო
    return cipher

print(encrypt("bad", chars, key))`,
        hint: "for ch in text:\n    idx = chars.index(ch)\n    cipher += key[idx]",
        solution: `chars = "abcde"
key   = "xyzpq"

def encrypt(text, chars, key):
    cipher = ""
    for ch in text:
        idx = chars.index(ch)
        cipher += key[idx]
    return cipher

print(encrypt("bad", chars, key))`,
        validate: (output) => {
          return output.trim() === "yxp";
        },
      },
      {
        id: "comp_6",
        title: "პროექტი 3: Slot Machine მოგების გამომთვლელი",
        description: "დაწერეთ ფუნქცია `get_payout(row, bet)`, სადაც `row` არის 3 სიმბოლოს სია.\nთუ სამივე სიმბოლო ერთნაირია (`row[0] == row[1] == row[2]`):\n• თუ `row[0] == '7'`, მოგებაა `bet * 10`\n• სხვა შემთხვევაში `bet * 3`\nთუ განსხვავებულია, აბრუნებს `0`.\nგამოიძახეთ `get_payout(['7', '7', '7'], 50)` და დაბეჭდეთ: `მოგება: 500`.",
        initialCode: `def get_payout(row, bet):
    # შეამოწმეთ row[0] == row[1] == row[2]
    return 0

win = get_payout(["7", "7", "7"], 50)
print(f"მოგება: {win}")`,
        hint: "if row[0] == row[1] == row[2]:\n    if row[0] == '7':\n        return bet * 10\n    return bet * 3\nreturn 0",
        solution: `def get_payout(row, bet):
    if row[0] == row[1] == row[2]:
        if row[0] == "7":
            return bet * 10
        return bet * 3
    return 0

win = get_payout(["7", "7", "7"], 50)
print(f"მოგება: {win}")`,
        validate: (output) => {
          return output.includes("500");
        },
      },
    ],
  },
  {
    id: 20,
    moduleId: 3,
    title: "გაკვეთილი 20: შემაჯამებელი ქვიზი №2 (კოლექციები და ფუნქციები)",
    shortTitle: "20. შემაჯამებელი ქვიზი №2",
    subtitle: "სტრინგები, Set, 2D სიები, random, ფუნქციები, *args/**kwargs და List Comprehensions",
    icon: "Award",
    duration: "35 წუთი",
    isQuiz: true,
    quizQuestions: [
      {
        id: "q2_1",
        type: "choice",
        question: "რას დააბრუნებს გამოსახულება \"Python\"[::-1]?",
        options: ["\"Python\"", "\"nohtyP\"", "\"P\"", "IndexError"],
        correctIndex: 1,
        explanation: "[::-1] slicing ბიჯით -1 აბრუნებს ტექსტს უკუღმა.",
      },
      {
        id: "q2_2",
        type: "choice",
        question: "რომელი კოლექცია არ უშვებს დუბლიკატ ელემენტებს?",
        options: ["list", "tuple", "set", "2D list"],
        correctIndex: 2,
        explanation: "set (სიმრავლე) ავტომატურად ინახავს მხოლოდ უნიკალურ ელემენტებს.",
      },
      {
        id: "q2_3",
        type: "choice",
        question: "რა ტიპის მონაცემად გარდაქმნის ფუნქცია `*args` გადაცემულ არგუმენტებს?",
        options: ["list", "tuple", "dict", "set"],
        correctIndex: 1,
        explanation: "*args პოზიციურ არგუმენტებს ინახავს tuple-ში, ხოლო **kwargs — dict-ში.",
      },
      {
        id: "q2_4",
        type: "choice",
        question: "რას აბრუნებს ფუნქცია, თუ მასში `return` ოპერატორი საერთოდ არ წერია?",
        options: ["0", "\"\"", "None", "SyntaxError"],
        correctIndex: 2,
        explanation: "return-ის გარეშე პითონის ფუნქცია ავტომატურად აბრუნებს None-ს.",
      },
      {
        id: "q2_5",
        type: "code",
        question: "კოდის ამოცანა: List Comprehension კვადრატებისთვის",
        instruction: "შექმენით სია `squares = [x**2 for x in range(1, 5)]` და დაბეჭდეთ ის (`[1, 4, 9, 16]`).",
        initialCode: `# შექმენით squares სია List Comprehension-ით და დაბეჭდეთ
`,
        hint: "squares = [x**2 for x in range(1, 5)]\nprint(squares)",
        solution: `squares = [x**2 for x in range(1, 5)]
print(squares)`,
        validate: (output) => {
          return output.includes("1") && output.includes("4") && output.includes("9") && output.includes("16");
        },
      },
      {
        id: "q2_6",
        type: "code",
        question: "კოდის ამოცანა: ფუნქცია keyword არგუმენტით",
        instruction: "დაწერეთ ფუნქცია `power(base, exp=2)`, რომელიც აბრუნებს `base ** exp`-ს. დაბეჭდეთ `power(3, exp=3)` (შედეგი: 27).",
        initialCode: `# დაწერეთ power(base, exp=2)


print(power(3, exp=3))`,
        hint: "def power(base, exp=2):\n    return base ** exp",
        solution: `def power(base, exp=2):
    return base ** exp

print(power(3, exp=3))`,
        validate: (output) => {
          return output.includes("27");
        },
      },
    ],
  },
];
