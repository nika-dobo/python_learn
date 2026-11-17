// Module 2: Loops, Strings & Collections (Lessons 7-15)

export const MODULE_2_LESSONS = [
  {
    id: 7,
    moduleId: 2,
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
    moduleId: 2,
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
    moduleId: 2,
    title: "გაკვეთილი 9: კომპლექსური პრაქტიკა №1",
    shortTitle: "9. კომპლექსური პრაქტიკა №1",
    subtitle: "გავლილი მასალის შემაჯამებელი რეალური ამოცანები: ცვლადები, პირობები, ციკლები და სიები",
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
    moduleId: 2,
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
    moduleId: 2,
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
    "emp1": {"name": "მარიამი", "salary": 2500, "dept": "IT"},
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
        instruction: "მოცემულია ჩადგმული ლექსიკონი `students`:\nstudents = {\"s1\": {\"name\": \"გიორგი\", \"score\": 85}, \"s2\": {\"name\": \"სალომე\", \"score\": 90}}. განაახლეთ `s1`-ის ქულა `95`-ით (`students[\"s1\"][\"score\"] = 95`) და დაამატეთ ახალი სტუდენტი `\"s3\": {\"name\": \"ირაკლი\", \"score\": 88}`. დაბეჭდეთ: `გიორგის ახალი ქულა: 95, სულ სტუდენტები: 3`.",
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
    moduleId: 2,
    title: "გაკვეთილი 12: ლექსიკონებთან მუშაობა ციკლების საშუალებით",
    shortTitle: "12. ლექსიკონები და ციკლები",
    subtitle: ".keys(), .values(), .items(), ლექსიკონების სია და კინოთეატრის მენიუ (Concession Stand)",
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
        title: "მაგალითი 1: .items() ციკლი — კინოთეატრის მენიუ (Concession Stand)",
        code: `menu = {"პოპკორნი": 8.5, "კოლა": 4.0, "ნაჩოსი": 10.0, "წყალი": 2.0}

print("------ მენიუ ------")
for item, price in menu.items():
    print(f"{item}: {price} ₾")`,
        explanation: ".items() ერთდროულად გვაძლევს item-ს (გასაღებს) და price-ს (მნიშვნელობას).",
      },
      {
        title: "მაგალითი 2: .values() ციკლი და ფასების ჯამი",
        code: `salaries = {"გიორგი": 2200, "ანა": 2800, "ლუკა": 1900, "მარი": 3100}

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
  {
    id: 13,
    moduleId: 2,
    title: "გაკვეთილი 13: სტრინგის მეთოდები, Slicing და Format Specifiers",
    shortTitle: "13. სტრინგები & Slicing",
    subtitle: "ტექსტის დამუშავება (.upper, .find, .replace, .isdigit), ინდექსაცია [start:end:step] და f-string ფორმატირება",
    icon: "Type",
    duration: "30 წუთი",
    theory: [
      {
        heading: "სტრინგის ძირითადი მეთოდები (String Methods)",
        text: "პითონში ტექსტს (str) აქვს მრავალი ჩაშენებული მეთოდი, რომლებიც გვეხმარება მომხმარებლის შეყვანილი ტექსტის გასუფთავებასა და ანალიზში:",
        bullets: [
          "len(text) — აბრუნებს სიმბოლოების რაოდენობას.",
          "text.upper() / text.lower() / text.capitalize() — ასოების ზომის შეცვლა.",
          "text.strip() — შლის ზედმეტ გამოტოვებებს თავსა და ბოლოში.",
          "text.find('a') — პოულობს სიმბოლოს პირველ ინდექსს (ან აბრუნებს -1-ს თუ ვერ იპოვა).",
          "text.replace('ძველი', 'ახალი') — ანაცვლებს ტექსტის ნაწილს.",
          "text.isdigit() / text.isalpha() — ამოწმებს შედგება თუ არა მხოლოდ ციფრებისგან ან მხოლოდ ასოებისგან.",
        ],
      },
      {
        heading: "სტრინგის ჭრა (Indexing & Slicing: [start:end:step])",
        text: "სტრინგის ნებისმიერი ნაწილის ამოჭრა შეგვიძლია ფორმულით `text[start:end:step]`, სადაც `start` შედის, ხოლო `end` არ შედის:",
        bullets: [
          "text[0] — პირველი სიმბოლო, text[-1] — ბოლო სიმბოლო.",
          "text[0:4] — პირველი 4 სიმბოლო (ინდექსები 0, 1, 2, 3).",
          "text[-4:] — ბოლო 4 სიმბოლო (მაგ. ბარათის ბოლო 4 ციფრი).",
          "text[::-1] — მთლიანი ტექსტის შებრუნება (Reverse).",
        ],
      },
      {
        heading: "Format Specifiers ({value:flags})",
        text: "f-string-ში ორწერტილის (:) შემდეგ შეგვიძლია მივუთითოთ გამოტანის ზუსტი ფორმატი:",
        bullets: [
          "f\"{price:.2f}\" — ათწილადის დამრგვალება მძიმის შემდეგ ზუსტად 2 ციფრამდე (მაგ: 49.90).",
          "f\"{num:,}\" — ათასეულების გამოყოფა მძიმით (მაგ: 1,000,000).",
          "f\"{text:>10}\" / f\"{text:^10}\" — ტექსტის გასწორება მარჯვნივ ან ცენტრში.",
        ],
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: სტრინგის მეთოდები და ვალიდაცია",
        code: `phone = "  599-12-34-56  "
clean_phone = phone.strip().replace("-", "")

print("გასუფთავებული:", clean_phone)
print("მხოლოდ ციფრებია?", clean_phone.isdigit())

name = "giorgi"
print("კაპიტალიზებული:", name.capitalize())
print("სად არის 'o'?", name.find("o"))`,
        explanation: "strip(), replace() და isdigit() შეუცვლელია მომხმარებლის მონაცემების შემოწმებისას.",
      },
      {
        title: "მაგალითი 2: String Slicing და ბარათის ნომრის დაფარვა",
        code: `card_number = "4532-1190-8842-9014"

last_digits = card_number[-4:]
print(f"ბარათი: XXXX-XXXX-XXXX-{last_digits}")

word = "Python"
print("პირველი 3 ასო:", word[:3])
print("შებრუნებული:", word[::-1])`,
        explanation: "უარყოფითი ინდექსი [-4:] იღებს ბოლო 4 სიმბოლოს, ხოლო [::-1] აბრუნებს სიტყვას.",
      },
      {
        title: "მაგალითი 3: Format Specifiers ფასებისთვის",
        code: `price1 = 3.14159
price2 = 12500.5

print(f"ფასი 1: {price1:.2f} ₾")
print(f"ფასი 2: {price2:,.2f} ₾")`,
        explanation: ":.2f ყოველთვის აჩვენებს მძიმის შემდეგ 2 ციფრს, ხოლო , ამატებს ათასეულის გამყოფს.",
      },
    ],
    exercises: [
      {
        id: "ex_13_1",
        title: "სავარჯიშო 1: ტელეფონის ნომრის გაწმენდა და ბოლო 4 ციფრი",
        instruction: "მოცემულია `raw = \" 555-77-88-99 \"`. მოაშორეთ გამოტოვებები `.strip()`-ით, შეცვალეთ `\"-\"` ცარიელი სტრიქონით `.replace(\"-\", \"\")`, შემდეგ Slicing-ით აიღეთ ბოლო 4 ციფრი (`[-4:]`) და დაბეჭდეთ: `ბოლო 4 ციფრი: 8899`.",
        initialCode: `raw = " 555-77-88-99 "

# გაასუფთავეთ და ამოიღეთ ბოლო 4 ციფრი
`,
        hint: "clean = raw.strip().replace(\"-\", \"\")\nlast4 = clean[-4:]\nprint(f\"ბოლო 4 ციფრი: {last4}\")",
        solution: `raw = " 555-77-88-99 "
clean = raw.strip().replace("-", "")
last4 = clean[-4:]
print(f"ბოლო 4 ციფრი: {last4}")`,
        validate: (output) => {
          if (output.includes("8899")) {
            return { valid: true, message: "ყოჩაღ! strip(), replace() და slicing უშეცდომოდ იმუშავა." };
          }
          return { valid: false, message: "დაბეჭდეთ: 'ბოლო 4 ციფრი: 8899'" };
        },
      },
      {
        id: "ex_13_2",
        title: "სავარჯიშო 2: ფასის ფორმატირება :.2f-ით",
        instruction: "მოცემულია `total = 19.4567`. დაბეჭდეთ ის ზუსტად 2 ათწილადი ნიშნით format specifier-ის გამოყენებით: `ჯამი: 19.46 ₾`.",
        initialCode: `total = 19.4567

# დაბეჭდეთ :.2f ფორმატით
`,
        hint: "print(f\"ჯამი: {total:.2f} ₾\")",
        solution: `total = 19.4567
print(f"ჯამი: {total:.2f} ₾")`,
        validate: (output) => {
          if (output.includes("19.46")) {
            return { valid: true, message: "შესანიშნავია! f-string-მა რიცხვი ზუსტად 2 ნიშნამდე დაამრგვალა." };
          }
          return { valid: false, message: "მოსალოდნელია: 'ჯამი: 19.46 ₾'" };
        },
      },
    ],
  },
  {
    id: 14,
    moduleId: 2,
    title: "გაკვეთილი 14: სიმრავლეები (Set) და 2D კოლექციები",
    shortTitle: "14. სიმრავლეები & 2D სიები",
    subtitle: "უნიკალური ელემენტების სიმრავლე (set), add/remove, union/intersection და 2D ცხრილები",
    icon: "Grid",
    duration: "30 წუთი",
    theory: [
      {
        heading: "რა არის სიმრავლე (Set)?",
        text: "Set არის დაულაგებელი კოლექცია, რომელიც იწერება ფიგურულ ფრჩხილებში {a, b, c} (ცარიელი სიმრავლისთვის ვიყენებთ `set()`, რადგან `{}` ქმნის ლექსიკონს!). Set-ის მთავარი თვისებაა: ის არ ინახავს დუბლიკატებს.",
        bullets: [
          "სისწრაფე: ელემენტის ძებნა (`x in my_set`) სიმრავლეში ბევრად სწრაფია, ვიდრე სიაში.",
          "მეთოდები: `.add(x)`, `.remove(x)`, `.discard(x)` (არ აგდებს შეცდომას, თუ ელემენტი არ არსებობს).",
          "სიმრავლური ოპერაციები: `a.union(b)` (გაერთიანება), `a.intersection(b)` (თანაკვეთა), `a.difference(b)` (სხვაობა).",
        ],
      },
      {
        heading: "2D კოლექციები (სია სიაში / მატრიცები)",
        text: "2D კოლექცია არის კოლექცია, რომლის თითოეული ელემენტი თავად არის სია ან კორტეჟი — მაგალითად სატელეფონო კლავიატურა ან ქვიზის კითხვების ცხრილი. წვდომა ხდება ორი ინდექსით: `grid[row][col]`.",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: სიმრავლე (Set) და დუბლიკატების მოშორება",
        code: `emails = ["a@mail.ge", "b@mail.ge", "a@mail.ge", "c@mail.ge"]
unique_emails = set(emails)

unique_emails.add("d@mail.ge")
print("უნიკალური რაოდენობა:", len(unique_emails))

group_a = {"Python", "JS", "SQL"}
group_b = {"Python", "Go", "Rust"}
print("საერთო ენები:", group_a.intersection(group_b))`,
        explanation: "set(list) მომენტალურად აშორებს გამეორებულ ელემენტებს სიიდან.",
      },
      {
        title: "მაგალითი 2: 2D კოლექცია — ტელეფონის კლავიატურა (NumPad)",
        code: `num_pad = (
    (1, 2, 3),
    (4, 5, 6),
    (7, 8, 9),
    ("*", 0, "#")
)

for row in num_pad:
    line = ""
    for key in row:
        line += str(key) + " "
    print(line)`,
        explanation: "ჩადგმული for ციკლებით მარტივად გავდივართ 2D ცხრილის ყველა რიგსა და სვეტზე.",
      },
    ],
    exercises: [
      {
        id: "ex_14_1",
        title: "სავარჯიშო 1: უნიკალური ტეგების პოვნა (Set)",
        instruction: "მოცემულია ტეგების სია დუბლიკატებით: `tags = [\"python\", \"code\", \"python\", \"web\", \"code\"]`. გარდაქმენით ის სიმრავლედ `unique_tags = set(tags)`, დაამატეთ `\"ai\"` `.add()` მეთოდით და დაბეჭდეთ უნიკალური ტეგების რაოდენობა: `უნიკალური ტეგები: 4`.",
        initialCode: `tags = ["python", "code", "python", "web", "code"]

# გადააქციეთ set-ად, დაამატეთ "ai" და დაბეჭდეთ len
`,
        hint: "unique_tags = set(tags)\nunique_tags.add(\"ai\")\nprint(f\"უნიკალური ტეგები: {len(unique_tags)}\")",
        solution: `tags = ["python", "code", "python", "web", "code"]
unique_tags = set(tags)
unique_tags.add("ai")
print(f"უნიკალური ტეგები: {len(unique_tags)}")`,
        validate: (output) => {
          if (output.includes("4")) {
            return { valid: true, message: "ყოჩაღ! Set-მა დუბლიკატები მოაშორა და ახალი ელემენტი დაამატა." };
          }
          return { valid: false, message: "მოსალოდნელია: 'უნიკალური ტეგები: 4'" };
        },
      },
      {
        id: "ex_14_2",
        title: "სავარჯიშო 2: 2D მატრიცის ელემენტების ჯამი",
        instruction: "მოცემულია 2D სია: `matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`. ჩადგმული ციკლით დაითვალეთ ყველა რიცხვის ჯამი ცვლადში `total` და დაბეჭდეთ: `მატრიცის ჯამი: 45`.",
        initialCode: `matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
total = 0

# ჩადგმული for ციკლი
`,
        hint: "for row in matrix:\n    for num in row:\n        total += num\nprint(f\"მატრიცის ჯამი: {total}\")",
        solution: `matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
total = 0
for row in matrix:
    for num in row:
        total += num
print(f"მატრიცის ჯამი: {total}")`,
        validate: (output) => {
          if (output.includes("45")) {
            return { valid: true, message: "შესანიშნავია! 2D მატრიცის ყველა ელემენტი სწორად შეკრიბეთ." };
          }
          return { valid: false, message: "მოსალოდნელია: 'მატრიცის ჯამი: 45'" };
        },
      },
    ],
  },
  {
    id: 15,
    moduleId: 2,
    title: "გაკვეთილი 15: random მოდული და კონსოლური თამაშები",
    shortTitle: "15. random & თამაშები",
    subtitle: "random.randint(), random.choice(), random.shuffle() — რიცხვის გამოცნობა და ჯეირანი",
    icon: "Dices",
    duration: "30 წუთი",
    theory: [
      {
        heading: "random მოდულის შესაძლებლობები",
        text: "თამაშების, სიმულაციების და ტესტური მონაცემების შესაქმნელად პითონში ვიყენებთ ჩაშენებულ `random` მოდულს:",
        bullets: [
          "random.randint(a, b) — აბრუნებს შემთხვევით მთელ რიცხვს a-დან b-ის ჩათვლით (მაგ. კამათელი: 1-დან 6-მდე).",
          "random.random() — აბრუნებს შემთხვევით წილადს 0.0-დან 1.0-მდე.",
          "random.choice(sequence) — ირჩევს ერთ შემთხვევით ელემენტს სიიდან ან კორტეჟიდან.",
          "random.shuffle(list) — ადგილზე ურევს სიის ელემენტების თანმიმდევრობას (მაგ. კარტის დასტა).",
        ],
      },
      {
        heading: "მინი-თამაშების არქიტექტურა",
        text: "ვიდეოში განხილული კლასიკური თამაშები (Number Guessing, Rock-Paper-Scissors, Dice Roller) ეფუძნება 3 ნაბიჯს: 1) კომპიუტერის შემთხვევითი არჩევანი, 2) მომხმარებლის input(), 3) if-elif-else შედარება და ციკლი.",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: კამათლის გაგორება და კარტის არევა",
        code: `import random

dice = random.randint(1, 6)
print(f"კამათელზე მოვიდა: {dice}")

cards = ["A", "K", "Q", "J", "10"]
random.shuffle(cards)
print("არეული კარტები:", cards)`,
        explanation: "randint(1, 6) ჩათვლით იღებს ორივე საზღვარს, ხოლო shuffle() ადგილზე ურევს სიას.",
      },
      {
        title: "მაგალითი 2: ჯეირანი (Rock, Paper, Scissors)",
        code: `import random

options = ("ქვა", "ქაღალდი", "მაკრატელი")
computer = random.choice(options)
player = input("აირჩიეთ (ქვა, ქაღალდი, მაკრატელი): ")

print(f"თქვენ: {player} | კომპიუტერი: {computer}")

if player == computer:
    print("ფრეა!")
elif (player == "ქვა" and computer == "მაკრატელი") or \\
     (player == "ქაღალდი" and computer == "ქვა") or \\
     (player == "მაკრატელი" and computer == "ქაღალდი"):
    print("თქვენ მოიგეთ! 🎉")
else:
    print("კომპიუტერმა მოიგო!")`,
        explanation: "random.choice() ირჩევს კომპიუტერის სვლას, ხოლო ლოგიკური ოპერატორები ადგენენ გამარჯვებულს.",
      },
    ],
    exercises: [
      {
        id: "ex_15_1",
        title: "სავარჯიშო 1: ორი კამათლის გაგორება",
        instruction: "შემოიტანეთ `random` მოდული. `random.randint(1, 6)`-ის გამოყენებით შექმენით ორი ცვლადი `die1` და `die2`, დათვალეთ მათი ჯამი `total = die1 + die2` და დაბეჭდეთ: `კამათლები: [die1] + [die2] = [total]`.",
        initialCode: `import random

# გააგორეთ ორი კამათელი და დაბეჭდეთ ჯამი
`,
        hint: "die1 = random.randint(1, 6)\ndie2 = random.randint(1, 6)\ntotal = die1 + die2\nprint(f\"კამათლები: {die1} + {die2} = {total}\")",
        solution: `import random
die1 = random.randint(1, 6)
die2 = random.randint(1, 6)
total = die1 + die2
print(f"კამათლები: {die1} + {die2} = {total}")`,
        validate: (output) => {
          if (output.includes("კამათლები:") && output.includes("=") && /\d+/.test(output)) {
            return { valid: true, message: "ყოჩაღ! random.randint()-ით კამათლები წარმატებით გაგორდა." };
          }
          return { valid: false, message: "დაბეჭდეთ ფორმატით: 'კამათლები: 3 + 5 = 8'" };
        },
      },
      {
        id: "ex_15_2",
        title: "სავარჯიშო 2: შემთხვევითი გამარჯვებულის არჩევა",
        instruction: "მოცემულია მონაწილეების სია: `players = [\"ნიკა\", \"ანა\", \"ლუკა\", \"სალომე\"]`. აირჩიეთ ერთი შემთხვევითი გამარჯვებული `random.choice(players)`-ით და დაბეჭდეთ: `გამარჯვებულია: [სახელი]`.",
        initialCode: `import random

players = ["ნიკა", "ანა", "ლუკა", "სალომე"]

# აირჩიეთ გამარჯვებული random.choice()-ით
`,
        hint: "winner = random.choice(players)\nprint(f\"გამარჯვებულია: {winner}\")",
        solution: `import random
players = ["ნიკა", "ანა", "ლუკა", "სალომე"]
winner = random.choice(players)
print(f"გამარჯვებულია: {winner}")`,
        validate: (output) => {
          const hasPlayer = ["ნიკა", "ანა", "ლუკა", "სალომე"].some((p) => output.includes(p));
          if (output.includes("გამარჯვებულია") && hasPlayer) {
            return { valid: true, message: "შესანიშნავია! შემთხვევითი არჩევანი სწორად მუშაობს." };
          }
          return { valid: false, message: "დაბეჭდეთ ერთ-ერთი მონაწილე ფორმატით: 'გამარჯვებულია: [სახელი]'" };
        },
      },
    ],
  },
];
