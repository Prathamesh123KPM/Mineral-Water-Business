
import React from 'react';
import {
  Droplets,
  Settings,
  Package,
  Truck,
  ShieldCheck,
  Globe,
  Activity,
  GlassWater,
  Beer,
  Cpu
} from 'lucide-react';
import { Product, Testimonial, Service, Project } from './types';

import packageImg from './Packaged Drinking Water Plant.png';
import industrial from './industrial.png';
import glass from './Glass bottling plant.png';
import natural from './natural.png';
import carbonated from './Soft D P.jpeg';
import juice from './Fruit J P.jpeg';
import machine from './Fully automatic labeling machine.png';
import shrink from './shrink.png';
import shrinkA from './Automatic shrink wraping machine.jpeg';
import bottle from './Mineral Water Plant.png';
import ro from './RO Plant.jpeg';
import csdCarbonator from './Carbonator.jpeg';
import juiceFilling from './Fruit juice filling machine.jpeg';
import pet from './Semi automatic blowing machine.jpeg';
import petA from './Automatic blowing machine.jpeg';
import process from './process.png';
import plant from './waterplant.png';
import md from "../MD.png"
import mh from "../MH.png"

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Mineral Water Plant',
    category: '',
    description: 'Complete treatment and bottling solutions for safe, compliant drinking water production. Get the best mineral water bottling plant price and project report for your small scale mineral water plant.',
    longDescription: `
      <p>Our <strong>Mineral Water Plants</strong> are engineered to deliver the highest purity standards, ensuring safe and healthy drinking water for consumers. The system incorporates a multi-stage filtration process, including sand filtration, activated carbon filtration, and advanced micron cartridge filters, effectively removing all suspended solids and impurities. The core of the system features a high-performance <strong>Reverse Osmosis (RO) unit</strong> that eliminates dissolved salts and contaminants, followed by UV sterilization and ozonation to guarantee microbiological safety.</p>
      
      <p>Designed for efficiency and durability, our plants come with <strong>SS 316L piping</strong> and food-grade stainless steel components to prevent contamination and ensure long-term reliability. The fully automatic operation minimizes manual intervention, reducing labor costs while maximizing production output. Whether you are setting up a <strong>small-scale mineral water plant</strong> or a large industrial unit, our solutions are scalable to meet your specific capacity requirements, ranging from 2000 BPH to 20000 BPH.</p>
      
      <p>We provide comprehensive support, including a detailed <strong>mineral water project report</strong>, ISI/BIS compliance guidance, and assistance with plant layout and installation. Our turnkey solutions cover everything from water treatment to bottling and packaging, offering you a hassle-free experience in establishing your water business. Invest in our state-of-the-art technology to produce premium quality mineral water that meets international standards.</p>
    `,
    image: plant,
    images: [
      plant,
      // 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
      // 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      // 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'
    ],
    specs: ['ISI/BIS Compliance', 'SS 316 Piping', 'Fully Automatic Operation']
  },
  {
    id: '8',
    name: 'Fruit Juice Plant',
    category: '',
    description: 'Turnkey processing and packaging solutions for pulp and non-pulp fruit juices.',
    longDescription: `
      <p>Experience the pinnacle of beverage processing with our <strong>Fruit Juice Plants</strong>, designed to handle both pulp and non-pulp juices with exceptional precision. Our manufacturing lines encompass the entire production cycle, from fruit washing and sorting to pulp extraction, blending, and pasteurization. The inclusion of <strong>Hot Fill technology</strong> ensures that the juice retains its natural flavor and nutritional value while achieving extended shelf life without the need for preservatives.</p>
      
      <p>Our systems feature advanced <strong>aseptic filling options</strong> that maintain sterility throughout the packaging process, crucial for premium juice products. The pasteurization units are calibrated for optimal thermal treatment, eliminating harmful bacteria while preserving the organoleptic properties of the fruit. With customizable capacities, our plants are suitable for processing a wide variety of fruits, including mango, orange, apple, and mixed blends.</p>
      
      <p>Automation is at the heart of our design, with PLC-controlled operations ensuring consistent product quality and operational efficiency. The robust construction using <strong>SS 304/316 grade stainless steel</strong> ensures hygiene and easy cleaning, complying with stringent food safety regulations. Partner with us to set up a world-class fruit juice processing facility that delivers fresh, high-quality juice to the market.</p>
    `,
    image: juice,
    specs: ['Hot Fill Technology', 'Pasteurization System', 'Aseptic Filling Options']
  },
  {
    id: '3',
    name: 'Soft Drink Plant',
    category: '',
    description: 'Complete CSD lines with high-pressure carbonation and precision filling. Ideal for starting a business like Coca Cola with optimized manufacturing costs.',
    longDescription: `
      <p>Step into the dynamic world of carbonated beverages with our high-speed <strong>Soft Drink Plants</strong> (CSD Lines). These fully automated turnkey solutions are engineered for the production of sparkling water, soda, and various carbonated soft drinks. The system features a precision-engineered <strong>Carbonator</strong> that ensures distinct and uniform carbonation levels, delivering the perfect fizz in every sip. Our advanced counter-pressure filling machines prevent foaming and ensure accurate fill levels, even at high production speeds.</p>
      
      <p>Why dream of starting a business like Coca-Cola when you can make it a reality? Our plants are designed to optimize <strong>manufacturing costs</strong> without compromising on quality. The integrated flavor dosing unit allows for precise mixing of syrup and water, ensuring consistent taste profiles across batches. From bottle rinsing to capping and labeling, every stage is synchronized for maximum efficiency and minimal wastage.</p>
      
      <p>Built with high-quality components and reducing energy consumption, our CSD lines offer a robust return on investment. Whether you are launching a new local brand or expanding an existing product line, our <strong>Soft Drink Plants</strong> provide the reliability and scalability needed to succeed in the competitive beverage industry.</p>
    `,
    image: carbonated,
    specs: ['High-Pressure Carbonation', 'Counter-Pressure Filling', 'Flavor Dosing Unit']
  },
  {
    id: '2',
    name: 'Bottled Water Plant',
    category: 'Turnkey Systems',
    description: 'High-efficiency systems for hygienic bottling and packaging of purified water. Discover competitive mineral water machine price in India and expert water bottle plant machinery.',
    longDescription: `
      <p>Optimize your water packaging operations with our <strong>Bottled Water Plants</strong>, renowned for their high efficiency and hygienic design. These turnkey systems integrate rinsing, filling, and capping into a single compact monoblock unit, significantly reducing the footprint and minimizing the risk of contamination. Capable of handling speeds from <strong>2000 to 20000 Bottles Per Hour (BPH)</strong>, our machinery is adaptable to various bottle sizes and shapes.</p>
      
      <p>We understand that cost is a critical factor, which is why we offer the most competitive <strong>mineral water machine prices in India</strong>. Our machines are engineered for energy efficiency, lowering operational costs while maintaining high throughput. Advanced features like 'No Bottle - No Fill' and 'No Cap - Machine Stop' systems prevent wastage and protect equipment, ensuring smooth, uninterrupted production runs.</p>
      
      <p>Beyond machinery, we provide expert guidance on setting up a successful water bottle plant. From selecting the right <strong>water bottle plant machinery</strong> to optimizing the layout for workflow efficiency, our team supports you at every step. Choose our solutions for a reliable, profitable, and future-ready bottled water business.</p>
    `,
    image: bottle,
    images: [
      bottle,
      // 'https://images.unsplash.com/photo-1536582527263-d1433f446059?auto=format&fit=crop&q=80&w=800',
      // 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
    ],
    specs: ['2000 to 20000 BPH', 'Integrated Rinsing/Filling/Capping', 'Energy Efficient']
  },
  {
    id: '4',
    name: 'Industrial Alkaline Water',
    category: 'Water Treatment',
    description: 'Advanced ionization systems for producing antioxidant-rich alkaline water.',
    longDescription: `
      <p>Tap into the growing health and wellness market with our <strong>Industrial Alkaline Water</strong> systems. Utilizing advanced electrolysis technology, these plants raise the pH level of water to a healthy 8.5-9.5 range, creating superior hydration products. The ionization process not only alkalizes the water but also enriches it with negative oxidation-reduction potential (ORP), making it <strong>antioxidant-rich</strong> and beneficial for neutralizing free radicals in the body.</p>
      
      <p>Our systems are designed for industrial-scale production without compromising on consistency. Precise control over pH levels and mineral content ensures that every bottle meets strict quality parameters. The technology allows for the addition of essential minerals like Calcium, Magnesium, and Potassium, enhancing the taste and health benefits of the final product.</p>
      
      <p>With increasing consumer awareness about health, alkaline water is a high-value product category. Our robust equipment is built for continuous operation and easy maintenance, providing a reliable platform for producing premium functional water brands.</p>
    `,
    image: industrial,
    images: [
      industrial
    ],
    specs: ['pH Level 8.5-9.5', 'Electrolysis Technology', 'Antioxidant Rich Output']
  },
  {
    id: '5',
    name: 'Glass Bottling Plant',
    category: 'Bottling & Filling',
    description: 'Premium bottling equipment for still and sparkling water in glass containers.',
    longDescription: `
      <p>Elevate your brand image with our <strong>Glass Bottling Plants</strong>, specifically designed for premium still and sparkling water products. Glass packaging is synonymous with luxury and sustainability, and our equipment ensures your product looks as good as it tastes. The line features specialized <strong>gentle bottle handling</strong> systems to prevent breakage and scuffing, ensuring pristine presentation on the shelf.</p>
      
      <p>For sparkling water, our machines utilize advanced <strong>vacuum filling technology</strong> to maintain carbonation levels filling, while still water lines ensure precise level filling. The crowning and capping units are versatile, compatible with various closure types including crown caps, screw caps, and ROPP caps. This flexibility allows you to cater to diverse market segments, from high-end hospitality to retail.</p>
      
      <p>Our glass bottling solutions are not just about aesthetics; they are built for performance. Efficient cleaning systems, robust conveyors, and stringent quality control sensors ensure a smooth production flow. Investing in a glass bottling line positions your product in the premium segment, offering higher margins and distinct market differentiation.</p>
    `,
    image: glass,
    specs: ['Gentle Bottle Handling', 'Vacuum Filling', 'Crown/Screw Capping']
  },
  {
    id: '14',
    name: 'CSD Carbonator',
    category: 'Turnkey Systems',
    description: 'High-efficiency carbonation system for precise CO2 injection in beverages.',
    longDescription: `
      <p>The <strong>CSD Carbonator</strong> is the heart of any carbonated soft drink line, delivering precise and stable carbonation for consistent product quality. Our high-efficiency systems utilize advanced mixing technology to ensure uniform <strong>CO2 injection</strong> into the beverage matrix. This results in better gas retention and a refreshing mouthfeel that consumers love.</p>
      
      <p>Designed for continuous operation, these carbonators feature automatic controls for flow rate, temperature, and pressure, maintaining optimal conditions for carbonation. The <strong>energy-efficient</strong> design minimizes power consumption while maximizing output, making it a cost-effective solution for high-volume production. Whether producing soda, sparkling water, or energy drinks, our carbonator adapts seamlessly to different recipes.</p>
      
      <p>Compact and easy to integrate, our CSD Carbonators are built with sanitary stainless steel construction for hygiene and durability. Precise control over carbonation levels allows manufacturers to fine-tune their products, ensuring they meet the exact specifications of their brand standards.</p>
    `,
    image: csdCarbonator,
    specs: ['Precise CO2 Control', 'Continuous Operation', 'Energy Efficient']
  },
  {
    id: '15',
    name: 'Fruit Juice Filling Machine',
    category: 'Turnkey Systems',
    description: 'Advanced filling machine designed specifically for fruit juices.',
    longDescription: `
      <p>Our <strong>Fruit Juice Filling Machines</strong> are engineered to handle the unique characteristics of juice beverages, from thin clear juices to viscous nectars with pulp. The machine employs specialized filling valves that ensure <strong>high accuracy</strong> and drip-free operation, minimizing product loss. Compatible with both hot fill and cold fill processes, it offers versatility for different production requirements.</p>
      
      <p>Hygiene is paramount in juice production. Our machines feature an open design for <strong>easy cleaning</strong> and can be integrated with automated CIP (Clean-in-Place) systems. This ensures thorough sanitization between batches, preventing cross-contamination and spoilage. The high-speed operation ensures you can meet market demand without bottlenecks in your packaging line.</p>
      
      <p>With quick changeover parts, the machine can easily adapt to different bottle sizes and formats. User-friendly cleaning interfaces and robust construction make our Fruit Juice Filling Machine a reliable asset for any beverage manufacturer looking to scale up production efficiently.</p>
    `,
    image: juiceFilling,
    specs: ['Hot Fill Options', 'High Speed', 'Easy Cleaning']
  },
  {
    id: '16',
    name: 'Fully Automatic Filling Machine',
    category: 'Turnkey Systems',
    description: 'State-of-the-art automatic filling machine for various liquid products.',
    longDescription: `
      <p>Versatility meets precision in our <strong>Fully Automatic Filling Machine</strong>. Designed to handle a wide range of liquid viscosities, this machine is ideal for water, juices, oils, and other non-carbonated beverages. The advanced <strong>PLC control system</strong> allows for easy setup and operation, ensuring consistent fill volumes with <strong>high accuracy</strong> every time.</p>
      
      <p>The machine supports <strong>multiple formats</strong>, allowing for quick adjustments between different bottle sizes and shapes. This flexibility is essential for businesses producing multiple SKUs. The automatic bottle indexing and filling mechanism reduce manual labor and increase throughput, significantly boosting overall plant efficiency.</p>
      
      <p>Constructed with high-grade stainless steel and equipped with safety interlocks, this filling machine is built for durability and safe operation. It integrates seamlessly into existing production lines, providing a robust solution for automating your liquid packaging process.</p>
    `,
    image: bottle,
    specs: ['High Accuracy', 'Multiple Formats', 'PLC Control']
  },
  {
    id: '6',
    name: 'Natural Mineral Water Plants',
    category: 'Turnkey Systems',
    description: 'Specialized systems that preserve the natural mineral content of source water. Comprehensive mineral water plant project report and ISI mark registration guidance included.',
    longDescription: `
      <p>Preserve the purity and taste of nature with our <strong>Natural Mineral Water Plants</strong>. Unlike standard treatment processes that strip water of everything, our specialized systems are designed to remove specific contaminants like iron and manganese while retaining the essential natural minerals. This <strong>chemical-free treatment</strong> ensures the water remains authentic to its source, meeting the strict criteria for Natural Mineral Water labeling.</p>
      
      <p>We dictate our expertise to <strong>source protection</strong> and hygienic bottling to prevent any external contamination. Our turnkey solution includes rigorous testing protocols and equipment that safeguards the biological stability of the water without harsh treatments. We also provide a comprehensive <strong>mineral water plant project report</strong> and guide you through the complex <strong>ISI mark registration</strong> process, ensuring full regulatory compliance.</p>
      
      <p>Start a premium water brand that stands out for its natural quality. Our holistic approach covers everything from hydro-geological surveys to the final bottle design, helping you deliver a product that consumers trust and prefer.</p>
    `,
    image: natural,
    specs: ['Source Protection', 'Iron/Manganese Removal', 'Chemical-free Treatment']
  },
  {
    id: '7',
    name: 'Packaged Drinking Water Plant',
    category: 'Turnkey Systems',
    description: 'Fully automatic plants designed for high-volume packaged drinking water production. Learn how to start a Bisleri water business with our turnkey drinking water projects.',
    longDescription: `
      <p>Scale your production with our high-capacity <strong>Packaged Drinking Water Plants</strong>, tailored for mass-market distribution. These fully automatic plants are designed to treat various water sources, including borewell, river, and municipal water, ensuring a standardized, safe product every time. The rigorous <strong>multi-stage filtration</strong> and Reverse Osmosis process guarantee the removal of all dissolved impurities, followed by <strong>Ozone Disinfection</strong> for extended shelf life.</p>
      
      <p>Ever wondered <strong>how to start a Bisleri water business</strong>? Our turnkey projects provide the blueprint for success. We offer compact yet powerful layouts that maximize space utilization and production efficiency. From water treatment to automatic bottle blowing, filling, and labeling, our integrated lines ensure a seamless workflow.</p>
      
      <p>Reliability is key in high-volume production. Our plants feature robust components and advanced automation to minimize downtime and maintenance costs. Join the league of successful water entrepreneurs with our proven technology and comprehensive project support.</p>
    `,
    image: packageImg,
    images: [
      packageImg,
      // 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
    ],
    specs: ['Multi-stage Filtration', 'Ozone Disinfection', 'Compact Layout']
  },
  {
    id: '9',
    name: 'Fully Automatic Labeling Machine',
    category: 'Packaging & Labeling',
    description: 'Versatile end-of-line solutions including case packers and robotic palletizers. Advanced water packets machine and mineral water packing machine options available.',
    longDescription: `
      <p>Finish your production line with precision using our <strong>Fully Automatic Labeling Machines</strong>. Capable of applying wrap-around, shrink sleeve, and sticker labels, these machines ensure your brand looks perfect on every bottle. The <strong>high-speed operation</strong> matches the pace of the fastest filling lines, ensuring no bottlenecks at the packaging stage.</p>
      
      <p>Our packaging solutions extend beyond labeling. We offer advanced <strong>robotic palletizers</strong> and case packers to automate the end-of-line process, reducing manual handling and labor costs. Whether you need a <strong>mineral water packing machine</strong> for bottles or a specialized <strong>water packets machine</strong> for pouches, we have the technology to suit your needs.</p>
      
      <p>Consistent, wrinkle-free labeling enhances shelf appeal and brand perception. Our machines feature easy adjustments for different bottle sizes and label types, offering the flexibility required in today's dynamic market.</p>
    `,
    image: machine,
    specs: ['Carton Erector', 'Robotic Palletizing', 'High-Speed Operation']
  },
  {
    id: '10',
    name: 'Semi-Automatic Shrink Wrapping Machine',
    category: 'Packaging & Labeling',
    description: 'Precision thermal tunnel machines for secure bottle and pack wrapping.',
    longDescription: `
      <p>Secure your products for transport and retail with our <strong>Semi-Automatic Shrink Wrapping Machines</strong>. These robust machines use a precision thermal tunnel to tightly wrap groups of bottles in <strong>LDPE film</strong>, creating stable, easy-to-handle packs. The system allows for manual collation with automatic pushing and wrapping, offering a cost-effective balance between automation and control.</p>
      
      <p>Designed for efficiency, our shrink wrappers feature <strong>energy-saving heaters</strong> and an optimized air circulation system within the tunnel. This ensures uniform heat distribution for a perfect shrink finish without wasting energy. The integrated <strong>cooling fan system</strong> rapidly sets the film at the tunnel exit, ensuring the pack is rigid and ready for palletizing immediately.</p>
      
      <p>Ideal for small to medium-scale operations, these machines provide professional packaging quality with low maintenance requirements. They are compatible with various pack configurations, adding versatility to your final packaging line.</p>
    `,
    image: shrink,
    specs: ['LDPE Film Compatible', 'Energy Saving Heaters', 'Cooling Fan System']
  },
  {
    id: '11',
    name: 'Industrial RO Plant',
    category: 'Water Treatment',
    description: 'High-recovery reverse osmosis systems for effective industrial water purification. Expert RO plant solutions, RO setup, and water softener plant manufacturing.',
    longDescription: `
      <p>Achieve superior water purity with our <strong>Industrial RO Plants</strong>, engineered for high performance and durability. Essential for industries requiring specific water quality standards, our Reverse Osmosis systems effectively remove up to 99% of dissolved salts, bacteria, and pyrogens. We focus on <strong>high recovery rates</strong> to minimize water wastage, making our solutions environmentally friendly and cost-effective.</p>
      
      <p>Our plants are built with high-quality <strong>FRP or SS pressure vessels</strong> and premium membranes to withstand rigorous industrial use. The integrated <strong>TDS controller</strong> allows precise management of output water quality. Whether for boiler feed, pharmaceutical use, or beverage production, our <strong>RO setup</strong> is tailored to meet your specific industrial needs.</p>
      
      <p>In addition to RO, we manufacture comprehensive <strong>water softener plants</strong> to tackle hard water issues, protecting your downstream equipment from scaling. Trust our expert engineering for reliable, continuous supply of purified water for your industrial processes.</p>
    `,
    image: ro,
    specs: ['High Recovery Rate', 'FRP/SS Pressure Vessels', 'TDS Controller']
  },
  {
    id: '12',
    name: 'Fully Automatic Pet Blow Molding Machine',
    category: 'Manufacturing',
    description: 'High-speed servo-driven equipment for producing quality PET bottles. Efficient water bottle manufacturing cost with state-of-the-art water factory machines.',
    longDescription: `
      <p>Take control of your bottle supply with our <strong>Fully Automatic Pet Blow Molding Machines</strong>. Producing your own bottles on-site significantly reduces logistics costs and dependency on suppliers. Our machines utilize advanced <strong>servo-driven systems</strong> for precise preform movement and stretching, ensuring uniform wall thickness and high bottle strength.</p>
      
      <p>High efficiency is key to controlling the <strong>water bottle manufacturing cost</strong>. Our blow molders feature energy-efficient <strong>infrared heating</strong> lamps designed to heat preforms deeply and evenly while saving power. The <strong>quick mold change</strong> system allows for rapid switching between different bottle designs, properly accommodating versatile production schedules.</p>
      
      <p>From 50ml pharma bottles to large 20L jars, our state-of-the-art <strong>water factory machines</strong> deliver crystal clear, defect-free PET bottles. Invest in backward integration to enhance your profit margins and production flexibility.</p>
    `,
    image: petA,
    specs: ['Servo Driven', 'Infrared Heating', 'Quick Mold Change']
  },
  {
    id: '13',
    name: 'Processing Equipment',
    category: 'Ancillary Equipment',
    description: 'Essential ancillary equipment including blending tanks and automated CIP systems.',
    longDescription: `
      <p>Every great beverage starts with precise processing. Our range of <strong>Processing Equipment</strong> includes high-quality blending tanks, storage silos, and pasteurizers built from <strong>SS 304/316L Grade</strong> stainless steel. These materials ensure zero corrosion and complete neutrality to the product, maintaining the integrity of flavor and hygiene.</p>
      
      <p>Maintenance and hygiene are simplified with our <strong>Automated CIP (Clean-in-Place)</strong> systems. These units circulate cleaning and sanitizing solutions through the entire processing line without disassembly, ensuring distinct microbiological safety with minimal downtime. Precise <strong>temperature control</strong> systems are integrated to manage heating and cooling cycles accurately.</p>
      
      <p>Whether you are mixing syrups for soft drinks or storing treated water, our robust ancillary equipment forms the reliable backbone of your production facility. Engineered for longevity and ease of use, they are an essential investment for quality-focused manufacturers.</p>
    `,
    image: process,
    specs: ['SS 304/316L Grade', 'Automated CIP', 'Temperature Control']
  },
  {
    id: '17',
    name: 'Fully Automatic Shrink Wrapping Machine',
    category: 'Packaging & Labeling',
    description: 'High-speed shrink wrapping for secure and aesthetic packaging.',
    longDescription: `
      <p>Maximize your packaging throughput with the <strong>Fully Automatic Shrink Wrapping Machine</strong>. Designed for high-speed lines, this machine automates the collation, film wrapping, and sealing process without any manual intervention. It provides a tight, secure, and aesthetically pleasing pack that is ready for transit and display.</p>
      
      <p>The machine features intelligent <strong>automatic film feeding</strong> and cutting systems that reduce material wastage. With <strong>adjustable temperature</strong> controls, the thermal tunnel adapts to different film types and thicknesses, ensuring a consistent shrink finish every time. Its <strong>compact design</strong> allows it to fit easily into existing production layouts.</p>
      
      <p>Reliability meets speed in this advanced packaging solution. By automating the final packaging step, you significantly reduce labor costs and increase the overall efficiency of your production line, ensuring your products reach the market faster and in perfect condition.</p>
    `,
    image: shrinkA,
    specs: ['Adjustable Temperature', 'Automatic Film Feeding', 'Compact Design']
  },
  {
    id: '18',
    name: 'Semi Automatic Pet Blowing Machine',
    category: 'Manufacturing',
    description: 'Reliable and cost-effective semi-automatic machine for PET bottle production.',
    longDescription: `
      <p>The <strong>Semi Automatic Pet Blowing Machine</strong> is the perfect entry-level solution for startups and small-scale manufacturers. Offering a balance of cost-efficiency and performance, this machine allows you to produce high-quality PET bottles with minimal capital investment. Its <strong>easy operation</strong> requires minimal training, making it accessible for new operators.</p>
      
      <p>Despite being semi-automatic, it does not compromise on quality. It uses robust pneumatic systems and high-quality heating elements to ensure consistent bottle formation. The machine is designed for <strong>low maintenance</strong> and long service life, featuring <strong>durable components</strong> that withstand daily industrial use.</p>
      
      <p>For businesses looking to produce their own bottles on a budget, this machine offers a reliable and scalable path. It handles a wide range of preform sizes and mold shapes, giving you the flexibility to launch various bottle designs as your brand grows.</p>
    `,
    image: pet,
    specs: ['Easy Operation', 'Low Maintenance', 'Durable Components']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    client: 'Miqua(Mr.Stephen Coelo)',
    location: 'Maharashtra, India',
    quote: 'The turnkey plant provided by Krupashindu exceeded our expectations in terms of efficiency and support.'
  },
  {
    id: '2',
    client: 'Blue Brook Corporation SRL',
    location: 'Dominican Republic',
    quote: 'Professional engineering and reliable after-sales service. A truly global partner for our expansion.'
  },
  {
    id: '3',
    client: 'Pitaya(Mr.Ahmed Hotail)',
    location: 'Ghana, Africa',
    quote: 'Exceptional build quality and technical expertise. Highly recommended for industrial RO systems.'
  }
];

export const TEAM = [
  {
    id: '1',
    name: 'Mr. Ram Gavhane',
    role: 'Managing Director',
    image: md,
    bio: "Ram Gavhane is a visionary Managing Director dedicated to strategic growth, innovation, and driving long-term success."
  },
  {
    id: '2',
    name: 'Mr. Mohit Khatwani',
    role: 'Marketing Head',
    image: mh,
    bio: 'Mohit Khatwani is a Marketing Head driving digital growth, brand visibility, and lead generation in real estate and hospitality.'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Turnkey Solutions',
    description: 'From plant layout to final commissioning, we handle everything for your mineral water business.',
    icon: 'Globe'
  },
  {
    id: '2',
    title: 'Technical Support',
    description: '24/7 technical assistance and prompt after-sales support to ensure zero downtime.',
    icon: 'Settings'
  },
  {
    id: '3',
    title: 'Installation & Maintenance',
    description: 'Expert engineers for precision installation and preventative maintenance services.',
    icon: 'Activity'
  },
  {
    id: '4',
    title: 'Consulting Services',
    description: 'Professional guidance on industry standards, certifications (ISI/ISO), and market strategy.',
    icon: 'Cpu'
  }
];

export const PROJECTS: Project[] = [
  { id: '1', title: '5000 BPH Bottling Line', category: 'Turnkey', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Industrial RO System', category: 'Purification', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Juice Production Setup', category: 'Beverage', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'Packaging Unit', category: 'Automation', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800' },
];

export const CLIENT_LOGOS = [
  "Mount Mineral (Raigad)",
  "BVG Ltd (Satara)",
  "RS Food (Jharkhand)",
  "Blue Brook (Dominican Republic)",
  "Abu Yousaf (Oman)"
];
