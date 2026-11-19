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
  legSeconds: 7
};

// Fotos: Unsplash (licencia libre, uso comercial permitido). Reemplácelas por fotos propias cuando las tenga.
const U = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;
const FOTOS = {
  hero:     U("photo-1515102597191-fe409fca9804", 2000),   // nubes vistas desde la ventanilla
  ala:      U("photo-1649330134436-d7e1202f0f06", 1600),   // ala sobre el océano
  cabina:   U("photo-1512254921795-6be4058338b2", 1400)    // tripulación en el pasillo
};

const DESTS = [
  // ---------- NACIONALES ----------
  { id:"ctg", tipo:"nacional", iata:"CTG", country:"Colombia", name:"Cartagena de Indias", style:"cumbia",
    foto: U("photo-1584115937617-2606161f3411"), credito:"Unsplash", musica:"",
    tag:"La ciudad amurallada", plan:"4 días / 3 noches", hotel:"Hotel 4★ Bocagrande", regimen:"Desayunos",
    intro:"Calles coloniales, atardeceres sobre la muralla y las playas de las Islas del Rosario a una hora en lancha.",
    incl:["Tiquetes aéreos","Tour Ciudad Amurallada","Pasadía Islas del Rosario","Recorrido nocturno en chiva","Traslados","Asistencia médica"], price:"$1.890.000", cur:"COP" },
  { id:"adz", tipo:"nacional", iata:"ADZ", country:"Colombia", name:"San Andrés", style:"calypso",
    foto: U("photo-1576475510454-b0af18970e6d"), credito:"Archipiélago de San Andrés y Providencia · Unsplash", musica:"",
    tag:"El mar de los siete colores", plan:"5 días / 4 noches", hotel:"Resort frente al mar", regimen:"Todo incluido",
    intro:"Un mar de siete tonos de azul, arena blanca y cayos de agua cristalina frente a la costa.",
    incl:["Tiquetes aéreos","Alimentación y bebidas","Vuelta a la isla","Johnny Cay y Acuario","Tarjeta de turismo","Asistencia médica"], price:"$2.450.000", cur:"COP" },
  { id:"smr", tipo:"nacional", iata:"SMR", country:"Colombia", name:"Santa Marta y Tayrona", style:"vallenato",
    foto: U("photo-1708716174657-e3a363eae155"), credito:"Chema Photo · Unsplash", musica:"",
    tag:"Donde la Sierra Nevada se encuentra con el mar", plan:"4 días / 3 noches", hotel:"Hotel 4★ El Rodadero", regimen:"Desayunos",
    intro:"Playas entre la selva del Parque Tayrona, el pueblo pesquero de Taganga y la ciudad más antigua de Colombia.",
    incl:["Tiquetes aéreos","Día en Parque Tayrona","Taganga y Playa Grande","City tour Santa Marta","Traslados","Asistencia médica"], price:"$1.590.000", cur:"COP" },
  { id:"eje", tipo:"nacional", iata:"PEI", country:"Colombia", name:"Eje Cafetero", style:"bambuco",
    foto: U("photo-1672851612881-775cfd248971"), credito:"David Restrepo · Unsplash", musica:"",
    tag:"Paisaje Cultural Cafetero", plan:"4 días / 3 noches", hotel:"Hotel campestre 4★", regimen:"Desayunos",
    intro:"Montañas cubiertas de cafetales, el Valle de Cocora con sus palmas de cera y pueblos de balcones coloridos como Salento y Filandia.",
    incl:["Tiquetes aéreos","Valle de Cocora y Salento","Experiencia en finca cafetera","Termales de Santa Rosa","Traslados","Asistencia médica"], price:"$1.250.000", cur:"COP" },
  { id:"mde", tipo:"nacional", iata:"MDE", country:"Colombia", name:"Medellín", style:"bambuco",
    foto: U("photo-1512250431446-d0b4b57b27ec"), credito:"Joel Duncan · Unsplash", musica:"",
    tag:"La ciudad de la eterna primavera", plan:"3 días / 2 noches", hotel:"Hotel 4★ El Poblado", regimen:"Desayunos",
    intro:"Clima perfecto todo el año, el Metrocable sobre las montañas, la Comuna 13 y la piedra de Guatapé a dos horas.",
    incl:["Tiquetes aéreos","City tour y Metrocable","Tour Comuna 13","Guatapé y El Peñol","Traslados","Asistencia médica"], price:"$990.000", cur:"COP" },
  // ---------- INTERNACIONALES ----------
  { id:"puj", tipo:"internacional", iata:"PUJ", country:"República Dominicana", name:"Punta Cana", style:"merengue",
    foto: U("photo-1421284621639-884f4129b61d"), credito:"Thomas Lefebvre · Unsplash", musica:"",
    tag:"Playas de arena blanca", plan:"5 días / 4 noches", hotel:"Resort 5★ frente al mar", regimen:"Todo incluido",
    intro:"Kilómetros de playa bajo cocoteros, arrecifes de coral y el mejor ambiente del Caribe.",
    incl:["Tiquetes aéreos","Alimentación y bebidas","Excursión a Isla Saona","Snorkel en arrecife","Traslados","Asistencia médica"], price:"USD 890", cur:"" },
  { id:"cun", tipo:"internacional", iata:"CUN", country:"México", name:"Cancún", style:"huapango",
    foto: U("photo-1630252421399-ddde79af47b3"), credito:"Unsplash", musica:"",
    tag:"Caribe mexicano", plan:"6 días / 5 noches", hotel:"Resort 5★ zona hotelera", regimen:"Todo incluido",
    intro:"La zona hotelera entre la laguna y el mar turquesa, cenotes de agua cristalina y la historia maya a pocas horas.",
    incl:["Tiquetes aéreos","Alimentación y bebidas","Excursión a Isla Mujeres","Visita a cenote","Traslados","Asistencia médica"], price:"USD 980", cur:"" },
  { id:"aua", tipo:"internacional", iata:"AUA", country:"Aruba", name:"Aruba", style:"calypso",
    foto: U("photo-1558117338-7ef3d637ce2f"), credito:"Paulo Evangelista · Unsplash", musica:"",
    tag:"Una isla feliz", plan:"5 días / 4 noches", hotel:"Resort 4★ Palm Beach", regimen:"Todo incluido",
    intro:"Sol todo el año, Eagle Beach y Palm Beach, aguas tranquilas y atardeceres sobre el mar Caribe.",
    incl:["Tiquetes aéreos","Alimentación y bebidas","Tour en catamarán","Snorkel en Boca Catalina","Traslados","Asistencia médica"], price:"USD 1.290", cur:"" },
  { id:"pty", tipo:"internacional", iata:"PTY", country:"Panamá", name:"Ciudad de Panamá", style:"cumbia",
    foto: U("photo-1702249702710-70f891fc6eec"), credito:"Juan Domenech · Unsplash", musica:"",
    tag:"El Canal y el Casco Viejo", plan:"4 días / 3 noches", hotel:"Hotel 4★ Bella Vista", regimen:"Desayunos",
    intro:"El Canal de Panamá, el Casco Viejo colonial, la Cinta Costera y compras a precios de zona libre.",
    incl:["Tiquetes aéreos","Visita al Canal de Panamá","Tour Casco Viejo","Día de compras","Traslados","Asistencia médica"], price:"USD 690", cur:"" }
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
