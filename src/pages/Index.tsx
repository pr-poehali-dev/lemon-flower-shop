import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeSection, setActiveSection] = useState('home')

  const bouquets = [
    {
      id: 1,
      name: 'Нежность',
      price: '2,500₽',
      image: '/img/b14a196a-fe3e-498d-80bc-e49b5c52aaf3.jpg',
      description: 'Букет из розовых роз и эвкалипта'
    },
    {
      id: 2,
      name: 'Весеннее утро',
      price: '1,800₽',
      image: '/img/c5301d00-6645-4035-8e82-6f03a1b3117e.jpg',
      description: 'Тюльпаны с гипсофилой'
    },
    {
      id: 3,
      name: 'Роскошь',
      price: '4,200₽',
      image: '/img/d9baf5a4-ca5a-4a9f-bbe2-b3e350580417.jpg',
      description: 'Пионы премиум класса'
    }
  ]

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Потрясающие букеты! Цветы всегда свежие, доставка быстрая. Рекомендую!',
      rating: 5
    },
    {
      name: 'Михаил Сидоров',
      text: 'Заказывал букет для жены на день рождения. Она была в восторге! Спасибо Лимону!',
      rating: 5
    },
    {
      name: 'Елена Иванова',
      text: 'Отличный сервис, красивые композиции. Всегда обращаюсь только сюда.',
      rating: 5
    }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-xl">🍋</span>
            </div>
            <h1 className="text-2xl font-bold text-primary brand-font">Лимон</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'catalog', label: 'Каталог' },
              { id: 'bouquets', label: 'Букеты' },
              { id: 'reviews', label: 'Отзывы' },
              { id: 'contacts', label: 'Контакты' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://cdn.poehali.dev/files/b66d0e7c-5fe4-4801-be8f-e8e727ea3252.jpg)'}}>
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Цветочный магазин
            <span className="block text-secondary brand-font text-7xl md:text-8xl">Лимон</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свежие цветы каждый день. Создаем букеты, которые дарят радость и вдохновение.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('catalog')} className="hover:scale-105 transition-transform">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="secondary" onClick={() => scrollToSection('contacts')}>
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Bouquets */}
      <section id="catalog" className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 elegant-font">Популярные букеты</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bouquets.map((bouquet) => (
              <Card key={bouquet.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={bouquet.image}
                    alt={bouquet.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{bouquet.name}</CardTitle>
                  <CardDescription>{bouquet.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{bouquet.price}</span>
                    <Button>
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="bouquets" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 elegant-font">Наши услуги</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Flower2', title: 'Свежие цветы', desc: 'Ежедневные поставки' },
              { icon: 'Truck', title: 'Доставка', desc: 'По всему городу' },
              { icon: 'Gift', title: 'Упаковка', desc: 'Красивое оформление' },
              { icon: 'Clock', title: '24/7', desc: 'Круглосуточно' }
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 stylish-font">Отзывы клиентов</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 elegant-font">Связаться с нами</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6">Контактная информация</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>ул. Цветочная, 15, Москва</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@lemon-flowers.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>Ежедневно с 9:00 до 21:00</span>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-6">Оставить заявку</h4>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="tel" placeholder="Телефон" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Сообщение" className="min-h-32" />
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-xl">🍋</span>
            </div>
            <h1 className="text-2xl font-bold text-primary brand-font">Лимон</h1>
          </div>
          <p className="text-muted-foreground mb-6">
            Цветочный магазин с любовью к деталям
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="MessageCircle" size={20} />
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t text-sm text-muted-foreground">
            © 2024 Лимон. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index