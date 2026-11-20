import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './i18n'
import './App.css'

const foodImages = {
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
  cake: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
  dan: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=500&q=80',
  sandwich: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=500&q=80',
  soup: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80',
}

const languageOptions = [
  { code: 'uz', label: 'uzbek', flag: '🇺🇿' },
  { code: 'ru', label: 'русский', flag: '🇷🇺' },
  { code: 'en', label: 'english', flag: '🇬🇧' },
]

function Icon({ name }) {
  const icons = { pin: '⌖', search: '⌕', bag: '▤', percent: '％', clock: '◷', order: '▦', delivery: '🚚', user: '♙' }
  return <span className="icon">{icons[name]}</span>
}

function App() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState(i18n.resolvedLanguage || 'en')

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    setActiveLanguage(code)
    setMenuOpen(false)
  }

  const popular = [
    ['Cheese Burger', 'Burger Arena', '$3.88', foodImages.burger],
    ["Toffe's Cake", 'Top Sticks', '$4.00', foodImages.cake],
    ['Dancake', 'Cake World', '$1.99', foodImages.dan],
    ['Crispy Sandwich', 'Fastfood Dine', '$3.00', foodImages.sandwich],
    ['Thai Soup', 'Foody man', '$2.79', foodImages.soup],
  ]

  const categories = [
    ['pizza', '🍕'], ['burger', '🍔'], ['noodles', '🍜'], ['sub-sandwich', '🥪'], ['chowmein', '🍲'], ['steak', '🥩'],
  ]

  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#"><span className="brandMark">⌯</span> <span>food</span><b>wagon</b></a>
        <nav className="nav">
          <button className="searchButton"><Icon name="search" /> {t('search')}</button>
          <button className="languageButton" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="flag">{languageOptions.find((item) => item.code === activeLanguage)?.flag}</span>
            <span>{activeLanguage}</span>
            <span className="chevron">⌄</span>
          </button>
          {menuOpen && (
            <div className="languageMenu">
              {languageOptions.map((item) => (
                <button key={item.code} onClick={() => changeLanguage(item.code)}>
                  <span className="flag">{item.flag}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
          <button className="login"><Icon name="user" /> {t('login')}</button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="heroContent">
            <h1>{t('greeting')}</h1>
            <p>{t('subtitle')}</p>
            <div className="orderCard">
              <div className="orderTabs">
                <button className="activeTab"><Icon name="delivery" /> {t('delivery')}</button>
                <button><Icon name="bag" /> {t('food')}</button>
              </div>
              <div className="addressRow">
                <label><Icon name="pin" /><input aria-label={t('location')} placeholder={t('location')} /></label>
                <button><Icon name="search" /> {t('findFood')}</button>
              </div>
            </div>
          </div>
          <div className="heroFood"><img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85" alt="Fresh bowl" /></div>
        </section>

        <section className="deals">
          {[1, 2, 3, 4].map((item) => (
            <article className="dealCard" key={item}>
              <div className="dealImage">
                <img src={[foodImages.burger, foodImages.soup, foodImages.sandwich, foodImages.cake][item - 1]} alt="" />
                <span className="discount"><b>{item === 3 ? 15 : item === 4 ? 8 : item * 5}</b><small>%<br />Off</small></span>
              </div>
              <h3>{t('picks')} {item}</h3>
              <span className="remaining">{item + 2} {t('left')}</span>
            </article>
          ))}
        </section>

        <section className="howSection">
          <h2>{t('how')}</h2>
          <div className="howGrid">
            {[
              ['pin', t('choose'), t('chooseText')],
              ['order', t('order'), t('orderText')],
              ['percent', t('advance'), t('advanceText')],
              ['delivery', t('enjoy'), t('enjoyText')],
            ].map(([icon, title, text]) => (
              <article key={title}><div className="howIcon"><Icon name={icon} /></div><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="popularSection">
          <h2>{t('popular')}</h2>
          <div className="popularGrid">
            {popular.map(([name, place, price, image]) => (
              <article className="popularCard" key={name}>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p><Icon name="pin" /> {place}</p>
                <div><b>{price}</b><button>{t('add')}</button></div>
              </article>
            ))}
          </div>
        </section>

        <section className="browseSection">
          <h2>{t('browse')}</h2>
          <div className="categories">
            {categories.map(([name, emoji]) => (
              <button key={name}><span>{emoji}</span><b>{t(name) === name ? name : t(name)}</b></button>
            ))}
          </div>
        </section>

        <section className="features">
          <div><Icon name="percent" /><b>{t('daily')}</b></div>
          <div><Icon name="pin" /><b>{t('live')}</b></div>
          <div><Icon name="clock" /><b>{t('quick')}</b></div>
        </section>

        <section className="promotions">
          <article className="promotionCard">
            <div><h2>{t('sandwichTitle')}</h2><p>{t('sandwichText')}</p><button>{t('orderNow')} ›</button></div>
            <img src="https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=85" alt="Sandwich" />
          </article>
          <article className="promotionCard reverse">
            <img src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=85" alt="Fried chicken" />
            <div><h2>{t('partyTitle')}</h2><p>{t('partyText')}</p><button>{t('orderNow')} ›</button></div>
          </article>
        </section>
      </main>

      <footer>
        <div className="footerGrid">
          <div><h3>{t('company')}</h3><a>About us</a><a>Team</a><a>Careers</a></div>
          <div><h3>{t('contact')}</h3><a>Help & Support</a><a>Partner with us</a></div>
          <div><h3>{t('legal')}</h3><a>Terms & Conditions</a><a>Privacy Policy</a></div>
          <div className="follow"><h3>{t('subscribe')}</h3><div className="emailBox"><input placeholder={t('email')} /><button>{t('subscribe')}</button></div></div>
        </div>
      </footer>
    </div>
  )
}

export default App
