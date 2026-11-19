/* =========================================================
   VUELO VENTANILLA — DATOS DE LA AGENCIA
   Edite este archivo para cambiar nombre, contacto, paquetes y fotos.
   ========================================================= */
const CONFIG = {
  marca: "Ventanilla Viajes",
  eslogan: "Viaje antes de viajar",
  whatsapp: "",                       // número con indicativo, solo dígitos. Ej: "573001234567"
  correo: "carlosortega415@gmail.com",
  ciudad: "Cali, Valle del Cauca",
  rnt: "",                            // Registro Nacional de Turismo (obligatorio para agencias en Colombia)
  crmWebhook: "",                     // URL que recibe los contactos (Google Apps Script, Make, n8n, CRM)
  // Azafata real: foto vertical o video corto de una persona real dando la bienvenida.
  azafata: { nombre: "Valentina", foto: "", video: "" },
  legSeconds: 10
};

// Fotos: Unsplash (licencia libre, uso comercial permitido). Reemplácelas por fotos propias cuando las tenga.
const U = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;
const FOTOS = {
  hero:     U("photo-1515102597191-fe409fca9804", 2000),   // nubes vistas desde la ventanilla
  ala:      U("photo-1649330134436-d7e1202f0f06", 1600),   // ala sobre el océano
  cabina:   U("photo-1512254921795-6be4058338b2", 1400)    // tripulación en el pasillo
};

const DESTS = [
  { id:"eje", iata:"PEI", country:"Colombia", name:"Eje Cafetero", lat:4.81, lon:-75.74, style:"bambuco",
    foto: U("photo-1672851612881-775cfd248971"), credito:"David Restrepo · Unsplash", musica:"",
    tag:"Paisaje Cultural Cafetero", plan:"4 días / 3 noches", hotel:"Hotel campestre 4★", regimen:"Desayunos",
    intro:"Montañas cubiertas de cafetales, el Valle de Cocora con sus palmas de cera y pueblos de balcones coloridos como Salento y Filandia.",
    incl:["Tiquetes aéreos","Valle de Cocora y Salento","Experiencia en finca cafetera","Termales de Santa Rosa","Traslados","Asistencia médica"], price:"$1.250.000", cur:"COP" },
  { id:"ctg", iata:"CTG", country:"Colombia", name:"Cartagena de Indias", lat:10.44, lon:-75.51, style:"cumbia",
    foto: U("photo-1584115937617-2606161f3411"), credito:"Unsplash", musica:"",
    tag:"Ciudad amurallada", plan:"4 días / 3 noches", hotel:"Hotel 4★ Bocagrande", regimen:"Desayunos",
    intro:"Calles coloniales, atardeceres sobre la muralla y las playas de las Islas del Rosario a una hora en lancha.",
    incl:["Tiquetes aéreos","Tour Ciudad Amurallada","Pasadía Islas del Rosario","Recorrido nocturno en chiva","Traslados","Asistencia médica"], price:"$1.890.000", cur:"COP" },
  { id:"adz", iata:"ADZ", country:"Colombia", name:"San Andrés", lat:12.58, lon:-81.71, style:"calypso",
    foto: U("photo-1576475510454-b0af18970e6d"), credito:"Archipiélago de San Andrés y Providencia · Unsplash", musica:"",
    tag:"El mar de los siete colores", plan:"5 días / 4 noches", hotel:"Resort frente al mar", regimen:"Todo incluido",
    intro:"Un mar de siete tonos de azul, arena blanca y cayos de agua cristalina frente a la costa.",
    incl:["Tiquetes aéreos","Alimentación y bebidas","Vuelta a la isla","Johnny Cay y Acuario","Tarjeta de turismo","Asistencia médica"], price:"$2.450.000", cur:"COP" },
  { id:"cun", iata:"CUN", country:"México", name:"Cancún", lat:21.04, lon:-86.88, style:"huapango",
    foto: U("photo-1630252421399-ddde79af47b3"), credito:"Unsplash", musica:"",
    tag:"Caribe mexicano", plan:"6 días / 5 noches", hotel:"Resort 5★ zona hotelera", regimen:"Todo incluido",
    intro:"La zona hotelera entre la laguna y el mar turquesa, cenotes de agua cristalina y la historia maya a pocas horas.",
    incl:["Tiquetes aéreos","Alimentación y bebidas","Excursión a Isla Mujeres","Visita a cenote","Traslados","Asistencia médica"], price:"USD 980", cur:"" },
  { id:"puj", iata:"PUJ", country:"República Dominicana", name:"Punta Cana", lat:18.57, lon:-68.36, style:"merengue",
    foto: U("photo-1421284621639-884f4129b61d"), credito:"Thomas Lefebvre · Unsplash", musica:"",
    tag:"Playas de arena blanca", plan:"5 días / 4 noches", hotel:"Resort 5★ frente al mar", regimen:"Todo incluido",
    intro:"Kilómetros de playa bajo cocoteros, arrecifes de coral y el mejor ambiente del Caribe.",
    incl:["Tiquetes aéreos","Alimentación y bebidas","Excursión a Isla Saona","Snorkel en arrecife","Traslados","Asistencia médica"], price:"USD 890", cur:"" }
];

/* ---------------- envío de contactos ---------------- */
function resumenLead(l){
  return `Hola, soy ${l.nombre}. ${l.origen==="Vuelo virtual"?"Realicé el vuelo virtual de "+CONFIG.marca+" y deseo":"Deseo"} cotizar:\n• ${l.destinos.join("\n• ")}\nFecha estimada: ${l.fecha_viaje}\nViajeros: ${l.viajeros}\nWhatsApp: ${l.whatsapp}${l.correo?"\nCorreo: "+l.correo:""}${l.observaciones?"\nObservaciones: "+l.observaciones:""}`;
}
async function enviarLead(l){
  if(!CONFIG.crmWebhook) return false;
  try{ await fetch(CONFIG.crmWebhook,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(l)}); return true; }catch(e){ return false; }
}
const waLink = (txt) => CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(txt)}` : "";
