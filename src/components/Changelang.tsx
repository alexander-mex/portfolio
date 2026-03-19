interface TranslatedContent {
  error: string;
  home: string;
  about: string;
  projects: string;
  contact: string;
  language: string;
  gratitude: string;
  heroName: string;
  heroGreeting: string;
  heroRole: string;
  heroDesc: string;
  skillsTitle: string;
  storyTitle: string;
  storyContext1: string;
  storyContext2: string;
  storyContext3: string;
  aboutMe: string[];
  project1: string;
  description1: string[];
  project2: string;
  description2: string[];
  project3: string;
  description3: string[];
  project4: string;
  description4: string[];
  project5: string;
  description5: string[];
  detail: string;
  start: string;
  close: string;
  info: string;
  alertMes: string;
  city: string;
  cityName: string;
  name: string;
  email: string;
  message: string;
  send: string;
  copyright: string;
  alertWrong: string;
  alertServer: string;
  errorSent: string;
  invalidEmail: string;
  fieldRequred: string;
  messageTrue: string;
  messageFalse: string;
  cvButton: string;
}

interface Translations {
  ua: TranslatedContent;
  en: TranslatedContent;
}

const translations: Translations = {
  ua: {
    error: "Помилка",
    home: "Головна",
    about: "Про мене",
    projects: "Проєкти",
    contact: "Контакти",
    language: "🇺🇦 Українська",
    gratitude: "Дякую,",
    heroName: "Олександр",
    heroGreeting: "Привіт, я",
    heroRole: "Frontend Розробник",
    heroDesc: "Створюю сучасні, швидкі та зручні веб-додатки з акцентом на деталі та інтерактивність.",
    skillsTitle: "Мої Навички",
    storyTitle: "Моя історія",
    storyContext1: "Початок шляху: захоплення веб-технологіями та перші проєкти.",
    storyContext2: "Розвиток: вивчення React, створення складніших інтерфейсів та SPA.",
    storyContext3: "Сьогодення: розробка сучасних інтерактивних веб-додатків з фокусом на 3D та анімації.",
    aboutMe: [
      "Привіт! Я Олександр — веб-розробник, який працює з React, JavaScript та сучасними веб-технологіями. Створюю зручні, адаптивні та стильні сайти, прагнучи поєднати функціональність із гарним дизайном.",
      "Свій шлях у веб-розробці я почав із цікавості до того, як працюють сайти. Мене завжди захоплювало, як натискання кнопки може викликати певну дію, як красиво анімовані елементи додають динаміки сторінкам, а добре продумана логіка спрощує життя користувачам. Саме тому я обрав напрямок фронтенд-розробки, де можу безпосередньо впливати на вигляд і зручність веб-додатків.",
      "Окрім програмування, я люблю активний відпочинок. Прогулянки та поїздки — це те, що заряджає мене енергією та дає нові ідеї. Особливо мені подобається досліджувати нові місця, змінювати обстановку, адже це надихає і допомагає розширювати кругозір. А після насиченого дня я люблю провести час із сім'єю, переглядаючи цікаві фільми чи серіали. Це мій спосіб розслабитися.",
      "Я завжди відкритий до нових можливостей, цікавих проєктів і навчання. Вважаю, що розвиток у сфері веб-технологій не зупиняється ні на секунду, тому постійно вдосконалюю свої навички, експериментую з новими підходами та стежу за трендами.",
    ],
    project1: "3D",
    description1: [
      "3D-сцена на React із використанням React Three Fiber, Drei, GSAP, Bootstrap і Three.js.",
      "У проєкті реалізовано футуристичне приміщення з вибором автомобіля. Користувач може вільно оглядати кожну модель з усіх боків. Після вибору автомобіль переміщується на пряму, безкінечну дорогу з динамічною генерацією дороги, поля та дерев.",
      "Облака завжди залишаються на горизонті, незалежно від руху автомобіля, і до них неможливо наблизитися. Вони також розташовуються у випадкових позиціях під час кожного завантаження сцени та повільно зміщуються вбік (вліво або вправо).",
      "Дерева та інші елементи ландшафту щоразу генеруються в нових місцях. Автомобіль можна розвернути та поїхати у зворотному напрямку — при цьому світ продовжить генеруватися нескінченно.",
      "🔧 Керування:",
      "▸ Стрілки — рух і повороти",
      "▸ Пробіл — ручне гальмо",
    ],
    project2: "RelaxFocusite",
    description2: [
      "RelaxFocusite — це сучасна інтерактивна веб-платформа, розроблена, щоб допомогти користувачам переходити між розслабленням та зосередженням лише за кілька кліків.",
      "Ключові функції включають:",
      "👤 Профілі користувачів – Безпечна реєстрація, вхід та налаштовувані профілі із завантаженням фотографій профілю.",
      "📹 Інтеграція медіа – Вбудований контент YouTube, що відповідає вашому обраному стану розуму.",
      "⚙️ Підтримка темного режиму – Безперешкодна адаптація до світлих або темних тем на основі уподобань користувача.",
      "📧 Підтвердження електронної пошти – Безпечне керування обліковим записом із підтвердженням електронною поштою.",
      "🌐 Адаптивний дизайн – Створено за допомогою React, Bootstrap для плавного використання на всіх пристроях.",
    ],
    project3: "Newstore",
    description3: [
      "Newstore — це інтернет‑магазин та аксесуарів.",
      "Ключові функції включають:",
      "👤 Профілі користувачів – Безпечна реєстрація, вхід та налаштовування профілю.",
      "⚙️ Підтримка темного режиму – Безперешкодна адаптація до світлих або темних тем на основі уподобань користувача.",
      "📧 Підтвердження електронної пошти – Безпечне керування обліковим записом із підтвердженням електронною поштою.",
      "🌐 Адаптивний дизайн – Створено за допомогою React, Bootstrap для плавного використання на всіх пристроях.",
    ],
    project4: "Black Coffee",
    description4: [
      "Black Coffee — це сучасний вебсайт для магазину кави з інтерактивним меню та затишним дизайном.",
      "Ключові функції включають:",
      "☕ Інтерактивне меню – Зручний перегляд асортименту кави з детальним описом.",
      "🎨 Естетичний UI – Тепла колірна гама та продуманий інтерфейс, що передає атмосферу магазину.",
      "📱 Адаптивність – Сайт повністю оптимізований для замовлень зі смартфонів та планшетів.",
      "⚡ Швидка навігація – Плавні переходи та миттєве завантаження сторінок завдяки використанню React.",
    ],
    project5: "Смачна Хата",
    description5: [
      "Смачна Хата — це сучасна платформа для замовлення та доставки їжі з інтегрованою системою керування контентом.",
      "Ключові функції включають:",
      "🛡️ Адмін-панель модератора – Повний контроль над меню: додавання страв, редагування цін та актуалізація зображень у реальному часі.",
      "🛒 Просунутий кошик – Зручне керування замовленням, розрахунок калорій та підтримка промокодів для знижок.",
      "⭐ Система відгуків та рейтингу – Можливість для користувачів оцінювати страви та залишати детальні коментарі.",
      "💖 Список обраного – Персоналізований розділ для збереження улюблених страв (піца, суші, десерти).",
      "🌐 Адаптивний та швидкий UI – Створено за допомогою React та Tailwind CSS для миттєвої роботи на будь-яких пристроях.",
    ],
    detail: "Детальніше",
    start: "Перейти",
    close: "Закрити",
    info: "Зв'яжіться зі мною за допомогою цієї форми або за контактними даними нижче.",
    alertMes: "Ваше повідомлення надіслано.",
    city: "Місто:",
    cityName: "Миколаїв, Україна",
    name: "Ім'я",
    email: "Email",
    message: "Повідомлення",
    send: "Відправити",
    copyright: "Моє Портфоліо. Всі права захищені.",
    alertWrong: "Щось пішло не так. Спробуйте ще раз!",
    alertServer: "Помилка при з'єднанні з сервером.",
    errorSent: "Помилка при надсиланні:",
    invalidEmail: "Будь ласка, введіть коректну електронну адресу.",
    fieldRequred: "Усі поля обов’язкові.",
    messageTrue: "Повідомлення надіслано успішно!",
    messageFalse: "Помилка надсилання повідомлення.",
    cvButton: "Моє резюме",
  },
  en: {
    error: "Error",
    home: "Home",
    about: "About Me",
    projects: "Projects",
    contact: "Contact",
    language: "🇬🇧 English",
    gratitude: "Thank you",
    heroName: "Oleksandr",
    heroGreeting: "Hi, I am",
    heroRole: "Frontend Developer",
    heroDesc: "Creating modern, fast, and user-friendly web applications with a focus on details and interactivity.",
    skillsTitle: "My Skills",
    storyTitle: "My Story",
    storyContext1: "The beginning: fascination with web technologies and first projects.",
    storyContext2: "Growth: learning React, building more complex interfaces and SPAs.",
    storyContext3: "Present: developing modern interactive web applications with a focus on 3D and animations.",
    aboutMe: [
      "Hello! I'm Oleksandr, a web developer specializing in React, JavaScript, and modern web technologies. I create user-friendly, responsive, and stylish websites, aiming to combine functionality with great design. My goal is to build interfaces that are not only visually appealing but also intuitive and easy to use.",
      "My journey into web development began with curiosity about how websites work. I've always been fascinated by how a simple button click can trigger actions, how animated elements bring pages to life, and how well-designed logic simplifies user interaction. That's why I chose frontend development, where I can directly shape the look and feel of web applications.",
      "Outside of programming, I enjoy spending time outdoors. Walking and traveling energize me and spark new ideas. I particularly love exploring new places and changing my environment, as it helps broaden my perspective. After a busy day, I like to unwind with my family, watching interesting movies or series.",
      "I'm always open to new opportunities, exciting projects, and continuous learning. I believe web technologies evolve constantly, so I keep improving my skills, experimenting with new approaches, and staying updated with the latest trends."
    ],
    project1: "3D Scene",
    description1: [
      "A 3D scene built with React using React Three Fiber, Drei, GSAP, Bootstrap, and Three.js.",
      "The project features a futuristic garage where users can select a car and inspect it from all angles. When selected, the car moves to an endless straight road with real-time generation of road segments, fields, and trees.",
      "Clouds remain permanently on the horizon, maintaining a fixed distance from the car regardless of movement. They are randomly positioned at the start of each session and slowly drift sideways (left or right).",
      "Trees and other landscape elements are procedurally generated in random positions. The car can also be reversed and driven backward, with the world continuously generating ahead in the new direction.",
      "🔧 Controls:",
      "▸ Arrow keys — drive and steer",
      "▸ Spacebar — handbrake"
    ],
    project2: "RelaxFocusite",
    description2: [
      "RelaxFocusite is a modern, interactive web platform designed to help users transition between relaxation and focus with just few clicks.",
      "Key features include:",
      "👤 User Profiles – Secure registration, login, and customizable profiles with profile photo uploads.",
      "📹 Media Integration – Embedded YouTube content relevant to your chosen state of mind.",
      "⚙️ Dark Mode Support – Seamlessly adapts to light or dark themes based on user preferences.",
      "📧 Email Verification – Secure account management with verification via email.",
      "🌐 Responsive Design – Built with React, Bootstrap for a smooth experience across devices.",
    ],
    project3: "Newstore",
    description3: [
      "Newstore is an online store of accessories.",
      "Key features include:",
      "👤 User Profiles – Secure registration, login, and customizable profiles.",
      "⚙️ Dark Mode Support – Seamlessly adapts to light or dark themes based on user preferences.",
      "📧 Email Verification – Secure account management with verification via email.",
      "🌐 Responsive Design – Built with React, Bootstrap for a smooth experience across devices.",
    ],
    project4: "Black Coffee",
    description4: [
      "Black Coffee is a modern coffee shop website featuring an interactive menu and a cozy design.",
      "Key features include:",
      "☕ Interactive Menu – Easy browsing of the coffee assortment with detailed descriptions.",
      "🎨 Aesthetic UI – A warm color palette and a thoughtful interface that captures the shop's atmosphere.",
      "📱 Responsive Design – Fully optimized for seamless browsing and ordering on smartphones and tablets.",
      "⚡ Fast Navigation – Smooth transitions and near-instant loading times powered by React.",
    ],
    project5: "Smachna Khata",
    description5: [
      "Smachna Khata is a modern food ordering and delivery platform with an integrated content management system.",
      "Key features include:",
      "🛡️ Moderator Admin Panel – Full control over the menu: adding dishes, editing prices, and real-time image updates.",
      "🛒 Advanced Shopping Cart – Intuitive order management, calorie counting, and promo code support for discounts.",
      "⭐ Reviews & Rating System – Ability for users to rate dishes and leave detailed feedback.",
      "💖 Favorites List – A personalized section to save favorite items (pizza, sushi, desserts) for quick access.",
      "🌐 Responsive & Fast UI – Built with React and Tailwind CSS to ensure seamless performance across all devices.",
    ],
    detail: "Details",
    start: "Start",
    close: "Close",
    alertMes: "Your message has been sent successfully.",
    info: "Contact me using this form or the contact details below.",
    city: "City:",
    cityName: "Mykolaiv, Ukraine",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    copyright: "My Portfolio. All rights reserved.",
    alertWrong: "Something went wrong. Please try again!",
    alertServer: "Server connection error.",
    errorSent: "Error when sending:",
    invalidEmail: "Please enter a valid email address.",
    fieldRequred: "All fields are required.",
    messageTrue: "Message sent successfully!",
    messageFalse: "Failed to send message.",
    cvButton: "My Resume",
  }
};

export default translations;