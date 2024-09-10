import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

// General randomizer function to get a random element from an array
function randamoizer(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

app.get("/lifesciences", (req, res) => {
  const depthOfKnowledge = [
    "1. Explain the concept of epigenetics and its impact on gene expression. How do modifications such as DNA methylation and histone acetylation affect cellular processes?",
    "2. Discuss the differences between prokaryotic and eukaryotic gene regulation. How do these differences affect experimental approaches in molecular biology?",
    "3. Describe the process and significance of RNA interference (RNAi). How does RNAi contribute to gene silencing, and what are its potential applications in research and therapy?",
    "4. What are the primary differences between cellular respiration and fermentation? In what scenarios would a cell preferentially use one process over the other?"
  ];

  const practicalApplication = [
    "1. Design an experiment to investigate the effect of a novel antibiotic on bacterial growth. Include details on the experimental setup, controls, and methods of analysis.",
    "2. How would you approach optimizing a protein purification protocol for a protein of interest expressed in E. coli? What factors would you consider to enhance yield and purity?",
    "3. Explain the process of generating a knockout mouse model. What are the key steps involved, and how would you confirm the successful knockout of the target gene?",
    "4. Discuss the steps you would take to develop a new assay for measuring enzyme activity in a biological sample. What considerations would you need to address to ensure accuracy and reliability?"
  ];

  const interdisciplinaryKnowledge = [
    "1. How can knowledge from microbiology and biochemistry be integrated to enhance the development of biosensors for detecting environmental contaminants?",
    "2. Propose a research project that uses molecular biology, microbiology, and biochemistry to study microbial metabolic pathways. How would you integrate these disciplines to achieve your research goals?",
    "3. Discuss how advancements in molecular biology techniques could be used to address challenges in understanding microbial communities in environmental samples. How would you apply this knowledge in your research?",
    "4. Explain how biochemistry and molecular biology can be combined to study protein-protein interactions in a cell. What methods would you use, and what insights might you gain from this integrated approach?"
  ];

  const innovation = [
    "1. Propose a novel method for improving the efficiency of gene delivery in mammalian cells. Consider current limitations and suggest innovative solutions.",
    "2. Design a new experimental approach to screen for small molecules that modulate protein function. What innovative techniques would you use, and how would you validate the findings?",
    "3. Describe a novel approach to engineer bacteria for enhanced bioremediation of toxic waste. How would you incorporate genetic modifications and metabolic engineering in your strategy?",
    "4. Suggest an innovative method to study the dynamic interactions between different signaling pathways in a cell. How would you implement this method, and what insights could it provide?"
  ];

  const problemSolving = [
    "1. You encounter unexpected results in a proteomics experiment where protein identification is lower than anticipated. How would you troubleshoot and resolve this issue?",
    "2. In a microbiological experiment, you find that your microbial culture does not grow as expected under the given conditions. What steps would you take to diagnose and address this problem?",
    "3. Describe a situation where you had to modify an experimental protocol based on preliminary data. How did you identify the need for changes, and what modifications did you implement?",
    "4. You are working on a biochemical assay and notice that the background noise is significantly higher than expected. How would you address this issue to improve the assay’s accuracy?"
  ];

  res.json({
    question1: randamoizer(depthOfKnowledge),
    question2: randamoizer(practicalApplication),
    question3: randamoizer(interdisciplinaryKnowledge),
    question4: randamoizer(innovation),
    question5: randamoizer(problemSolving)
  });
});

app.get("/missilesAndStrategical", (req, res) => {
  const depthOfKnowledge = [
    "1. In terms of propulsion efficiency, how does specific impulse (Isp) vary between solid, liquid, and hybrid propulsion systems? Can you explain how this impacts the design choices for different missile systems?",
    "2. Explain how Mach number affects the design and performance of missile propulsion systems in supersonic and hypersonic regimes. What specific changes must be made to propulsion systems at these speeds?",
    "3. Describe how chemical rocket propulsion efficiency is influenced by nozzle design. How do variables like expansion ratio, pressure, and temperature affect the exhaust velocity?",
    "4. Can you explain the role of turbulence modeling in CFD for missile aerodynamics? What are the advantages and limitations of popular models like RANS, LES, or DNS?"
  ];

  const practicalApplication = [
    "1. You are tasked with designing a missile system for long-range precision strikes. How would you optimize the propulsion system for both efficiency and accuracy in targeting? What real-world factors would you need to consider?",
    "2. Considering heat management is crucial in high-speed missile systems, how would you design a thermal protection system to ensure the structural integrity of the missile at Mach 5?",
    "3. If you were part of a team designing a hybrid propulsion system for a reusable missile, how would you test and validate the system's performance?",
    "4. In the context of CFD simulations for missile aerodynamics, how would you validate your simulation results experimentally, and what real-world challenges might arise?"
  ];

  const innovation = [
    "1. With emerging technologies like electric propulsion or air-breathing engines, how would you apply these innovations to improve future missile systems' performance?",
    "2. Imagine you are tasked with improving the missile's stealth capabilities. How would you modify the propulsion and aerodynamic design to minimize its radar signature?",
    "3. Given the increasing focus on reusable aerospace technologies, how would you design a reusable missile propulsion system? What unique challenges would you face?",
    "4. If you had to develop a hybrid propulsion system combining rocket and air-breathing engines, how would you approach the design? What specific challenges and benefits do you foresee?"
  ];

  const problemSolving = [
    "1. You are working on a high-altitude missile that encounters air density variations, affecting performance. How would you modify the propulsion system to adapt to varying atmospheric conditions?",
    "2. Imagine that due to new regulatory standards, you need to reduce the environmental impact of missile propulsion. How would you redesign the propulsion system to meet these standards without compromising performance?",
    "3. If a CFD simulation of a missile shows unexpected aerodynamic drag, how would you troubleshoot the issue? What steps would you take to improve the accuracy of the simulation?",
    "4. During a missile test flight, you notice that the propulsion system is overheating, causing structural damage. How would you diagnose the problem, and what corrective measures would you take?"
  ];

  const Interdisciplinaryintegration = [
    "1. Missile propulsion systems interact with avionics and guidance systems. How would you ensure that propulsion, aerodynamics, and control systems work harmoniously in a missile design?",
    "2. In developing a propulsion system, how would material science influence your design decisions regarding weight, heat resistance, and structural strength?",
    "3. Discuss how electrical systems, such as sensors or actuators, could be integrated into a propulsion system to enhance performance. What challenges would arise from this integration?",
    "4. In what ways can advancements in fuel chemistry (e.g., high-energy propellants) improve missile propulsion? How would you balance fuel selection with material and structural considerations?"
  ];

  res.json({
    question1: randamoizer(depthOfKnowledge),
    question2: randamoizer(practicalApplication),
    question3: randamoizer(innovation),
    question4: randamoizer(problemSolving),
    question5: randamoizer(Interdisciplinaryintegration)
  });
});

app.get("/navalSystem", (req, res) => {
  const DEPTHOFKNOWLEDGEINTHEFIELD = [
    "1. Naval vessels operate under a variety of conditions, ranging from calm seas to rough, turbulent waters. How would you design a hull that maximizes hydrodynamic efficiency while maintaining structural integrity in harsh marine environments? Discuss the materials you would choose and the design trade-offs between speed, stability, and durability.",
    "2. Marine vessels face constant exposure to corrosive environments, leading to structural degradation. How would you incorporate corrosion management techniques into the design and material selection process for a naval ship? Discuss different approaches and their effectiveness, especially in minimizing long-term maintenance costs.",
    "3. Stability is a critical factor in naval vessel design, especially for ships operating in varied sea conditions. How would you design a naval vessel to optimize both stability and buoyancy? Discuss the influence of hull shape, ballast, and material selection on the vessel's stability.",
    "4. Modern naval vessels often require advanced hydrodynamic modeling to optimize their performance. How would you develop and validate a hydrodynamic model for a new class of naval vessel? Discuss the integration of computational fluid dynamics (CFD), physical testing, and real-world data in your approach."
  ];

  const KEYWORDPRACTICALIMPLEMENTATION = [
    "1. Considering that naval vessels are exposed to harsh marine environments, how would you incorporate advanced corrosion prevention techniques into the design of a new naval vessel? Discuss specific materials, coatings, and design modifications that would enhance the vessel's lifespan and performance. How would you approach the implementation of these techniques in a cost-effective manner?",
    "2. Composite materials offer advantages such as reduced weight and improved corrosion resistance. However, their implementation in shipbuilding can present challenges. How would you address these challenges when incorporating composites into the design of a naval vessel? Discuss specific issues related to manufacturing, repair, and performance under marine conditions.",
    "3. Ocean engineering projects often have significant environmental impacts. How would you design a marine engineering project (e.g., a coastal defense system or marine energy installation) to minimize its environmental footprint? Discuss the interdisciplinary approaches you would use to address environmental concerns while achieving project goals.",
    "4. Coastal protection systems are crucial for mitigating the effects of erosion and flooding. How would you design a sustainable coastal protection system that integrates principles from ocean engineering, materials science, and environmental science? Discuss the design process, material choices, and environmental considerations."
  ];

  const INTEGRATIONOFINTERDISCIPLINARYKNOWLEDGE = [
    "1. With the increasing focus on sustainability, how would you design a marine energy system (e.g., wave energy converter, tidal turbine) that integrates principles from ocean engineering, materials science, and environmental science? Discuss how you would address energy efficiency, material durability, and environmental impact.",
    "2. Submersible vehicles operating at great depths face unique challenges such as extreme pressures and low temperatures. How would you design a submersible to withstand these conditions? Discuss the role of materials, structural design, and pressure-resistant technologies in ensuring the vehicle's performance and safety.",
    "3. Designing offshore platforms requires balancing structural integrity with environmental conditions such as waves, wind, and corrosion. How would you approach the design of an offshore platform to ensure stability and durability? Discuss the selection of materials, structural reinforcements, and design features to address these challenges.",
    "4. Marine equipment, such as turbines or pumps, undergoes significant wear and tear due to harsh conditions. How would you address lifecycle management to optimize the performance and longevity of this equipment? Discuss the role of materials science, maintenance strategies, and technological innovations."
  ];

  const INNOVATION = [
    "1. Autonomous underwater vehicles (AUVs) require materials that can withstand extreme pressure and corrosive environments while remaining lightweight and durable. How would you innovate new materials or material combinations to enhance the performance and reliability of AUVs? Consider aspects such as pressure resistance, corrosion resistance, and energy efficiency.",
    "2. Corrosion in marine infrastructure poses significant challenges. Propose an innovative solution or technology to prevent or mitigate corrosion in structures such as bridges or offshore platforms. Discuss how your solution integrates advancements in materials science, corrosion engineering, and structural design.",
    "3. With the increasing focus on sustainability in naval systems, how would you incorporate environmentally friendly materials and design principles into a new naval project? Discuss the impact of your choices on the vessel's performance, lifespan, and environmental footprint, especially considering your background in materials science.",
    "4. Modern naval vessels often require advanced hydrodynamic modeling to optimize their performance. How would you develop and validate a hydrodynamic model for a new class of naval vessel? Discuss the integration of computational fluid dynamics (CFD), physical testing, and real-world data in your approach."
  ];

  const Problemsolving = [
    "1. Imagine you are tasked with investigating a case where a newly designed marine vessel experienced unexpected structural failure during its maiden voyage. How would you approach diagnosing the cause of the failure, and what steps would you take to rectify the issue and prevent future occurrences? Discuss your approach considering aspects of naval architecture, materials science, and potential engineering faults.",
    "2. Marine pollution, such as oil spills or plastic waste, poses significant environmental challenges. If tasked with developing a new technology or system to control or mitigate marine pollution, what would your approach be? Discuss the design, materials, and practical implementation of your proposed solution.",
    "3. A floating platform used for deep-sea drilling is experiencing stability issues due to dynamic wave forces. You are tasked with improving its stability and operational safety. How would you approach the problem, considering structural modifications, material advancements, and hydrodynamic analysis?",
    "4. Marine infrastructure such as piers and bridges is often exposed to harsh environmental conditions, leading to rapid corrosion. If you were to design a new corrosion-resistant coating system, what factors would you consider in its development, and how would you test its effectiveness? Discuss the materials, application methods, and long-term performance monitoring."
  ];

  res.json({
    question1: randamoizer(DEPTHOFKNOWLEDGEINTHEFIELD),
    question2: randamoizer(KEYWORDPRACTICALIMPLEMENTATION),
    question3: randamoizer(INTEGRATIONOFINTERDISCIPLINARYKNOWLEDGE),
    question4: randamoizer(INNOVATION),
    question5: randamoizer(Problemsolving)
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
