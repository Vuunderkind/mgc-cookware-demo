/* ============================================================
   MGC — Make Grace Cooker | Main JavaScript
   ============================================================ */

'use strict';

/* === TRANSLATIONS === */
const T = {
  ru: {
    banner: 'Бесплатная доставка при заказе от 5000₽ | Код: MGC2024',
    nav: { home:'Главная', catalog:'Каталог', about:'О нас', reviews:'Отзывы', contact:'Контакты', search:'Поиск посуды...' },
    hero: { badge:'✦ Новая Коллекция 2024', t1:'Готовьте с', t2:'Изяществом', sub:'Профессиональная антипригарная посуда, которая превращает каждое блюдо в произведение искусства', cta:'Смотреть каталог', cta2:'Наша история', tr1:'Рейтинг 4.9/5', tr2:'Бесплатная доставка', tr3:'30 дней возврата', scroll:'Прокрутить' },
    stats: { c1:'Довольных клиентов', c2:'Видов продукции', c3:'Стран мира', c4:'Лет качества' },
    feat: { title:'Почему выбирают MGC', sub:'Мы создаём посуду, которая служит годами', f1t:'Гранитное покрытие', f1d:'Инновационное покрытие без PFOA/PFAS — безопасно для здоровья всей семьи', f2t:'Все типы плит', f2d:'Совместимость с индукцией, газом, электро- и стеклокерамическими плитами', f3t:'Посудомоечная машина', f3d:'Удобная чистка без потери качества антипригарного покрытия', f4t:'Жаропрочность до 450°C', f4d:'Идеально для любых техник приготовления — от жарки до томления' },
    products: { title:'Наши товары', sub:'Профессиональная посуда для каждой кухни', all:'Все', cookware:'Сковороды', woks:'Воки', pots:'Кастрюли', sets:'Наборы', add:'В корзину', view:'Быстрый просмотр', new:'Новинка', best:'Хит продаж', sale:'Скидка' },
    about: { label:'Наша история', title:'Make Grace Cooker — это не просто посуда', p1:'С момента основания MGC мы верим, что правильная посуда способна изменить ваш кулинарный опыт. Наши изделия создаются из высококачественного литого алюминия с инновационными гранитными и керамическими покрытиями.', p2:'Каждая сковорода и кастрюля MGC проходит многоступенчатый контроль качества перед тем, как попасть на вашу кухню. Мы гордимся тем, что наша посуда работает на профессиональных кухнях по всему миру.', cta:'Узнать больше', a1:'Высокое качество', a2:'Гарантия 2 года', a3:'Rapid нагрев', a4:'Эко-безопасность', sub2:'лет на рынке' },
    why: { label:'Преимущества', title:'Почему MGC — лучший выбор', sub:'Инвестиция в качество готовки на долгие годы', w1t:'Быстрый равномерный нагрев', w1d:'Литой алюминий обеспечивает равномерный нагрев по всей поверхности — без горячих точек', w2t:'Долговечность', w2d:'Гарантия 2 года и десятилетия службы при правильном уходе за покрытием', w3t:'Эргономичный дизайн', w3d:'Удобные ручки с термозащитой обеспечивают безопасное и комфортное приготовление', w4t:'Безопасные покрытия', w4d:'Все покрытия сертифицированы — без PFOA и PFAS, безопасно при любых температурах' },
    testi: { title:'Отзывы покупателей', sub:'Что говорят наши клиенты' },
    news: { label:'Новости', title:'Будьте в курсе', sub:'Подписывайтесь на новости о новинках, скидках и эксклюзивных рецептах', ph:'Ваш email', btn:'Подписаться', ok:'Спасибо за подписку! 🎉' },
    contact: { label:'Контакты', title:'Связаться с нами', sub:'Мы всегда рады помочь вам', name:'Ваше имя', email:'Email адрес', msg:'Ваше сообщение', send:'Отправить сообщение', addr:'г. Москва, ул. Примерная 12', phone:'+7 (800) 555-00-00', mail:'info@mgc-cooker.ru' },
    footer: { desc:'MGC (Make Grace Cooker) — ведущий производитель профессиональной антипригарной посуды', shop:'Магазин', company:'Компания', support:'Поддержка', fp1:'Все товары', fp2:'Новинки', fp3:'Хиты продаж', fp4:'Наборы', fc1:'О компании', fc2:'Карьера', fc3:'Пресса', fc4:'Экология', fs1:'FAQ', fs2:'Доставка', fs3:'Возврат', fs4:'Гарантия', copy:'© 2024 MGC Make Grace Cooker. Все права защищены.' },
    cart: { title:'Корзина', empty:'Ваша корзина пуста', total:'Итого', checkout:'Оформить заказ', continue:'Продолжить покупки' },
    cookie: { text:'Мы используем cookies для улучшения вашего опыта.', link:'Политика конфиденциальности', accept:'Принять', decline:'Отклонить' },
    toast: { added:'добавлен в корзину' },
    search: { label:'Что вы ищете?', tags:['Воки','Сковороды','Наборы','Кастрюли','Акции'] }
  },
  en: {
    banner: 'Free shipping on orders over $99 | Code: MGC2024',
    nav: { home:'Home', catalog:'Catalog', about:'About', reviews:'Reviews', contact:'Contact', search:'Search cookware...' },
    hero: { badge:'✦ New Collection 2024', t1:'Cook with', t2:'Grace', sub:'Premium non-stick cookware that transforms every meal into an art form', cta:'Shop Now', cta2:'Our Story', tr1:'4.9/5 Rating', tr2:'Free Shipping', tr3:'30-Day Returns', scroll:'Scroll Down' },
    stats: { c1:'Happy Customers', c2:'Products', c3:'Countries', c4:'Years of Excellence' },
    feat: { title:'Why Choose MGC', sub:'We create cookware that serves for years', f1t:'Granite Coating', f1d:'Innovative PFOA/PFAS-free coating — safe and healthy for the whole family', f2t:'All Stovetops', f2d:'Compatible with induction, gas, electric, and glass-ceramic stoves', f3t:'Dishwasher Safe', f3d:'Easy cleaning without damaging the non-stick coating quality', f4t:'Heat Resistant to 450°C', f4d:'Perfect for any cooking technique — from searing to slow cooking' },
    products: { title:'Our Products', sub:'Professional cookware for every kitchen', all:'All', cookware:'Frying Pans', woks:'Woks', pots:'Pots', sets:'Sets', add:'Add to Cart', view:'Quick View', new:'New', best:'Bestseller', sale:'Sale' },
    about: { label:'Our Story', title:'Make Grace Cooker — more than just cookware', p1:'Since MGC\'s founding, we believe the right cookware can transform your cooking experience. Our products are crafted from high-quality die-cast aluminum with innovative granite and ceramic coatings.', p2:'Every MGC pan and pot undergoes multi-stage quality control before reaching your kitchen. We\'re proud our cookware is trusted in professional kitchens worldwide.', cta:'Learn More', a1:'Premium Quality', a2:'2-Year Warranty', a3:'Rapid Heating', a4:'Eco-Safe', sub2:'years on the market' },
    why: { label:'Advantages', title:'Why MGC is the Best Choice', sub:'An investment in cooking quality for decades to come', w1t:'Fast & Even Heating', w1d:'Die-cast aluminum ensures even and rapid heating across the entire surface — no hot spots', w2t:'Durability', w2d:'2-year warranty and decades of service with proper coating care', w3t:'Ergonomic Design', w3d:'Comfortable heat-resistant handles ensure safe and comfortable cooking', w4t:'Safe Coatings', w4d:'All coatings are certified free of PFOA and PFAS — safe at any temperature' },
    testi: { title:'Customer Reviews', sub:'What our customers say' },
    news: { label:'Newsletter', title:'Stay Updated', sub:'Subscribe for news about new arrivals, discounts, and exclusive recipes', ph:'Your email', btn:'Subscribe', ok:'Thanks for subscribing! 🎉' },
    contact: { label:'Contact', title:'Get in Touch', sub:'We\'re always happy to help you', name:'Your name', email:'Email address', msg:'Your message', send:'Send Message', addr:'123 Commerce St, New York, NY', phone:'+1 (800) 555-0000', mail:'info@mgc-cooker.com' },
    footer: { desc:'MGC (Make Grace Cooker) — a leading manufacturer of professional non-stick cookware', shop:'Shop', company:'Company', support:'Support', fp1:'All Products', fp2:'New Arrivals', fp3:'Bestsellers', fp4:'Sets', fc1:'About Us', fc2:'Careers', fc3:'Press', fc4:'Sustainability', fs1:'FAQ', fs2:'Shipping', fs3:'Returns', fs4:'Warranty', copy:'© 2024 MGC Make Grace Cooker. All rights reserved.' },
    cart: { title:'Cart', empty:'Your cart is empty', total:'Total', checkout:'Checkout', continue:'Continue Shopping' },
    cookie: { text:'We use cookies to improve your experience.', link:'Privacy Policy', accept:'Accept', decline:'Decline' },
    toast: { added:'added to cart' },
    search: { label:'What are you looking for?', tags:['Woks','Frying Pans','Sets','Pots','Deals'] }
  },
  de: {
    banner: 'Kostenloser Versand ab 99€ | Code: MGC2024',
    nav: { home:'Startseite', catalog:'Katalog', about:'Über uns', reviews:'Bewertungen', contact:'Kontakt', search:'Kochgeschirr suchen...' },
    hero: { badge:'✦ Neue Kollektion 2024', t1:'Kochen mit', t2:'Eleganz', sub:'Premium Antihaft-Kochgeschirr, das jede Mahlzeit in eine Kunstform verwandelt', cta:'Jetzt shoppen', cta2:'Unsere Geschichte', tr1:'4,9/5 Bewertung', tr2:'Kostenloser Versand', tr3:'30 Tage Rückgabe', scroll:'Scrollen' },
    stats: { c1:'Zufriedene Kunden', c2:'Produkte', c3:'Länder', c4:'Jahre Exzellenz' },
    feat: { title:'Warum MGC wählen', sub:'Kochgeschirr, das jahrelang dient', f1t:'Granitbeschichtung', f1d:'Innovative PFOA/PFAS-freie Beschichtung — sicher für die ganze Familie', f2t:'Alle Herdtypen', f2d:'Kompatibel mit Induktion, Gas, Elektro- und Glaskeramik', f3t:'Spülmaschinenfest', f3d:'Einfache Reinigung ohne Beschädigungen an der Beschichtung', f4t:'Hitzebeständig bis 450°C', f4d:'Perfekt für jede Kochtechnik — von Braten bis Schmoren' },
    products: { title:'Unsere Produkte', sub:'Professionelles Kochgeschirr für jede Küche', all:'Alle', cookware:'Pfannen', woks:'Woks', pots:'Töpfe', sets:'Sets', add:'In den Warenkorb', view:'Schnellansicht', new:'Neu', best:'Bestseller', sale:'Angebot' },
    about: { label:'Unsere Geschichte', title:'Make Grace Cooker — mehr als Kochgeschirr', p1:'Seit der Gründung von MGC glauben wir, dass das richtige Kochgeschirr Ihr Kocherlebnis transformieren kann.', p2:'Jede MGC-Pfanne durchläuft eine mehrstufige Qualitätskontrolle, bevor sie Ihre Küche erreicht.', cta:'Mehr erfahren', a1:'Hohe Qualität', a2:'2 Jahre Garantie', a3:'Schnelles Heizen', a4:'Öko-sicher', sub2:'Jahre auf dem Markt' },
    why: { label:'Vorteile', title:'Warum MGC die beste Wahl ist', sub:'Eine Investition in Kochqualität für Jahrzehnte', w1t:'Schnelles gleichmäßiges Heizen', w1d:'Druckgussaluminium für gleichmäßige Wärmeverteilung ohne heiße Stellen', w2t:'Langlebigkeit', w2d:'2 Jahre Garantie und jahrzehntelange Nutzung bei richtiger Pflege', w3t:'Ergonomisches Design', w3d:'Komfortable hitzebeständige Griffe für sicheres Kochen', w4t:'Sichere Beschichtungen', w4d:'Alle Beschichtungen PFOA/PFAS-frei und bei jeder Temperatur sicher' },
    testi: { title:'Kundenbewertungen', sub:'Was unsere Kunden sagen' },
    news: { label:'Newsletter', title:'Bleiben Sie informiert', sub:'Abonnieren Sie für Neuheiten, Rabatte und exklusive Rezepte', ph:'Ihre E-Mail', btn:'Abonnieren', ok:'Danke für Ihre Anmeldung! 🎉' },
    contact: { label:'Kontakt', title:'Kontaktieren Sie uns', sub:'Wir helfen Ihnen gerne', name:'Ihr Name', email:'E-Mail-Adresse', msg:'Ihre Nachricht', send:'Nachricht senden', addr:'Musterstraße 12, 10115 Berlin', phone:'+49 800 555 0000', mail:'info@mgc-cooker.de' },
    footer: { desc:'MGC (Make Grace Cooker) — führender Hersteller von professionellem Antihaft-Kochgeschirr', shop:'Shop', company:'Unternehmen', support:'Support', fp1:'Alle Produkte', fp2:'Neuheiten', fp3:'Bestseller', fp4:'Sets', fc1:'Über uns', fc2:'Karriere', fc3:'Presse', fc4:'Nachhaltigkeit', fs1:'FAQ', fs2:'Versand', fs3:'Rücksendungen', fs4:'Garantie', copy:'© 2024 MGC Make Grace Cooker. Alle Rechte vorbehalten.' },
    cart: { title:'Warenkorb', empty:'Ihr Warenkorb ist leer', total:'Gesamt', checkout:'Zur Kasse', continue:'Weiter einkaufen' },
    cookie: { text:'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern.', link:'Datenschutzrichtlinie', accept:'Akzeptieren', decline:'Ablehnen' },
    toast: { added:'in den Warenkorb gelegt' },
    search: { label:'Was suchen Sie?', tags:['Woks','Pfannen','Sets','Töpfe','Angebote'] }
  },
  fr: {
    banner: 'Livraison gratuite dès 99€ | Code: MGC2024',
    nav: { home:'Accueil', catalog:'Catalogue', about:'À propos', reviews:'Avis', contact:'Contact', search:'Rechercher...' },
    hero: { badge:'✦ Nouvelle Collection 2024', t1:'Cuisinez avec', t2:'Grâce', sub:'Ustensiles de cuisine antiadhésifs premium qui transforment chaque repas en œuvre d\'art', cta:'Acheter maintenant', cta2:'Notre Histoire', tr1:'Note 4,9/5', tr2:'Livraison gratuite', tr3:'Retours 30 jours', scroll:'Défiler' },
    stats: { c1:'Clients satisfaits', c2:'Produits', c3:'Pays', c4:'Ans d\'excellence' },
    feat: { title:'Pourquoi choisir MGC', sub:'Ustensiles qui durent des années', f1t:'Revêtement granit', f1d:'Revêtement innovant sans PFOA/PFAS — sûr pour toute la famille', f2t:'Toutes plaques', f2d:'Compatible induction, gaz, électrique et vitrocéramique', f3t:'Lave-vaisselle', f3d:'Nettoyage facile sans endommager le revêtement', f4t:'Résistant à 450°C', f4d:'Parfait pour toute technique culinaire' },
    products: { title:'Nos Produits', sub:'Ustensiles professionnels pour chaque cuisine', all:'Tout', cookware:'Poêles', woks:'Woks', pots:'Casseroles', sets:'Sets', add:'Ajouter au panier', view:'Aperçu rapide', new:'Nouveau', best:'Bestseller', sale:'Promo' },
    about: { label:'Notre Histoire', title:'Make Grace Cooker — plus que des ustensiles', p1:'Depuis la fondation de MGC, nous croyons que les bons ustensiles transforment votre expérience culinaire.', p2:'Chaque poêle MGC passe par un contrôle qualité multi-étapes avant d\'atteindre votre cuisine.', cta:'En savoir plus', a1:'Haute qualité', a2:'Garantie 2 ans', a3:'Chauffe rapide', a4:'Éco-sûr', sub2:'ans sur le marché' },
    why: { label:'Avantages', title:'Pourquoi MGC est le meilleur choix', sub:'Un investissement dans la qualité culinaire', w1t:'Chauffe rapide et uniforme', w1d:'L\'aluminium moulé assure une chauffe uniforme — sans points chauds', w2t:'Durabilité', w2d:'Garantie 2 ans et des décennies de service avec soin approprié', w3t:'Design ergonomique', w3d:'Poignées confortables résistantes à la chaleur pour cuisiner en sécurité', w4t:'Revêtements sûrs', w4d:'Tous les revêtements certifiés sans PFOA et PFAS — sûrs à toute température' },
    testi: { title:'Avis Clients', sub:'Ce que disent nos clients' },
    news: { label:'Newsletter', title:'Restez informé', sub:'Abonnez-vous pour les nouveautés, réductions et recettes exclusives', ph:'Votre email', btn:'S\'abonner', ok:'Merci pour votre inscription! 🎉' },
    contact: { label:'Contact', title:'Nous Contacter', sub:'Nous sommes toujours heureux d\'aider', name:'Votre nom', email:'Adresse email', msg:'Votre message', send:'Envoyer', addr:'12 Rue Exemple, 75001 Paris', phone:'+33 800 555 000', mail:'info@mgc-cooker.fr' },
    footer: { desc:'MGC (Make Grace Cooker) — fabricant leader d\'ustensiles de cuisine antiadhésifs', shop:'Boutique', company:'Entreprise', support:'Support', fp1:'Tous les produits', fp2:'Nouveautés', fp3:'Bestsellers', fp4:'Sets', fc1:'À propos', fc2:'Carrières', fc3:'Presse', fc4:'Durabilité', fs1:'FAQ', fs2:'Livraison', fs3:'Retours', fs4:'Garantie', copy:'© 2024 MGC Make Grace Cooker. Tous droits réservés.' },
    cart: { title:'Panier', empty:'Votre panier est vide', total:'Total', checkout:'Commander', continue:'Continuer les achats' },
    cookie: { text:'Nous utilisons des cookies pour améliorer votre expérience.', link:'Politique de confidentialité', accept:'Accepter', decline:'Refuser' },
    toast: { added:'ajouté au panier' },
    search: { label:'Que recherchez-vous?', tags:['Woks','Poêles','Sets','Casseroles','Promos'] }
  },
  zh: {
    banner: '订单满￥699免费配送 | 使用代码：MGC2024',
    nav: { home:'首页', catalog:'产品目录', about:'关于我们', reviews:'评价', contact:'联系我们', search:'搜索厨具...' },
    hero: { badge:'✦ 2024全新系列', t1:'优雅', t2:'烹饪', sub:'高端不粘锅，将每一道菜肴变成艺术品，让烹饪充满乐趣', cta:'立即购买', cta2:'我们的故事', tr1:'评分4.9/5', tr2:'免费配送', tr3:'30天退换', scroll:'向下滚动' },
    stats: { c1:'满意客户', c2:'产品种类', c3:'销售国家', c4:'年卓越品质' },
    feat: { title:'为什么选择MGC', sub:'我们制造经久耐用的厨具', f1t:'花岗岩涂层', f1d:'创新无PFOA/PFAS涂层——全家安全健康', f2t:'适用所有炉灶', f2d:'兼容电磁炉、燃气、电热和玻璃陶瓷炉具', f3t:'洗碗机安全', f3d:'可放入洗碗机清洁，不损坏涂层质量', f4t:'耐温高达450°C', f4d:'适合各种烹饪技术——从煎炒到慢炖' },
    products: { title:'我们的产品', sub:'适合每个厨房的专业厨具', all:'全部', cookware:'煎锅', woks:'炒锅', pots:'汤锅', sets:'套装', add:'加入购物车', view:'快速查看', new:'新品', best:'畅销', sale:'特价' },
    about: { label:'我们的故事', title:'Make Grace Cooker——不只是厨具', p1:'自MGC成立以来，我们相信合适的厨具能够改变您的烹饪体验。我们的产品由高质量压铸铝制成，配以创新花岗岩和陶瓷涂层。', p2:'每一口MGC锅具在到达您的厨房前都经过多道质量检验。我们为全球专业厨房都在使用MGC而自豪。', cta:'了解更多', a1:'高品质', a2:'2年质保', a3:'快速加热', a4:'环保安全', sub2:'年市场经验' },
    why: { label:'优势', title:'为什么MGC是最佳选择', sub:'对烹饪质量的长期投资', w1t:'快速均匀加热', w1d:'压铸铝确保整个表面均匀快速加热——无热点', w2t:'耐用性', w2d:'2年质保，正确保养可使用数十年', w3t:'人体工程学设计', w3d:'舒适的耐热手柄确保安全舒适的烹饪', w4t:'安全涂层', w4d:'所有涂层均无PFOA和PFAS认证——任何温度下安全' },
    testi: { title:'客户评价', sub:'听听我们客户的心声' },
    news: { label:'订阅', title:'保持联系', sub:'订阅新品、折扣和独家食谱信息', ph:'您的电子邮件', btn:'订阅', ok:'感谢您的订阅！🎉' },
    contact: { label:'联系', title:'联系我们', sub:'我们随时乐意帮助您', name:'您的姓名', email:'电子邮件', msg:'您的留言', send:'发送消息', addr:'上海市浦东新区示例路123号', phone:'+86 400 555 0000', mail:'info@mgc-cooker.cn' },
    footer: { desc:'MGC（Make Grace Cooker）——专业不粘锅具领先制造商', shop:'商店', company:'公司', support:'支持', fp1:'所有产品', fp2:'新品上市', fp3:'畅销产品', fp4:'套装', fc1:'关于我们', fc2:'招贤纳士', fc3:'媒体', fc4:'可持续发展', fs1:'常见问题', fs2:'配送', fs3:'退换货', fs4:'质保', copy:'© 2024 MGC Make Grace Cooker. 版权所有。' },
    cart: { title:'购物车', empty:'您的购物车是空的', total:'合计', checkout:'结账', continue:'继续购物' },
    cookie: { text:'我们使用Cookie来改善您的体验。', link:'隐私政策', accept:'接受', decline:'拒绝' },
    toast: { added:'已加入购物车' },
    search: { label:'您在找什么？', tags:['炒锅','煎锅','套装','汤锅','优惠'] }
  }
};

/* === PRODUCTS DATA === */
const PRODUCTS = [
  { id:1, cat:'woks',     badge:'best', nameKey:{ru:'Гранитный Вок Pro 32см',en:'Granite Wok Pro 32cm',de:'Granit-Wok Pro 32cm',fr:'Wok Granit Pro 32cm',zh:'花岗岩炒锅Pro 32cm'}, price:89.99, oldPrice:null, rating:4.9, rev:342, artClass:'wok',     emoji:'🥘' },
  { id:2, cat:'cookware', badge:'new',  nameKey:{ru:'Сковорода Ceramic Plus 28см',en:'Ceramic Plus Pan 28cm',de:'Ceramic Plus Pfanne 28cm',fr:'Poêle Ceramic Plus 28cm',zh:'陶瓷增强煎锅28cm'}, price:49.99, oldPrice:null, rating:4.8, rev:218, artClass:'red-pan',  emoji:'🍳' },
  { id:3, cat:'sets',     badge:'sale', nameKey:{ru:'Набор Premium 16 предметов',en:'Premium 16-Piece Set',de:'Premium 16-teiliges Set',fr:'Set Premium 16 pièces',zh:'高级16件套装'}, price:199.99, oldPrice:259.99, rating:4.9, rev:567, artClass:'set',     emoji:'🍽️' },
  { id:4, cat:'pots',     badge:null,   nameKey:{ru:'Кастрюля Deep Master 5л',en:'Deep Master Pot 5L',de:'Deep Master Topf 5L',fr:'Casserole Deep Master 5L',zh:'深度烹饪锅5升'}, price:59.99, oldPrice:null, rating:4.7, rev:134, artClass:'dark',    emoji:'🫕' },
  { id:5, cat:'cookware', badge:'best', nameKey:{ru:'Литая Сковорода Die-Cast 28см',en:'Die-Cast Skillet 28cm',de:'Druckguss-Pfanne 28cm',fr:'Poêle Fonte 28cm',zh:'压铸平底锅28cm'}, price:44.99, oldPrice:null, rating:4.8, rev:289, artClass:'navy',    emoji:'🍳' },
  { id:6, cat:'pots',     badge:null,   nameKey:{ru:'Набор соусников 3шт',en:'Sauce Pan Set 3pcs',de:'Topfset 3-teilig',fr:'Set Casseroles 3pcs',zh:'酱汁锅3件套'}, price:79.99, oldPrice:null, rating:4.6, rev:98, artClass:'green',   emoji:'🫕' },
  { id:7, cat:'woks',     badge:'new',  nameKey:{ru:'Вок Induction Elite 36см',en:'Induction Elite Wok 36cm',de:'Induktions-Elite-Wok 36cm',fr:'Wok Induction Elite 36cm',zh:'电磁炉精英炒锅36cm'}, price:69.99, oldPrice:null, rating:4.9, rev:156, artClass:'maroon',  emoji:'🥘' },
  { id:8, cat:'cookware', badge:null,   nameKey:{ru:'Мини Сковорода Chef 18см',en:'Mini Chef Pan 18cm',de:'Mini Chef Pfanne 18cm',fr:'Mini Poêle Chef 18cm',zh:'迷你主厨煎锅18cm'}, price:29.99, oldPrice:null, rating:4.7, rev:87, artClass:'copper',  emoji:'🍳' }
];

/* === TESTIMONIALS === */
const TESTIMONIALS = [
  { name:'Анна С.', loc:{ru:'Москва, Россия',en:'Moscow, Russia',de:'Moskau, Russland',fr:'Moscou, Russie',zh:'莫斯科，俄罗斯'}, rating:5, text:{ru:'Лучшая посуда, которую я когда-либо покупала! Гранитное покрытие просто невероятное — ничего не пригорает. Уже 3 года пользуюсь каждый день!',en:'Best cookware I\'ve ever bought! The granite coating is simply incredible — nothing sticks. Been using it every day for 3 years!',de:'Bestes Kochgeschirr, das ich je gekauft habe! Die Granitbeschichtung ist unglaublich — nichts klebt. Benutze es täglich seit 3 Jahren!',fr:'La meilleure batterie de cuisine que j\'aie jamais achetée ! Rien n\'accroche. Je l\'utilise tous les jours depuis 3 ans !',zh:'我买过的最好的厨具！花岗岩涂层真的令人难以置信——什么都不会粘。已经每天用了3年了！'}, init:'А' },
  { name:'Michael K.', loc:{ru:'Берлин, Германия',en:'Berlin, Germany',de:'Berlin, Deutschland',fr:'Berlin, Allemagne',zh:'柏林，德国'}, rating:5, text:{ru:'Профессиональное качество по доступной цене. Использую каждый день уже 2 года — как новая!',en:'Professional quality at an affordable price. Been using it every day for 2 years — still like new!',de:'Professionelle Qualität zum erschwinglichen Preis. Täglich im Einsatz seit 2 Jahren — wie neu!',fr:'Qualité professionnelle à prix abordable. 2 ans d\'utilisation quotidienne — toujours comme neuf!',zh:'价格实惠的专业品质。每天都用，已经2年了——依然如新！'}, init:'M' },
  { name:'Sophie L.', loc:{ru:'Париж, Франция',en:'Paris, France',de:'Paris, Frankreich',fr:'Paris, France',zh:'巴黎，法国'}, rating:5, text:{ru:'Наконец-то нашла идеальный набор посуды! Равномерный нагрев, лёгкая чистка — это просто мечта.',en:'Finally found the perfect cookware set! Even heating, easy cleaning — it\'s simply a dream.',de:'Endlich das perfekte Set gefunden! Gleichmäßige Erwärmung, leichte Reinigung — ein Traum.',fr:'Enfin trouvé le set parfait ! Chauffage uniforme, nettoyage facile — c\'est un rêve.',zh:'终于找到了完美的厨具套装！均匀加热，清洁方便——简直是梦想。'}, init:'S' },
  { name:'李明', loc:{ru:'Шанхай, Китай',en:'Shanghai, China',de:'Shanghai, China',fr:'Shanghai, Chine',zh:'上海，中国'}, rating:5, text:{ru:'Отличный вок! Готовлю китайскую кухню каждый день — идеально для высоких температур.',en:'Excellent wok! I cook Chinese food every day — perfect for high heat cooking.',de:'Ausgezeichneter Wok! Ich koche täglich chinesisch — perfekt für hohe Temperaturen.',fr:'Excellent wok ! Je cuisine chinois tous les jours — parfait pour les hautes températures.',zh:'非常棒的炒锅！我每天都做中国菜——非常适合大火翻炒。'}, init:'李' }
];

/* === STATE === */
let currentLang = localStorage.getItem('mgcLang') || 'ru';
let cart = JSON.parse(localStorage.getItem('mgcCart') || '[]');
let currentFilter = 'all';

/* ============================================================
   INITIALIZATION
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initTheme();
  initLang();
  renderProducts();
  renderTestimonials();
  initNav();
  initCart();
  initSearch();
  initScrollAnimations();
  initCounters();
  initProductFilter();
  initNewsletter();
  initContact();
  initCookie();
  initBackToTop();
  initScrollProgress();
  initBanner();
  initParticles();
});

/* ============================================================
   LOADER
   ============================================================ */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('done');
    document.body.style.overflow = '';
    triggerHeroAnimations();
  }, 2000);
  document.body.style.overflow = 'hidden';
}

function triggerHeroAnimations() {
  document.querySelectorAll('[data-hero-anim]').forEach((el, i) => {
    setTimeout(() => el.classList.add('hero-visible'), i * 150);
  });
}

/* ============================================================
   THEME SYSTEM
   ============================================================ */
function initTheme() {
  const saved = localStorage.getItem('mgcTheme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  setTheme(theme, false);

  document.getElementById('theme-btn')?.addEventListener('click', toggleTheme);
  document.getElementById('theme-btn-mobile')?.addEventListener('click', toggleTheme);
}

function setTheme(theme, save = true) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = theme === 'dark' ? '☀️' : '🌙';
  document.querySelectorAll('.theme-icon').forEach(el => el.textContent = icon);
  if (save) localStorage.setItem('mgcTheme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
}

/* ============================================================
   LANGUAGE SYSTEM
   ============================================================ */
function initLang() {
  const langBtns = document.querySelectorAll('[data-lang]');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      closeLangDropdown();
    });
  });

  // Dropdown toggle
  document.getElementById('lang-trigger')?.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelector('.lang-wrap')?.classList.toggle('open');
  });

  document.addEventListener('click', closeLangDropdown);
  setLang(currentLang, false);
}

function closeLangDropdown() {
  document.querySelector('.lang-wrap')?.classList.remove('open');
}

function setLang(lang, save = true) {
  if (!T[lang]) return;
  currentLang = lang;
  if (save) localStorage.setItem('mgcLang', lang);
  document.documentElement.lang = lang;

  const t = T[lang];

  // Trigger text update for all i18n elements
  applyTranslations(t);

  // Update active states
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update lang display
  const names = { ru:'RU', en:'EN', de:'DE', fr:'FR', zh:'中文' };
  document.querySelector('.lang-current-text').textContent = names[lang] || lang.toUpperCase();

  // Re-render products with new lang
  renderProducts();
  renderTestimonials();
}

function applyTranslations(t) {
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  };
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  const setPlaceholder = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.placeholder = val;
  };

  // Banner
  setText('banner-text', t.banner);
  // Nav
  setText('nav-home', t.nav.home);
  setText('nav-catalog', t.nav.catalog);
  setText('nav-about', t.nav.about);
  setText('nav-reviews', t.nav.reviews);
  setText('nav-contact', t.nav.contact);
  setPlaceholder('search-input', t.nav.search);
  // Hero
  setText('hero-badge', t.hero.badge);
  setText('hero-t1', t.hero.t1);
  setText('hero-t2', t.hero.t2);
  setText('hero-sub', t.hero.sub);
  setText('hero-cta', t.hero.cta);
  setText('hero-cta2', t.hero.cta2);
  setText('hero-tr1', t.hero.tr1);
  setText('hero-tr2', t.hero.tr2);
  setText('hero-tr3', t.hero.tr3);
  setText('hero-scroll', t.hero.scroll);
  // Stats
  setText('stat-c1', t.stats.c1);
  setText('stat-c2', t.stats.c2);
  setText('stat-c3', t.stats.c3);
  setText('stat-c4', t.stats.c4);
  // Features
  setText('feat-title', t.feat.title);
  setText('feat-sub', t.feat.sub);
  setText('f1t', t.feat.f1t); setText('f1d', t.feat.f1d);
  setText('f2t', t.feat.f2t); setText('f2d', t.feat.f2d);
  setText('f3t', t.feat.f3t); setText('f3d', t.feat.f3d);
  setText('f4t', t.feat.f4t); setText('f4d', t.feat.f4d);
  // Products
  setText('prod-title', t.products.title);
  setText('prod-sub', t.products.sub);
  setText('tab-all', t.products.all);
  setText('tab-cookware', t.products.cookware);
  setText('tab-woks', t.products.woks);
  setText('tab-pots', t.products.pots);
  setText('tab-sets', t.products.sets);
  // About
  setText('about-label', t.about.label);
  setText('about-title', t.about.title);
  setText('about-p1', t.about.p1);
  setText('about-p2', t.about.p2);
  setText('about-cta', t.about.cta);
  setText('about-a1', t.about.a1);
  setText('about-a2', t.about.a2);
  setText('about-a3', t.about.a3);
  setText('about-a4', t.about.a4);
  setText('about-sub2', t.about.sub2);
  // Why
  setText('why-label', t.why.label);
  setText('why-title', t.why.title);
  setText('why-sub', t.why.sub);
  setText('w1t', t.why.w1t); setText('w1d', t.why.w1d);
  setText('w2t', t.why.w2t); setText('w2d', t.why.w2d);
  setText('w3t', t.why.w3t); setText('w3d', t.why.w3d);
  setText('w4t', t.why.w4t); setText('w4d', t.why.w4d);
  // Testimonials
  setText('testi-title', t.testi.title);
  setText('testi-sub', t.testi.sub);
  // Newsletter
  setText('news-label', t.news.label);
  setText('news-title', t.news.title);
  setText('news-sub', t.news.sub);
  setPlaceholder('news-input', t.news.ph);
  setText('news-btn', t.news.btn);
  // Contact
  setText('contact-label', t.contact.label);
  setText('contact-title', t.contact.title);
  setText('contact-sub', t.contact.sub);
  setPlaceholder('contact-name', t.contact.name);
  setPlaceholder('contact-email', t.contact.email);
  setPlaceholder('contact-msg', t.contact.msg);
  setText('contact-send', t.contact.send);
  setText('contact-addr', t.contact.addr);
  setText('contact-phone', t.contact.phone);
  setText('contact-mail', t.contact.mail);
  // Footer
  setText('footer-desc', t.footer.desc);
  setText('footer-shop', t.footer.shop);
  setText('footer-company', t.footer.company);
  setText('footer-support', t.footer.support);
  setText('fp1', t.footer.fp1); setText('fp2', t.footer.fp2);
  setText('fp3', t.footer.fp3); setText('fp4', t.footer.fp4);
  setText('fc1', t.footer.fc1); setText('fc2', t.footer.fc2);
  setText('fc3', t.footer.fc3); setText('fc4', t.footer.fc4);
  setText('fs1', t.footer.fs1); setText('fs2', t.footer.fs2);
  setText('fs3', t.footer.fs3); setText('fs4', t.footer.fs4);
  setText('footer-copy', t.footer.copy);
  // Cart
  setText('cart-title', t.cart.title);
  setText('cart-continue', t.cart.continue);
  setText('checkout-btn-text', t.cart.checkout);
  updateCartDisplay();
  // Cookie
  setText('cookie-text-main', t.cookie.text);
  setText('cookie-link', t.cookie.link);
  setText('cookie-accept', t.cookie.accept);
  setText('cookie-decline', t.cookie.decline);
  // Search
  setText('search-label-text', t.search.label);
  renderSearchTags(t.search.tags);
  // Product add to cart buttons
  document.querySelectorAll('.add-to-cart-btn .btn-text').forEach(el => {
    el.textContent = t.products.add;
  });
  document.querySelectorAll('.quick-btn').forEach(el => {
    el.textContent = t.products.view;
  });
}

function renderSearchTags(tags) {
  const wrap = document.getElementById('search-tags');
  if (!wrap) return;
  wrap.innerHTML = tags.map(tag =>
    `<button class="search-tag" onclick="document.getElementById('search-input').value='${tag}'">${tag}</button>`
  ).join('');
}

/* ============================================================
   PRODUCT RENDERING
   ============================================================ */
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const t = T[currentLang];
  const badgeMap = { new: t.products.new, best: t.products.best, sale: t.products.sale };

  grid.innerHTML = PRODUCTS.map(p => {
    const name = p.nameKey[currentLang];
    const badge = p.badge ? `<span class="product-badge ${p.badge === 'best' ? 'bestseller' : p.badge}">${badgeMap[p.badge]}</span>` : '';
    const oldPrice = p.oldPrice ? `<span class="product-old-price">$${p.oldPrice}</span>` : '';
    const discount = p.oldPrice ? `<span class="product-discount">-${Math.round((1 - p.price/p.oldPrice)*100)}%</span>` : '';
    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 ? '½' : '');
    const isHidden = (currentFilter !== 'all' && p.cat !== currentFilter) ? 'hidden' : '';
    return `
      <div class="product-card ${isHidden}" data-cat="${p.cat}" data-aos data-delay="${(PRODUCTS.indexOf(p) % 4) + 1}">
        <div class="product-visual">
          <div class="product-art ${p.artClass}">
            <div class="product-art-inner"></div>
            <div class="product-art-ring"></div>
            <div class="product-art-handle"></div>
          </div>
          ${badge}
          <div class="product-quick">
            <button class="quick-btn" data-id="${p.id}">${t.products.view}</button>
          </div>
        </div>
        <div class="product-info">
          <h3 class="product-name">${name}</h3>
          <div class="product-rating">
            <span class="stars">${stars}</span>
            <span class="review-count">(${p.rev})</span>
          </div>
          <div class="product-price-row">
            <div>
              <span class="product-price">$${p.price}</span>${oldPrice}
            </div>
            ${discount}
          </div>
          <button class="add-to-cart-btn" data-id="${p.id}">
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            <span class="btn-text">${t.products.add}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Bind events
  grid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)));
  });
  grid.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(parseInt(btn.dataset.id)));
  });

  // Re-observe AOS
  observeAOS();
}

/* ============================================================
   TESTIMONIALS RENDERING
   ============================================================ */
function renderTestimonials() {
  const track = document.getElementById('testi-track');
  if (!track) return;
  track.innerHTML = TESTIMONIALS.map((t, i) => `
    <div class="testimonial-card" data-aos data-delay="${i + 1}">
      <div class="testi-stars">${'★'.repeat(t.rating)}</div>
      <p class="testi-text">"${t.text[currentLang]}"</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.init}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-location">${t.loc[currentLang]}</div>
        </div>
      </div>
    </div>
  `).join('');
  observeAOS();
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const banner = document.getElementById('top-banner');

  // Add banner class if visible
  if (banner && !banner.classList.contains('hidden')) {
    navbar.classList.add('banner-visible');
  }

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }, { passive: true });

  // Hamburger
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
  });

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function updateActiveNavLink() {
  const sections = ['hero','features','products','about','testimonials','contact'];
  const scrollY = window.scrollY + 100;
  sections.forEach(id => {
    const section = document.getElementById(id);
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (section && link) {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      link.classList.toggle('active', scrollY >= top && scrollY < bottom);
    }
  });
}

/* ============================================================
   CART SYSTEM
   ============================================================ */
function initCart() {
  document.getElementById('cart-btn')?.addEventListener('click', openCart);
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
  updateCartDisplay();
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  updateCartDisplay();
  showToast(product.nameKey[currentLang], T[currentLang].toast.added);

  // Button feedback
  const btn = document.querySelector(`.add-to-cart-btn[data-id="${id}"]`);
  if (btn) {
    btn.classList.add('added');
    btn.querySelector('.btn-text').textContent = '✓';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.querySelector('.btn-text').textContent = T[currentLang].products.add;
    }, 1800);
  }
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartDisplay();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartDisplay(); }
}

function saveCart() {
  localStorage.setItem('mgcCart', JSON.stringify(cart));
}

function openCart() {
  document.getElementById('cart-overlay')?.classList.add('open');
  document.getElementById('cart-drawer')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.body.style.overflow = '';
}

function updateCartDisplay() {
  const t = T[currentLang];
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => {
    const p = PRODUCTS.find(pr => pr.id === i.id);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);

  // Badge
  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  // Cart body
  const body = document.getElementById('cart-body');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>${t.cart.empty}</p>
        <button class="btn btn-outline-red" onclick="closeCart(); document.getElementById('products').scrollIntoView({behavior:'smooth'});">
          ${t.cart.continue}
        </button>
      </div>
    `;
  } else {
    body.innerHTML = cart.map(item => {
      const p = PRODUCTS.find(pr => pr.id === item.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <div class="cart-item-art" style="background:rgba(204,34,0,0.1);">${p.emoji}</div>
          <div class="cart-item-info">
            <div class="cart-item-name">${p.nameKey[currentLang]}</div>
            <div class="cart-item-price">$${(p.price * item.qty).toFixed(2)}</div>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateQty(${p.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${p.id}, 1)">+</button>
            <button class="cart-item-remove" onclick="removeFromCart(${p.id})">×</button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Footer
  const footer = document.getElementById('cart-footer');
  if (footer) {
    footer.style.display = cart.length > 0 ? 'block' : 'none';
    const totalEl = document.getElementById('cart-total-price');
    if (totalEl) totalEl.textContent = `$${totalPrice.toFixed(2)}`;
    const totalLabel = document.getElementById('cart-total-label');
    if (totalLabel) totalLabel.textContent = t.cart.total;
  }
}

/* ============================================================
   SEARCH
   ============================================================ */
function initSearch() {
  const overlay = document.getElementById('search-overlay');
  document.getElementById('search-btn')?.addEventListener('click', () => overlay?.classList.add('open'));
  document.getElementById('search-close')?.addEventListener('click', () => overlay?.classList.remove('open'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay?.classList.remove('open');
  });
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
}

/* ============================================================
   PRODUCT FILTER
   ============================================================ */
function initProductFilter() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      filterProducts(currentFilter);
    });
  });
}

function filterProducts(filter) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const match = filter === 'all' || card.dataset.cat === filter;
    if (match) {
      card.classList.remove('hidden');
      card.style.animation = 'none';
      requestAnimationFrame(() => {
        card.style.animation = '';
      });
    } else {
      card.classList.add('hidden');
    }
  });
}

/* ============================================================
   PRODUCT MODAL
   ============================================================ */
function openModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const t = T[currentLang];
  const modal = document.getElementById('product-modal');
  const badgeMap = { new: t.products.new, best: t.products.best, sale: t.products.sale };

  document.getElementById('modal-art').className = `modal-art ${product.artClass}`;
  document.getElementById('modal-name').textContent = product.nameKey[currentLang];
  document.getElementById('modal-price').textContent = `$${product.price}`;
  document.getElementById('modal-rating').innerHTML = `<span class="stars">${'★'.repeat(Math.floor(product.rating))}</span><span class="review-count">(${product.rev} ${currentLang === 'ru' ? 'отзывов' : 'reviews'})</span>`;
  if (product.badge) {
    document.getElementById('modal-badge').innerHTML = `<span class="product-badge ${product.badge === 'best' ? 'bestseller' : product.badge}">${badgeMap[product.badge]}</span>`;
  }

  const features = {
    ru: ['Антипригарное гранитное покрытие без PFOA', 'Совместимо со всеми типами плит', 'Можно мыть в посудомоечной машине', 'Термостойкость до 450°C'],
    en: ['PFOA-free granite non-stick coating', 'Compatible with all stovetop types', 'Dishwasher safe', 'Heat resistant up to 450°C'],
    de: ['PFOA-freie Granitbeschichtung', 'Alle Herdtypen kompatibel', 'Spülmaschinenfest', 'Hitzebeständig bis 450°C'],
    fr: ['Revêtement granit sans PFOA', 'Compatible toutes plaques', 'Lave-vaisselle compatible', 'Résistant à 450°C'],
    zh: ['无PFOA花岗岩不粘涂层', '兼容所有炉灶类型', '可用洗碗机清洗', '耐温高达450°C']
  };

  document.getElementById('modal-features').innerHTML =
    features[currentLang].map(f => `<div class="modal-feat">${f}</div>`).join('');

  document.getElementById('modal-add-btn').textContent = t.products.add;
  document.getElementById('modal-add-btn').onclick = () => { addToCart(id); closeModal(); };

  modal?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('product-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close')?.addEventListener('click', closeModal);
document.getElementById('product-modal')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('product-modal')) closeModal();
});

/* ============================================================
   SCROLL ANIMATIONS (AOS)
   ============================================================ */
function observeAOS() {
  const elements = document.querySelectorAll('[data-aos]:not(.aos-done)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-done');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

function initScrollAnimations() {
  observeAOS();
}

/* ============================================================
   COUNTERS
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 2000;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString();
  }, duration / steps);
}

/* ============================================================
   SCROLL PROGRESS
   ============================================================ */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (scrollTop / docHeight) * 100;
    if (bar) bar.style.width = pct + '%';
  }, { passive: true });
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    btn?.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================================
   BANNER DISMISS
   ============================================================ */
function initBanner() {
  const banner = document.getElementById('top-banner');
  const closeBtn = document.getElementById('banner-close');
  const navbar = document.getElementById('navbar');

  closeBtn?.addEventListener('click', () => {
    banner?.classList.add('hidden');
    navbar?.classList.remove('banner-visible');
  });
}

/* ============================================================
   NEWSLETTER
   ============================================================ */
function initNewsletter() {
  const form = document.getElementById('news-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('news-input');
    if (!input?.value) return;
    document.getElementById('news-form-wrap').style.display = 'none';
    document.getElementById('news-success').classList.add('visible');
    input.value = '';
  });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContact() {
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = '✓ Sent!';
    btn.style.background = '#22b522';
    btn.style.borderColor = '#22b522';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.style.borderColor = '';
      form.reset();
    }, 3000);
  });
}

/* ============================================================
   COOKIE CONSENT
   ============================================================ */
function initCookie() {
  const bar = document.getElementById('cookie-bar');
  if (!bar || localStorage.getItem('mgcCookie')) return;

  setTimeout(() => bar.classList.add('show'), 3000);

  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('mgcCookie', 'accepted');
    bar.classList.remove('show');
  });
  document.getElementById('cookie-decline')?.addEventListener('click', () => {
    localStorage.setItem('mgcCookie', 'declined');
    bar.classList.remove('show');
  });
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(name, action) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  document.getElementById('toast-msg').textContent = `${name} ${action}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ============================================================
   PARTICLES
   ============================================================ */
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  const count = 20;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 1}px;
      height: ${Math.random() * 4 + 1}px;
      background: ${Math.random() > 0.5 ? 'rgba(204,34,0,' : 'rgba(201,132,26,'}${Math.random() * 0.5 + 0.1})`;
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: particle-drift ${Math.random() * 10 + 8}s ease-in-out infinite;
      animation-delay: -${Math.random() * 10}s;
    `;
    container.appendChild(p);
  }

  // Add particle keyframe
  if (!document.getElementById('particle-style')) {
    const style = document.createElement('style');
    style.id = 'particle-style';
    style.textContent = `
      @keyframes particle-drift {
        0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: var(--p-op, 0.6); }
        25% { transform: translateY(-30px) translateX(15px) scale(1.2); }
        50% { transform: translateY(-15px) translateX(-20px) scale(0.8); }
        75% { transform: translateY(-40px) translateX(10px) scale(1.1); }
      }
    `;
    document.head.appendChild(style);
  }
}

/* ============================================================
   MAGNETIC BUTTONS
   ============================================================ */
document.querySelectorAll('.btn-primary, .btn-ghost').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

/* ============================================================
   CARD TILT EFFECT
   ============================================================ */
document.addEventListener('mousemove', (e) => {
  document.querySelectorAll('.product-card:hover, .feature-card:hover, .why-card:hover').forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-8px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
  });
});

document.addEventListener('mouseleave', () => {
  document.querySelectorAll('.product-card, .feature-card, .why-card').forEach(card => {
    card.style.transform = '';
  });
});

/* Expose functions needed inline */
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQty = updateQty;
window.closeCart = closeCart;
window.openModal = openModal;
window.closeModal = closeModal;
