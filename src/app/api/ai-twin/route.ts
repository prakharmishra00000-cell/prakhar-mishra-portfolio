import { NextResponse } from 'next/server';

interface RequestBody {
  prompt: string;
  apiKey?: string;
}

const PRAKHAR_KNOWLEDGE_GRAPH = `
You are the authentic AI Digital Twin of Prakhar Mishra.
Prakhar Mishra is an AI Full-Stack Web Developer and a B.Tech student at Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur (Graduating 2027).
Contact Information:
- Email: prakharmishraflp@gmail.com (also: prakharmishra00000@gmail.com)
- Phone/WhatsApp: +91-6372843175
- LinkedIn: https://linkedin.com/in/prakhar-mishra-8aa426423
- GitHub: https://github.com/prakharmishra00000-cell
- Location: Gorakhpur, UP, India

Production AI Projects:
1. CareerHub AI (https://careerhub-ai-ruby.vercel.app/): Real-time job discovery engine indexing 50K+ live opportunities from 9+ portals (LinkedIn, Indeed, Glassdoor, ZipRecruiter, Shine, Apna, Remotive, Arbeitnow) with 0% mock data across 40+ engineering degrees.
2. ExamIntel (https://my-project-teal-two-91.vercel.app/): AI Competitive Exam Intelligence & Prep Ecosystem with 17 AI features, dynamic paper generation, prerequisite dependency mapping, powered by Gemini.
3. Nexron AI (https://studyflow-ai-tau-drab.vercel.app/): Adaptive, living AI learning roadmap and career mentor with real-time curriculum rescheduling.
4. ExamArena (https://exam-arena-two.vercel.app/): Engineering career and exam discovery platform mapping 500+ competitive exams.
5. PrepOS AI (https://placement-prep-ai-tau.vercel.app/): Comprehensive placement prep operating system with AI digital twin simulation and in-browser coding IDE.
6. Telegram Document Downloader AI (https://telegram-file-downloader.vercel.app/): MTProto-authenticated document intelligence and cloud extraction engine using Gemini AI.

Curated Luxury Brand Identity Systems (8K Vector Systems with 4-View Architecture):
1. FORMA: Architectural Design Atelier (Swiss modernism, blueprint grid geometry, graphite #292929, stone grey #B9B6AE, pure white #F8F8F6).
2. ÉLORA: Parisian Haute Parfumerie (French Didone editorial serif, fragrance vessel silhouette, champagne ivory #EFE5D7, dark brown #302721, soft gold #B9A17A).
3. NEXORA: Frontier Deep-Tech Laboratory (Cybernetic multi-node X nexus, midnight navy #111827, electric blue #476CFF, cool silver #C6CBD3).
4. SOLVÉ: Botanical Restoration & Living (Japanese organic modernism, zen ensō circularity, muted sage #A3AA92, warm sand #D8C9B4, forest charcoal #30382F, soft ivory #F5F1E9).
5. NOIRÉ: Scandinavian Specialty Coffee Roastery (Nordic architectural minimalism, 60° roasting plane seam, espresso brown #382820, warm cream #F1E9DC, muted copper #A77959).
6. AURELLE: European High Skincare House (Quiet luxury, 51.8° golden-ratio pyramid apex monogram, warm ivory #EDE8DF, deep charcoal #282825, champagne beige #C5B6A2).

Cyberpunk Metropolis // 8K Aesthetic Poster Series (Moving Marquee & Master Collector Exhibition):
1. NEO-SHINJUKU 2099 // The Vertical Megalopolis (+3,200m vertical axis, brutalist megatowers, volumetric neon rain).
2. SHIBUYA SUB-LEVEL 04 // The Neon Labyrinth (-180m subterranean bazaar, paper lanterns, synthetic ramen, cybernetic crowds).
3. ORBITAL ELEVATOR // Apex of the Megalopolis (+36,000km carbon-nanotube tether, cyan plasma propulsion rings, dusk exosphere).
4. AERODYNE HIGHWAY // Cloud Runners (+1,800m high-speed transit corridor, flying aerodynes, light trails through rain).
5. CYBERNETIC SHRINE // Digital Shinto (+450m vermilion Torii gate reinforced with fiber optics in misty bamboo glade).
6. NEO-DOCKS SECTOR 12 // The Industrial Basin & Dark Waters (Automated robotic cargo cranes, oil-slicked harbor reflections).

Authored Books & Publications (PDF):
1. AI Engineer Career Roadmap & Strategy Guide (2026–2030)
2. Full Stack Web Development Complete Masterbook (400+ pages, 20 volumes, 81 modules)
3. The Ultimate Mechanical Engineering Masterbook / Handbook
4. Computer Science & Engineering (CSE) Career Intelligence Encyclopedia (500+ pages)
5. Mechanical Engineering Career Intelligence Encyclopedia
6. SSC CGL 2027 Master Preparation Handbook
7. Mechanical Supply Chain Management (SCM) Complete Guide
8. Motion Graphics & Visual Design Masterbook

Core Skills:
- Artificial Intelligence: AI-powered applications, AI APIs, Prompt Engineering, AI Agent Development, AI-assisted development, AI product integration.
- Web & Application Dev: Frontend Development, Backend Development, Next.js, React, APIs, Database Integration, Authentication, Deployment, Responsive Web Design.
- Development Tools: Antigravity, GitHub, Vercel, Render, zen.ai, ChatGPT, Gemini.
- Product Development: SaaS Concepts, AI Product Development, Web Applications, Career Technology, Education Technology, Automation, AI Integration.

Rules:
- If user says a greeting (like 'hi', 'hello', 'hey'), respond ONLY with a short, polite greeting and ask how you can help.
- Always answer ONLY what is asked. Keep it concise, natural, and directly relevant to the user prompt.
`;

export async function POST(req: Request) {
  try {
    const { prompt, apiKey }: RequestBody = await req.json();

    if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const cleanPrompt = prompt.trim();
    const lower = cleanPrompt.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    const activeKey = apiKey || process.env.GEMINI_API_KEY;

    // 1. If Gemini API key is available, query Google Gemini live
    if (activeKey) {
      try {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${activeKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [
                    { text: `${PRAKHAR_KNOWLEDGE_GRAPH}\n\nUser Question: ${cleanPrompt}\n\nAnswer concisely according to the question:` }
                  ]
                }
              ]
            })
          }
        );

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidateText) {
            return NextResponse.json({ answer: candidateText.trim(), source: 'gemini-live' });
          }
        }
      } catch (err) {
        console.error('Gemini live fetch failed, using conversational engine:', err);
      }
    }

    // 2. Real-Time Conversational Intent Router (Answers exactly to the prompt)
    let response = "";

    // A. Casual Greetings
    if (/^(hi|hello|hey|heyy|greetings|good morning|good evening|good afternoon|namaste|yo|hola)$/i.test(lower)) {
      response = "Hello! I am Prakhar's AI Digital Twin. How can I help you today? Feel free to ask about my projects, skills, authored masterbooks, or background.";
    }
    // B. Casual Inquiries & Small Talk
    else if (/^(how are you|how are you doing|whats up|hows it going)$/i.test(lower)) {
      response = "I'm doing great, thank you! Ready to share insights about my software architecture, AI web products, or authored guides. What would you like to know?";
    }
    // C. Identity
    else if (lower.includes('who are you') || lower.includes('what are you') || lower.includes('your name') || lower === 'who is prakhar') {
      response = "I am the official AI Digital Twin of Prakhar Mishra. Prakhar is an AI Full-Stack Web Developer and B.Tech student at MMMUT Gorakhpur (Graduating 2027), who builds production web applications and authors technical masterbooks.";
    }
    // D. Thanks & Acknowledgments
    else if (lower.includes('thank') || lower === 'thanks' || lower === 'great' || lower === 'awesome' || lower === 'cool' || lower === 'perfect') {
      response = "You're very welcome! Let me know if you need any other details or want to reach out to Prakhar directly at prakharmishraflp@gmail.com.";
    }
    // E. Why Hire / Unique Value
    else if (lower.includes('hire') || lower.includes('why should') || lower.includes('why hire') || lower.includes('advantage') || lower.includes('why you')) {
      response = "I focus on delivering usable, zero-mock production applications rather than simple prototypes. I have deployed 6 live web platforms (including CareerHub AI indexing 50,000+ opportunities) and authored 8 technical masterbooks. I bring high development speed with Next.js and real generative AI integrations.";
    }
    // F. Flagship Project: CareerHub AI
    else if (lower.includes('careerhub') || (lower.includes('job') && (lower.includes('project') || lower.includes('platform') || lower.includes('search')))) {
      response = "CareerHub AI (https://careerhub-ai-ruby.vercel.app/) is my real-time job discovery engine. It aggregates live opportunities from 9+ trusted platforms (LinkedIn, Indeed, Glassdoor, ZipRecruiter, Remotive, etc.) with 0% mock data, indexing positions across 40+ engineering disciplines with direct application links.";
    }
    // G. Exam Platforms: ExamIntel / ExamArena / PrepOS
    else if (lower.includes('examintel')) {
      response = "ExamIntel (https://my-project-teal-two-91.vercel.app/) is an AI exam intelligence ecosystem featuring 17 capabilities, dynamic test paper generation, prerequisite dependency mapping, and Gemini AI mentoring.";
    }
    else if (lower.includes('exam arena') || lower.includes('examarena')) {
      response = "ExamArena (https://exam-arena-two.vercel.app/) is an engineering career discovery platform mapping 500+ competitive exams with multi-dimensional branch and qualification filters.";
    }
    else if (lower.includes('prepos')) {
      response = "PrepOS AI (https://placement-prep-ai-tau.vercel.app/) is a career preparation operating system with an AI Placement Digital Twin, mock simulators, and an in-browser coding IDE.";
    }
    else if (lower.includes('nexron') || lower.includes('studyflow')) {
      response = "Nexron AI (https://studyflow-ai-tau-drab.vercel.app/) is an adaptive learning roadmap engine that dynamically replans your curriculum based on daily schedule shifts and goals.";
    }
    else if (lower.includes('telegram') || lower.includes('downloader')) {
      response = "Telegram Document Downloader AI (https://telegram-file-downloader.vercel.app/) is a web utility using MTProto authentication and Gemini AI to summarize, tag, and extract channel documents to the cloud.";
    }
    // H. All Projects Overview
    else if (lower.includes('project') || lower.includes('work') || lower.includes('portfolio') || lower.includes('built')) {
      response = "I have built and deployed 6 production web applications: 1) CareerHub AI (live job aggregator), 2) ExamIntel (17-feature exam intelligence), 3) Nexron AI (adaptive study roadmap), 4) ExamArena (500+ exams mapped), 5) PrepOS AI (career operating system), and 6) Telegram Document Downloader AI. All are live and linked above with source code!";
    }
    // I. Authored Books & Masterbooks
    else if (lower.includes('book') || lower.includes('masterbook') || lower.includes('publication') || lower.includes('guide') || lower.includes('handbook')) {
      response = "I have authored 8 technical masterbooks: 1) AI Engineer Career Roadmap & Strategy Guide (2026–2030), 2) Full Stack Web Development Complete Masterbook, 3) CSE Career Intelligence Encyclopedia (24MB), 4) Mechanical Engineering Handbook, 5) Mechanical Career Encyclopedia, 6) SSC CGL 2027 Handbook, 7) Mechanical Supply Chain Management (SCM) Guide, and 8) Motion Graphics Masterbook. All 8 are available for direct PDF download in the Books section!";
    }
    // J. Technical Skills & Tools
    else if (lower.includes('skill') || lower.includes('stack') || lower.includes('technolog') || lower.includes('language') || lower.includes('tool')) {
      response = "My core technical skills include: AI-powered applications, AI APIs (Gemini, Claude, ChatGPT), Prompt Engineering, AI Agent Development, Frontend and Backend Development with Next.js and React, REST APIs, Database Integration, Authentication, Antigravity, GitHub, Vercel, and Render.";
    }
    // K. College & Education
    else if (lower.includes('college') || lower.includes('university') || lower.includes('mmmut') || lower.includes('education') || lower.includes('degree') || lower.includes('graduate') || lower.includes('graduating')) {
      response = "I am a B.Tech student at Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, graduating in 2027.";
    }
    // L. Roles & Availability
    else if (lower.includes('open for') || lower.includes('role') || lower.includes('job') || lower.includes('available') || lower.includes('contract') || lower.includes('freelance')) {
      response = "Yes, I am actively open for AI Web Developer roles, Generative AI application engineering, and intelligent product collaborations. You can email me directly at prakharmishraflp@gmail.com or call/WhatsApp at +91-6372843175.";
    }
    // M. Direct Contact Information
    else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('whatsapp') || lower.includes('reach') || lower.includes('linkedin') || lower.includes('github')) {
      response = "You can contact me directly at: Email: prakharmishraflp@gmail.com | Phone/WhatsApp: +91-6372843175 | LinkedIn: linkedin.com/in/prakhar-mishra-8aa426423 | GitHub: github.com/prakharmishra00000-cell.";
    }
    // N. General Fallback (Short, conversational, directly answering)
    else {
      response = `Regarding "${cleanPrompt}": As an AI Full-Stack Developer graduating from MMMUT Gorakhpur in 2027, I specialize in building live web applications with Next.js, React, and Generative AI APIs. I have deployed 6 live web platforms and authored 8 technical masterbooks. Feel free to ask about any specific project, or email me directly at prakharmishraflp@gmail.com.`;
    }

    return NextResponse.json({ answer: response, source: 'ai-twin-engine' });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'Internal processing error' }, { status: 500 });
  }
}
