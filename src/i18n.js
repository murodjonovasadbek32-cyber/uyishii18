import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  uz: {
    translation: {
      search: 'Qidiruv', login: 'Kirish', delivery: 'Yetkazib berish', food: 'Ovqatlar',
      greeting: 'Siz och qolganingizmi?', subtitle: 'Yerga ajoyib taomlarni istalgan joyingizdan buyurtma bering',
      deliveryAddress: 'Yetkazib berish manzili', location: 'Manzilni kiriting', findFood: 'Ovqat topish',
      left: 'kun qoldi', picks: 'Greys Vahe', how: 'Bu qanday ishlaydi?',
      choose: 'Joylashuvni tanlang', chooseText: 'Manzilingizni tanlang va ovqatni tanlang',
      order: 'Buyurtma qiling', orderText: 'Sevimli taomlaringizga buyurtma bering',
      advance: 'Oldindan to‘lang', advanceText: 'Tez va xavfsiz to‘lovni amalga oshiring',
      enjoy: 'Mazali taomlardan bahramand bo‘ling', enjoyText: 'Tez va mazali taom yetkazib beramiz',
      popular: 'Mashhur taomlarimiz', browse: 'Taom bo‘yicha qidirish',
      burger: 'Burger', pizza: 'Pitsa', noodles: 'Noodles', sandwich: 'Sub-sandwich', chowmein: 'Chowmein', steak: 'Steyk',
      add: 'Qo‘shish',
      daily: 'Kunning chegirmalari', live: 'Jonli kuzatish', quick: 'Tez yetkazib berish',
      sandwichTitle: 'Eng yaxshisi: Xrustik sandvichlar', sandwichText: 'Eng yaxshisi siz uchun. Mazali va yangi mahsulotlar.',
      partyTitle: 'Bayramni to‘liq bayram qilib nishing', partyText: 'Sevimli taomlaringizni tanlang va bayramingizni yanada yoqimli qiling.',
      orderNow: 'Hoziroq buyurtma berish', company: 'Kompaniya', contact: 'Bog‘lanish', legal: 'Huquqiy',
      subscribe: 'Obuna bo‘lish', email: 'E-mail manzilini kiriting',
    }
  },
  ru: {
    translation: {
      search: 'Поиск', login: 'Войти', delivery: 'Доставка', food: 'Еда',
      greeting: 'Вы голодны?', subtitle: 'Вкусную еду доставим прямо к вашей двери в считанные минуты',
      deliveryAddress: 'Адрес доставки', location: 'Введите адрес', findFood: 'Найти еду',
      left: 'дней осталось', picks: 'Наш выбор', how: 'Как это работает?',
      choose: 'Выберите место', chooseText: 'Выберите адрес и найдите еду поблизости',
      order: 'Закажите', orderText: 'Закажите любимое блюдо за пару минут',
      advance: 'Оплатите заранее', advanceText: 'Оплатите удобно и безопасно через приложение',
      enjoy: 'Наслаждайтесь едой', enjoyText: 'Получите доставку прямо к вашей двери',
      popular: 'Популярные товары', browse: 'Искать по блюду',
      burger: 'Бургер', pizza: 'Пицца', noodles: 'Лапша', sandwich: 'Сэндвич', chowmein: 'Чоу-мейн', steak: 'Стейк',
      add: 'Заказать сейчас',
      daily: 'Ежедневные скидки', live: 'Живое отслеживание', quick: 'Быстрая доставка',
      sandwichTitle: 'Лучшие предложения: хрустящие сэндвичи', sandwichText: 'Лучшее для вас. Наслаждайтесь свежей и вкусной едой.',
      partyTitle: 'Отпразднуйте вечеринки с жареной курицей', partyText: 'Выберите любимое блюдо для вкусного праздника.',
      orderNow: 'Заказать сейчас', company: 'Компания', contact: 'Контакты', legal: 'Юридическая информация',
      subscribe: 'Подписаться', email: 'Введите e-mail',
    }
  },
  en: {
    translation: {
      search: 'Search', login: 'Login', delivery: 'Delivery', food: 'Food',
      greeting: 'Are you starving?', subtitle: 'Within a few clicks, find meals that are accessible near you',
      deliveryAddress: 'Delivery Address', location: 'Enter Your Address', findFood: 'Find Food',
      left: 'Days Remaining', picks: 'Greys Vage', how: 'How does it work?',
      choose: 'Select location', chooseText: 'Choose the location where your food will be delivered',
      order: 'Choose order', orderText: 'Browse hundreds of menus to find your favorite food',
      advance: 'Pay advanced', advanceText: 'It is quick, safe and simple. Select how you want to pay',
      enjoy: 'Enjoy meals', enjoyText: 'Food is made and delivered directly to your home',
      popular: 'Popular items', browse: 'Search by Food',
      burger: 'Burger', pizza: 'Pizza', noodles: 'Noodles', sandwich: 'Sub-sandwich', chowmein: 'Chowmein', steak: 'Steak',
      add: 'Order Now',
      daily: 'Daily Discounts', live: 'Live Tracing', quick: 'Quick Delivery',
      sandwichTitle: 'Best deals Crispy Sandwiches', sandwichText: 'Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.',
      partyTitle: 'Celebrate parties with Fried Chicken', partyText: 'Get the best fried chicken smeared with a lip-smacking lemon.',
      orderNow: 'Proceed to order', company: 'Company', contact: 'Contact', legal: 'Legal',
      subscribe: 'Subscribe', email: 'Enter Your email',
    }
  }
}

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['uz', 'ru', 'en'],
  interpolation: { escapeValue: false },
})

export default i18n
