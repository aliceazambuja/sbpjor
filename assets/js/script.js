const maps = [
  { icon:'💊', name:'Farmácias', embed:'https://www.google.com/maps/d/embed?mid=12wmMmpQ7Jfo2UQl5E2JVq0GLx97Cfug&ehbc=2E312F' },
  { icon:'🏥', name:'Hospitais', embed:'https://www.google.com/maps/d/embed?mid=1IUug21_ubLMz0M95W_zmFLq7SRAqEcU&ehbc=2E312F' },
  { icon:'⛽', name:'Postos de gasolina', embed:'https://www.google.com/maps/d/embed?mid=1d_vn4PPOASHZGTrZLTX3SBtvytzBnEA&ehbc=2E312F' },
  { icon:'🏨', name:'Hotéis', embed:'https://www.google.com/maps/d/embed?mid=1KnkuC3mKGFpAbm7MFVLk-QdFWUWTkr8&ehbc=2E312F' },
  { icon:'👮', name:'Polícia', embed:'https://www.google.com/maps/d/embed?mid=1rs3hDgDbbA2FnJVF2ChKA_Po4wrhpQc&ehbc=2E312F' },
  { icon:'🏧', name:'Bancos 24h', embed:'https://www.google.com/maps/d/embed?mid=12Wx7M2YXTneGFxR-hmsCyfgVCjEblIM&ehbc=2E312F' },
  { icon:'🛍️', name:'Shoppings', embed:'https://www.google.com/maps/d/embed?mid=1bwv1K89PxE-feC9w1V30yNVNKzP6DpE&ehbc=2E312F' },
  { icon:'🅿️', name:'Estacionamentos', embed:'https://www.google.com/maps/d/embed?mid=1q7k6L9EsbmC8UjtIg7tS_PLcuFFIuyM&ehbc=2E312F' },
  { icon:'🏋️', name:'Academias', embed:'https://www.google.com/maps/d/embed?mid=1e0fbEyLwvv6ySG9ajC4cHk201c9_nvs&ehbc=2E312F' },
  { icon:'🛠️', name:'Oficinas de veículos', embed:'https://www.google.com/maps/d/embed?mid=1QY2HG7LHxMfkK65vFb9QQO0c0UdNo58&ehbc=2E312F' },
  { icon:'🛒', name:'Supermercados', embed:'https://www.google.com/maps/d/embed?mid=1wWC-xxYvOAV3gomkwQjHhQUoGdkPELk&ehbc=2E312F' },
  { icon:'🍽️', name:'Restaurantes', embed:'https://www.google.com/maps/d/embed?mid=1e_yDhsmn5FSNKCRPFyevWtRFhTDypUc&ehbc=2E312F' },
];

const mapList = document.getElementById("mapList");
const mapFrame = document.getElementById("mapFrame");

maps.forEach(m => {
  const btn = document.createElement("button");
  btn.innerHTML = `${m.icon} ${m.name}<br><small>Toque para abrir o mapa abaixo</small>`;
  btn.addEventListener("click", () => {
    mapFrame.src = m.embed;
    mapFrame.scrollIntoView({ behavior: "smooth" });
  });
  mapList.appendChild(btn);
});

const hotelMap = maps.find(m => m.name === "Hotéis");
if (hotelMap) mapFrame.src = hotelMap.embed;
