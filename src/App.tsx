/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import { 
  Smartphone, 
  Store, 
  Zap, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  MapPin,
  ExternalLink
} from 'lucide-react';

const APP_LINKS = {
  googlePlay: 'https://play.google.com/store/apps/details?id=com.donodoapp.alfadelivery',
  appStore: 'https://apps.apple.com/us/app/alfa-service-food/id6745711619',
  webApp: 'http://alfadelivery.donodoapp.com/'
};

const QR_CODE_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(APP_LINKS.webApp);

export default function App() {
  const [os, setOs] = useState<'ios' | 'android' | 'desktop'>('desktop');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/android/i.test(userAgent)) {
      setOs('android');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setOs('ios');
    } else {
      setOs('desktop');
    }
  }, []);

  return (
    <div className="min-h-screen selection:bg-alfa-yellow selection:text-alfa-black">
      <Header />
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 overflow-hidden bg-alfa-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop" 
            alt="Restaurante de Alta Qualidade" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          {/* Brand Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-alfa-red/80 via-alfa-red/40 to-alfa-black/90"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
            O Delivery Oficial <br />
            <span className="text-alfa-yellow">da Nossa Cidade.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-2xl drop-shadow-lg">
            Mais economia. Mais negócios locais. Mais sabor. <br className="hidden md:block" />
            O app que valoriza o que é nosso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-4 px-4">
              <a href={APP_LINKS.appStore} target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
              </a>
              <a href={APP_LINKS.googlePlay} target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
              </a>
            </div>
          </div>

          {os === 'desktop' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20"
            >
              <img src={QR_CODE_URL} alt="QR Code" className="w-24 h-24 rounded-lg" />
              <span className="text-xs text-white/80 font-semibold uppercase tracking-wider">Escaneie para pedir</span>
            </motion.div>
          )}
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2. Benefícios Principais */}
      <section id="beneficios" className="py-24 px-6 bg-alfa-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Por que escolher o Alfa?</h2>
            <div className="w-20 h-1.5 bg-alfa-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10 text-alfa-yellow" />,
                title: "Taxas menores = preços menores",
                desc: "Diferente dos grandes apps, nossas taxas são justas. Isso significa que o preço no app é muito mais próximo do balcão."
              },
              {
                icon: <Users className="w-10 h-10 text-alfa-yellow" />,
                title: "Valorização do comércio local",
                desc: "Cada pedido no Alfa fortalece a economia da nossa cidade e ajuda os empreendedores da nossa região."
              },
              {
                icon: <MapPin className="w-10 h-10 text-alfa-yellow" />,
                title: "Entrega rápida e suporte próximo",
                desc: "Logística otimizada para a nossa cidade e um suporte humano que resolve seus problemas de verdade."
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 flex flex-col items-start gap-6 group transition-all duration-300 hover:bg-white/10"
              >
                <div className="p-4 bg-alfa-red/10 rounded-2xl group-hover:bg-alfa-red/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold">{benefit.title}</h3>
                <p className="text-alfa-white/60 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Para Restaurantes */}
      <section id="restaurantes" className="py-24 px-6 bg-zinc-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-alfa-red/5 blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-alfa-red font-bold tracking-widest uppercase text-sm mb-4 block">Parceiros Alfa</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Seu restaurante <br />
              <span className="text-alfa-red">merece mais lucro.</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              {[
                "Taxas mais justas do mercado",
                "Público qualificado da própria cidade",
                "Cresça com quem é da sua região",
                "Painel de gestão simples e intuitivo"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-alfa-red flex-shrink-0" />
                  <span className="text-lg text-white/80">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/5518991074162?text=quero%20vender"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-alfa-red text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-alfa-dark-red transition-all shadow-2xl shadow-alfa-red/20"
            >
              Quero vender no Alfa
              <Store className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="/hero-image.png" 
                alt="Restaurante Parceiro" 
                className="w-full h-auto transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/restaurant/800/1000';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alfa-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-card p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-alfa-yellow rounded-full flex items-center justify-center text-alfa-black font-bold">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 font-medium">Aumento médio de lucro</p>
                    <p className="text-xl font-black">+25% em relação a outros apps</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-alfa-red/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-alfa-yellow/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* 4. CTA Final */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto red-gradient rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 whitespace-nowrap pointer-events-none select-none">
            ALFA PEDIDOS
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">
            Baixe agora e valorize <br />
            <span className="text-alfa-yellow">o que é nosso.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
            <a 
              href={APP_LINKS.webApp}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-2 text-white/80 hover:text-white font-bold text-lg transition-colors"
            >
              Peça pelo site agora
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src="/logo.svg" alt="Alfa Pedidos" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <span className="font-black text-xl tracking-tight">ALFA PEDIDOS</span>
          </div>
          
          <div className="flex gap-8 text-sm text-white/40 font-medium">
            <a href="#" className="hover:text-alfa-red transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-alfa-red transition-colors">Privacidade</a>
            <a href="#" className="hover:text-alfa-red transition-colors">Contato</a>
          </div>

          <p className="text-sm text-white/20">
            © {new Date().getFullYear()} Alfa Pedidos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
