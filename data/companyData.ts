import { 
  ServiceItem, 
  ServiceDetailGroup, 
  ProjectItem, 
  ReviewItem, 
  StrengthItem, 
  BrandCategory, 
  ServiceCategoryGroup 
} from "../types";

export const COMPANY_START_YEAR = 2022;
export const PRIMARY_LOCATION = "Delhi NCR";
export const SERVICE_COVERAGE = "Pan India Service Coverage";

export const COMPANY_INFO = {
  name: "MEXTECH",
  fullName: "MEXTECH SECURITY SYSTEM & IT SOLUTIONS",
  legalName: "Mextech Security System & IT Solution",
  tagline: "Smart Security. Reliable Technology. Complete Protection.",
  logoUrl: "/assets/logo.jpg",
  established: String(COMPANY_START_YEAR),
  experienceYears: `Since ${COMPANY_START_YEAR}`,
  experienceTitle: `Since ${COMPANY_START_YEAR}`,
  experienceSubtitle: "Security Surveillance & Networking",
  phone: "+91 85109 29404",
  phoneRaw: "+918510929404",
  phoneSecondary: "+91 80021 37438",
  phoneSecondaryRaw: "+918002137438",
  email: "mextech.ncr@gmail.com",
  location: "Gurugram, Haryana",
  primaryLocation: PRIMARY_LOCATION,
  address: "Shop No-4, Om Vihar Road, Near Bikaner Sweets, Palam Vihar Extension, Gurgaon – 122017",
  addressLine1: "Shop No-4, Om Vihar Road, Near Bikaner Sweets,",
  addressLine2: "Palam Vihar Extension, Gurgaon – 122017",
  coverage: SERVICE_COVERAGE,
  coverageShort: "PAN INDIA SERVICE",
  coverageSummary: "Site survey and service available across India, with dedicated local support in Delhi NCR.",
  googleMapsUrl: "https://share.google/YeM2ngP05irxCc2L6",
  googleReviewRating: "4.9",
  hours: "9:00 AM – 9:00 PM (All 7 Days)",
  whatsappMessage: "Hello Mextech, I am interested in your CCTV / Security & IT Solutions. I would like to get a quote.",
  whatsappUrl: "https://wa.me/918510929404?text=Hello%20Mextech,%20I%20am%20interested%20in%20your%20CCTV%20/%20Security%20%26%20IT%20Solutions.%20I%20would%20like%20to%20get%20a%20quote.",
  premises: [
    "Corporate Headquarters",
    "Homes & Villas",
    "Offices & Workspaces",
    "Shops & Retail Outlets",
    "Factories & Manufacturing",
    "Commercial Buildings",
    "Schools & Institutes",
    "Warehouses & Logistics"
  ],
  premisesHeading: "Premises We Protect Across India",
  localCoverageAreas: [
    "Palam Vihar",
    "Palam Vihar Extension",
    "Sector 23 / 23A",
    "DLF Phase 1-5",
    "Cyber City",
    "Udyog Vihar",
    "Golf Course Road",
    "Sohna Road",
    "Sushant Lok",
    "MG Road",
    "Manesar"
  ],
  brandsDealt: [
    "Hikvision",
    "CP Plus",
    "Dahua",
    "Prama",
    "Honeywell",
    "Alba Urmet",
    "Matrix",
    "NEC",
    "CCL",
    "Texecom",
    "DSC",
    "Securico",
    "eSSL",
    "ZKTeco",
    "Western Digital (WD Purple)",
    "TP-Link / Omada",
    "D-Link"
  ]
};

// Top spotlight services requested for prominent top visibility
export const SPOTLIGHT_SERVICES = [
  { name: "Biometric", tag: "Face & Fingerprint", icon: "Fingerprint", link: "/services/access-control" },
  { name: "Security Alarm", tag: "Burglar & Intrusion", icon: "BellRing", link: "/services/fire-security" },
  { name: "Fire Alarm", tag: "Smoke & Heat Detectors", icon: "Flame", link: "/services/fire-security" },
  { name: "Video Door Phone", tag: "Smart Intercom & Unlock", icon: "PhoneCall", link: "/services/video-door-phone" },
  { name: "PA System", tag: "Commercial Audio & Paging", icon: "Megaphone", link: "/services/fire-security" },
  { name: "Walkie-Talkies", tag: "Two-Way Radio Comms", icon: "Radio", link: "/services/access-control" },
  { name: "CCTV Camera", tag: "4K IP, Analog & PTZ", icon: "Camera", link: "/services/cctv-surveillance" },
];

// The 4 Core Service Pillars requested by the user with exact sub-services
export const HOMEPAGE_SERVICES_PILLARS = [
  {
    id: "cctv-surveillance",
    title: "CCTV & Surveillance",
    tagline: "4K Clarity • Smart Night Vision • Remote Live Monitoring",
    description: "End-to-end video security solutions engineered with genuine brand equipment, concealed conduit wiring, and seamless mobile phone access.",
    imageUrl: "/assets/main.jpg",
    badge: "SURVEILLANCE",
    detailLink: "/services/cctv-surveillance",
    subServices: [
      "IP CCTV",
      "Analog CCTV",
      "NVR/DVR",
      "PTZ Camera",
      "Wi-Fi/SIM Camera",
      "CCTV AMC & Repair"
    ],
    brands: ["Hikvision", "CP Plus", "Dahua", "Prama"]
  },
  {
    id: "security-systems",
    title: "Security Systems",
    tagline: "Life Safety • Perimeter Defense • Smart Intercoms",
    description: "Certified smoke detection, burglar intruder alarms, smart video door phones, and employee biometric time attendance systems.",
    imageUrl: "/assets/security-systems.jpg", 
    badge: "SECURITY & SAFETY",
    detailLink: "/services/fire-security",
    subServices: [
      "Fire Alarm",
      "Burglar Alarm",
      "Video Door Phone",
      "Access Control",
      "Biometric Attendance",
      "Intercom / EPABX"
    ],
    brands: ["Texecom", "DSC", "Securico", "Honeywell", "Matrix", "NEC", "CCL", "Alba Urmet"]
  },
  {
    id: "automation",
    title: "Automation",
    tagline: "Smart Entry • Motorized Gates • Digital Locks",
    description: "Intelligent barrier and access automation designed for smooth vehicular management, heavy-duty sliding gates, and keyless biometric entry.",
    imageUrl: "/assets/access-control-biometric.jpg",
    badge: "AUTOMATION",
    detailLink: "/services/access-control",
    subServices: [
      "Boom Barrier",
      "Sliding Gate Motor",
      "Smart Door Lock",
      "Home Automation"
    ],
    brands: ["eSSL", "ZKTeco", "Somfy", "Dorma"]
  },
  {
    id: "it-networking",
    title: "IT & Networking",
    tagline: "Gigabit Cabling • Enterprise Wi-Fi • Server Racks",
    description: "High-throughput network backbones, seamless zero-handoff Wi-Fi 6 coverage, organized server rack dressing, and pure copper Cat6 cabling.",
    imageUrl: "/assets/networking-wifi.jpg",
    badge: "NETWORKING",
    detailLink: "/services/networking",
    subServices: [
      "LAN/WAN",
      "Wi-Fi",
      "Enterprise Wi-Fi",
      "Cat6 Cabling",
      "Server Rack",
      "Network Setup"
    ],
    brands: ["D-Link", "TP-Link / Omada", "Ubiquiti UniFi", "Cisco"]
  }
];

// Specialized additional audio & communication systems
export const SPECIALIZED_SYSTEMS = [
  {
    title: "PA System (Public Address)",
    desc: "Commercial zone-based paging microphones, high-fidelity wall & ceiling speakers, and multi-channel background music amplifiers.",
    imageUrl: "/assets/pa-system.jpg",
    link: "/services/fire-security",
    items: ["Zone Paging Consoles", "Ceiling & Horn Speakers", "Emergency Override Voice Alert"]
  },
  {
    title: "Walkie-Talkies & Two-Way Radios",
    desc: "Long-range UHF/VHF handheld transceivers for on-site security guards, warehouse logistics, facility managers, and multi-floor operations.",
    imageUrl: "/assets/walkie-talkies.jpg",
    link: "/services/access-control",
    items: ["Long Battery Life", "Noise-Cancelling Mic", "Multi-Channel License-Free Radios"]
  }
];

// Brands Section Data prominently organized by category
export const BRANDS_DATA = {
  title: "Brands We Work With",
  subtitle: "Compatible / Genuine Products from Leading Brands",
  googleMapsUrl: "https://share.google/YeM2ngP05irxCc2L6",
  categories: [
    {
      category: "CCTV",
      brands: ["Hikvision", "CP Plus", "Dahua", "Prama"],
      description: "HD Analog, IP 4K Cameras, NVRs, DVRs & ColorVu Night Vision",
      accent: "from-sky-500/20 to-blue-500/5",
      border: "border-sky-500/30"
    },
    {
      category: "Intercom / EPABX",
      brands: ["Matrix", "NEC", "CCL", "Alba Urmet"],
      description: "IP-PBX, Multi-line Office Intercoms & Video Door Systems",
      accent: "from-indigo-500/20 to-purple-500/5",
      border: "border-indigo-500/30"
    },
    {
      category: "Security Alarm",
      brands: ["Texecom", "DSC", "Securico", "Hikvision", "Honeywell"],
      description: "Perimeter Intrusion Panels, PIR Motion Sensors & Auto-Dialers",
      accent: "from-amber-500/20 to-orange-500/5",
      border: "border-amber-500/30"
    }
  ]
};

// Trust Section: "Why Choose Mextech?" grounded in verified business records
export const WHY_CHOOSE_MESTECH_DATA = [
  {
    id: "trust-1",
    title: `Since ${COMPANY_START_YEAR}`,
    subtext: "Security Surveillance & Networking",
    desc: "Hands-on field experience installing and troubleshooting complex low-voltage security setups across residential and commercial sectors, with dedicated support from Gurugram."
  },
  {
    id: "trust-2",
    title: "Professional Installation",
    subtext: "Trained technical team",
    desc: "Clean conduit laying, zero exposed cables, rigid PVC casing, optimal camera angle alignment, and tidy server rack dressing."
  },
  {
    id: "trust-3",
    title: "Genuine Products",
    subtext: "Leading security & networking brands",
    desc: "100% original hardware from brands we deal with, with verifiable serial numbers and manufacturer warranties."
  },
  {
    id: "trust-4",
    title: "After-Sales Support",
    subtext: "Installation + service + AMC",
    desc: "We don't vanish after installation. Count on rapid on-call technical visits, component repairs, and structured Annual Maintenance Contracts."
  },
  {
    id: "trust-5",
    title: "Pan India Service Coverage",
    subtext: "Primary local area: Delhi NCR",
    desc: "Site survey and service available across India, with dedicated local support from our Delhi NCR operations."
  }
];

// All 13 services with dedicated high quality photography
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "cctv-surveillance",
    slug: "cctv-surveillance",
    detailSlug: "cctv-surveillance",
    title: "CCTV Camera & Surveillance Systems",
    category: "surveillance",
    imageUrl: "/assets/main.jpg",
    shortDesc: "High-definition analog, IP, and AI smart surveillance camera setups engineered for homes, retail, and commercial security.",
    fullDesc: "Complete CCTV camera installation engineered for 24/7 crystal-clear perimeter security. We deploy ultra-HD night-vision bullet and dome cameras with AI motion detection, mobile live streaming, and tamper alerts.",
    features: [
      "Full HD & 4K Ultra-clarity optics",
      "Infrared smart night vision up to 50m",
      "Real-time mobile phone remote live view",
      "AI human and vehicle motion detection"
    ],
    equipment: ["CP Plus / Hikvision / Prama 2MP-8MP", "IP Dome / Bullet Cameras", "ColorVu / Full-Color Sensors"]
  },
  {
    id: "nvr-dvr-ptz",
    slug: "nvr-dvr-ptz",
    detailSlug: "cctv-surveillance",
    title: "NVR / DVR / PTZ Camera Solutions",
    category: "surveillance",
    imageUrl: "/assets/nvr-dvr-ptz.jpg",
    shortDesc: "Advanced Network Video Recorders, Digital Video Recorders, and 360° motorized Pan-Tilt-Zoom optical tracking cameras.",
    fullDesc: "Robust recording architecture with centralized storage and precision motorized PTZ cameras that pan 360°, tilt 90°, and zoom up to 30x with automatic optical tracking for large estates, factories, and commercial compounds.",
    features: [
      "4-channel to 64-channel NVR & DVR recording",
      "H.265+ smart compression to save storage",
      "Motorized 360° pan & optical zoom tracking",
      "Fail-safe RAID and dual-LAN redundancy"
    ],
    equipment: ["Standalone NVRs / DVRs", "PTZ Speed Dome Cameras", "WD Purple Surveillance Hard Drives"]
  },
  {
    id: "pa-system",
    slug: "pa-system",
    detailSlug: "fire-security",
    title: "PA System (Public Address)",
    category: "access",
    imageUrl: "/assets/pa-system.jpg",
    shortDesc: "Commercial sound distribution, background music, and emergency voice alarm public address installations.",
    fullDesc: "Clear and reliable audio communication systems for schools, manufacturing facilities, corporate floors, and retail spaces. Includes zone-based microphone consoles, wall/ceiling speakers, and emergency priority broadcasting.",
    features: [
      "Multi-zone audio paging & announcement",
      "High-fidelity ceiling and horn speakers",
      "Commercial amplifiers with Bluetooth/USB",
      "Emergency override voice broadcast integration"
    ],
    equipment: ["Ahuja / Bosch / Studio Master", "Ceiling Mount & Horn Speakers", "Zone Select Amplifiers"]
  },
  {
    id: "video-door-phone",
    slug: "video-door-phone",
    detailSlug: "video-door-phone",
    title: "Video Door Phone (VDP)",
    category: "access",
    imageUrl: "/assets/video-door-phone.jpg",
    shortDesc: "Smart touch screen video intercoms with high-definition cameras, remote door unlock, and visitor mobile connectivity.",
    fullDesc: "Screen visitors before opening your door. Our modern Video Door Phone installations feature weatherproof outdoor camera units with IR night vision, interior capacitive touch screens, and smartphone call forwarding.",
    features: [
      "7-inch to 10-inch color touch indoor screens",
      "Remote electric lock unlocking from indoor monitor",
      "Smartphone app integration to answer anywhere",
      "Tamper-proof outdoor call station with night vision"
    ],
    equipment: ["Panasonic / Hikvision / CP Plus / Alba Urmet VDP", "Electronic Rim Locks", "Wi-Fi Connected Intercom Stations"]
  },
  {
    id: "fire-security-alarm",
    slug: "fire-security-alarm",
    detailSlug: "fire-security",
    title: "Fire & Security Alarm Systems",
    category: "access",
    imageUrl: "/assets/fire-security-alarm.jpg",
    shortDesc: "Certified smoke detection, heat sensors, intrusion detectors, and multi-zone hooter alarms for maximum life safety.",
    fullDesc: "Comprehensive early-warning fire and perimeter intrusion alarm networks. Protect your people and property with sensitive optical smoke detectors, manual call points, loud sounders, and auto-dialers that notify you instantly.",
    features: [
      "Microprocessor-controlled conventional & addressable panels",
      "High-sensitivity optical smoke & thermal heat sensors",
      "PIR motion sensors & magnetic door contacts",
      "Auto-dialer with GSM SIM alert and loud strobe hooters"
    ],
    equipment: ["Agni / Morley / Honeywell Panels", "Optical Smoke Sensors", "Dual PIR Intrusion Detectors"]
  },
  {
    id: "access-control-biometric",
    slug: "access-control-biometric",
    detailSlug: "access-control",
    title: "Access Control & Biometric Systems",
    category: "access",
    imageUrl: "/assets/access-control-biometric.jpg",
    shortDesc: "Fingerprint, facial recognition, and RFID card access control with automated time & attendance software integration.",
    fullDesc: "Secure your entry points and automate staff attendance tracking. We install contactless face recognition terminals, biometric fingerprint scanners, EM lock doors, and turnstiles with detailed employee shift reporting.",
    features: [
      "Sub-second AI facial recognition with mask detection",
      "High-precision optical fingerprint & RFID card authentication",
      "Magnetic electromagnetic door locks (EM locks) & push exit buttons",
      "Automated Excel/Cloud payroll & attendance software reports"
    ],
    equipment: ["eSSL / ZKTeco Biometric Devices", "600 lbs Electromagnetic Locks", "Battery Backup UPS Units"]
  },
  {
    id: "networking-wifi",
    slug: "networking-wifi",
    detailSlug: "networking",
    title: "Networking & Wi-Fi Solutions",
    category: "networking",
    imageUrl: "/assets/networking-wifi.jpg",
    shortDesc: "High-speed enterprise routers, dual-band Wi-Fi setups, unified mesh networks, and dead-zone elimination.",
    fullDesc: "Eliminate buffering and dropped connections with our structured commercial and residential Wi-Fi solutions. Seamless roaming across multiple floors, isolated guest networks, and rock-solid bandwidth management.",
    features: [
      "Dual-band Wi-Fi 6 high-concurrency coverage",
      "Zero-handoff seamless roaming mesh infrastructure",
      "Bandwidth throttling, guest captive portal & VLANs",
      "Clean server rack deployment and cable termination"
    ],
    equipment: ["Ubiquiti UniFi / TP-Link Omada / Cisco", "Gigabit Routers", "Ceiling-Mounted Access Points"]
  },
  {
    id: "poe-switch-solutions",
    slug: "poe-switch-solutions",
    detailSlug: "networking",
    title: "PoE Switch & Network Solutions",
    category: "networking",
    imageUrl: "/assets/wifi-extender-ap.jpg",
    shortDesc: "Managed and unmanaged Power over Ethernet (PoE) switches delivering data and power through single Cat6 runs.",
    fullDesc: "Robust backbone switching infrastructure built specifically for CCTV cameras, IP phones, and wireless access points. Features gigabit uplinks, surge protection, long-distance 250m PoE mode, and power budgeting.",
    features: [
      "4, 8, 16, 24 & 48-port IEEE 802.3af/at PoE/PoE+ switches",
      "Long transmission distance mode up to 250 meters",
      "Smart PoE watchdog to auto-reboot frozen cameras",
      "SFP optical fiber uplink ports for campus backbone"
    ],
    equipment: ["D-Link / TP-Link / Hikvision PoE Switches", "SFP Fiber Transceivers", "Power Distribution Units (PDUs)"]
  },
  {
    id: "cctv-cabling",
    slug: "cctv-cabling",
    detailSlug: "networking",
    title: "CCTV Cabling & Structured Wiring",
    category: "networking",
    imageUrl: "/assets/nvr-dvr-ptz.jpg",
    shortDesc: "Concealed conduit laying, high-grade 100% pure copper Cat6 cabling, coaxial 3+1 lines, and clean cable labeling.",
    fullDesc: "Reliable surveillance depends on durable cabling. We enforce zero-compromise cabling standards using 100% annealed copper, fire-retardant PVC conduits, numbered cable sleeves, and clean patch panel punching.",
    features: [
      "100% pure annealed copper Cat6 UTP / STP cabling",
      "Standard 3+1 and 4+1 CCTV composite cable laying",
      "Rigid PVC pipe and flexible conduit protection against rodents",
      "Professional termination with RJ45, BNC & DC crimping"
    ],
    equipment: ["D-Link / Finolex / Polycab Cat6", "Heavy-Duty Cable Trays", "Wall-Mount 4U-12U Racks"]
  },
  {
    id: "cctv-repair-pcb",
    slug: "cctv-repair-pcb",
    detailSlug: "repair-maintenance",
    title: "CCTV / NVR / DVR Repair & PCB Services",
    category: "repair",
    imageUrl: "/assets/cctv-repair-pcb.jpg",
    shortDesc: "Component-level motherboard repair, SMPS power supply fix, video loss troubleshooting, and firmware recovery.",
    fullDesc: "Expert technical workbench repair with dedicated Gurugram support. We fix dead DVRs, flickering camera channels, broken BNC connectors, blown capacitors, corrupted firmware chips, and unreadable surveillance hard disks.",
    features: [
      "Diagnostic bench testing & micro-soldering PCB repairs",
      "Resolution of 'No Video' and black screen camera issues",
      "Power supply unit (SMPS) rebuild & replacement",
      "Surveillance HDD data recovery & bad sector mitigation"
    ],
    equipment: ["SMD Rework Station", "Oscilloscope & Digital Multimeters", "Firmware Flash Programmers"]
  },
  {
    id: "security-maintenance",
    slug: "security-maintenance",
    detailSlug: "repair-maintenance",
    title: "Security System Maintenance & AMC",
    category: "repair",
    imageUrl: "/assets/security-maintenance.jpg",
    shortDesc: "Annual Maintenance Contracts (AMC), periodic lens cleaning, cable health checks, and priority breakdown response.",
    fullDesc: "Keep your security systems operational year-round. Our AMC plans include scheduled on-site preventative maintenance, lens and dome polishing, angle adjustments, recording verification, and rapid on-call repairs with Pan India service coverage.",
    features: [
      "Comprehensive & Non-Comprehensive AMC packages",
      "Periodic camera angle realignment and dust cleaning",
      "Recording retention audit and hard drive health status checks",
      "Guaranteed priority same-day emergency dispatch"
    ],
    equipment: ["Diagnostic Handheld CCTV Testers", "Lens Cleaning Solvents", "Backup Standby Units"]
  },
  {
    id: "wifi-extender-ap",
    slug: "wifi-extender-ap",
    detailSlug: "networking",
    title: "WiFi Extender & Access Point",
    category: "networking",
    imageUrl: "/assets/wifi-extender-ap.jpg",
    shortDesc: "High-gain wall & ceiling access points and range extenders engineered to eliminate dead spots in multi-story buildings.",
    fullDesc: "Extend high-speed wireless connectivity to hard-to-reach areas like basements, gardens, upper terraces, and thick-walled rooms with enterprise-grade access points that deliver wall-to-wall high-throughput Wi-Fi.",
    features: [
      "Gigabit Ethernet backhaul for unthrottled maximum speeds",
      "High-gain omni-directional antennas with beamforming",
      "PoE-powered for clean installation without extra wall sockets",
      "Single SSID unified login across the entire property"
    ],
    equipment: ["TP-Link Deco / Omada", "Ubiquiti UniFi Long Range APs", "Outdoor Weatherproof APs"]
  },
  {
    id: "fire-extinguisher",
    slug: "fire-extinguisher",
    detailSlug: "fire-security",
    title: "Fire Extinguisher Solutions",
    category: "access",
    imageUrl: "/assets/fire-extinguisher.jpg",
    shortDesc: "Supply, installation, refilling, and periodic inspection of ABC Powder, CO2, and Clean Agent fire extinguishers.",
    fullDesc: "Equip your building with compliant first-line firefighting equipment. We provide ISI-marked ABC dry powder extinguishers, CO2 extinguishers for electrical server rooms, ceiling modular units, and hydro-testing refill services.",
    features: [
      "ISI certified ABC dry powder extinguishers",
      "CO2 gas extinguishers specifically for server & electrical rooms",
      "Ceiling mounted automatic thermal sprinkler modular units",
      "Annual hydro-pressure testing, refill service & safety signage"
    ],
    equipment: ["2kg, 4kg, 6kg, 9kg ABC Extinguishers", "2kg & 4.5kg CO2 Cylinders", "Glow-in-the-Dark Location Signage"]
  },
  {
    id: "walkie-talkies",
    slug: "walkie-talkies",
    detailSlug: "access-control",
    title: "Walkie-Talkies & Two-Way Radios",
    category: "access",
    imageUrl: "/assets/walkie-talkies.jpg",
    shortDesc: "High-power wireless handheld radios engineered for security staff, facility management, and instant multi-team communications.",
    fullDesc: "Instant push-to-talk wireless transceivers designed for zero latency. Perfect for multi-story buildings, security checkpoints, construction sites, and logistics hubs where mobile reception is unreliable.",
    features: [
      "Long-range UHF/VHF license-free frequency channels",
      "Heavy-duty shockproof and weather-resistant casing",
      "Noise-cancelling crystal-clear voice transmission",
      "High-capacity rechargeable battery for 18+ hours runtime"
    ],
    equipment: ["Motorola / Kenwood / Baofeng", "Multi-Unit Gang Desktop Chargers", "Heavy-Duty Acoustic Earpieces"]
  },
  {
    id: "intercom-epabx",
    slug: "intercom-epabx",
    detailSlug: "video-door-phone",
    title: "Intercom & EPABX Systems",
    category: "access",
    imageUrl: "/assets/intercom-epabx.png",
    shortDesc: "Commercial PBX, digital key telephones, and multi-apartment intercom systems from Matrix, NEC, CCL, and Alba Urmet.",
    fullDesc: "Seamless voice connectivity across departments and apartment units. We install analog and IP-PBX phone systems, guard-to-flat intercoms, auto-attendant IVR, and call recording backbones.",
    features: [
      "Multi-line digital intercom with guard console link",
      "Auto-attendant interactive voice response (IVR)",
      "Matrix, NEC & CCL genuine PBX switchboards",
      "Concealed copper telephone cable distribution"
    ],
    equipment: ["Matrix COSEC / ETERNITY", "NEC SL2100 PBX", "CCL Digital Key Phones"]
  }
];

// Featured 6 services for the homepage (Image-based cards, NOT icons!)
export const FEATURED_SERVICES = [
  {
    id: "feat-cctv",
    title: "CCTV Surveillance",
    desc: "Professional CCTV camera installation and surveillance solutions with 24/7 mobile monitoring.",
    imageUrl: "/assets/main.jpg",
    detailLink: "/services/cctv-surveillance"
  },
  {
    id: "feat-nvr",
    title: "NVR / DVR / PTZ Solutions",
    desc: "Centralized high-capacity video recording and 360° motorized zoom tracking cameras.",
    imageUrl: "/assets/nvr-dvr-ptz.jpg",
    detailLink: "/services/cctv-surveillance"
  },
  {
    id: "feat-access",
    title: "Access Control & Biometric",
    desc: "Secure entry management using facial recognition, fingerprint scanners, and smart locks.",
    imageUrl: "/assets/access-control-biometric.jpg",
    detailLink: "/services/access-control"
  },
  {
    id: "feat-fire",
    title: "Fire & Security Systems",
    desc: "Early smoke detection, perimeter intrusion alerts, and certified firefighting equipment.",
    imageUrl: "/assets/fire-security-alarm.jpg",
    detailLink: "/services/fire-security"
  },
  {
    id: "feat-networking",
    title: "Networking & Wi-Fi",
    desc: "Reliable networking, PoE backbones, and enterprise Wi-Fi infrastructure for seamless coverage.",
    imageUrl: "/assets/networking-wifi.jpg",
    detailLink: "/services/networking"
  },
  {
    id: "feat-vdp",
    title: "Video Door Phone",
    desc: "Smart touch video intercoms with high-definition visitor screening and remote door unlocking.",
    imageUrl: "/assets/video-door-phone.jpg",
    detailLink: "/services/video-door-phone"
  }
];

// Detail pages configuration for grouped services
export const SERVICE_GROUPS_DATA: Record<string, ServiceDetailGroup> = {
  "cctv-surveillance": {
    slug: "cctv-surveillance",
    name: "CCTV Camera & Surveillance Systems",
    heroTitle: "Enterprise CCTV & Surveillance Solutions",
    heroSubtitle: "Crystal-clear high-definition recording, smart night vision, and remote mobile monitoring engineered for complete peace of mind.",
    heroImage: "/assets/main.jpg",
    shortIntro: "MEXTECH delivers turnkey surveillance systems across India, from compact residential camera kits to multi-floor commercial 64-channel NVR deployments, with dedicated support from Gurugram.",
    includedServices: [
      "HD Analog & IP Network Cameras (2MP to 8MP 4K)",
      "Standalone NVR / DVR Centralized Video Recorders",
      "Motorized 360° PTZ Optical Speed Domes",
      "Smart ColorVu / Full-Color 24/7 Night Vision",
      "AI Human & Vehicle Smart Perimeter Detection"
    ],
    whatWeProvide: [
      {
        title: "Site Survey & Optimal Camera Placement",
        desc: "We analyze blind spots, lighting angles, and entry points to guarantee 100% effective coverage."
      },
      {
        title: "Professional Installation & Concealed Cabling",
        desc: "All cabling is channeled through rigid PVC conduits to ensure aesthetic appeal and rodent protection."
      },
      {
        title: "Mobile App & Multi-Screen Setup",
        desc: "Stream real-time live footage and playback securely on your iPhone, Android, tablet, or central PC."
      },
      {
        title: "After-Sales Warranty & Maintenance",
        desc: "Genuine hardware backed by 1 to 3 year manufacturer warranty with rapid on-site technician support."
      }
    ],
    keyFeatures: [
      "4K Ultra-HD Resolution Optics",
      "Smart Infrared & Starlight Night Vision",
      "Real-Time Mobile Push Alerts",
      "Smart H.265+ Storage Compression",
      "Tamper & Motion Detection",
      "Surveillance-Grade Hard Disk Storage"
    ],
    applications: [
      "Residential Villas & Independent Floors",
      "Corporate Offices & Tech Parks",
      "Retail Stores & Showrooms",
      "Warehouses & Industrial Manufacturing",
      "Schools, Coaching Centers & Daycares",
      "Gated Communities & Apartment Societies"
    ],
    installationProcess: [
      { step: "01", title: "Free Site Assessment", desc: "Our field engineer inspects your premises to map camera angles and cable paths, with Pan India service coverage and dedicated Gurugram support." },
      { step: "02", title: "Transparent Quotation", desc: "Receive an itemized equipment list with genuine brand components and transparent pricing." },
      { step: "03", title: "Neat Installation", desc: "Trained technicians install cameras, conduits, NVR/DVR, and configure secure power supplies." },
      { step: "04", title: "Testing & Handover", desc: "We configure mobile viewing on all family or staff devices and provide complete operation guidance." }
    ],
    faqs: [
      {
        q: "Can I view my cameras on my mobile phone when away from home?",
        a: "Yes. We configure dedicated secure cloud apps (Hik-Connect, gCMOB, DMSS) on your smartphone with instant remote view and playback anywhere."
      },
      {
        q: "How many days of video recording can the system store?",
        a: "Depending on your hard disk capacity (1TB, 2TB, 4TB, etc.) and camera count, recording typically retains between 15 to 45 days with automatic smart loop overwrite."
      },
      {
        q: "Do your cameras provide clear footage in total darkness?",
        a: "Yes. We install advanced smart infrared (IR) cameras and ColorVu/Full-Color sensors that capture clear colored video even in pitch dark conditions."
      }
    ]
  },
  "networking": {
    slug: "networking",
    name: "Networking, Wi-Fi & Infrastructure",
    heroTitle: "High-Speed Enterprise Networking & Wi-Fi",
    heroSubtitle: "Eliminate dead zones, dropped calls, and slow bandwidth with structured Cat6 cabling, PoE backbones, and unified Wi-Fi 6 coverage.",
    heroImage: "/assets/networking-wifi.jpg",
    shortIntro: "A reliable network is the foundation of modern security and business operations. Mextech designs and deploys high-concurrency network backbones tailored for homes, corporate offices, and warehouses.",
    includedServices: [
      "Structured Cat6 / Cat6A Copper Cabling & Termination",
      "Enterprise Wi-Fi 6 Access Points & Seamless Mesh Roaming",
      "Managed & Unmanaged PoE / PoE+ Network Switches",
      "Server Rack Assembly, Patch Panels & Cable Dressing",
      "Wi-Fi Extenders & Wireless Point-to-Point Links"
    ],
    whatWeProvide: [
      {
        title: "Zero Dead-Zone Wireless Architecture",
        desc: "Strategic ceiling access point placement to blanket multi-floor villas and large offices in high-speed Wi-Fi."
      },
      {
        title: "High-Performance PoE Power Distribution",
        desc: "Power IP cameras, VoIP phones, and wireless APs cleanly through single Cat6 network cables."
      },
      {
        title: "Organized Server & Network Racks",
        desc: "Say goodbye to tangled wires. We build color-coded, labeled, and cleanly terminated patch panels."
      },
      {
        title: "Bandwidth Optimization & VLAN Security",
        desc: "Separate guest traffic from internal company servers and CCTV video streams for maximum network security."
      }
    ],
    keyFeatures: [
      "Wi-Fi 6 Gigabit Throughput",
      "Zero-Handoff Seamless Roaming",
      "PoE/PoE+ Power Delivery",
      "100% Pure Annealed Copper Cabling",
      "Centralized Cloud Management",
      "Clean Rack Cable Dressing"
    ],
    applications: [
      "Multi-Story Residences & Penthouses",
      "Corporate Workspaces & Co-working Hubs",
      "Commercial Warehouses & Logistics Hubs",
      "Hotels, Cafes & Restaurants",
      "Retail Outlets & Branch Offices"
    ],
    installationProcess: [
      { step: "01", title: "Wi-Fi RF Heatmap & Cabling Survey", desc: "We test signal interference and map concealed conduit lines across floors." },
      { step: "02", title: "Backbone Cable Pulling", desc: "Heavy-duty pure copper Cat6 lines are routed safely through conduits and cable trays." },
      { step: "03", title: "Rack & Switch Dressing", desc: "Network switches, routers, and patch panels are mounted and neatly terminated." },
      { step: "04", title: "Speed Testing & Handoff", desc: "Speed verification, roaming testing, and single SSID credential configuration." }
    ],
    faqs: [
      {
        q: "What is the difference between an ordinary range extender and an access point?",
        a: "Basic plug-in extenders cut your Wi-Fi speed in half. Enterprise access points use a dedicated gigabit Ethernet backhaul to deliver full 100% broadband speed without packet drops."
      },
      {
        q: "Do you provide concealed cabling in finished homes and offices?",
        a: "Yes. Our team specializes in neat, concealed wire routing using matching PVC casing or existing internal conduits without damaging your walls."
      }
    ]
  },
  "access-control": {
    slug: "access-control",
    name: "Access Control & Biometric Systems",
    heroTitle: "Biometric Access Control & Attendance",
    heroSubtitle: "Protect sensitive areas and automate employee attendance tracking with AI face recognition, fingerprint terminals, and electromagnetic door locks.",
    heroImage: "/assets/access-control-biometric.jpg",
    shortIntro: "Manage entry permissions and eliminate proxy attendance. Mextech installs reliable biometric access control and cloud attendance systems for businesses across India, with dedicated support from Gurugram.",
    includedServices: [
      "Contactless AI Facial Recognition Terminals",
      "High-Precision Optical Fingerprint Scanners",
      "RFID Card Readers & Pin Pad Controllers",
      "Electromagnetic Door Locks (EM Locks) & Exit Push Buttons",
      "Time & Attendance Software with Automated Payroll Export"
    ],
    whatWeProvide: [
      {
        title: "Secure Entry Access Automation",
        desc: "Prevent unauthorized entry into server rooms, executive cabins, cash counters, and inventory spaces."
      },
      {
        title: "Foolproof Shift & Attendance Tracking",
        desc: "Eliminate manual register books with automated daily check-in/check-out timestamps and overtime reports."
      },
      {
        title: "Heavy-Duty Magnetic Locks & Exit Hardware",
        desc: "Tested 600-1200 lbs electromagnetic locks compatible with glass doors, wooden doors, and metal gates."
      },
      {
        title: "Battery Backup Power (UPS)",
        desc: "Built-in uninterrupted power backup to keep electronic locks secure during electricity cuts."
      }
    ],
    keyFeatures: [
      "Sub-0.2 Second Facial Recognition",
      "Anti-Spoofing Live Body Detection",
      "Heavy-Duty 600 lbs Magnetic Lock",
      "Automated Monthly Payroll Reports",
      "Multi-Door Centralized Control",
      "Emergency Fail-Safe Release"
    ],
    applications: [
      "Corporate Offices & IT Hubs",
      "Manufacturing Units & Factories",
      "Banks & Financial Institutions",
      "Hospitals, Clinics & Labs",
      "Gyms, Clubs & Co-working Spaces"
    ],
    installationProcess: [
      { step: "01", title: "Door Type Assessment", desc: "Inspection of glass, wooden, or metal doors to select appropriate brackets and EM locks." },
      { step: "02", title: "Hardware Mounting", desc: "Biometric reader, exit switch, and power supply are securely installed." },
      { step: "03", title: "Software Configuration", desc: "We configure employee shifts, departments, and payroll reporting software on your PC." },
      { step: "04", title: "Admin Training", desc: "Step-by-step training for HR and managers on enrolling users and downloading reports." }
    ],
    faqs: [
      {
        q: "What happens to the magnetic door locks during a power failure?",
        a: "We provide dedicated battery backup power supplies that keep the access control system running for hours. By safety regulations, systems also have emergency manual release switches."
      },
      {
        q: "Can the attendance software export reports to Excel?",
        a: "Yes. The software exports clean daily, weekly, and monthly attendance reports directly into Excel, CSV, or integrates with third-party HRMS software."
      }
    ]
  },
  "fire-security": {
    slug: "fire-security",
    name: "Fire & Security Alarm Systems",
    heroTitle: "Fire Safety, Alarms & Protection",
    heroSubtitle: "Certified optical smoke detectors, perimeter intrusion alarms, and ISI-certified fire extinguishers designed for maximum life safety.",
    heroImage: "/assets/fire-security-alarm.jpg",
    shortIntro: "Early detection prevents catastrophe. Mextech provides complete commercial and residential fire alarm networks, intrusion warning sensors, and certified fire extinguishers.",
    includedServices: [
      "Addressable & Conventional Fire Alarm Panels",
      "Optical Smoke Detectors & Rate-of-Rise Heat Sensors",
      "Manual Call Points (MCP) & High-Decibel Hooters",
      "Perimeter Intrusion Sensors & GSM Auto-Dialers",
      "ISI-Marked ABC Powder & CO2 Fire Extinguishers"
    ],
    whatWeProvide: [
      {
        title: "Early Smoke & Fire Detection",
        desc: "High-sensitivity optical sensors identify smoldering fires before flames erupt, providing vital evacuation time."
      },
      {
        title: "Audible Warning & GSM Auto-Alerts",
        desc: "Flashing strobe lights and loud sirens combined with automated phone calls to owners and fire departments."
      },
      {
        title: "Perimeter Intrusion Protection",
        desc: "Motion sensors and magnetic door contacts that sound alarms and send instant mobile notifications if breached."
      },
      {
        title: "Certified Fire Extinguishers & Refills",
        desc: "Complete extinguisher supply, wall mounting, hydro-testing, and annual inspection compliance."
      }
    ],
    keyFeatures: [
      "Microprocessor Control Panels",
      "Battery Backup Emergency Operation",
      "GSM Mobile Phone Alert Dialers",
      "Dual Optical Smoke Sensors",
      "ISI Certified Safety Standards",
      "Annual Maintenance & Testing"
    ],
    applications: [
      "Factories & Manufacturing Sheds",
      "Commercial Shopping Complexes",
      "Residential Buildings & Villas",
      "Server Rooms & Electrical Panels",
      "Educational Institutes & Labs"
    ],
    installationProcess: [
      { step: "01", title: "Compliance & Hazard Audit", desc: "Evaluate fire risks, room volumes, and exit paths as per local fire safety standards." },
      { step: "02", title: "Sensor & Panel Deployment", desc: "Strategic placement of smoke sensors, manual pull stations, and alarm sounders." },
      { step: "03", title: "Extinguisher Mounting", desc: "Installing certified ABC/CO2 cylinders with photoluminescent signage." },
      { step: "04", title: "Testing & Certification", desc: "Live smoke aerosol testing, audibility verification, and emergency response training." }
    ],
    faqs: [
      {
        q: "What type of fire extinguisher is recommended for server rooms and electronics?",
        a: "CO2 (Carbon Dioxide) and Clean Agent extinguishers are recommended for electrical equipment and server racks because they extinguish flames without leaving residue that damages circuitry."
      },
      {
        q: "How often should fire extinguishers be inspected or refilled?",
        a: "Fire extinguishers should have visual pressure checks quarterly and formal hydro-testing and refilling every 1 to 3 years according to manufacturer and local safety standards."
      }
    ]
  },
  "video-door-phone": {
    slug: "video-door-phone",
    name: "Video Door Phone & Smart Intercom",
    heroTitle: "Smart Video Intercoms & Door Entry",
    heroSubtitle: "Screen visitors safely before opening your door with HD cameras, capacitive touch screens, two-way audio, and remote smartphone unlock.",
    heroImage: "/assets/video-door-phone.jpg",
    shortIntro: "Modern convenience meets home security. Mextech installs premium Video Door Phone systems for villas, builder floors, and apartments across India, with dedicated support from Gurugram.",
    includedServices: [
      "7-Inch to 10-Inch Color Touchscreen Indoor Monitors",
      "Weatherproof Outdoor Call Units with IR Night Vision",
      "Electronic Rim Lock & Electromagnetic Door Unlock Integration",
      "Mobile App Connectivity to Answer Calls Anywhere",
      "Visitor Snapshot & Video Memory Recording"
    ],
    whatWeProvide: [
      {
        title: "Visitor Screening in Full Color",
        desc: "See and speak with delivery personnel and visitors clearly from your living room or kitchen monitor."
      },
      {
        title: "One-Touch Electronic Door Unlock",
        desc: "Unlock your main gate or entrance door with a single tap on the indoor screen or smartphone app."
      },
      {
        title: "Mobile Calling When Away",
        desc: "When someone rings your doorbell, your smartphone rings instantly so you can speak to them from anywhere."
      },
      {
        title: "Visitor Photo Memory",
        desc: "Automatic image capture whenever someone rings the bell, so you know who arrived while you were out."
      }
    ],
    keyFeatures: [
      "HD Wide-Angle Camera Optics",
      "Infrared Night Vision",
      "Capacitive Touch Display",
      "Remote Electric Lock Release",
      "Two-Way Audio with Noise Cancellation",
      "Waterproof & Vandal-Resistant Outdoor Unit"
    ],
    applications: [
      "Independent Floors & Builder Floors",
      "Luxury Villas & Farmhouses",
      "Apartments & Gated Societies",
      "Office Entrances & Private Clinics"
    ],
    installationProcess: [
      { step: "01", title: "Wiring & Gate Inspection", desc: "Check conduit paths between the main entrance gate and inside monitor locations." },
      { step: "02", title: "Outdoor Unit Mounting", desc: "Secure weatherproof outdoor camera station with tamper-resistant screws." },
      { step: "03", title: "Indoor Screen & Lock Connection", desc: "Wall-mount the color touch display and connect with the electric door lock." },
      { step: "04", title: "App Sync & Demonstration", desc: "Configure smartphone notifications and demonstrate easy operation." }
    ],
    faqs: [
      {
        q: "Can I unlock my front gate from the video door phone screen?",
        a: "Yes. By connecting an electric rim lock or magnetic lock to the video door phone, you can release the lock with one touch from the indoor screen or mobile app."
      },
      {
        q: "Can we install multiple indoor screens for multi-floor villas?",
        a: "Yes. We can install master and slave monitors on each floor (ground floor, first floor, second floor) so you can answer from anywhere."
      }
    ]
  },
  "repair-maintenance": {
    slug: "repair-maintenance",
    name: "CCTV/DVR Repair & Annual Maintenance (AMC)",
    heroTitle: "Component-Level Repair & Maintenance AMC",
    heroSubtitle: "Trusted diagnostic workbench for dead DVRs, video loss, flickering channels, motherboard soldering, and proactive AMC servicing — with Pan India service coverage.",
    heroImage: "/assets/security-maintenance.jpg",
    shortIntro: "Don't discard expensive equipment. Mextech provides skilled component-level repair for DVRs, NVRs, SMPS power supplies, and ongoing security system maintenance.",
    includedServices: [
      "DVR / NVR Motherboard Chip-Level Micro-Soldering",
      "SMPS Central Power Supply Replacement & Rebuild",
      "Surveillance Hard Disk Diagnostic & Data Recovery",
      "Camera Lens Cleaning, Focusing & Re-alignment",
      "Annual Maintenance Contracts (Comprehensive & Non-Comprehensive)"
    ],
    whatWeProvide: [
      {
        title: "Fast Diagnostic Bench Testing",
        desc: "Troubleshooting 'No Video', continuous beeping, boot loops, or corrupted firmware issues on test benches."
      },
      {
        title: "Cost-Effective Repair vs. Replacement",
        desc: "Save up to 70% compared to purchasing new equipment by repairing faulty power supplies, capacitors, and connectors."
      },
      {
        title: "Proactive Preventive AMC Visits",
        desc: "Quarterly preventative inspections, lens polishing, cable health testing, and backup retention audits."
      },
      {
        title: "Guaranteed Priority Breakdown Support",
        desc: "Fast emergency service dispatch with dedicated Gurugram support and temporary standby units available during repairs."
      }
    ],
    keyFeatures: [
      "Chip-Level SMD Soldering Stations",
      "Firmware Recovery & Flashing",
      "Video Loss Troubleshooting",
      "Same-Day Diagnostic Reporting",
      "Genuine Replacement Spare Parts",
      "Full Service Warranty on Repaired Units"
    ],
    applications: [
      "Residential CCTV Installations",
      "Commercial Offices & Factories with Existing Setups",
      "Retail Stores & Restaurants",
      "Apartment Society Surveillance Systems"
    ],
    installationProcess: [
      { step: "01", title: "Inspection / Bench Diagnosis", desc: "We test the faulty camera, DVR, or power unit to identify the exact failed component." },
      { step: "02", title: "Transparent Cost Estimate", desc: "You receive an honest quote explaining what needs repair without surprise fees." },
      { step: "03", title: "Precision Component Repair", desc: "Expert micro-soldering, component replacement, and 24-hour burn-in stress testing." },
      { step: "04", title: "Reinstallation & System Test", desc: "Hardware is reinstalled and verified on-site for optimal recording and picture clarity." }
    ],
    faqs: [
      {
        q: "My DVR is beeping and not recording. What is wrong?",
        a: "Continuous beeping usually indicates a hard drive failure, power supply issue, or bad sectors preventing recording. We test the drive and power supply to restore recording immediately."
      },
      {
        q: "What is included in a CCTV Annual Maintenance Contract (AMC)?",
        a: "AMC includes regular preventative service visits (cleaning lenses, tightening joints, checking power voltages, verifying recording logs) and priority emergency repair calls with zero labor charges."
      }
    ]
  }
};

// 6 Core Strengths (Numbered 01-06 for clean visual presentation)
export const STRENGTHS_DATA: StrengthItem[] = [
  {
    id: "str-1",
    number: "01",
    title: "Professional Installation",
    description: "Concealed conduit laying, precision camera angling, and zero-compromise cable dressing by trained field technicians."
  },
  {
    id: "str-2",
    number: "02",
    title: "Quality Products",
    description: "100% genuine hardware from brands we deal with: Hikvision, CP Plus, Dahua, Prama, Honeywell, Alba Urmet, D-Link, and WD Purple."
  },
  {
    id: "str-3",
    number: "03",
    title: "Quick Service",
    description: "Pan India service coverage with dedicated local support in Delhi NCR for site surveys, installation, and after-sales service."
  },
  {
    id: "str-4",
    number: "04",
    title: "After-Sales Support",
    description: "Dedicated ongoing technical assistance, warranty support, and structured AMC maintenance to ensure zero system downtime."
  },
  {
    id: "str-5",
    number: "05",
    title: "Customized Solutions",
    description: "Tailored architectures designed around your exact floor plan, risk assessment, lighting conditions, and budget."
  },
  {
    id: "str-6",
    number: "06",
    title: "Security & IT Expertise",
    description: "Unified mastery over low-voltage security (CCTV, fire, access) and complex enterprise IT networking infrastructure."
  }
];

// Curated Project Showcase Items
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "project-1",
    title: "Residential CCTV & Smart VDP",
    category: "Residential CCTV",
    location: "Sector 48, Gurugram",
    imageUrl: "/assets/video-door-phone.jpg",
    description: "8-camera 5MP IP surveillance system with smart night vision, touch video door phone, and remote mobile viewing.",
    highlights: ["8x 5MP IP Cameras", "Touch Video Door Phone", "100% Concealed Wiring"]
  },
  {
    id: "project-2",
    title: "Corporate Office Surveillance & Rack",
    category: "Office Surveillance",
    location: "Cyber City, Gurugram",
    imageUrl: "/assets/main.jpg",
    description: "Multi-floor 32-camera NVR setup with structured Cat6 network cabling, 24-port PoE switches, and server rack management.",
    highlights: ["32x IP Dome Cameras", "32-CH 4K NVR Setup", "Server Rack Cable Dressing"]
  },
  {
    id: "project-3",
    title: "Retail Store Surveillance & Access",
    category: "Commercial Security",
    location: "MG Road, Gurugram",
    imageUrl: "/assets/nvr-dvr-ptz.jpg",
    description: "High-clarity optical zoom cameras covering cash counters, merchandise aisles, and biometrics door control for stockrooms.",
    highlights: ["Audio-Enabled Cameras", "RFID Stockroom Access", "Cash Counter Micro-View"]
  },
  {
    id: "project-4",
    title: "High-Speed Mesh Wi-Fi & Backbone",
    category: "Networking Installation",
    location: "DLF Phase 2, Gurugram",
    imageUrl: "/assets/wifi-extender-ap.jpg",
    description: "Enterprise Wi-Fi 6 access point deployment across a 3-level facility with seamless zero-handoff roaming and 500+ Mbps throughput.",
    highlights: ["Gigabit PoE Backbone", "Dual-Band Wi-Fi 6", "Zero Dead Zones"]
  },
  {
    id: "project-5",
    title: "Biometric Attendance & Door Lock",
    category: "Access Control",
    location: "Udyog Vihar, Gurugram",
    imageUrl: "/assets/access-control-biometric.jpg",
    description: "Dual AI face recognition and biometric fingerprint access control linked directly with automated payroll software.",
    highlights: ["Face & Fingerprint Combo", "Electromagnetic Door Lock", "Automated Attendance Logs"]
  },
  {
    id: "project-6",
    title: "Industrial Perimeter Surveillance",
    category: "Industrial Security",
    location: "IMT Manesar, Haryana",
    imageUrl: "/assets/security-systems.jpg",
    description: "Long-range IR bullet cameras with perimeter tripwire intrusion alert, fiber optic backhaul, and 24/7 central guardroom viewing.",
    highlights: ["16x Long-Range Bullets", "Fiber Optic Line Link", "Perimeter AI Tripwire"]
  }
];

// Authentic customer reviews
export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Rajesh Sharma",
    roleOrLocation: "Sector 23, Gurugram",
    rating: 5,
    date: "Recent Customer",
    serviceType: "CCTV Installation & Cabling",
    comment: "Called Mextech for home CCTV camera installation. The technician team completed the job cleanly without exposing wires. Mobile app configuration was seamless.",
    verified: true
  },
  {
    id: "rev-2",
    name: "Amit Varma",
    roleOrLocation: "DLF Phase 3, Gurugram",
    rating: 5,
    date: "Recent Customer",
    serviceType: "Office Wi-Fi & Networking",
    comment: "We had terrible Wi-Fi dead zones across our office floors. Mextech surveyed the site and installed PoE access points and Cat6 cabling. Internet is now blazing fast everywhere.",
    verified: true
  },
  {
    id: "rev-3",
    name: "Vikram Malhotra",
    roleOrLocation: "Palam Vihar, Gurugram",
    rating: 5,
    date: "Recent Customer",
    serviceType: "DVR Board Repair",
    comment: "Our 16-channel DVR stopped recording. Other vendors asked to replace the entire unit, but Mextech diagnosed the PCB power issue and repaired it same-day at a very fair price.",
    verified: true
  },
  {
    id: "rev-4",
    name: "Priya Singhania",
    roleOrLocation: "Sector 48, Gurugram",
    rating: 5,
    date: "Recent Customer",
    serviceType: "Video Door Phone & Lock",
    comment: "Got a touch-screen video door phone with electronic lock integration done by Mextech. Super clear picture day and night, and unlocking the gate from the screen is effortless.",
    verified: true
  },
  {
    id: "rev-5",
    name: "Deepak Rao",
    roleOrLocation: "Udyog Vihar, Gurugram",
    rating: 5,
    date: "Recent Customer",
    serviceType: "Biometric Attendance System",
    comment: "Mextech installed face recognition attendance terminals and magnetic locks for our staff. The software reports make our monthly payroll processing fast and accurate.",
    verified: true
  },
  {
    id: "rev-6",
    name: "Sunita Chawla",
    roleOrLocation: "Golf Course Ext. Rd",
    rating: 5,
    date: "Recent Customer",
    serviceType: "Fire Alarm & Smoke Sensors",
    comment: "Thoroughly impressed by their technical expertise. Installed smoke detection panels and security alert hooters as per commercial building norms. Very timely execution.",
    verified: true
  }
];

export const TRUST_INDICATORS = [
  "Professional Installation",
  "Reliable Products",
  "Quick Support",
  `Established ${COMPANY_START_YEAR}`
];
