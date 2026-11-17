// Module 1: Python Fundamentals (Lessons 1-6)

export const MODULE_1_LESSONS = [
  {
    id: 1,
    moduleId: 1,
    title: "გაკვეთილი 1: ცვლადები, ცვლადების შეცვლა და Type Casting",
    shortTitle: "1. ცვლადები & print()",
    subtitle: "ცვლადების შექმნა, მნიშვნელობის შეცვლა, str(), int(), float(), bool() და print()",
    icon: "Variable",
    duration: "20 წუთი",
    theory: [
      {
        heading: "რა არის ცვლადი და რატომ გვჭირდება ის?",
        text: "პროგრამირებაში ცვლადი (Variable) წარმოიდგინეთ როგორც დასახელებული ყუთი მეხსიერებაში, სადაც ვინახავთ ინფორმაციას შემდგომი გამოყენებისთვის. პითონში ცვლადის შექმნა ძალიან მარტივია: უბრალოდ ვწერთ ცვლადის სახელს, ტოლობის ნიშანს (=) და მნიშვნელობას.",
      },
      {
        heading: "ცვლადის მნიშვნელობის შეცვლა (Reassignment)",
        text: "ცვლადს იმიტომ ჰქვია 'ცვლადი', რომ მისი მნიშვნელობა შეიძლება პროგრამის მსვლელობისას ნებისმიერ დროს შეიცვალოს (გადაეწეროს). პითონი არის დინამიურად ტიპიზირებული ენა, რაც ნიშნავს, რომ ერთსა და იმავე ცვლადში ჯერ შეგვიძლია ჩავწეროთ რიცხვი, შემდეგ კი ტექსტი:",
        bullets: [
          "მნიშვნელობის განახლება: count = 5 -> count = 10",
          "თვითგაზრდა: count = count + 1 (ან მოკლედ count += 1)",
          "დინამიური ტიპიზაცია: data = 100 -> data = \"დასრულებულია\"",
        ],
      },
      {
        heading: "მონაცემთა ძირითადი ტიპები (Data Types)",
        bullets: [
          "int (Integer) — მთელი რიცხვები (მაგ: 25, -10, 0)",
          "float — წილადი/ათწილადი რიცხვები (მაგ: 3.14, -0.5, 10.0)",
          "str (String) — ტექსტური მონაცემი, რომელიც იწერება ბრჭყალებში (მაგ: \"გამარჯობა\", 'Python')",
          "bool (Boolean) — ლოგიკური მნიშვნელობა: მხოლოდ True (ჭეშმარიტი) ან False (მცდარი)",
        ],
      },
      {
        heading: "ტიპების კონვერტაცია (Type Casting: str, int, float, bool)",
        text: "ტიპების კონვერტაცია საშუალებას გვაძლევს მონაცემის ერთი ტიპი გარდავქმნათ მეორედ:",
        bullets: [
          "str(x) — ნებისმიერ მონაცემს აქცევს ტექსტად: str(100) -> \"100\", str(True) -> \"True\"",
          "int(x) — აქცევს მთელ რიცხვად: int(\"45\") -> 45, int(9.85) -> 9 (წილადი ნაწილი ჩამოიჭრება)",
          "float(x) — აქცევს ათწილადად: float(\"3.14\") -> 3.14, float(5) -> 5.0",
          "bool(x) — აქცევს ლოგიკურ ტიპად: bool(0), bool(\"\"), bool(None) არის False, ხოლო ნებისმიერი სხვა მნიშვნელობა (მაგ. bool(1), bool(\"ტექსტი\")) არის True!",
        ],
      },
      {
        heading: "print() ფუნქცია, Escape Sequences და f-strings",
        text: "ეკრანზე შედეგის გამოსატანად გამოიყენება print() ფუნქცია. ტექსტისა და ცვლადების გასაერთიანებლად ვიყენებთ f-string-ს: ბრჭყალების წინ ვწერთ f-ს, ხოლო ცვლადებს ვსვამთ ფიგურულ ფრჩხილებში {}.",
        bullets: [
          "Escape Sequences: \\n (ახალი ხაზი), \\t (ტაბულაცია/დაშორება), \\\" (ბრჭყალი ტექსტში), \\\\ (დახრილი ხაზი)",
          "print(a, b, sep=' - ') — ცვლის ელემენტებს შორის გამყოფ სიმბოლოს (ნაგულისხმევად გამოტოვებაა)",
          "print('ტექსტი', end=' ') — განსაზღვრავს რით დასრულდეს ხაზი (ნაგულისხმევად \\n-ია)",
        ],
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: ცვლადის მნიშვნელობის შეცვლა (Reassignment)",
        code: `# საწყისი ქულა
score = 10
print(f"საწყისი ქულა: {score}")

# ქულის შეცვლა ახალი მნიშვნელობით
score = 25
print(f"განახლებული ქულა: {score}")

# ქულის გაზრდა 5-ით
score = score + 5
print(f"საბოლოო ქულა: {score}")  # 30`,
        explanation: "ცვლადის მნიშვნელობა თანმიმდევრულად იცვლება კოდის ყოველ ნაბიჯზე.",
      },
      {
        title: "მაგალითი 2: Type Casting: str(), int(), float(), bool()",
        code: `# ტექსტიდან რიცხვში
text_num = "150"
real_num = int(text_num)
print("int-ად გარდაქმნა:", real_num + 50)  # 200

# რიცხვიდან ტექსტში
age = 22
age_str = str(age)
print("str-ად გარდაქმნა: ასაკია " + age_str)

# float და bool
pi_float = float("3.1415")
print("float:", pi_float)

print("bool(0):", bool(0))          # False
print("bool(100):", bool(100))      # True
print("bool(''):", bool(""))        # False (ცარიელი ტექსტი)
print("bool('Python'):", bool("Python")) # True`,
        explanation: "ოთხივე ფუნქცია (str, int, float, bool) გარდაქმნის მონაცემებს სასურველ ტიპში.",
      },
      {
        title: "მაგალითი 3: f-string ფორმატირება",
        code: `user = "მარიამი"
balance = 450.75
is_active = True

print(f"მომხმარებელი: {user} | ბალანსი: {balance} ₾ | აქტიურია: {is_active}")`,
        explanation: "f-string საშუალებას გვაძლევს ერთ ხაზში სუფთად გამოვიტანოთ სხვადასხვა ტიპის ცვლადები.",
      },
      {
        title: "მაგალითი 4: Escape Sequences (\\n, \\t) და print(..., sep, end)",
        code: `print("ხაზი 1\\nხაზი 2")
print("სახელი:\\tგიორგი")
print("2026", "11", "17", sep="-")
print("გამარჯობა", end=" ")
print("სამყაროვ!")`,
        explanation: "\\n გადადის ახალ ხაზზე, \\t ამატებს ტაბულაციას, ხოლო sep და end აკონტროლებენ print()-ის ფორმატს.",
      },
    ],
    exercises: [
      {
        id: "ex_1_1",
        title: "სავარჯიშო 1: ცვლადის შეცვლა და ბალანსი",
        instruction: "შექმენით ცვლადი `balance = 100`. შემდეგ შეცვალეთ მისი მნიშვნელობა და დაუმატეთ 50 (ანუ `balance = balance + 50`). ბოლოს დაბეჭდეთ f-string-ით: `განახლებული ბალანსი: 150 ლარი`.",
        initialCode: `balance = 100

# შეცვალეთ balance და დაუმატეთ 50


# დაბეჭდეთ შედეგი f-string-ით
`,
        hint: "balance = balance + 50\nprint(f\"განახლებული ბალანსი: {balance} ლარი\")",
        solution: `balance = 100
balance = balance + 50
print(f"განახლებული ბალანსი: {balance} ლარი")`,
        validate: (output) => {
          const clean = output.trim();
          if (clean.includes("150") && clean.includes("ბალანსი")) {
            return { valid: true, message: "შესანიშნავია! ცვლადის მნიშვნელობა სწორად შეიცვალა." };
          }
          return { valid: false, message: "მოსალოდნელია: 'განახლებული ბალანსი: 150 ლარი'" };
        },
      },
      {
        id: "ex_1_2",
        title: "სავარჯიშო 2: ტიპების კონვერტაცია (int, float, bool)",
        instruction: "მოცემულია ტექსტური ცვლადები `num_str = \"42\"` და `price_str = \"19.5\"`. გადაიყვანეთ ისინი შესაბამისად `int()`-ში და `float()`-ში, შეკრიბეთ და შედეგი შეინახეთ ცვლადში `total`. დაბეჭდეთ `total` და `bool(total)`.",
        initialCode: `num_str = "42"
price_str = "19.5"

# გარდაქმენით int-ად და float-ად, შეკრიბეთ და დაბეჭდეთ
`,
        hint: "total = int(num_str) + float(price_str)\nprint(total)\nprint(bool(total))",
        solution: `num_str = "42"
price_str = "19.5"
total = int(num_str) + float(price_str)
print(total)
print(bool(total))`,
        validate: (output) => {
          if (output.includes("61.5") && output.includes("True")) {
            return { valid: true, message: "ყოჩაღ! Type Casting სრულყოფილად შესრულდა." };
          }
          return { valid: false, message: "მოსალოდნელია: 61.5 და True" };
        },
      },
    ],
  },
  {
    id: 2,
    moduleId: 1,
    title: "გაკვეთილი 2: input() ფუნქცია და მონაცემების მიღება",
    shortTitle: "2. input() & Madlibs",
    subtitle: "მომხმარებელთან ინტერაქცია, input()-ის თავისებურებები და Madlibs მინი-პროექტი",
    icon: "Terminal",
    duration: "25 წუთი",
    theory: [
      {
        heading: "როგორ იღებს პითონი ინფორმაციას მომხმარებლისგან?",
        text: "input() ფუნქცია აჩერებს პროგრამის მუშაობას და ელოდება, სანამ მომხმარებელი კლავიატურიდან შეიყვანს ტექსტს და დააჭერს Enter-ს. ფრჩხილებში შეგვიძლია ჩავწეროთ კითხვა (prompt).",
      },
      {
        heading: "მთავარი წესი: input() ყოველთვის აბრუნებს ტექსტს (String-ს)!",
        text: "მაშინაც კი, თუ მომხმარებელი შეიყვანს ციფრს 25, input() დააბრუნებს ტექსტურ \"25\"-ს. თუ მასზე მათემატიკური ოპერაციების ჩატარება გვსურს, ის აუცილებლად უნდა გადავიყვანოთ int()-ში ან float()-ში!",
      },
      {
        heading: "რიცხვითი მონაცემის სწორი მიღება",
        text: "პრაქტიკაში ხშირად პირდაპირ ვაერთიანებთ: age = int(input(\"შეიყვანეთ ასაკი: \")). ეს ერთდროულად იღებს მონაცემს და გარდაქმნის მას მთელ რიცხვად.",
      },
      {
        heading: "მინი-პროექტი: Madlibs თამაში",
        text: "Madlibs არის სახალისო ტექსტური თამაში, სადაც მომხმარებელი შეჰყავს სხვადასხვა სიტყვები (ზედსართავი სახელი, არსებითი სახელი, ზმნა) და პროგრამა f-string-ის დახმარებით ქმნის სასაცილო ისტორიას.",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: სახელის შეყვანა და მისალმება",
        code: `# მომხმარებლის სახელის მიღება
name = input("რა გქვია? ")
print(f"გამარჯობა, {name}! სასიამოვნოა შენი გაცნობა.")`,
        explanation: "პროგრამა ეკითხება სახელს და ეკრანზე გამოაქვს პერსონალიზებული მისალმება.",
      },
      {
        title: "მაგალითი 2: რიცხვების შეყვანა და კალკულატორი",
        code: `# რიცხვების შეყვანა
num1 = int(input("პირველი რიცხვი: "))
num2 = int(input("მეორე რიცხვი: "))

sum_result = num1 + num2
print(f"მათი ჯამია: {sum_result}")`,
        explanation: "int(input()) უზრუნველყოფს, რომ მიღებული მონაცემები რიცხვებად აღიქმებოდეს და არა ტექსტად.",
      },
      {
        title: "მაგალითი 3: Madlibs თამაში (ინტერაქტიული ისტორია)",
        code: `adjective = input("შეიყვანეთ ზედსართავი სახელი (მაგ: მხიარული): ")
noun = input("შეიყვანეთ არსებითი სახელი (მაგ: კატა): ")
place = input("შეიყვანეთ ადგილი (მაგ: პარკში): ")

print(f"დღეს {place} წავედი და იქ ძალიან {adjective} {noun} დავინახე!")`,
        explanation: "input() და f-string-ის გაერთიანებით მარტივად იქმნება ინტერაქტიული ისტორია.",
      },
    ],
    exercises: [
      {
        id: "ex_2_1",
        title: "სავარჯიშო 1: მომავლის ასაკის კალკულატორი",
        instruction: "დაწერეთ კოდი, რომელიც მიიღებს მომხმარებლის სახელს (`name`) და მის მიმდინარე ასაკს (`current_age` როგორც მთელ რიცხვს). გამოთვალეთ რამდენი წლის იქნება ის 10 წლის შემდეგ (`future_age = current_age + 10`) და დაბეჭდეთ: `[სახელი], 10 წლის შემდეგ შენ იქნები [ასაკი] წლის.`",
        initialCode: `name = input("შეიყვანეთ სახელი: ")
current_age = int(input("შეიყვანეთ ასაკი: "))

# გამოთვალეთ და დაბეჭდეთ
`,
        hint: "future_age = current_age + 10; print(f\"{name}, 10 წლის შემდეგ შენ იქნები {future_age} წლის.\")",
        solution: `name = input("შეიყვანეთ სახელი: ")
current_age = int(input("შეიყვანეთ ასაკი: "))
future_age = current_age + 10
print(f"{name}, 10 წლის შემდეგ შენ იქნები {future_age} წლის.")`,
        validate: (output) => {
          const clean = output.trim();
          if (clean.includes("10 წლის შემდეგ შენ იქნები") || (clean.includes("წლის") && /\d+/.test(clean))) {
            return { valid: true, message: "ყოჩაღ! input() და მათემატიკური გამოთვლა სწორად მუშაობს." };
          }
          return { valid: false, message: "დაბეჭდეთ ტექსტი ფორმატით: '{სახელი}, 10 წლის შემდეგ შენ იქნები {ასაკი} წლის.'" };
        },
      },
      {
        id: "ex_2_2",
        title: "სავარჯიშო 2: მართკუთხედის ფართობი",
        instruction: "მიიღეთ მართკუთხედის სიგანე და სიმაღლე float(input())-ით. გამოთვალეთ ფართობი (სიგანე გამრავლებული სიმაღლეზე) და დაბეჭდეთ: `მართკუთხედის ფართობია: [ფართობი]`",
        initialCode: `width = float(input("სიგანე: "))
height = float(input("სიმაღლე: "))

# გამოთვალეთ ფართობი
`,
        hint: "area = width * height; print(f\"მართკუთხედის ფართობია: {area}\")",
        solution: `width = float(input("სიგანე: "))
height = float(input("სიმაღლე: "))
area = width * height
print(f"მართკუთხედის ფართობია: {area}")`,
        validate: (output) => {
          if (output.includes("ფართობია") || /\d+/.test(output)) {
            return { valid: true, message: "შესანიშნავია! ფართობი სწორად დაითვალა." };
          }
          return { valid: false, message: "გამოიტანეთ: 'მართკუთხედის ფართობია: [შედეგი]'" };
        },
      },
    ],
  },
  {
    id: 3,
    moduleId: 1,
    title: "გაკვეთილი 3: მათემატიკური, შედარებითი და ლოგიკური (and, or, not) ოპერატორები",
    shortTitle: "3. ოპერატორები & math",
    subtitle: "არითმეტიკა (+, -, *, //, %, **), math მოდული, შედარება და ლოგიკა (and, or, not)",
    icon: "Percent",
    duration: "25 წუთი",
    theory: [
      {
        heading: "არითმეტიკული ოპერატორები",
        bullets: [
          "+ (მიმატება) და - (გამოკლება)",
          "* (გამრავლება) და / (ჩვეულებრივი გაყოფა — აბრუნებს float-ს)",
          "// (მთელზე გაყოფა) — აბრუნებს გაყოფის მთელ ნაწილს (მაგ: 7 // 2 არის 3)",
          "% (ნაშთის ოპერატორი - Modulo) — აბრუნებს გაყოფის ნაშთს (მაგ: 7 % 2 არის 1)",
          "** (ხარისხში აყვანა) — მაგალითად: 2 ** 3 არის 8",
        ],
      },
      {
        heading: "ჩაშენებული ფუნქციები და math მოდული",
        text: "პითონს აქვს მზა მათემატიკური ფუნქციები: round(), abs(), pow(), max(), min(), ხოლო დამატებითი გამოთვლებისთვის (მაგ. კვადრატული ფესვი, პი რიცხვი, დამრგვალება ზევით/ქვევით) ვიყენებთ `import math` მოდულს (math.pi, math.sqrt(), math.ceil(), math.floor()).",
      },
      {
        heading: "შედარების ოპერატორები (Comparison)",
        bullets: [
          "== (უდრის) — ამოწმებს ტოლობას (ყურადღება: = არის მინიჭება, == არის შედარება!)",
          "!= (არ უდრის) — True-ა, თუ მნიშვნელობები განსხვავებულია",
          ">, < (მეტია / ნაკლებია) და >=, <= (მეტია ან ტოლია / ნაკლებია ან ტოლია)",
        ],
      },
      {
        heading: "ლოგიკური ოპერატორები: and, or, not",
        text: "ლოგიკური ოპერატორები აერთიანებენ რამდენიმე შედარებას და აბრუნებენ True-ს ან False-ს:",
        bullets: [
          "and — აბრუნებს True-ს მხოლოდ მაშინ, როცა ორივე პირობა True-ა. თუ ერთი მაინც False-ა, შედეგიც False-ა! (მაგ: (5 > 2) and (10 > 3) -> True)",
          "or — აბრუნებს True-ს, თუ ერთ-ერთი პირობა მაინც True-ა! (მაგ: (5 > 2) or (10 < 3) -> True)",
          "not — აბრუნებს საპირისპირო მნიშვნელობას: not True -> False, not False -> True",
        ],
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: // და % ოპერატორები",
        code: `total_candies = 17
children = 5

candies_per_child = total_candies // children  # 3
candies_left = total_candies % children        # 2

print(f"თითოს ერგება: {candies_per_child}")
print(f"დარჩა ნაშთი: {candies_left}")`,
        explanation: "// აბრუნებს მთელს, ხოლო % ნაშთს.",
      },
      {
        title: "მაგალითი 2: math მოდული და წრის ფართობი",
        code: `import math

radius = 5
area = math.pi * pow(radius, 2)
print("წრის ფართობი:", round(area, 2))
print("ფესვი 64-დან:", math.sqrt(64))`,
        explanation: "math მოდულით მარტივად ვიღებთ math.pi-ს, math.sqrt()-ს და სხვა ფუნქციებს.",
      },
      {
        title: "მაგალითი 3: ლოგიკური ოპერატორები and, or, not",
        code: `age = 20
has_license = True

# and მოითხოვს ორივეს
can_drive = (age >= 18) and has_license
print("მართვის უფლება აქვს (and):", can_drive)  # True

# or მოითხოვს ერთ-ერთს მაინც
is_weekend = False
is_holiday = True
is_day_off = is_weekend or is_holiday
print("დასვენების დღეა (or):", is_day_off)       # True

# not აბრუნებს საპირისპიროს
is_raining = False
print("მზიანია (not):", not is_raining)        # True`,
        explanation: "and, or და not ოპერატორებით მარტივად ვწერთ კომპლექსურ ლოგიკურ პირობებს.",
      },
    ],
    exercises: [
      {
        id: "ex_3_1",
        title: "სავარჯიშო 1: საათების და წუთების გამომთვლელი",
        instruction: "მოცემულია წუთების ჯამური რაოდენობა: `total_minutes = 145`. გამოთვალეთ რამდენი სრული საათია (`// 60`) და რამდენი წუთი რჩება ნაშთად (`% 60`). დაბეჭდეთ: `145 წუთი არის 2 საათი და 25 წუთი.`",
        initialCode: `total_minutes = 145

hours = total_minutes // 60
minutes = total_minutes % 60

# დაბეჭდეთ შედეგი
`,
        hint: "print(f\"{total_minutes} წუთი არის {hours} საათი და {minutes} წუთი.\")",
        solution: `total_minutes = 145
hours = total_minutes // 60
minutes = total_minutes % 60
print(f"{total_minutes} წუთი არის {hours} საათი და {minutes} წუთი.")`,
        validate: (output) => {
          if (output.includes("2 საათი") && output.includes("25 წუთი")) {
            return { valid: true, message: "ყოჩაღ! // და % ოპერატორები უშეცდომოდ გამოიყენეთ." };
          }
          return { valid: false, message: "მოსალოდნელია: '145 წუთი არის 2 საათი და 25 წუთი.'" };
        },
      },
      {
        id: "ex_3_2",
        title: "სავარჯიშო 2: and და or ლოგიკური ოპერატორები",
        instruction: "მოცემულია: `temperature = 24` და `is_sunny = True`. შექმენით ლოგიკური ცვლადი `good_weather = (temperature >= 20) and is_sunny`. დაბეჭდეთ: `კარგი ამინდია: True`.",
        initialCode: `temperature = 24
is_sunny = True

# გამოიყენეთ and ოპერატორი
good_weather = (temperature >= 20) and is_sunny

# დაბეჭდეთ კარგი ამინდია: True
`,
        hint: "print(f\"კარგი ამინდია: {good_weather}\")",
        solution: `temperature = 24
is_sunny = True
good_weather = (temperature >= 20) and is_sunny
print(f"კარგი ამინდია: {good_weather}")`,
        validate: (output) => {
          if (output.includes("True") && output.includes("კარგი ამინდია")) {
            return { valid: true, message: "შესანიშნავია! and ლოგიკური ოპერატორი სწორად მუშაობს." };
          }
          return { valid: false, message: "დაბეჭდეთ: 'კარგი ამინდია: True'" };
        },
      },
    ],
  },
  {
    id: 4,
    moduleId: 1,
    title: "გაკვეთილი 4: პირობითი ოპერატორები (if, elif, else) და ინდენტაცია",
    shortTitle: "4. if, elif & Ternary",
    subtitle: "ლოგიკური განშტოებები, ინდენტაცია, ერთხაზიანი პირობა (Conditional Expression) და კალკულატორი",
    icon: "GitBranch",
    duration: "30 წუთი",
    theory: [
      {
        heading: "რა არის ინდენტაცია (Indentation) და რატომ არის ის უმნიშვნელოვანესი?",
        text: "სხვა პროგრამირების ენებისგან (C++, JavaScript, Java) განსხვავებით, სადაც კოდის ბლოკები გამოიყოფა ფიგურული ფრჩხილებით {}, პითონში კოდის ბლოკები გამოიყოფა შეწევით (Indentation)! შეწევა პითონისთვის არის სინტაქსის ნაწილი და არა უბრალოდ სილამაზე.",
        bullets: [
          "სტანდარტი (PEP 8): ყოველი ახალი ბლოკი იწევა ზუსტად 4 გამოტოვებით (Space) ან ერთი Tab-ით.",
          "ორწერტილი (:): if, elif, else, for, while ხაზის ბოლოს აუცილებლად იწერება ორწერტილი. მის შემდეგ მომდევნო ხაზი უნდა იყოს შეწეული!",
          "IndentationError: თუ შეწევა გამოგრჩათ ან არათანაბრად გააკეთეთ, პითონი ამოაგდებს IndentationError-ს.",
          "ბლოკის დასრულება: როცა შეწევას უკან აბრუნებთ, კოდის ბლოკი სრულდება და პროგრამა აგრძელებს ჩვეულებრივ დინებას.",
        ],
      },
      {
        heading: "if, elif და else სტრუქტურა",
        bullets: [
          "if — პირველი პირობა: სრულდება მხოლოდ მაშინ, როცა პირობა True-ა.",
          "elif (else if) — ალტერნატიული პირობა, თუ წინა if აღმოჩნდა False.",
          "else — სრულდება იმ შემთხვევაში, თუ არცერთი წინა პირობა არ შესრულდა.",
        ],
      },
      {
        heading: "ერთხაზიანი პირობა (Conditional Expression / Ternary)",
        text: "მარტივი if-else ჩანაწერი პითონში შეგვიძლია დავწეროთ ერთ ხაზში: `X if condition else Y`. მაგალითად: `status = \"სრულწლოვანი\" if age >= 18 else \"არასრულწლოვანი\"`.",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: ინდენტაციის დემონსტრაცია და შეწევა",
        code: `age = 18

# ორწერტილის (:) შემდეგ ხაზი შეწეულია 4 space-ით!
if age >= 18:
    print("1. თქვენ ხართ სრულწლოვანი.")
    print("2. ეს ხაზიც if ბლოკის შიგნითაა.")
else:
    print("1. თქვენ ხართ არასრულწლოვანი.")

# ეს ხაზი შეწეული აღარ არის, ამიტომ ყოველთვის შესრულდება:
print("პროგრამა დასრულდა.")`,
        explanation: "შეწეული ხაზები ეკუთვნის if-else ბლოკს, შეუწეველი კი სცდება მას.",
      },
      {
        title: "მაგალითი 2: ნიშნების შეფასება და მინი-კალკულატორი",
        code: `op = "+"
a = 12
b = 4

if op == "+":
    print("შედეგი:", a + b)
elif op == "-":
    print("შედეგი:", a - b)
elif op == "*":
    print("შედეგი:", a * b)
elif op == "/":
    print("შედეგი:", a / b)
else:
    print("უცნობი ოპერატორი")`,
        explanation: "elif თანმიმდევრობით ამოწმებს ოპერატორებს და ასრულებს შესაბამის მოქმედებას.",
      },
      {
        title: "მაგალითი 3: Conditional Expression (ერთხაზიანი if-else)",
        code: `num = 7
result = "ლუწი" if num % 2 == 0 else "კენტი"
print(f"{num} არის {result}")

temp = 26
weather = "ცხელა" if temp > 25 else "გრილა"
print("ამინდი:", weather)`,
        explanation: "Conditional Expression ამოკლებს მარტივ if-else მინიჭებას ერთ ხაზამდე.",
      },
    ],
    exercises: [
      {
        id: "ex_4_1",
        title: "სავარჯიშო 1: რიცხვის ნიშნის განსაზღვრა სწორი ინდენტაციით",
        instruction: "მოცემულია `number = -7`. დაწერეთ if - elif - else კონსტრუქცია სწორი ინდენტაციით: თუ რიცხვი მეტია 0-ზე, დაბეჭდეთ `დადებითია`. თუ ნაკლებია 0-ზე, დაბეჭდეთ `უარყოფითია`. სხვა შემთხვევაში დაბეჭდეთ `ნულია`.",
        initialCode: `number = -7

# დაწერეთ if, elif, else სწორი შეწევით (Indentation)
`,
        hint: "if number > 0:\n    print(\"დადებითია\")\nelif number < 0:\n    print(\"უარყოფითია\")\nelse:\n    print(\"ნულია\")",
        solution: `number = -7
if number > 0:
    print("დადებითია")
elif number < 0:
    print("უარყოფითია")
else:
    print("ნულია")`,
        validate: (output) => {
          if (output.trim() === "უარყოფითია") {
            return { valid: true, message: "ბრწყინვალეა! if-elif-else ლოგიკა და ინდენტაცია სწორად მუშაობს." };
          }
          return { valid: false, message: "მოსალოდნელი შედეგია: 'უარყოფითია'" };
        },
      },
      {
        id: "ex_4_2",
        title: "სავარჯიშო 2: უფასო მიტანის ლოგიკა",
        instruction: "ონლაინ მაღაზიაში მიტანა უფასოა, თუ შეკვეთის თანხა `order_total >= 100` ან მომხმარებელი არის `is_vip = True`. მოცემულია: `order_total = 80` და `is_vip = True`. გამოიყენეთ or ოპერატორი და დაბეჭდეთ: `მიტანა უფასოა!`.",
        initialCode: `order_total = 80
is_vip = True

# გამოიყენეთ if და or
`,
        hint: "if order_total >= 100 or is_vip:\n    print(\"მიტანა უფასოა!\")\nelse:\n    print(\"მიტანა ფასიანია\")",
        solution: `order_total = 80
is_vip = True
if order_total >= 100 or is_vip:
    print("მიტანა უფასოა!")
else:
    print("მიტანა ფასიანია")`,
        validate: (output) => {
          if (output.includes("მიტანა უფასოა")) {
            return { valid: true, message: "სწორია! VIP სტატუსის გამო მიტანა უფასოა." };
          }
          return { valid: false, message: "უნდა დაიბეჭდოს: 'მიტანა უფასოა!'" };
        },
      },
    ],
  },
  {
    id: 5,
    moduleId: 1,
    title: "გაკვეთილი 5: სიები (List) და მათი მეთოდები",
    shortTitle: "5. სიები (List)",
    subtitle: "append, extend, sort, reverse, clear, count, [x, y, z] და ჭრა (Slicing)",
    icon: "ListOrdered",
    duration: "35 წუთი",
    theory: [
      {
        heading: "რა არის სია (List) და როგორ იქმნება?",
        text: "სია არის მონაცემთა დალაგებული, შეცვლადი (mutable) კოლექცია. ის იწერება კვადრატულ ფრჩხილებში [x, y, z], ხოლო ელემენტები გამოიყოფა მძიმეებით.",
      },
      {
        heading: "[x, y, z] სიის სრული შესაძლებლობები და მაგალითები",
        bullets: [
          "სხვადასხვა ტიპის შენახვა: mixed = [10, \"ტექსტი\", True, 3.14]",
          "ელემენტის შეცვლა ინდექსით: numbers[0] = 99 (სიის შეცვლადობა - mutability)",
          "List Unpacking (განცალკევება): a, b, c = [1, 2, 3] — სიის ელემენტების მინიჭება ცვლადებზე",
          "ჩადგმული სიები (Nested Lists / მატრიცა): matrix = [[1, 2], [3, 4]] -> matrix[0][1] არის 2",
        ],
      },
      {
        heading: "სიის ძირითადი ფუნქციები და მეთოდები",
        bullets: [
          "append(x) — ამატებს ერთ ელემენტს სიის ბოლოში",
          "extend([x, y]) — სიას უერთებს მეორე სიის ყველა ელემენტს (განსხვავებით append-ისგან, რომელიც მთლიან სიას ერთ ელემენტად ჩასვამდა)",
          "sort() და sort(reverse=True) — ალაგებს სიას ზრდადობით ან კლებადობით",
          "reverse() — აბრუნებს სიის თანმიმდევრობას უკუღმა",
          "count(x) — ითვლის რამდენჯერ გვხვდება კონკრეტული ელემენტი სიაში",
          "clear() — შლის სიის ყველა ელემენტს და ტოვებს ცარიელ []-ს",
          "insert(index, x) — სვამს ელემენტს მითითებულ პოზიციაზე",
          "remove(x) — შლის პირველსავე ნაპოვნ მნიშვნელობას",
          "pop(index) — შლის და აბრუნებს ელემენტს (ნაგულისხმევად ბოლოს)",
        ],
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: extend, sort, reverse, count, clear",
        code: `nums = [30, 10, 50, 20, 10]

# extend-ით მეორე სიის დამატება
nums.extend([40, 60])
print("extend-ის შემდეგ:", nums)

# count — რამდენჯერ არის 10?
print("10-ის რაოდენობა:", nums.count(10))  # 2

# sort — დალაგება ზრდადობით
nums.sort()
print("დალაგებული sort():", nums)

# reverse — შებრუნება
nums.reverse()
print("შებრუნებული reverse():", nums)

# clear — სიის გასუფთავება
nums.clear()
print("clear-ის შემდეგ:", nums)  # []`,
        explanation: "ეს მეთოდები პირდაპირ ადგილზე ცვლიან (mutate) სიას.",
      },
      {
        title: "მაგალითი 2: [x, y, z] — Unpacking, ჩადგმული სია და შეცვლა",
        code: `# 1. List Unpacking
coordinates = [41.71, 44.82, 450]
lat, lon, alt = coordinates
print(f"განედი: {lat}, გრძედი: {lon}, სიმაღლე: {alt}")

# 2. ელემენტის შეცვლა ინდექსით
colors = ["წითელი", "მწვანე", "ლურჯი"]
colors[1] = "ყვითელი"  # მწვანე ჩანაცვლდა
print("განახლებული ფერები:", colors)

# 3. ჩადგმული სია (Nested List)
matrix = [
    [1, 2, 3],
    [4, 5, 6]
]
print("matrix[1][0] არის:", matrix[1][0])  # 4`,
        explanation: "List Unpacking და Nested Lists პითონში ძალიან ხშირად გამოიყენება.",
      },
      {
        title: "მაგალითი 3: append() vs extend() და pop()",
        code: `a = [1, 2]
b = [1, 2]

a.append([3, 4])  # ჩასვამს ქვესიად: [1, 2, [3, 4]]
b.extend([3, 4])  # გააერთიანებს: [1, 2, 3, 4]

print("append([3, 4]):", a)
print("extend([3, 4]):", b)

last_item = b.pop()  # ამოაგდებს 4-ს
print("pop-ის შემდეგ b:", b, "ამოღებული:", last_item)`,
        explanation: "დააკვირდით append-ისა და extend-ის ფუნდამენტურ განსხვავებას!",
      },
    ],
    exercises: [
      {
        id: "ex_5_1",
        title: "სავარჯიშო 1: extend() და sort() მეთოდები",
        instruction: "მოცემულია სია: `team_a = [45, 12, 88]`. გამოიყენეთ `extend()`, რათა დაამატოთ მასში `[19, 33]`. შემდეგ დაალაგეთ მთლიანი სია `sort()` მეთოდით ზრდადობით და დაბეჭდეთ: `დალაგებული: [12, 19, 33, 45, 88]`.",
        initialCode: `team_a = [45, 12, 88]

# 1. extend-ით დაამატეთ [19, 33]
# 2. დაალაგეთ sort()-ით
# 3. დაბეჭდეთ შედეგი
`,
        hint: "team_a.extend([19, 33])\nteam_a.sort()\nprint(f\"დალაგებული: {team_a}\")",
        solution: `team_a = [45, 12, 88]
team_a.extend([19, 33])
team_a.sort()
print(f"დალაგებული: {team_a}")`,
        validate: (output) => {
          if (output.includes("12, 19, 33, 45, 88") || (output.includes("12") && output.includes("88") && output.includes("დალაგებული"))) {
            return { valid: true, message: "ყოჩაღ! extend() და sort() იდეალურად შესრულდა." };
          }
          return { valid: false, message: "სია უნდა შეიცავდეს დალაგებულ [12, 19, 33, 45, 88]-ს." };
        },
      },
      {
        id: "ex_5_2",
        title: "სავარჯიშო 2: count() და List Unpacking",
        instruction: "მოცემულია სია: `items = [\"ვაშლი\", \"მსხალი\", \"ვაშლი\", \"კივი\", \"ვაშლი\"]`. დაითვალეთ რამდენჯერ გვხვდება \"ვაშლი\" `items.count(\"ვაშლი\")`-თ ცვლადში `apple_count`. შემდეგ გააკეთეთ unpacking პირველი სამი ხილისთვის სიიდან `sample = [\"ალუბალი\", \"ატამი\", \"ლეღვი\"]` ცვლადებში `x, y, z = sample`. დაბეჭდეთ: `ვაშლი გვხვდება: 3, ხილი: ალუბალი, ატამი, ლეღვი`.",
        initialCode: `items = ["ვაშლი", "მსხალი", "ვაშლი", "კივი", "ვაშლი"]
sample = ["ალუბალი", "ატამი", "ლეღვი"]

# count და unpacking
`,
        hint: "apple_count = items.count(\"ვაშლი\")\nx, y, z = sample\nprint(f\"ვაშლი გვხვდება: {apple_count}, ხილი: {x}, {y}, {z}\")",
        solution: `items = ["ვაშლი", "მსხალი", "ვაშლი", "კივი", "ვაშლი"]
sample = ["ალუბალი", "ატამი", "ლეღვი"]
apple_count = items.count("ვაშლი")
x, y, z = sample
print(f"ვაშლი გვხვდება: {apple_count}, ხილი: {x}, {y}, {z}")`,
        validate: (output) => {
          if (output.includes("3") && output.includes("ალუბალი") && output.includes("ატამი")) {
            return { valid: true, message: "შესანიშნავია! count() და Unpacking წარმატებით განხორციელდა." };
          }
          return { valid: false, message: "დაბეჭდეთ: 'ვაშლი გვხვდება: 3, ხილი: ალუბალი, ატამი, ლეღვი'" };
        },
      },
    ],
  },
  {
    id: 6,
    moduleId: 1,
    title: "გაკვეთილი 6: პრაქტიკა და ქვიზი №1 (შემაჯამებელი)",
    shortTitle: "6. შემაჯამებელი ქვიზი №1",
    subtitle: "გაკვეთილი 1-5-ის სრული ცოდნის შემოწმება: ტესტები და ინტერაქტიული კოდის ამოცანები",
    icon: "Award",
    duration: "35 წუთი",
    isQuiz: true,
    quizQuestions: [
      {
        id: "q1",
        type: "choice",
        question: "რას დააბრუნებს ფუნქცია type(3.14)?",
        options: [
          "<class 'int'>",
          "<class 'float'>",
          "<class 'str'>",
          "<class 'double'>",
        ],
        correctIndex: 1,
        explanation: "წილადი/ათწილადი რიცხვები პითონში მიეკუთვნება float ტიპს.",
      },
      {
        id: "q2",
        type: "choice",
        question: "რა ტიპის მონაცემს აბრუნებს input() ფუნქცია ყოველთვის?",
        options: [
          "მთელ რიცხვს (int)",
          "ლოგიკურ ტიპს (bool)",
          "ტექსტურ სტრიქონს (str)",
          "ავტომატურად ხვდება ტიპს",
        ],
        correctIndex: 2,
        explanation: "input() ყოველთვის აბრუნებს str (String) ტიპს, მაშინაც კი, თუ მომხმარებელი ციფრებს აკრეფს.",
      },
      {
        id: "q3",
        type: "choice",
        question: "რას უდრის შემდეგი გამოსახულების შედეგი: 19 // 4 ?",
        options: ["4.75", "4", "3", "16"],
        correctIndex: 1,
        explanation: "// არის მთელზე გაყოფა. 19-ში 4 მთლიანად ეტევა 4-ჯერ (4 * 4 = 16).",
      },
      {
        id: "q4",
        type: "choice",
        question: "რას დააბრუნებს გამოსახულება: (10 > 5) and (3 == 4) ?",
        options: ["True", "False", "None", "SyntaxError"],
        correctIndex: 1,
        explanation: "and ოპერატორი მოითხოვს, რომ ორივე მხარე იყოს True. რადგან 3 == 4 არის False, საბოლოო შედეგიც False-ა.",
      },
      {
        id: "q5",
        type: "choice",
        question: "რა განსხვავებაა a.append([1, 2]) და a.extend([1, 2]) შორის?",
        options: [
          "განსხვავება არ არის, ორივე ერთსა და იმავეს აკეთებს",
          "append ამატებს სიას როგორც ერთ ელემენტს, extend კი შლის ფრჩხილებს და ელემენტებს სათითაოდ უერთებს",
          "extend შლის სიას, append კი ამატებს",
          "extend მხოლოდ რიცხვებზე მუშაობს",
        ],
        correctIndex: 1,
        explanation: "append([1, 2]) ჩასვამს ჩადგმულ სიად, extend([1, 2]) კი გააერთიანებს ელემენტებს არსებულ სიაში.",
      },
      {
        id: "q6",
        type: "code",
        question: "კოდის ამოცანა: ლუწობის შემმოწმებელი ფუნქციონალი",
        instruction: "დაწერეთ კოდი, სადაც `n = 14`. თუ `n` არის ლუწი (ანუ `n % 2 == 0`), დაბეჭდეთ `14 არის ლუწი`, სხვა შემთხვევაში დაბეჭდეთ `14 არის კენტი`.",
        initialCode: `n = 14

# დაწერეთ if - else
`,
        hint: "if n % 2 == 0:\n    print(f\"{n} არის ლუწი\")\nelse:\n    print(f\"{n} არის კენტი\")",
        solution: `n = 14
if n % 2 == 0:
    print(f"{n} არის ლუწი")
else:
    print(f"{n} არის კენტი")`,
        validate: (output) => {
          return output.includes("ლუწი");
        },
      },
      {
        id: "q7",
        type: "code",
        question: "კოდის ამოცანა: სიაში ელემენტის დამატება და დათვლა",
        instruction: "მოცემულია სია `colors = [\"წითელი\", \"მწვანე\"]`. დაამატეთ `append()`-ით \"ლურჯი\", ხოლო შემდეგ დაბეჭდეთ: `სულ ფერები: 3` (გამოიყენეთ len(colors)).",
        initialCode: `colors = ["წითელი", "მწვანე"]

# დაამატეთ "ლურჯი" და დაბეჭდეთ რაოდენობა
`,
        hint: "colors.append(\"ლურჯი\")\nprint(f\"სულ ფერები: {len(colors)}\")",
        solution: `colors = ["წითელი", "მწვანე"]
colors.append("ლურჯი")
print(f"სულ ფერები: {len(colors)}")`,
        validate: (output) => {
          return output.includes("3") && output.includes("ფერები");
        },
      },
    ],
  },
];
