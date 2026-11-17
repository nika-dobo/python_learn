// Module 6: Functional Python, Recursion, Memory & Setup (Lessons 28-30)

export const MODULE_6_LESSONS = [
  {
    id: 28,
    moduleId: 6,
    title: "გაკვეთილი 28: lambda, map, filter, zip, all/any და sorted/reversed",
    shortTitle: "28. lambda, map, filter, zip",
    subtitle: "ანონიმური ფუნქციები, ფუნქციური ტრანსფორმაციები, სიების დაწყვილება და ვალიდაციის ფუნქციები",
    icon: "Cpu",
    duration: "35 წუთი",
    theory: [
      {
        heading: "lambda — ანონიმური (ერთხაზიანი) ფუნქციები",
        text: "როდესაც გვჭირდება პატარა ფუნქცია მხოლოდ ერთხელ გამოსაყენებლად, `def`-ის ნაცვლად შეგვიძლია დავწეროთ `lambda arguments: expression`. მაგალითად: `double = lambda x: x * 2`.",
      },
      {
        heading: "map() და filter()",
        bullets: [
          "list(map(func, iterable)) — იყენებს ფუნქციას კოლექციის თითოეულ ელემენტზე და აბრუნებს შედეგებს (მაგ. ყველა ფასის გაზრდა 18%-ით).",
          "list(filter(func, iterable)) — ტოვებს მხოლოდ იმ ელემენტებს, რომლებზეც ფუნქცია აბრუნებს True-ს (მაგ. მხოლოდ ლუწი რიცხვები).",
        ],
      },
      {
        heading: "zip(), all(), any(), sorted() და reversed()",
        bullets: [
          "zip(list1, list2) — აწყვილებს ორ ან მეტ სიას ელემენტ-ელემენტ: `for name, score in zip(names, scores):`.",
          "all(iterable) — აბრუნებს True-ს მხოლოდ მაშინ, თუ ყველა ელემენტი ჭეშმარიტია (Truthy).",
          "any(iterable) — აბრუნებს True-ს, თუ ერთი ელემენტი მაინც არის ჭეშმარიტი.",
          "sorted(iterable) და list(reversed(iterable)) — ქმნიან ახალ დალაგებულ/შებრუნებულ სიას ორიგინალის შეუცვლელად (განსხვავებით `.sort()` და `.reverse()`-ისგან).",
        ],
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: lambda, map() და filter()",
        code: `nums = [1, 2, 3, 4, 5, 6]

# map: ყველა რიცხვის გაორმაგება
doubled = list(map(lambda x: x * 2, nums))
print("გაორმაგებული (map):", doubled)

# filter: მხოლოდ ლუწი რიცხვები
evens = list(filter(lambda x: x % 2 == 0, nums))
print("ლუწები (filter):", evens)`,
        explanation: "map() ცვლის თითოეულ ელემენტს, ხოლო filter() არჩევს მხოლოდ პირობის დამკმაყოფილებლებს.",
      },
      {
        title: "მაგალითი 2: zip(), all(), any() და sorted()",
        code: `students = ["გიორგი", "ანა", "ლუკა"]
scores = [85, 92, 78]

# zip-ით ორი სიის დაწყვილება
for name, score in zip(students, scores):
    print(f"{name}: {score} ქულა")

# all და any
print("ყველამ ჩააბარა (>= 60)?", all(s >= 60 for s in scores))
print("ვინმემ აიღო 90+?", any(s >= 90 for s in scores))

# sorted არ ცვლის ორიგინალ სიას
ordered = sorted(scores, reverse=True)
print("კლებადობით:", ordered, "| ორიგინალი:", scores)`,
        explanation: "zip(), all(), any() და sorted() პითონის კოდს ბევრად უფრო სუფთას და ლაკონურს ხდის.",
      },
    ],
    exercises: [
      {
        id: "ex_28_1",
        title: "სავარჯიშო 1: map() და filter() lambda-სთან ერთად",
        instruction: "მოცემულია სია `prices = [10, 25, 50, 80, 120]`. `filter(lambda p: p >= 50, prices)`-ით გამოყავით 50 ან მეტი ფასები სიაში `expensive`, ხოლო `map(lambda p: p * 2, [1, 2, 3])`-ით შექმენით სია `doubled`. დაბეჭდეთ ორივე სია.",
        initialCode: `prices = [10, 25, 50, 80, 120]

# 1. filter -> expensive
expensive = []

# 2. map -> doubled ([1, 2, 3]-ზე)
doubled = []

print("ძვირი:", expensive)
print("გაორმაგებული:", doubled)`,
        hint: "expensive = list(filter(lambda p: p >= 50, prices))\ndoubled = list(map(lambda p: p * 2, [1, 2, 3]))",
        solution: `prices = [10, 25, 50, 80, 120]
expensive = list(filter(lambda p: p >= 50, prices))
doubled = list(map(lambda p: p * 2, [1, 2, 3]))
print("ძვირი:", expensive)
print("გაორმაგებული:", doubled)`,
        validate: (output) => {
          if (output.includes("50") && output.includes("120") && output.includes("2") && output.includes("6") && !output.includes("10")) {
            return { valid: true, message: "ყოჩაღ! filter() და map() lambda-სთან ერთად სრულყოფილად მუშაობს." };
          }
          return { valid: false, message: "expensive უნდა შეიცავდეს [50, 80, 120], doubled კი [2, 4, 6]." };
        },
      },
      {
        id: "ex_28_2",
        title: "სავარჯიშო 2: zip() და all() გამოყენება",
        instruction: "მოცემულია `names = [\"პური\", \"რძე\"]` და `costs = [1.5, 4.0]`. `zip(names, costs)`-ით ციკლში დაბეჭდეთ `[name]: [cost]`, ხოლო შემდეგ `all(c > 0 for c in costs)`-ის შედეგი დაბეჭდეთ როგორც `ყველა ფასი დადებითია: True`.",
        initialCode: `names = ["პური", "რძე"]
costs = [1.5, 4.0]

# zip ციკლი და all() შემოწმება
`,
        hint: "for name, cost in zip(names, costs):\n    print(f\"{name}: {cost}\")\nprint(f\"ყველა ფასი დადებითია: {all(c > 0 for c in costs)}\")",
        solution: `names = ["პური", "რძე"]
costs = [1.5, 4.0]
for name, cost in zip(names, costs):
    print(f"{name}: {cost}")
print(f"ყველა ფასი დადებითია: {all(c > 0 for c in costs)}")`,
        validate: (output) => {
          if (output.includes("პური: 1.5") && output.includes("რძე: 4") && output.includes("True")) {
            return { valid: true, message: "შესანიშნავია! zip() და all() ზუსტად გამოიყენეთ." };
          }
          return { valid: false, message: "დაბეჭდეთ zip-ით წყვილები და all()-ის True შედეგი." };
        },
      },
    ],
  },
  {
    id: 29,
    moduleId: 6,
    title: "გაკვეთილი 29: რეკურსია (Recursion)",
    shortTitle: "29. რეკურსია (Recursion)",
    subtitle: "თვითგამოძახებადი ფუნქციები, Base Case, Recursive Step, ფაქტორიალი და ფიბონაჩი",
    icon: "RefreshCw",
    duration: "30 წუთი",
    theory: [
      {
        heading: "რა არის რეკურსია?",
        text: "რეკურსია არის პროგრამირების ტექნიკა, როდესაც ფუნქცია საკუთარ თავს იძახებს უფრო მცირე ქვეამოცანის ამოსახსნელად. რეკურსიული ფუნქცია ყოველთვის უნდა შედგებოდეს ორი ნაწილისგან:",
        bullets: [
          "Base Case (საბაზისო პირობა) — გაჩერების პირობა, რომელიც წყვეტს გამოძახებებს (მის გარეშე მივიღებთ უსასრულო რეკურსიას — RecursionError).",
          "Recursive Step (რეკურსიული ნაბიჯი) — ფუნქცია იძახებს საკუთარ თავს შემცირებული არგუმენტით, სანამ Base Case-მდე მივა.",
        ],
      },
      {
        heading: "როდის ვიყენებთ რეკურსიას?",
        text: "რეკურსია იდეალურია ხის სტრუქტურების (საქაღალდეები, კატეგორიები, JSON) შემოვლისას და მათემატიკურ ამოცანებში (ფაქტორიალი: `n! = n * (n - 1)!`, ფიბონაჩის მიმდევრობა).",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: უკუთვლა და ფაქტორიალი (n!)",
        code: `def countdown(n):
    if n <= 0:  # Base Case
        print("სტარტი!")
        return
    print(n)
    countdown(n - 1)  # Recursive Step

countdown(3)

def factorial(n):
    if n == 0 or n == 1:  # Base Case
        return 1
    return n * factorial(n - 1)

print("5! =", factorial(5))  # 120`,
        explanation: "factorial(5) იშლება როგორც 5 * 4 * 3 * 2 * 1, სანამ n გახდება 1.",
      },
      {
        title: "მაგალითი 2: რეკურსიული ჯამი სიაში",
        code: `def recursive_sum(nums):
    if len(nums) == 0:  # Base Case
        return 0
    return nums[0] + recursive_sum(nums[1:])

print("ჯამი:", recursive_sum([10, 20, 30, 40]))  # 100`,
        explanation: "ყოველ ნაბიჯზე ვუმატებთ პირველ ელემენტს და დანარჩენ სიას გადავცემთ ისევ recursive_sum-ს.",
      },
    ],
    exercises: [
      {
        id: "ex_29_1",
        title: "სავარჯიშო 1: 1-დან n-მდე რიცხვების რეკურსიული ჯამი",
        instruction: "დაწერეთ რეკურსიული ფუნქცია `sum_to_n(n)`, რომელიც აბრუნებს `1 + 2 + ... + n`-ს. Base Case: თუ `n <= 1`, დააბრუნეთ `n`. სხვა შემთხვევაში: `return n + sum_to_n(n - 1)`. დაბეჭდეთ `sum_to_n(5)` (15).",
        initialCode: `def sum_to_n(n):
    # დაწერეთ Base Case და Recursive Step
    pass

print(sum_to_n(5))`,
        hint: "if n <= 1:\n    return n\nreturn n + sum_to_n(n - 1)",
        solution: `def sum_to_n(n):
    if n <= 1:
        return n
    return n + sum_to_n(n - 1)

print(sum_to_n(5))`,
        validate: (output) => {
          if (output.trim() === "15") {
            return { valid: true, message: "ყოჩაღ! რეკურსიული ფუნქცია უშეცდომოდ მუშაობს." };
          }
          return { valid: false, message: "მოსალოდნელია: 15" };
        },
      },
      {
        id: "ex_29_2",
        title: "სავარჯიშო 2: ფიბონაჩის n-ური წევრი",
        instruction: "შექმენით ფუნქცია `fibonacci(n)`: თუ `n <= 1`, დააბრუნეთ `n`. სხვა შემთხვევაში დააბრუნეთ `fibonacci(n - 1) + fibonacci(n - 2)`. დაბეჭდეთ `fibonacci(6)` (8).",
        initialCode: `def fibonacci(n):
    # Base Case: n <= 1
    # Recursive Step
    pass

print(fibonacci(6))`,
        hint: "if n <= 1:\n    return n\nreturn fibonacci(n - 1) + fibonacci(n - 2)",
        solution: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(6))`,
        validate: (output) => {
          if (output.trim() === "8") {
            return { valid: true, message: "ბრწყინვალეა! ფიბონაჩის მე-6 წევრი (8) სწორად გამოითვალა." };
          }
          return { valid: false, message: "მოსალოდნელია: 8" };
        },
      },
    ],
  },
  {
    id: 30,
    moduleId: 6,
    title: "გაკვეთილი 30: მეხსიერება (is vs ==, deepcopy), match-case და VS Code Setup",
    shortTitle: "30. მეხსიერება, is vs == & Setup",
    subtitle: "როგორ მუშაობს მეხსიერება პითონში, Shallow vs Deep Copy, Python 3.10 match-case და გარემოს დაყენება",
    icon: "MemoryStick",
    duration: "35 წუთი",
    theory: [
      {
        heading: "is vs == (Identity vs Equality)",
        text: "პითონში ცვლადები არიან იარლიყები (References), რომლებიც მიუთითებენ მეხსიერებაში მდებარე ობიექტებზე:",
        bullets: [
          "== ამოწმებს აქვს თუ არა ორ ობიექტს ერთნაირი მნიშვნელობა (`[1, 2] == [1, 2]` -> True).",
          "is ამოწმებს მიუთითებს თუ არა ორი ცვლადი ზუსტად ერთსა და იმავე ობიექტზე მეხსიერებაში (`a is b`). `None`-თან შემოწმებისას ყოველთვის ვიყენებთ `if x is None:`.",
        ],
      },
      {
        heading: "Shallow Copy vs copy.deepcopy()",
        text: "თუ დავწერთ `b = a` სიაზე, ორივე ცვლადი ერთსა და იმავე სიას უყურებს! `a.copy()` ქმნის ზედაპირულ ასლს (Shallow Copy), მაგრამ ჩადგმული სიებისთვის (`[[1, 2], [3, 4]]`) შიდა სიები მაინც საერთო რჩება. სრული, დამოუკიდებელი ასლისთვის ვიყენებთ `from copy import deepcopy`.",
      },
      {
        heading: "match-case (Python 3.10+) და VS Code-ში გარემოს დაყენება",
        bullets: [
          "match-case: Python 3.10-დან დამატებული Pattern Matching კონსტრუქცია (`match status: case 200: ... case _: ...`), რომელიც ანაცვლებს გრძელ `if-elif` ჯაჭვებს (ეშვება ლოკალურ Python 3.10+ გარემოში).",
          "ლოკალური გარემო (Setup): ჩამოტვირთეთ Python (`python.org`) და VS Code (`code.visualstudio.com`), დააყენეთ ოფიციალური Python extension, შექმენით ვირტუალური გარემო (`python -m venv venv`) და გაუშვით `.py` ფაილები ტერმინალიდან.",
        ],
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: == vs is და id()",
        code: `list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print("list1 == list2:", list1 == list2)  # True (მნიშვნელობა ტოლია)
print("list1 is list2:", list1 is list2)  # False (სხვადასხვა ობიექტია)
print("list1 is list3:", list1 is list3)  # True (ერთი და იგივე ობიექტია)`,
        explanation: "ორი ერთნაირი სია ტოლია (==), მაგრამ მეხსიერებაში სხვადასხვა ადგილას ინახება (is -> False).",
      },
      {
        title: "მაგალითი 2: copy.deepcopy() ჩადგმულ სიებზე",
        code: `from copy import deepcopy

original = [[1, 2], [3, 4]]
shallow = original.copy()
deep = deepcopy(original)

deep[0][0] = 999
print("original (უცვლელია deep-ის მერე):", original)
print("deep:", deep)

shallow[0][0] = 777
print("original (შეიცვალა shallow-ს გამო!):", original)`,
        explanation: "deepcopy() ქმნის ჩადგმული ელემენტების სრულად დამოუკიდებელ ასლს.",
      },
    ],
    exercises: [
      {
        id: "ex_30_1",
        title: "სავარჯიშო 1: == და is ოპერატორების შედარება",
        instruction: "მოცემულია `a = [10, 20]` და `b = [10, 20]`. დაბეჭდეთ `a == b` და `a is b`, და შემდეგ `c = a`-ს შექმნის მერე დაბეჭდეთ `a is c`.",
        initialCode: `a = [10, 20]
b = [10, 20]
c = a

# დაბეჭდეთ a == b, a is b და a is c
`,
        hint: "print(a == b)\nprint(a is b)\nprint(a is c)",
        solution: `a = [10, 20]
b = [10, 20]
c = a
print(a == b)
print(a is b)
print(a is c)`,
        validate: (output) => {
          const lines = output.trim().split("\n").map((s) => s.trim());
          if (lines[0] === "True" && lines[1] === "False" && lines[2] === "True") {
            return { valid: true, message: "ყოჩაღ! Equality (==) და Identity (is) სრულად გააზრებულია." };
          }
          return { valid: false, message: "მოსალოდნელია სამ ხაზზე: True, False, True" };
        },
      },
      {
        id: "ex_30_2",
        title: "სავარჯიშო 2: ჩადგმული სიის დამოუკიდებელი ასლი (deepcopy)",
        instruction: "შემოიტანეთ `from copy import deepcopy`. შექმენით `matrix = [[1, 2], [3, 4]]` და მისი ღრმა ასლი `clone = deepcopy(matrix)`. შეცვალეთ `clone[0][0] = 99`. დაბეჭდეთ `matrix[0][0]` და `clone[0][0]` (უნდა იყოს `1` და `99`).",
        initialCode: `from copy import deepcopy

matrix = [[1, 2], [3, 4]]

# შექმენით deepcopy, შეცვალეთ clone[0][0] = 99 და დაბეჭდეთ
`,
        hint: "clone = deepcopy(matrix)\nclone[0][0] = 99\nprint(matrix[0][0], clone[0][0])",
        solution: `from copy import deepcopy
matrix = [[1, 2], [3, 4]]
clone = deepcopy(matrix)
clone[0][0] = 99
print(matrix[0][0], clone[0][0])`,
        validate: (output) => {
          if (output.includes("1") && output.includes("99")) {
            return { valid: true, message: "შესანიშნავია! deepcopy()-მ დაიცვა ორიგინალი მატრიცა ცვლილებისგან." };
          }
          return { valid: false, message: "უნდა დაიბეჭდოს: 1 და 99" };
        },
      },
    ],
  },
];
