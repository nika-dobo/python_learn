// Module 5: Exceptions, Dates, External World Guide & Final Quiz (Lessons 25-27)

export const MODULE_5_LESSONS = [
  {
    id: 25,
    moduleId: 5,
    title: "გაკვეთილი 25: გამონაკლისების მართვა (try / except) და datetime მოდული",
    shortTitle: "25. try/except & datetime",
    subtitle: "შეცდომების უსაფრთხო დაჭერა (ZeroDivisionError, ValueError, finally) და თარიღებთან მუშაობა",
    icon: "ShieldAlert",
    duration: "30 წუთი",
    theory: [
      {
        heading: "რა არის Exception Handling (try / except / finally)?",
        text: "მომხმარებლის არასწორი შეყვანის (მაგ. ტექსტის ჩაწერა რიცხვის ნაცვლად) ან ნულზე გაყოფის დროს პროგრამა ითიშება შეცდომით. `try / except` გვიცავს ავარიული გათიშვისგან:",
        bullets: [
          "try: — კოდი, რომელმაც შეიძლება გამოიწვიოს შეცდომა.",
          "except ZeroDivisionError: — მუშაობს, თუ მოხდა ნულზე გაყოფა.",
          "except ValueError: — მუშაობს, თუ ტიპის კონვერტაცია ჩაიშალა (მაგ. int('abc')).",
          "finally: — ყოველთვის სრულდება (შეცდომა იყო თუ არა), მაგ. რესურსის დასახურად.",
        ],
      },
      {
        heading: "თარიღები და დრო (datetime მოდული)",
        text: "თარიღებთან და დროსთან სამუშაოდ ვიყენებთ `import datetime` მოდულს: `datetime.date.today()` გვაძლევს დღევანდელ თარიღს, `datetime.datetime.now()` — ზუსტ დროს, ხოლო `.strftime('%Y-%m-%d')` აფორმატებს თარიღს სასურველ ტექსტად.",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: try / except / finally უსაფრთხო გაყოფა",
        code: `try:
    number = int("abc")  # გამოიწვევს ValueError-ს
    print(10 / number)
except ZeroDivisionError:
    print("ნულზე გაყოფა არ შეიძლება!")
except ValueError:
    print("გთხოვთ შეიყვანოთ მხოლოდ რიცხვი!")
finally:
    print("შემოწმება დასრულდა.")`,
        explanation: "პროგრამა არ გაითიშება ValueError-ზე და მომხმარებელს ადამიანურ შეტყობინებას აჩვენებს.",
      },
      {
        title: "მაგალითი 2: datetime მოდულით თარიღების დათვლა",
        code: `import datetime

today = datetime.date.today()
print("დღევანდელი თარიღი:", today)

new_year = datetime.date(today.year + 1, 1, 1)
days_left = (new_year - today).days
print(f"ახალ წლამდე დარჩა: {days_left} დღე")`,
        explanation: "ორი date ობიექტის გამოკლებით მარტივად ვიგებთ დღეების სხვაობას.",
      },
    ],
    exercises: [
      {
        id: "ex_25_1",
        title: "სავარჯიშო 1: უსაფრთხო გაყოფის ფუნქცია",
        instruction: "დაწერეთ ფუნქცია `safe_divide(a, b)`, რომელიც `try` ბლოკში აბრუნებს `a / b`-ს, ხოლო `except ZeroDivisionError:` ბლოკში აბრუნებს სტრიქონს `\"ნულზე გაყოფა შეუძლებელია\"`. დაბეჭდეთ `safe_divide(10, 0)` და `safe_divide(10, 2)`.",
        initialCode: `def safe_divide(a, b):
    # გამოიყენეთ try / except ZeroDivisionError
    pass

print(safe_divide(10, 0))
print(safe_divide(10, 2))`,
        hint: "try:\n    return a / b\nexcept ZeroDivisionError:\n    return \"ნულზე გაყოფა შეუძლებელია\"",
        solution: `def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "ნულზე გაყოფა შეუძლებელია"

print(safe_divide(10, 0))
print(safe_divide(10, 2))`,
        validate: (output) => {
          if (output.includes("ნულზე გაყოფა შეუძლებელია") && output.includes("5")) {
            return { valid: true, message: "ყოჩაღ! შეცდომა უსაფრთხოდ დაიჭირეთ." };
          }
          return { valid: false, message: "უნდა დაიბეჭდოს 'ნულზე გაყოფა შეუძლებელია' და '5.0'." };
        },
      },
      {
        id: "ex_25_2",
        title: "სავარჯიშო 2: კონკრეტული თარიღის შექმნა და ფორმატირება",
        instruction: "შემოიტანეთ `datetime`. შექმენით თარიღი `birthday = datetime.date(2000, 5, 26)` და დაბეჭდეთ ის `strftime(\"%d/%m/%Y\")` ფორმატით (`26/05/2000`).",
        initialCode: `import datetime

# შექმენით birthday და დაბეჭდეთ strftime-ით
`,
        hint: "birthday = datetime.date(2000, 5, 26)\nprint(birthday.strftime(\"%d/%m/%Y\"))",
        solution: `import datetime
birthday = datetime.date(2000, 5, 26)
print(birthday.strftime("%d/%m/%Y"))`,
        validate: (output) => {
          if (output.includes("26/05/2000")) {
            return { valid: true, message: "შესანიშნავია! datetime ფორმატირება სწორად შესრულდა." };
          }
          return { valid: false, message: "მოსალოდნელია: 26/05/2000" };
        },
      },
    ],
  },
  {
    id: 26,
    moduleId: 5,
    title: "გაკვეთილი 26: ფაილები, JSON, Multithreading, API & PyQt5 (ლოკალური გზამკვლევი)",
    shortTitle: "26. ფაილები, API & PyQt5",
    subtitle: "ბრაუზერის გარეთ სამუშაო თემები: File I/O, JSON, threading, requests API, PyQt5 GUI + მონაცემთა პარსინგი",
    icon: "Globe",
    duration: "35 წუთი",
    badge: "ბონუსი • გარე გარემო",
    theory: [
      {
        heading: "რატომ არის ეს თემები ცალკე გზამკვლევად?",
        text: "ჩვენი საიტის კოდ-ედიტორი მუშაობს უსაფრთხო ბრაუზერის გარემოში (Skulpt), რომელსაც არ აქვს წვდომა თქვენი კომპიუტერის ფაილებთან, დესკტოპის ფანჯრებთან (PyQt5), `json` ბიბლიოთეკასთან ან გარე ინტერნეტ-სოკეტებთან. ქვემოთ მოცემულია ვიდეოს ფინალური ნაწილის მთავარი კონცეფციები (რომლებსაც VS Code / PyCharm-ში გაუშვებთ), ხოლო ედიტორში ვივარჯიშებთ API/კონფიგურაციის ტექსტური მონაცემების დამუშავებაზე!",
      },
      {
        heading: "1. ფაილებთან მუშაობა (File I/O) და JSON",
        bullets: [
          "with open('file.txt', 'w') as f: f.write('Hello') — უსაფრთხო ჩაწერა ('w' გადაწერა, 'a' დამატება, 'r' წაკითხვა).",
          "os.path.exists('file.txt') — ამოწმებს, არსებობს თუ არა ფაილი ან საქაღალდე.",
          "json.dumps(dict) / json.loads(json_str) — პითონის ლექსიკონის გარდაქმნა JSON ტექსტად და პირიქით.",
        ],
      },
      {
        heading: "2. Multithreading და API მოთხოვნები (requests)",
        bullets: [
          "threading.Thread(target=my_func) — საშუალებას გვაძლევს რამდენიმე I/O ამოცანა (მაგ. ფაილის ჩამოტვირთვა და ტაიმერი) გავუშვათ პარალელურად.",
          "requests.get(url) — გარე ვებ-API-ებიდან მონაცემების წამოღება (მაგ. ამინდის პროგნოზი ან PokeAPI) და `.json()` მეთოდით ლექსიკონად გარდაქმნა.",
        ],
      },
      {
        heading: "3. Desktop GUI — PyQt5 (ვიდეოს ბოლო სექცია)",
        text: "ლოკალურ კომპიუტერზე `pip install PyQt5`-ის დაყენების შემდეგ შეგიძლიათ ააწყოთ ფანჯრიანი აპლიკაციები (Digital Clock, Stopwatch, Weather App): QApplication, QMainWindow, QLabel, QPushButton, QLineEdit, QVBoxLayout/QHBoxLayout და CSS სტილები `setStyleSheet()`-ით.",
      },
    ],
    codeSnippets: [
      {
        title: "მაგალითი 1: API პასუხის (ლექსიკონის) დამუშავება",
        code: `# API-დან მოსული მონაცემის სიმულაცია (Weather App-ის მსგავსად)
api_response = {
    "name": "Tbilisi",
    "main": {"temp": 22.5, "humidity": 55},
    "weather": [{"description": "მზიანი"}]
}

city = api_response["name"]
temp = api_response["main"]["temp"]
desc = api_response["weather"][0]["description"]
print(f"{city}: {temp}°C — {desc}")`,
        explanation: "ზუსტად ასეთ ჩადგმულ ლექსიკონს გვიბრუნებს რეალური Weather API (OpenWeatherMap) requests-ის გამოყენებისას.",
      },
      {
        title: "მაგალითი 2: PyQt5 და ფაილები (ლოკალური VS Code ნიმუში)",
        code: `# ეს კოდი ეშვება ლოკალურ კომპიუტერზე (pip install PyQt5 requests)
# import sys
# from PyQt5.QtWidgets import QApplication, QMainWindow
#
# app = QApplication(sys.argv)
# window = QMainWindow()
# window.setWindowTitle("ჩემი პირველი GUI")
# window.show()
# sys.exit(app.exec_())

print("PyQt5, File I/O და requests ეშვება ლოკალურ Python გარემოში!")`,
        explanation: "როდესაც გადახვალთ VS Code-ზე, ეს შაბლონი გახსნის თქვენს პირველ დესკტოპ ფანჯარას.",
      },
    ],
    exercises: [
      {
        id: "ex_26_1",
        title: "სავარჯიშო 1: ამინდის API-ის მონაცემის ამოღება",
        instruction: "წარმოიდგინეთ, რომ Weather API-მ დააბრუნა ჩადგმული ლექსიკონი `weather_data`. ამოიღეთ ქალაქის სახელი (`\"name\"`) და ტემპერატურა (`[\"main\"][\"temp\"]`), და დაბეჭდეთ: `Batumi: 24°C`.",
        initialCode: `weather_data = {
    "name": "Batumi",
    "main": {"temp": 24, "humidity": 70}
}

# ამოიღეთ city და temp და დაბეჭდეთ Batumi: 24°C
`,
        hint: "city = weather_data[\"name\"]\ntemp = weather_data[\"main\"][\"temp\"]\nprint(f\"{city}: {temp}°C\")",
        solution: `weather_data = {
    "name": "Batumi",
    "main": {"temp": 24, "humidity": 70}
}
city = weather_data["name"]
temp = weather_data["main"]["temp"]
print(f"{city}: {temp}°C")`,
        validate: (output) => {
          if (output.includes("Batumi") && output.includes("24")) {
            return { valid: true, message: "ყოჩაღ! API-ის ჩადგმული მონაცემი სწორად გაანალიზდა." };
          }
          return { valid: false, message: "დაბეჭდეთ: 'Batumi: 24°C'" };
        },
      },
      {
        id: "ex_26_2",
        title: "სავარჯიშო 2: ტექსტური ფაილის სტრიქონების პარსინგი (split)",
        instruction: "წარმოიდგინეთ, რომ ფაილიდან წაიკითხეთ ხაზი: `line = \"Nika,28,Tbilisi\"`. გამოიყენეთ `.split(\",\")`, რათა მიიღოთ სია `parts`, და დაბეჭდეთ: `სახელი: Nika | ქალაქი: Tbilisi`.",
        initialCode: `line = "Nika,28,Tbilisi"

# გაყავით line .split(",")-ით და დაბეჭდეთ სახელი და ქალაქი
`,
        hint: "parts = line.split(\",\")\nprint(f\"სახელი: {parts[0]} | ქალაქი: {parts[2]}\")",
        solution: `line = "Nika,28,Tbilisi"
parts = line.split(",")
print(f"სახელი: {parts[0]} | ქალაქი: {parts[2]}")`,
        validate: (output) => {
          if (output.includes("Nika") && output.includes("Tbilisi")) {
            return { valid: true, message: "შესანიშნავია! CSV ფაილის სტრიქონი სწორად დამუშავდა." };
          }
          return { valid: false, message: "დაბეჭდეთ: 'სახელი: Nika | ქალაქი: Tbilisi'" };
        },
      },
    ],
  },
  {
    id: 27,
    moduleId: 5,
    title: "გაკვეთილი 27: ფინალური ქვიზი №3 (OOP, შეცდომები და Advanced Python)",
    shortTitle: "27. ფინალური ქვიზი №3",
    subtitle: "მთლიანი კურსის დასკვნითი გამოცდა: კლასები, მემკვიდრეობა, Magic Methods, try/except და JSON",
    icon: "Award",
    duration: "40 წუთი",
    isQuiz: true,
    quizQuestions: [
      {
        id: "q3_1",
        type: "choice",
        question: "რომელი მეთოდი ეშვება ავტომატურად კლასიდან ახალი ობიექტის შექმნისას?",
        options: ["__str__", "__init__", "__main__", "__add__"],
        correctIndex: 1,
        explanation: "__init__ არის კონსტრუქტორი, რომელიც ობიექტის ინიციალიზაციას აკეთებს.",
      },
      {
        id: "q3_2",
        type: "choice",
        question: "რისთვის გამოიყენება `super()` შვილ კლასში?",
        options: [
          "ობიექტის წასაშლელად",
          "მშობელი კლასის მეთოდებისა და კონსტრუქტორის გამოსაძახებლად",
          "მხოლოდ სტატიკური ცვლადების შესაქმნელად",
          "ციკლის შესაწყვეტად",
        ],
        correctIndex: 1,
        explanation: "super() გვაძლევს წვდომას მშობელი კლასის __init__-სა და მეთოდებზე.",
      },
      {
        id: "q3_3",
        type: "choice",
        question: "რომელი ბლოკი სრულდება `try / except`-ში ყოველთვის, შეცდომის მიუხედავად?",
        options: ["else", "catch", "finally", "always"],
        correctIndex: 2,
        explanation: "finally ბლოკი გარანტირებულად ეშვება try-ის დასრულების შემდეგ.",
      },
      {
        id: "q3_4",
        type: "choice",
        question: "რომელი მოდული გამოიყენება Python-ში დესკტოპის GUI აპლიკაციების ასაწყობად (ვიდეოში)?",
        options: ["PyQt5", "random", "datetime", "math"],
        correctIndex: 0,
        explanation: "ვიდეოს ბოლო ნაწილში დესკტოპ GUI აპლიკაციებისთვის გამოიყენება PyQt5.",
      },
      {
        id: "q3_5",
        type: "code",
        question: "კოდის ამოცანა: მარტივი კლასი __str__ მეთოდით",
        instruction: "შექმენით კლასი `Hero(name, hp)`, სადაც `__str__` აბრუნებს `f\"{self.name} ({self.hp} HP)\"`. შექმენით `h = Hero(\"Tariel\", 100)` და დაბეჭდეთ `print(h)`.",
        initialCode: `class Hero:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

    # დაამატეთ __str__


h = Hero("Tariel", 100)
print(h)`,
        hint: "def __str__(self):\n    return f\"{self.name} ({self.hp} HP)\"",
        solution: `class Hero:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

    def __str__(self):
        return f"{self.name} ({self.hp} HP)"

h = Hero("Tariel", 100)
print(h)`,
        validate: (output) => {
          return output.includes("Tariel") && output.includes("100 HP");
        },
      },
      {
        id: "q3_6",
        type: "code",
        question: "კოდის ამოცანა: try/except ValueError-ზე",
        instruction: "გადააქციეთ `text = \"hello\"` მთელ რიცხვად `try` ბლოკში `int(text)`-ით. `except ValueError:`-ში დაბეჭდეთ `არასწორი ფორმატი`.",
        initialCode: `text = "hello"

# try / except ValueError
`,
        hint: "try:\n    num = int(text)\nexcept ValueError:\n    print(\"არასწორი ფორმატი\")",
        solution: `text = "hello"
try:
    num = int(text)
except ValueError:
    print("არასწორი ფორმატი")`,
        validate: (output) => {
          return output.includes("არასწორი ფორმატი");
        },
      },
    ],
  },
];
