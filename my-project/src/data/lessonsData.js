// Python Full Course Curriculum Data (12 Lessons)
// Comprehensive, interactive, beautifully designed in Georgian

export const LESSONS_DATA = [
  {
    id: 1,
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
        heading: "print() ფუნქცია და f-strings",
        text: "ეკრანზე შედეგის გამოსატანად გამოიყენება print() ფუნქცია. ტექსტისა და ცვლადების გასაერთიანებლად ვიყენებთ f-string-ს: ბრჭყალების წინ ვწერთ f-ს, ხოლო ცვლადებს ვსვამთ ფიგურულ ფრჩხილებში {}.",
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
        title: "სავარჯიშო 2: str(), int() და float() გარდაქმნა",
        instruction: "მოცემულია ორი ტექსტური ცვლადი: `price = \"85.5\"` და `qty = \"4\"`. გარდაქმენით `price` float-ში, ხოლო `qty` int-ში. გამოთვალეთ სრული ღირებულება (`total = float(price) * int(qty)`) და დაბეჭდეთ: `სრული ფასი: 342.0`.",
        initialCode: `price = "85.5"
qty = "4"

# გარდაქმენით float() და int() ფუნქციებით და გამოთვალეთ total
`,
        hint: "total = float(price) * int(qty)\nprint(f\"სრული ფასი: {total}\")",
        solution: `price = "85.5"
qty = "4"
total = float(price) * int(qty)
print(f"სრული ფასი: {total}")`,
        validate: (output) => {
          if (output.includes("342")) {
            return { valid: true, message: "ბრწყინვალეა! Type Casting float() და int() უშეცდომოდ შესრულდა." };
          }
          return { valid: false, message: "დაბეჭდეთ: 'სრული ფასი: 342.0'" };
        },
      },
    ],
  },
  {
    id: 2,
    title: "გაკვეთილი 2: input() ფუნქცია და მონაცემების მიღება",
    shortTitle: "2. input() ფუნქცია",
    subtitle: "მომხმარებელთან ინტერაქცია, input()-ის თავისებურებები და მონაცემთა დამუშავება",
    icon: "Terminal",
    duration: "20 წუთი",
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
        title: "მაგალითი 3: წილადი რიცხვი (float)",
        code: `price = float(input("შეიყვანეთ პროდუქტის ფასი: "))
discount = price * 0.10  # 10%-იანი ფასდაკლება
final_price = price - discount

print(f"საბოლოო ფასი ფასდაკლებით: {final_price} ლარი")`,
        explanation: "ფასებისთვის, სიგრძისთვის და წონისთვის ვიყენებთ float(input()).",
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
    title: "გაკვეთილი 3: მათემატიკური, შედარებითი და ლოგიკური (and, or, not) ოპერატორები",
    shortTitle: "3. ოპერატორები",
    subtitle: "არითმეტიკა (+, -, *, //, %, **), შედარება (==, !=, >, <) და ლოგიკა (and, or, not)",
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
        title: "მაგალითი 2: ლოგიკური ოპერატორები and, or, not",
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
      {
        title: "მაგალითი 3: შედარებისა და ლოგიკის გაერთიანება",
        code: `x = 25

# შევამოწმოთ არის თუ არა x 10-სა და 50-ს შორის
is_in_range = (x >= 10) and (x <= 50)
print(f"{x} არის [10, 50] დიაპაზონში:", is_in_range)  # True`,
        explanation: "and ოპერატორით ვამოწმებთ, ჯდება თუ არა რიცხვი სასურველ შუალედში.",
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
    title: "გაკვეთილი 4: პირობითი ოპერატორები (if, elif, else) და ინდენტაცია",
    shortTitle: "4. if, elif & ინდენტაცია",
    subtitle: "ლოგიკური განშტოებები, ინდენტაციის (Indentation) წესები და ბლოკები",
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
        title: "მაგალითი 2: ნიშნების შეფასება (if - elif - else)",
        code: `score = 85

if score >= 90:
    grade = "A (ფრიადი)"
elif score >= 80:
    grade = "B (ძალიან კარგი)"
elif score >= 70:
    grade = "C (კარგი)"
else:
    grade = "სცადეთ ხელახლა"

print(f"თქვენი შეფასებაა: {grade}")`,
        explanation: "elif თანმიმდევრობით ამოწმებს ალტერნატივებს ზემოდან ქვემოთ.",
      },
      {
        title: "მაგალითი 3: ჩადგმული პირობები (Nested if) და მრავალდონიანი შეწევა",
        code: `has_account = True
is_admin = True

if has_account:
    print("მომხმარებელი ავტორიზებულია.")
    # მეორე დონის შეწევა (8 spaces):
    if is_admin:
        print("-> ადმინისტრატორის პანელი ხელმისაწვდომია!")
    else:
        print("-> სტანდარტული მომხმარებელი.")`,
        explanation: "Nested if მოითხოვს დამატებით შეწევას (8 space), რაც ქმნის მკაფიო იერარქიას.",
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
    title: "გაკვეთილი 6: პრაქტიკა და ქვიზი (შემაჯამებელი)",
    shortTitle: "6. შემაჯამებელი ქვიზი",
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
          "<class 'double'>"
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
          "ავტომატურად ხვდება ტიპს"
        ],
        correctIndex: 2,
        explanation: "input() ყოველთვის აბრუნებს str (String) ტიპს, მაშინაც კი, თუ მომხმარებელი ციფრებს აკრეფს.",
      },
      {
        id: "q3",
        type: "choice",
        question: "რას უდრის შემდეგი გამოსახულების შედეგი: 19 // 4 ?",
        options: [
          "4.75",
          "4",
          "3",
          "16"
        ],
        correctIndex: 1,
        explanation: "// არის მთელზე გაყოფა. 19-ში 4 მთლიანად ეტევა 4-ჯერ (4 * 4 = 16).",
      },
      {
        id: "q4",
        type: "choice",
        question: "რას დააბრუნებს გამოსახულება: (10 > 5) and (3 == 4) ?",
        options: [
          "True",
          "False",
          "None",
          "SyntaxError"
        ],
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
          "extend მხოლოდ რიცხვებზე მუშაობს"
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
  {
    id: 7,
    title: "გაკვეთილი 7: range() ფუნქცია, ციკლები (for, while), break და continue",
    shortTitle: "7. ციკლები (for, while)",
    subtitle: "განმეორებადი პროცესები, range() პარამეტრები, break და continue ოპერატორები",
    icon: "Repeat",
    duration: "30 წუთი",
    theory: [
      {
        heading: "რატომ გვჭირდება ციკლები?",
        text: "ციკლები (Loops) საშუალებას გვაძლევს ერთი და იგივე კოდის ბლოკი გავიმეოროთ მრავალჯერ, სანამ გარკვეული პირობა სრულდება, ან მივყვეთ მიმდევრობას.",
      },
      {
        heading: "range() ფუნქცია",
        text: "range() აგენერირებს რიცხვების მიმდევრობას: range(start, stop, step). გაითვალისწინეთ, რომ stop მნიშვნელობა არ შედის! მაგალითად: range(1, 5) აგენერირებს 1, 2, 3, 4.",
      },
      {
        heading: "for და while ციკლები",
        bullets: [
          "for ციკლი — გამოიყენება, როცა წინასწარ ვიცით გამეორებათა რაოდენობა ან მივყვებით კოლექციას.",
          "while ციკლი — მუშაობს მანამ, სანამ პირობა True-ა. მნიშვნელოვანია ცვლადის გაზრდა (i += 1), რათა არ მივიღოთ უსასრულო ციკლი!",
        ],
      },
      {
        heading: "break და continue ოპერატორები",
        bullets: [
          "break — მომენტალურად წყვეტს ციკლის მუშაობას და გამოდის მისგან.",
          "continue — გამოტოვებს მიმდინარე იტერაციის დარჩენილ ნაწილს და გადადის შემდეგ იტერაციაზე.",
        ],
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: for ციკლი და range()",
        code: `# 1-დან 5-მდე რიცხვების დაბეჭდვა
for i in range(1, 6):
    print(f"ნაბიჯი: {i}")`,
        explanation: "range(1, 6) იწყებს 1-ით და ჩერდება 6-თან (6 არ შედის).",
      },
      {
        title: "მაგალითი 2: while ციკლი",
        code: `count = 3

while count > 0:
    print(f"ათვლა: {count}")
    count -= 1  # იგივეა რაც count = count - 1

print("სტარტი! 🚀")`,
        explanation: "while ციკლი მეორდება მანამ, სანამ count > 0.",
      },
      {
        title: "მაგალითი 3: break და continue",
        code: `for num in range(1, 10):
    if num == 3:
        print("გამოტოვებულია 3!")
        continue  # გადახტომა შემდეგ რიცხვზე
    if num == 6:
        print("ციკლი გაჩერდა 6-ზე!")
        break     # ციკლის შეწყვეტა
    print(f"რიცხვი: {num}")`,
        explanation: "continue გამოტოვებს 3-ს, ხოლო break სრულად აჩერებს ციკლს 6-ზე.",
      },
    ],
    exercises: [
      {
        id: "ex_7_1",
        title: "სავარჯიშო 1: 1-დან 10-მდე რიცხვების ჯამი",
        instruction: "გამოიყენეთ for ციკლი და `range(1, 11)`, რათა გამოთვალოთ 1-დან 10-ის ჩათვლით რიცხვების ჯამი ცვლადში `total_sum`. დაბეჭდეთ: `ჯამი: 55`.",
        initialCode: `total_sum = 0

# დაწერეთ for ციკლი range(1, 11)-ით
`,
        hint: "for i in range(1, 11):\n    total_sum += i\nprint(f\"ჯამი: {total_sum}\")",
        solution: `total_sum = 0
for i in range(1, 11):
    total_sum += i
print(f"ჯამი: {total_sum}")`,
        validate: (output) => {
          if (output.includes("55")) {
            return { valid: true, message: "შესანიშნავია! 1-დან 10-მდე რიცხვების ჯამი სწორად დაითვალა (55)." };
          }
          return { valid: false, message: "დაბეჭდეთ: 'ჯამი: 55'" };
        },
      },
      {
        id: "ex_7_2",
        title: "სავარჯიშო 2: ლუწი რიცხვების გაფილტვრა continue-ით",
        instruction: "for ციკლით გადაუარეთ რიცხვებს `range(1, 7)`. თუ რიცხვი კენტია (`i % 2 != 0`), გამოტოვეთ `continue`-ს მეშვეობით. ეკრანზე დაბეჭდეთ მხოლოდ ლუწი რიცხვები (2, 4, 6).",
        initialCode: `for i in range(1, 7):
    # თუ კენტია -> continue
    # სხვა შემთხვევაში დაბეჭდეთ
`,
        hint: "for i in range(1, 7):\n    if i % 2 != 0:\n        continue\n    print(i)",
        solution: `for i in range(1, 7):
    if i % 2 != 0:
        continue
    print(i)`,
        validate: (output) => {
          const clean = output.trim();
          if (clean.includes("2") && clean.includes("4") && clean.includes("6") && !clean.includes("1") && !clean.includes("3") && !clean.includes("5")) {
            return { valid: true, message: "ბრწყინვალეა! continue ოპერატორით კენტები წარმატებით გამოტოვეთ." };
          }
          return { valid: false, message: "უნდა დაიბეჭდოს მხოლოდ 2, 4 და 6." };
        },
      },
    ],
  },
  {
    id: 8,
    title: "გაკვეთილი 8: ციკლებისა და სიების ერთად გამოყენება",
    shortTitle: "8. ციკლები და სიები",
    subtitle: "სიის ელემენტების შემოვლა (Iteration), enumerate() და სიის ტრანსფორმაცია",
    icon: "Layers",
    duration: "25 წუთი",
    theory: [
      {
        heading: "სიის შემოვლა for ციკლით",
        text: "სიის ელემენტების სათითაოდ დასამუშავებლად ყველაზე ბუნებრივი გზაა: `for item in my_list:`. პითონი თავად იღებს თითოეულ ელემენტს თანმიმდევრობით.",
      },
      {
        heading: "enumerate() ფუნქცია",
        text: "როცა გვჭირდება როგორც ელემენტის ინდექსი, ისე თავად ელემენტი, ვიყენებთ enumerate()-ს: `for index, value in enumerate(my_list):`.",
      },
      {
        heading: "ახალი სიის ფორმირება ციკლით",
        text: "ხშირად ვქმნით ცარიელ სიას result = [] და ციკლში დამუშავებულ ელემენტებს ვამატებთ append()-ის მეშვეობით.",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: სტუდენტების სიის შემოვლა",
        code: `students = ["გიორგი", "ანა", "ლუკა", "მარიამი"]

for name in students:
    print(f"სტუდენტი: {name}")`,
        explanation: "თითოეულ იტერაციაზე ცვლადი name იღებს სიის მომდევნო წევრს.",
      },
      {
        title: "მაგალითი 2: enumerate() და ნუმერაცია",
        code: `tasks = ["კოდის დაწერა", "ტესტირება", "დეპლოი"]

for index, task in enumerate(tasks, start=1):
    print(f"{index}. {task}")`,
        explanation: "enumerate(start=1) აბრუნებს ნუმერაციას 1-დან და ამოცანის სახელს.",
      },
      {
        title: "მაგალითი 3: რიცხვების გაორმაგება ახალ სიაში",
        code: `numbers = [2, 5, 8, 11]
doubled = []

for n in numbers:
    doubled.append(n * 2)

print("გაორმაგებული:", doubled)  # [4, 10, 16, 22]`,
        explanation: "ციკლის დახმარებით არსებული სიიდან შევქმენით ახალი მოდიფიცირებული სია.",
      },
    ],
    exercises: [
      {
        id: "ex_8_1",
        title: "სავარჯიშო 1: დადებითი რიცხვების ფილტრაცია",
        instruction: "მოცემულია სია: `raw_nums = [-5, 12, -3, 20, 0, 7]`. შექმენით ცარიელი სია `positives = []`. for ციკლის და if-ის გამოყენებით, დაამატეთ `positives` სიაში მხოლოდ ის რიცხვები, რომლებიც მეტია 0-ზე. დაბეჭდეთ მიღებული სია: `დადებითები: [12, 20, 7]`.",
        initialCode: `raw_nums = [-5, 12, -3, 20, 0, 7]
positives = []

# შეავსეთ positives სია მხოლოდ დადებითი რიცხვებით
`,
        hint: "for n in raw_nums:\n    if n > 0:\n        positives.append(n)\nprint(f\"დადებითები: {positives}\")",
        solution: `raw_nums = [-5, 12, -3, 20, 0, 7]
positives = []
for n in raw_nums:
    if n > 0:
        positives.append(n)
print(f"დადებითები: {positives}")`,
        validate: (output) => {
          if (output.includes("12") && output.includes("20") && output.includes("7") && !output.includes("-5")) {
            return { valid: true, message: "ყოჩაღ! ფილტრაცია სრულყოფილად შესრულდა." };
          }
          return { valid: false, message: "სიაში უნდა იყოს მხოლოდ [12, 20, 7]." };
        },
      },
      {
        id: "ex_8_2",
        title: "სავარჯიშო 2: სიის ელემენტების ჯამი და საშუალო",
        instruction: "მოცემულია ქულების სია: `scores = [80, 90, 100]`. for ციკლით გამოთვალეთ ქულების ჯამი `total_score`, შემდეგ გამოთვალეთ საშუალო არითმეტიკული `average = total_score / len(scores)` და დაბეჭდეთ: `საშუალო ქულა: 90.0`.",
        initialCode: `scores = [80, 90, 100]
total_score = 0

# გამოთვალეთ ჯამი და საშუალო
`,
        hint: "for s in scores:\n    total_score += s\naverage = total_score / len(scores)\nprint(f\"საშუალო ქულა: {average}\")",
        solution: `scores = [80, 90, 100]
total_score = 0
for s in scores:
    total_score += s
average = total_score / len(scores)
print(f"საშუალო ქულა: {average}")`,
        validate: (output) => {
          if (output.includes("90")) {
            return { valid: true, message: "ბრწყინვალეა! ჯამი და საშუალო სწორად გამოითვალა." };
          }
          return { valid: false, message: "დაბეჭდეთ: 'საშუალო ქულა: 90.0'" };
        },
      },
    ],
  },
  {
    id: 9,
    title: "გაკვეთილი 9: კომპლექსური პრაქტიკა",
    shortTitle: "9. კომპლექსური პრაქტიკა",
    subtitle: "გავლილი მასალის შემაჯამებელი რეალური ამოცანები და გამოწვევები",
    icon: "Sparkles",
    duration: "40 წუთი",
    isComplexPractice: true,
    complexChallenges: [
      {
        id: "comp_1",
        title: "ამოცანა 1: ელექტრონული მაღაზიის კალათა და ფასდაკლება",
        description: "ონლაინ მაღაზიის კალათაში გვაქვს პროდუქტების ფასების სია: `prices = [45, 120, 85, 30, 220]`. დაწერეთ პროგრამა, რომელიც:\n1. დაითვლის ჯამურ თანხას (`total`).\n2. თუ ჯამური თანხა მეტია 300-ზე, გააკეთებს 15%-იან ფასდაკლებას (`discount = total * 0.15`), სხვა შემთხვევაში ფასდაკლება არის 0.\n3. დაბეჭდავს საბოლოო გადასახდელ თანხას ფორმატით: `საბოლოო თანხა: [თანხა] ლარი`.",
        initialCode: `prices = [45, 120, 85, 30, 220]

# 1. გამოთვალეთ ჯამი (for ციკლით ან sum-ით)
# 2. გამოიყენეთ if - else ფასდაკლებისთვის
# 3. დაბეჭდეთ საბოლოო თანხა
`,
        hint: "total = 0\nfor p in prices:\n    total += p\nif total > 300:\n    final = total * 0.85\nelse:\n    final = total\nprint(f\"საბოლოო თანხა: {final} ლარი\")",
        solution: `prices = [45, 120, 85, 30, 220]
total = sum(prices)
if total > 300:
    final = total - (total * 0.15)
else:
    final = total
print(f"საბოლოო თანხა: {final} ლარი")`,
        validate: (output) => {
          return output.includes("425");
        },
      },
      {
        id: "comp_2",
        title: "ამოცანა 2: მაქსიმალური და მინიმალური რიცხვის პოვნა ხელით",
        description: "მოცემულია რიცხვების სია: `data = [34, 12, 89, 5, 77, 92, 23]`. ჩაშენებული max() და min() ფუნქციების გარეშე, for ციკლის და if-ის გამოყენებით იპოვეთ უდიდესი რიცხვი `max_val` და უმცირესი `min_val`. დაბეჭდეთ: `მაქსიმუმი: 92, მინიმუმი: 5`.",
        initialCode: `data = [34, 12, 89, 5, 77, 92, 23]

max_val = data[0]
min_val = data[0]

# for ციკლით შეადარეთ თითოეული ელემენტი
`,
        hint: "for x in data:\n    if x > max_val: max_val = x\n    if x < min_val: min_val = x\nprint(f\"მაქსიმუმი: {max_val}, მინიმუმი: {min_val}\")",
        solution: `data = [34, 12, 89, 5, 77, 92, 23]
max_val = data[0]
min_val = data[0]
for x in data:
    if x > max_val:
        max_val = x
    if x < min_val:
        min_val = x
print(f"მაქსიმუმი: {max_val}, მინიმუმი: {min_val}")`,
        validate: (output) => {
          return output.includes("92") && output.includes("5");
        },
      },
      {
        id: "comp_3",
        title: "ამოცანა 3: სტუდენტების შეფასების ანალიტიკოსი",
        description: "მოცემულია სტუდენტების ქულები: `grades = [55, 92, 74, 48, 88, 61, 95]`. დაითვალეთ რამდენი სტუდენტი ჩააბარა (`pass_count`, 60 ან მეტი ქულა) და რამდენი ჩაიჭრა (`fail_count`, 60-ზე ნაკლები). დაბეჭდეთ: `ჩააბარა: [რაოდენობა], ჩაიჭრა: [რაოდენობა]`.",
        initialCode: `grades = [55, 92, 74, 48, 88, 61, 95]
pass_count = 0
fail_count = 0

# for ციკლი და if - else
`,
        hint: "for g in grades:\n    if g >= 60:\n        pass_count += 1\n    else:\n        fail_count += 1\nprint(f\"ჩააბარა: {pass_count}, ჩაიჭრა: {fail_count}\")",
        solution: `grades = [55, 92, 74, 48, 88, 61, 95]
pass_count = 0
fail_count = 0
for g in grades:
    if g >= 60:
        pass_count += 1
    else:
        fail_count += 1
print(f"ჩააბარა: {pass_count}, ჩაიჭრა: {fail_count}")`,
        validate: (output) => {
          return output.includes("5") && output.includes("2");
        },
      },
    ],
  },
  {
    id: 10,
    title: "გაკვეთილი 10: კორტეჟები (Tuple) და მათთან მუშაობა",
    shortTitle: "10. კორტეჟები (Tuple)",
    subtitle: "უცვლელი (Immutable) კოლექციები, შექმნა, ინდექსაცია და Unpacking",
    icon: "Lock",
    duration: "20 წუთი",
    theory: [
      {
        heading: "რა არის კორტეჟი (Tuple)?",
        text: "Tuple (კორტეჟი) არის მონაცემთა დალაგებული კოლექცია, რომელიც იწერება მრგვალ ფრჩხილებში (). მისი მთავარი განმასხვავებელი ნიშანი სიისგან (List) არის ის, რომ ის არის უცვლელი (Immutable) — შექმნის შემდეგ მასში ელემენტს ვერც შევცვლით, ვერც დავამატებთ და ვერც წავშლით!",
      },
      {
        heading: "რატომ ვიყენებთ Tuple-ს?",
        bullets: [
          "მონაცემთა დაცულობა — გარანტია იმისა, რომ კოდის სხვა ნაწილში მონაცემები შემთხვევით არ შეიცვლება (მაგ: GPS კოორდინატები, კვირის დღეები, RGB ფერები).",
          "სისწრაფე და მეხსიერება — Tuple უფრო სწრაფია და ნაკლებ მეხსიერებას მოიხმარს, ვიდრე List.",
        ],
      },
      {
        heading: "Tuple Unpacking (განცალკევება)",
        text: "Tuple-ის ელემენტები შეგვიძლია ერთი ხაზით მივანიჭოთ ცალკეულ ცვლადებს: x, y = (10, 20).",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: Tuple-ის შექმნა და ინდექსაცია",
        code: `point = (41.7151, 44.8271)  # თბილისის GPS კოორდინატები

print(f"განედი: {point[0]}")
print(f"გრძედი: {point[1]}")
print(f"ელემენტების რაოდენობა: {len(point)}")`,
        explanation: "ინდექსაცია ზუსტად ისევე მუშაობს, როგორც სიაში, მაგრამ point[0] = 50 გამოიწვევს შეცდომას (TypeError)!",
      },
      {
        title: "მაგალითი 2: Tuple Unpacking",
        code: `person = ("გიორგი", 28, "დეველოპერი")

# ერთი ხაზით ცვლადებში განაწილება
name, age, profession = person

print(f"სახელი: {name}")
print(f"ასაკი: {age}")
print(f"პროფესია: {profession}")`,
        explanation: "Unpacking-ით მარტივად ვანაწილებთ Tuple-ის მნიშვნელობებს ცალკეულ ცვლადებში.",
      },
      {
        title: "მაგალითი 3: მეთოდები count() და index()",
        code: `letters = ('a', 'b', 'c', 'a', 'b', 'a')

print("რამდენჯერ გვხვდება 'a':", letters.count('a'))  # 3
print("'c'-ს ინდექსია:", letters.index('c'))            # 2`,
        explanation: "რადგან Tuple უცვლელია, მას აქვს მხოლოდ ორი უსაფრთხო მეთოდი: count() და index().",
      },
    ],
    exercises: [
      {
        id: "ex_10_1",
        title: "სავარჯიშო 1: RGB ფერების კორტეჟი და Unpacking",
        instruction: "შექმენით Tuple `color = (255, 165, 0)` (ნარინჯისფერი RGB). გააკეთეთ unpacking ცვლადებში `r, g, b = color` და დაბეჭდეთ: `წითელი: 255, მწვანე: 165, ლურჯი: 0`.",
        initialCode: `color = (255, 165, 0)

# გააკეთეთ unpacking და დაბეჭდეთ
`,
        hint: "r, g, b = color\nprint(f\"წითელი: {r}, მწვანე: {g}, ლურჯი: {b}\")",
        solution: `color = (255, 165, 0)
r, g, b = color
print(f"წითელი: {r}, მწვანე: {g}, ლურჯი: {b}")`,
        validate: (output) => {
          if (output.includes("255") && output.includes("165") && output.includes("0")) {
            return { valid: true, message: "ყოჩაღ! Tuple Unpacking სწორად შესრულდა." };
          }
          return { valid: false, message: "დაბეჭდეთ: 'წითელი: 255, მწვანე: 165, ლურჯი: 0'" };
        },
      },
      {
        id: "ex_10_2",
        title: "სავარჯიშო 2: ელემენტის სიხშირის დათვლა count()-ით",
        instruction: "მოცემულია კორტეჟი: `votes = (\"კი\", \"არა\", \"კი\", \"კი\", \"არა\", \"კი\")`. დათვალეთ რამდენმა ადამიანმა მისცა ხმა \"კი\"-ს count() მეთოდით და დაბეჭდეთ: `ხმა 'კი': 4`.",
        initialCode: `votes = ("კი", "არა", "კი", "კი", "არა", "კი")

# გამოიყენეთ votes.count("კი")
`,
        hint: "yes_votes = votes.count(\"კი\")\nprint(f\"ხმა 'კი': {yes_votes}\")",
        solution: `votes = ("კი", "არა", "კი", "კი", "არა", "კი")
yes_votes = votes.count("კი")
print(f"ხმა 'კი': {yes_votes}")`,
        validate: (output) => {
          if (output.includes("4")) {
            return { valid: true, message: "შესანიშნავია! count() მეთოდი სწორად დაითვალა." };
          }
          return { valid: false, message: "მოსალოდნელია შედეგი: 'ხმა 'კი': 4'" };
        },
      },
    ],
  },
  {
    id: 11,
    title: "გაკვეთილი 11: ლექსიკონები (Dict) — pop, popitem, get, [] და მულტი ლექსიკონები",
    shortTitle: "11. ლექსიკონები (Dict)",
    subtitle: "[], .get(), .pop(), .popitem(), del და მულტი / ჩადგმული ლექსიკონები (Nested Dictionaries)",
    icon: "BookOpen",
    duration: "35 წუთი",
    theory: [
      {
        heading: "რა არის ლექსიკონი და როგორ ხდება წვდომა ([] vs get)?",
        text: "ლექსიკონი (Dict) ინახავს მონაცემებს 'გასაღები: მნიშვნელობა' (Key-Value) წყვილების სახით ფიგურულ ფრჩხილებში {}. წვდომის ორი ძირითადი გზა გვაქვს:",
        bullets: [
          "dict[key] — პირდაპირი წვდომა. თუ ასეთი გასაღები არ არსებობს, გამოიწვევს პროგრამის შეცდომას (KeyError)!",
          "dict.get(key, default) — უსაფრთხო წვდომა. თუ გასაღები არ არსებობს, შეცდომის ნაცვლად დააბრუნებს None-ს ან მითითებულ default მნიშვნელობას (მაგ: dict.get(\"age\", 0)).",
          "ახლის დამატება / შეცვლა: dict[\"new_key\"] = value",
        ],
      },
      {
        heading: "ელემენტების წაშლა: pop(), popitem(), del",
        bullets: [
          "dict.pop(key) — შლის მითითებულ გასაღებს და აბრუნებს მის მნიშვნელობას.",
          "dict.popitem() — შლის და აბრუნებს ბოლოს დამატებულ (key, value) წყვილს როგორც Tuple-ს.",
          "del dict[key] — პირდაპირ შლის კონკრეტულ გასაღებს.",
        ],
      },
      {
        heading: "მულტი / ჩადგმული ლექსიკონები (Nested Dictionaries)",
        text: "ლექსიკონის მნიშვნელობად შეგვიძლია ჩავსვათ სხვა ლექსიკონი! ეს არის უნივერსალური სტრუქტურა კომპლექსური მონაცემების შესანახად (მაგ. JSON API, მონაცემთა ბაზები):",
        bullets: [
          "სტრუქტურა: users = {\"user1\": {\"name\": \"ანა\", \"role\": \"admin\"}, \"user2\": {\"name\": \"გიორგი\", \"role\": \"user\"}}",
          "ჩადგმულ ველზე წვდომა: users[\"user1\"][\"name\"] -> \"ანა\"",
          "ჩადგმული ველის შეცვლა: users[\"user1\"][\"role\"] = \"superadmin\"",
        ],
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: [] vs get() და მნიშვნელობის შეცვლა",
        code: `user = {"name": "დავითი", "role": "admin"}

# პირდაპირი წვდომა []
print("სახელი:", user["name"])

# უსაფრთხო წვდომა get() - არ იწვევს KeyError-ს
city = user.get("city", "უცნობია")
print("ქალაქი (get):", city)

# ახალი ველის დამატება და შეცვლა
user["email"] = "david@example.com"
user["role"] = "superadmin"
print("განახლებული:", user)`,
        explanation: "get() გვიცავს შეცდომებისგან, როცა ზუსტად არ ვიცით, არსებობს თუ არა გასაღები.",
      },
      {
        title: "მაგალითი 2: pop(), popitem() და del",
        code: `inventory = {"apple": 50, "banana": 30, "orange": 20, "milk": 10}

# pop შლის გასაღებს და აბრუნებს მის მნიშვნელობას
removed_apples = inventory.pop("apple")
print(f"წაიშალა apple, რაოდენობა იყო: {removed_apples}")

# popitem შლის ბოლო დამატებულ წყვილს
last_item = inventory.popitem()
print("popitem-ით წაიშალა:", last_item)

print("დარჩენილი საწყობი:", inventory)`,
        explanation: "pop() და popitem() იდეალურია მონაცემების ამოსაღებად და გასასუფთავებლად.",
      },
      {
        title: "მაგალითი 3: მულტი / ჩადგმული ლექსიკონი (Nested Dictionary)",
        code: `company = {
    "emp1": {"name": "ნიკო", "salary": 2500, "dept": "IT"},
    "emp2": {"name": "თეკლა", "salary": 3000, "dept": "Design"}
}

# ჩადგმულ ველზე წვდომა
print("თანამშრომელი 1-ის სახელი:", company["emp1"]["name"])
print("თანამშრომელი 2-ის ხელფასი:", company["emp2"]["salary"])

# ჩადგმული ველის განახლება
company["emp1"]["salary"] = 2800

# ახალი თანამშრომლის ჩამატება
company["emp3"] = {"name": "ლევანი", "salary": 2200, "dept": "Marketing"}
print("სულ თანამშრომლები:", len(company))`,
        explanation: "ჩადგმული ლექსიკონები საშუალებას გვაძლევს ავაგოთ რეალური მონაცემთა მოდელები.",
      },
    ],
    exercises: [
      {
        id: "ex_11_1",
        title: "სავარჯიშო 1: pop() და get() მეთოდები",
        instruction: "მოცემულია ლექსიკონი: `device = {\"brand\": \"Apple\", \"model\": \"iPhone 15\", \"temp_code\": \"XYZ99\"}`. წაშალეთ `temp_code` გასაღები `.pop(\"temp_code\")` მეთოდით. შემდეგ `.get()`-ით ამოიღეთ `warranty` (ნაგულისხმევი მნიშვნელობით `\"1 წელი\"`). დაბეჭდეთ: `მოდელი: iPhone 15, გარანტია: 1 წელი`.",
        initialCode: `device = {"brand": "Apple", "model": "iPhone 15", "temp_code": "XYZ99"}

# 1. წაშალეთ temp_code pop-ით
# 2. ამოიღეთ warranty get()-ით
# 3. დაბეჭდეთ შედეგი
`,
        hint: "device.pop(\"temp_code\")\nwarranty = device.get(\"warranty\", \"1 წელი\")\nprint(f\"მოდელი: {device['model']}, გარანტია: {warranty}\")",
        solution: `device = {"brand": "Apple", "model": "iPhone 15", "temp_code": "XYZ99"}
device.pop("temp_code")
warranty = device.get("warranty", "1 წელი")
print(f"მოდელი: {device['model']}, გარანტია: {warranty}")`,
        validate: (output) => {
          if (output.includes("iPhone 15") && output.includes("1 წელი")) {
            return { valid: true, message: "ყოჩაღ! pop() და get() მეთოდები სწორად გამოიყენეთ." };
          }
          return { valid: false, message: "მოსალოდნელია: 'მოდელი: iPhone 15, გარანტია: 1 წელი'" };
        },
      },
      {
        id: "ex_11_2",
        title: "სავარჯიშო 2: მულტი ლექსიკონთან მუშაობა",
        instruction: "მოცემულია ჩადგმული ლექსიკონი `students`:\n```python\nstudents = {\n    \"s1\": {\"name\": \"გიორგი\", \"score\": 85},\n    \"s2\": {\"name\": \"სალომე\", \"score\": 90}\n}\n```\nგანაახლეთ `s1`-ის ქულა `95`-ით (`students[\"s1\"][\"score\"] = 95`) და დაამატეთ ახალი სტუდენტი `\"s3\": {\"name\": \"ირაკლი\", \"score\": 88}`. დაბეჭდეთ: `გიორგის ახალი ქულა: 95, სულ სტუდენტები: 3`.",
        initialCode: `students = {
    "s1": {"name": "გიორგი", "score": 85},
    "s2": {"name": "სალომე", "score": 90}
}

# განაახლეთ s1-ის score და დაამატეთ s3
`,
        hint: "students[\"s1\"][\"score\"] = 95\nstudents[\"s3\"] = {\"name\": \"ირაკლი\", \"score\": 88}\nprint(f\"გიორგის ახალი ქულა: {students['s1']['score']}, სულ სტუდენტები: {len(students)}\")",
        solution: `students = {
    "s1": {"name": "გიორგი", "score": 85},
    "s2": {"name": "სალომე", "score": 90}
}
students["s1"]["score"] = 95
students["s3"] = {"name": "ირაკლი", "score": 88}
print(f"გიორგის ახალი ქულა: {students['s1']['score']}, სულ სტუდენტები: {len(students)}")`,
        validate: (output) => {
          if (output.includes("95") && output.includes("3")) {
            return { valid: true, message: "ბრწყინვალეა! მულტი ლექსიკონში ჩადგმული ველის შეცვლა და ახლის დამატება მუშაობს." };
          }
          return { valid: false, message: "დაბეჭდეთ: 'გიორგის ახალი ქულა: 95, სულ სტუდენტები: 3'" };
        },
      },
    ],
  },
  {
    id: 12,
    title: "გაკვეთილი 12: ლექსიკონებთან მუშაობა ციკლების საშუალებით",
    shortTitle: "12. ლექსიკონები და ციკლები",
    subtitle: ".keys(), .values(), .items(), ლექსიკონების სიის (List of Dicts) და ჩადგმული ლექსიკონების იტერაცია",
    icon: "Workflow",
    duration: "30 წუთი",
    theory: [
      {
        heading: "რატომ და როგორ ვუტრიალებთ ლექსიკონს ციკლით?",
        text: "რეალურ პროგრამებში ლექსიკონებში ინახება ასობით და ათასობით ჩანაწერი. ციკლის საშუალებით შეგვიძლია სათითაოდ გადავარჩიოთ, გავფილტროთ, შევკრიბოთ ან გარდავქმნათ ეს მონაცემები.",
      },
      {
        heading: "ციკლის 3 ძირითადი მეთოდი ლექსიკონთან",
        bullets: [
          "for key in dict: (ან dict.keys()) — ციკლი გადის მხოლოდ გასაღებებზე (Key).",
          "for value in dict.values(): — ციკლი გადის მხოლოდ მნიშვნელობებზე (Value). იდეალურია ჯამის, საშუალოს ან ექსტრემუმის გამოსათვლელად.",
          "for key, value in dict.items(): — ყველაზე მძლავრი და პოპულარული მიდგომა! ყოველ ნაბიჯზე ვიღებთ როგორც გასაღებს, ისე მის მნიშვნელობას.",
        ],
      },
      {
        heading: "ლექსიკონების სია (List of Dictionaries) და ფილტრაცია",
        text: "მონაცემთა ბაზებიდან და REST API-ებიდან მიღებული მონაცემები თითქმის ყოველთვის არის ლექსიკონების სია: users = [{\"name\": \"ა\", \"age\": 20}, {\"name\": \"ბ\", \"age\": 25}]. ამ სიის for ციკლით შემოვლით თითოეულ იტერაციაზე ვმუშაობთ კონკრეტულ ლექსიკონთან user[\"name\"].",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: .items() ციკლი — გასაღები და მნიშვნელობა",
        code: `products = {"ლეპტოპი": 2400, "ტელეფონი": 1800, "პლანშეტი": 950}

print("--- პროდუქტების კატალოგი ---")
for item, price in products.items():
    print(f"• {item}: {price} ლარი")`,
        explanation: ".items() ერთდროულად გვაძლევს item-ს (გასაღებს) და price-ს (მნიშვნელობას).",
      },
      {
        title: "მაგალითი 2: .values() ციკლი და ფასების ჯამი",
        code: `salaries = {"გიორგი": 2200, "ანა": 2800, "ლუკა": 1900, "ნიკო": 3100}

total_payroll = 0
for salary in salaries.values():
    total_payroll += salary

average_salary = total_payroll / len(salaries)
print(f"ჯამური სახელფასო ფონდი: {total_payroll} ₾")
print(f"საშუალო ხელფასი: {average_salary} ₾")`,
        explanation: ".values() იდეალურია მათემატიკური გამოთვლებისთვის (ჯამი, საშუალო).",
      },
      {
        title: "მაგალითი 3: ლექსიკონების სიის (List of Dicts) ფილტრაცია",
        code: `students = [
    {"name": "დავითი", "score": 92},
    {"name": "თამარი", "score": 58},
    {"name": "ალექსი", "score": 84},
    {"name": "მარიამი", "score": 45}
]

print("სტუდენტები, რომლებმაც ჩააბარეს (score >= 60):")
for s in students:
    if s["score"] >= 60:
        print(f"✓ {s['name']} — {s['score']} ქულა")`,
        explanation: "ასე მუშავდება რეალური ცხოვრების მონაცემები პითონში.",
      },
    ],
    exercises: [
      {
        id: "ex_12_1",
        title: "სავარჯიშო 1: მაღაზიის მარაგის ჯამური ღირებულება",
        instruction: "მოცემულია პროდუქტების ფასების ლექსიკონი: `prices = {\"პური\": 1.5, \"რძე\": 4.0, \"ყველი\": 12.5, \"კარაქი\": 8.0}`. for ციკლით გადაუარეთ `prices.values()`-ს, დაითვალეთ ყველა პროდუქტის ჯამი ცვლადში `total_cost` და დაბეჭდეთ: `ჯამური ღირებულება: 26.0 ლარი`.",
        initialCode: `prices = {"პური": 1.5, "რძე": 4.0, "ყველი": 12.5, "კარაქი": 8.0}
total_cost = 0

# for ციკლი prices.values()-ით
`,
        hint: "for p in prices.values():\n    total_cost += p\nprint(f\"ჯამური ღირებულება: {total_cost} ლარი\")",
        solution: `prices = {"პური": 1.5, "რძე": 4.0, "ყველი": 12.5, "კარაქი": 8.0}
total_cost = 0
for p in prices.values():
    total_cost += p
print(f"ჯამური ღირებულება: {total_cost} ლარი")`,
        validate: (output) => {
          if (output.includes("26")) {
            return { valid: true, message: "ყოჩაღ! .values() ციკლით ჯამი სწორად დაითვალა." };
          }
          return { valid: false, message: "მოსალოდნელია: 'ჯამური ღირებულება: 26.0 ლარი'" };
        },
      },
      {
        id: "ex_12_2",
        title: "სავარჯიშო 2: .items() ციკლით მაღალი ქულების გაფილტვრა",
        instruction: "მოცემულია სტუდენტების ქულების ლექსიკონი: `exam_results = {\"გიორგი\": 85, \"ანა\": 95, \"ლუკა\": 65, \"სალომე\": 90}`. for ციკლისა და `exam_results.items()`-ის გამოყენებით, დაბეჭდეთ მხოლოდ ის სტუდენტები, რომელთა ქულა მეტია ან ტოლია 85-ზე ფორმატით: `[სახელი]: [ქულა]`.",
        initialCode: `exam_results = {"გიორგი": 85, "ანა": 95, "ლუკა": 65, "სალომე": 90}

# for name, score in exam_results.items():
`,
        hint: "for name, score in exam_results.items():\n    if score >= 85:\n        print(f\"{name}: {score}\")",
        solution: `exam_results = {"გიორგი": 85, "ანა": 95, "ლუკა": 65, "სალომე": 90}
for name, score in exam_results.items():
    if score >= 85:
        print(f"{name}: {score}")`,
        validate: (output) => {
          if (output.includes("გიორგი") && output.includes("ანა") && output.includes("სალომე") && !output.includes("ლუკა")) {
            return { valid: true, message: "შესანიშნავია! .items() ციკლით ფილტრაცია უნაკლოდ მუშაობს." };
          }
          return { valid: false, message: "უნდა დაიბეჭდოს მხოლოდ გიორგი (85), ანა (95) და სალომე (90)." };
        },
      },
    ],
  },
];
