import React from 'react'
import { motion } from 'framer-motion'
import { Utensils, Clock, Star, Heart, Award, Truck } from 'lucide-react'

export default function Services() {
  const specialties = [
    {
      title: "Feijoada Tradicional",
      description: "A mais autêntica feijoada brasileira, preparada com carnes selecionadas e feijão preto de primeira qualidade. Servida com acompanhamentos tradicionais.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "R$ 45,90",
      badge: "Mais Pedido",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Moqueca Capixaba",
      description: "Peixe fresco em leite de coco com dendê, tomates e pimentões. Uma explosão de sabores do mar em panela de barro tradicional.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "R$ 38,90",
      badge: "Chef's Choice",
      icon: <Star className="w-5 h-5" />
    },
    {
      title: "Picanha na Brasa",
      description: "Corte nobre grelhado no ponto perfeito, acompanhado de farofa especial, vinagrete e mandioca dourada. Tradição do churrasco brasileiro.",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "R$ 52,90",
      badge: "Premium",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "Bobó de Camarão",
      description: "Camarões frescos em creme de mandioca temperado com dendê, leite de coco e especiarias. Receita baiana autêntica.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "R$ 42,90",
      badge: "Tradicional",
      icon: <Utensils className="w-5 h-5" />
    },
    {
      title: "Baião de Dois",
      description: "Arroz com feijão de corda, linguiça, bacon, queijo coalho e temperos especiais. Sabor nordestino que conquista.",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "R$ 34,90",
      badge: "Nordestino",
      icon: <Clock className="w-5 h-5" />
    },
    {
      title: "Açaí na Tigela",
      description: "Açaí puro batido na hora com frutas frescas, granola artesanal e mel. A sobremesa brasileira que é pura energia.",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "R$ 18,90",
      badge: "Natural",
      icon: <Heart className="w-5 h-5" />
    }
  ]

  const services = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Pratos Executivos",
      description: "Opções rápidas e saborosas para o seu almoço, sem abrir mão da qualidade e tradição brasileira.",
      features: ["Servido em 15 minutos", "Porções generosas", "Preços acessíveis"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Delivery Premium",
      description: "Levamos o sabor do RestauranteBR até você, mantendo a temperatura e qualidade dos pratos.",
      features: ["Entrega em 30 minutos", "Embalagem térmica", "Taxa grátis acima de R$ 40"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Eventos Especiais",
      description: "Organizamos seu evento com cardápio personalizado e atendimento exclusivo.",
      features: ["Cardápio sob medida", "Equipe especializada", "Decoração temática"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Buffet Livre",
      description: "Nos fins de semana, oferecemos buffet com mais de 20 opções de pratos brasileiros.",
      features: ["Sábados e domingos", "Pratos quentes e frios", "Sobremesas incluídas"]
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-secondary-200 to-accent-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container-center relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-600 rounded-full text-sm font-semibold uppercase tracking-wide mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nossas Especialidades
          </motion.span>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Sabores <span className="text-gradient">Únicos</span> do Brasil
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Descubra nossa seleção especial de pratos que representam a diversidade 
            e riqueza da culinária brasileira, preparados com técnicas tradicionais 
            e ingredientes de primeira qualidade.
          </motion.p>
        </motion.div>

        {/* Specialties Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {specialty.icon}
                  <span>{specialty.badge}</span>
                </motion.div>

                {/* Price */}
                <motion.div
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-2 rounded-lg font-bold text-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {specialty.price}
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-auto">
                <motion.h3
                  className="text-xl font-bold text-gray-800 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {specialty.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-600 leading-relaxed mb-4 flex-grow"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {specialty.description}
                </motion.p>

                <motion.div
                  className="mt-auto"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const element = document.getElementById('contact')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Pedir Agora
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossos <span className="text-gradient">Serviços</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos diferentes modalidades para você desfrutar da nossa culinária
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center justify-center space-x-2 text-sm text-primary-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Não Encontrou o que Procura?
            </motion.h3>
            
            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Temos mais de 50 pratos especiais. Entre em contato e descubra nosso cardápio completo!
            </motion.p>
            
            <motion.button
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Ver Cardápio Completo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}